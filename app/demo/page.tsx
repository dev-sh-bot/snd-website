import type { Metadata } from "next";
import DemoPage from "./DemoPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Demo",
  description:
    "Book a free SalesVince demo and see how ERP and Sales & Distribution software can work for your business.",
  path: "/demo",
});

export default function Page() {
  return <DemoPage />;
}
