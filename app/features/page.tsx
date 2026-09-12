import type { Metadata } from "next";
import FeaturesPage from "./FeaturesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Features",
  description:
    "Explore SalesVince features — inventory, finance, sales, mobile app, WhatsApp updates, and more.",
  path: "/features",
});

export default function Page() {
  return <FeaturesPage />;
}
