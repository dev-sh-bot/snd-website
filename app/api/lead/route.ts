import { NextResponse } from "next/server";

const recipient = process.env.LEAD_RECIPIENT_EMAIL || "surajkumar00244@gmail.com";
const mailingApiUrl = (process.env.MAILING_API_URL || "https://mailingapi.techvince.com").replace(/\/+$/, "");
const defaultSender = process.env.MAILING_FROM_EMAIL || "info@salesvince.com";

const formNames = {
  demo: "Free demo request",
  contact: "Contact message",
  "erp-demo": "ERP demo request",
} as const;

type LeadForm = keyof typeof formNames;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function clean(value: unknown) {
  return typeof value === "string" ? value.trim().slice(0, 4000) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  if (!isRecord(body) || typeof body.form !== "string" || !(body.form in formNames) || !isRecord(body.fields)) {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 });
  }

  const form = body.form as LeadForm;
  const fields = Object.fromEntries(
    Object.entries(body.fields).map(([key, value]) => [key, clean(value)])
  );

  if (!fields.name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (form === "contact" && (!fields.email || !isValidEmail(fields.email) || !fields.message)) {
    return NextResponse.json({ error: "Please enter a valid email and message." }, { status: 400 });
  }

  if (form !== "contact" && (!fields.phone || (!fields.company && !fields.business))) {
    return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  }

  const rows = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `<tr><th style="padding:8px 12px;text-align:left;border-bottom:1px solid #e5e7eb;color:#5a6478">${escapeHtml(key)}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb">${escapeHtml(value).replaceAll("\n", "<br />")}</td></tr>`)
    .join("");
  const apiKey = process.env.MAILING_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured yet. Please try again shortly." }, { status: 503 });
  }

  const mailingForm = new FormData();
  mailingForm.append("from_email", defaultSender);
  mailingForm.append("to_email", recipient);
  mailingForm.append("subject", `SalesVince: ${formNames[form]}`);
  mailingForm.append(
    "body_html",
    `<div style="font-family:Arial,sans-serif;color:#0b0f1a"><h2>${escapeHtml(formNames[form])}</h2><table style="border-collapse:collapse;width:100%;max-width:640px">${rows}</table></div>`,
  );

  let mailingResponse: Response;

  try {
    mailingResponse = await fetch(`${mailingApiUrl}/send-email`, {
      method: "POST",
      headers: { "x-api-key": apiKey },
      body: mailingForm,
    });
  } catch {
    return NextResponse.json({ error: "We could not reach the email service. Please try again." }, { status: 502 });
  }

  if (!mailingResponse.ok) {
    const providerError = await mailingResponse.text().catch(() => "");
    console.error("Lead mailing provider rejected the request", {
      url: `${mailingApiUrl}/send-email`,
      status: mailingResponse.status,
      body: providerError.slice(0, 500),
    });
    return NextResponse.json({ error: "We could not send your request. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
