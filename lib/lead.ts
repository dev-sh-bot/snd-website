export type LeadForm = "demo" | "contact" | "erp-demo";

export async function submitLead(form: LeadForm, fields: Record<string, string>) {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ form, fields }),
  });

  const result = (await response.json().catch(() => null)) as { error?: string } | null;

  if (!response.ok) {
    throw new Error(result?.error || "We could not send your request. Please try again.");
  }
}
