import type { Metadata } from "next";
import ERPPage from "./ERPPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Business ERP Software",
  description:
    "Integrated ERP for Pakistani businesses — inventory, accounting, sales, purchases, multi-branch, and reporting in one system.",
  path: "/erp",
});

export default function Page() {
  return <ERPPage />;
}
