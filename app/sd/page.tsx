import type { Metadata } from "next";
import SDPage from "./SDPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Sales & Distribution Software",
  description:
    "Sales & Distribution software built for Pakistani distributors — routes, recovery, van sales, and real-time tracking.",
  path: "/sd",
});

export default function Page() {
  return <SDPage />;
}
