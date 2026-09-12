import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { C, bodyFont, headingFont, PAGE_PATHS, type Page } from "@/lib/brand";
import { CONTACT } from "@/lib/site";
import { Logo, PrimaryBtn } from "@/components/ui";

const cols: {
  title: string;
  links?: { l: string; p: Page }[];
  custom?: boolean;
}[] = [
  { title: "Company", links: [{ l: "About Us", p: "about" }, { l: "Contact", p: "contact" }, { l: "Blog", p: "blog" }, { l: "FAQ", p: "faq" }] },
  { title: "Products", links: [{ l: "Business ERP Software", p: "erp" }, { l: "Sales & Distribution", p: "sd" }] },
  { title: "Industries", links: [{ l: "FMCG", p: "fmcg" }, { l: "All Industries", p: "industries" }] },
  { title: "Get Started", custom: true },
];

export function Footer() {
  return (
    <footer className="py-16 px-6" style={{ background: C.navy }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>Business software built for Pakistan</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h2 className="font-semibold mb-4 text-sm" style={{ color: "rgba(255,255,255,0.85)", fontFamily: headingFont }}>{col.title}</h2>
              {col.custom ? (
                <div className="space-y-3">
                  <PrimaryBtn href={PAGE_PATHS.demo} size="sm" full>Book Free Demo</PrimaryBtn>
                  <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)", fontFamily: bodyFont }}>
                    <Phone size={13} aria-hidden />
                    <span>{CONTACT.phoneDisplay}</span>
                  </a>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.75)", fontFamily: bodyFont }}>
                    <Mail size={13} aria-hidden />
                    <span>{CONTACT.email}</span>
                  </a>
                </div>
              ) : (
                <ul className="space-y-2">
                  {col.links?.map((link) => (
                    <li key={link.l}>
                      <Link href={PAGE_PATHS[link.p]} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}>
                        {link.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>© 2026 SalesVince. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
