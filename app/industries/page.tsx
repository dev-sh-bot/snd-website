import type { Metadata } from "next";
import IndustriesPage from "./IndustriesPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description:
    "SalesVince serves FMCG, pharma, wholesale, retail, and manufacturing businesses across Pakistan.",
  path: "/industries",
});

export default function Page() {
  return <IndustriesPage />;
}
