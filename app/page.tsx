import type { Metadata } from "next";
import HomePage from "./HomePage";
import { buildMetadata, JsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "SalesVince | ERP & Sales Distribution Software for Pakistan",
  description:
    "Streamline business operations with SalesVince, an ERP and Sales & Distribution software tailored for Pakistani SMEs, enhancing efficiency and accuracy.",
  path: "/",
  absoluteTitle: true,
});

const homeFaqs = [
  { q: "Is SalesVince suitable for a small business?", a: "Yes. SalesVince is built specifically for Pakistani SMEs — from a 5-person trading company to a distributor managing 50 salespeople. The software scales with your business." },
  { q: "Do I need technical knowledge to use it?", a: "No. SalesVince is designed for business owners and their teams — not IT professionals. Our team handles setup and provides training in Urdu and English." },
  { q: "Can I see reports on my mobile phone?", a: "Yes. Owners and managers can see daily sales, recovery, stock, and team performance reports directly on their smartphones." },
  { q: "How long does it take to set up?", a: "Most businesses are up and running within 5 to 7 working days. We handle data migration and provide full training as part of the setup." },
  { q: "What kind of support do you provide?", a: "We provide phone, WhatsApp, and email support in Urdu and English. Our local support team is available during business hours, 6 days a week." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <HomePage />
    </>
  );
}
