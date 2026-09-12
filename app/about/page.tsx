import type { Metadata } from "next";
import AboutPage from "./AboutPage";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Us",
  description: "Learn about SalesVince — business software built for Pakistan.",
  path: "/about",
});

export default function Page() {
  return <AboutPage />;
}
