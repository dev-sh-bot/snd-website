import type { Metadata } from "next";
import FAQPage, { FAQ_CATEGORIES } from "./FAQPage";
import { buildMetadata, faqJsonLd, JsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Frequently asked questions about SalesVince software, pricing, setup, and support.",
  path: "/faq",
});

export default function Page() {
  const items = FAQ_CATEGORIES.flatMap((cat) => [...cat.items]);
  return (
    <>
      <JsonLd data={faqJsonLd(items)} />
      <FAQPage />
    </>
  );
}
