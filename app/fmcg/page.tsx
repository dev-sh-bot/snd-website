import type { Metadata } from "next";
import FMCGPage from "./FMCGPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FMCG Distribution Software",
  description:
    "ERP and S&D software purpose-built for FMCG distributors in Pakistan.",
  path: "/fmcg",
});

export default function Page() {
  return <FMCGPage />;
}
