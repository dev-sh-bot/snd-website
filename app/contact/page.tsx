import type { Metadata } from "next";
import ContactPage from "./ContactPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with SalesVince — WhatsApp, phone, or email. Available in Urdu and English.",
  path: "/contact",
});

export default function Page() {
  return <ContactPage />;
}
