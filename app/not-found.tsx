import type { Metadata } from "next";
import Link from "next/link";
import { PAGE_PATHS } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1
        className="text-4xl font-bold mb-3"
        style={{ fontFamily: "var(--font-heading), Plus Jakarta Sans, sans-serif" }}
      >
        Page not found
      </h1>
      <p
        className="mb-6 text-[#5A6478]"
        style={{ fontFamily: "var(--font-body), Inter, sans-serif" }}
      >
        The page you are looking for does not exist.
      </p>
      <Link
        href={PAGE_PATHS.home}
        className="px-6 py-3 rounded-xl font-semibold text-white text-sm"
        style={{ background: "linear-gradient(135deg, #1E3FAE, #3B6CF6)" }}
      >
        Back to Home
      </Link>
    </div>
  );
}
