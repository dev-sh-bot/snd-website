import BlogPage from "./BlogPage";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Insights on ERP, sales distribution, and running a business in Pakistan.",
  path: "/blog",
});

export default function Page() {
  return <BlogPage />;
}
