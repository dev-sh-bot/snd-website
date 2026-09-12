export const C = {
  navy: "#0A1A4F",
  blue: "#1E3FAE",
  bright: "#3B6CF6",
  nearBlack: "#0B0F1A",
  slate: "#5A6478",
  lightGray: "#F4F6FB",
  green: "#16A34A",
  wa: "#25D366",
  cardBorder: "rgba(0,0,0,0.07)",
} as const;

export const grad = `linear-gradient(135deg, #0A1A4F 0%, #1E3FAE 55%, #3B6CF6 100%)`;
export const gradBtn = `linear-gradient(135deg, #1E3FAE, #3B6CF6)`;
export const gradLight = `linear-gradient(135deg, #EFF4FF 0%, #DBEAFE 100%)`;
export const headingFont = "var(--font-heading), Plus Jakarta Sans, sans-serif";
export const bodyFont = "var(--font-body), Inter, sans-serif";

export type Page =
  | "home"
  | "erp"
  | "sd"
  | "industries"
  | "fmcg"
  | "features"
  | "demo"
  | "about"
  | "blog"
  | "faq"
  | "contact";

export const PAGE_PATHS: Record<Page, string> = {
  "home": "/",
  "erp": "/erp",
  "sd": "/sd",
  "industries": "/industries",
  "fmcg": "/fmcg",
  "features": "/features",
  "demo": "/demo",
  "about": "/about",
  "blog": "/blog",
  "faq": "/faq",
  "contact": "/contact"
};

export function pathToPage(pathname: string): Page {
  const cleaned = pathname.replace(/\/$/, "") || "/";
  const entry = (Object.entries(PAGE_PATHS) as [Page, string][]).find(
    ([, p]) => p === cleaned,
  );
  return entry?.[0] ?? "home";
}
