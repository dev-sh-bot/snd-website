"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { C, bodyFont, headingFont, PAGE_PATHS, pathToPage, type Page } from "@/lib/brand";
import { Logo, PrimaryBtn } from "@/components/ui";

function isHomePath(pathname: string) {
  const cleaned = pathname.replace(/\/$/, "") || "/";
  return cleaned === "/";
}

export function Header() {
  const pathname = usePathname();
  const current = pathToPage(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [prodDrop, setProdDrop] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const productsBtnRef = useRef<HTMLButtonElement>(null);
  const productsMenuRef = useRef<HTMLDivElement>(null);
  // Transparent white nav ONLY over the home dark hero. ERP/SD and every other
  // page have light backgrounds — white logo/links would be invisible there.
  const onHome = isHomePath(pathname);

  useEffect(() => {
    const readY = () =>
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const update = () => {
      setScrolled(readY() > 40);
    };

    update();
    window.addEventListener("scroll", update, { passive: true, capture: true });
    document.addEventListener("scroll", update, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", update, true);
      document.removeEventListener("scroll", update, true);
    };
  }, []);

  // Re-read scroll state after navigation so returning to the home hero
  // restores its transparent header without a synchronous effect update.
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const y =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      setScrolled(y > 40);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMobileOpen(false);
      setProdDrop(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen && !prodDrop) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mobileOpen) {
        setMobileOpen(false);
        menuBtnRef.current?.focus();
      }
      if (prodDrop) {
        setProdDrop(false);
        productsBtnRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen, prodDrop]);

  useEffect(() => {
    if (!prodDrop) return;
    const onPointer = (e: MouseEvent) => {
      const t = e.target as Node;
      if (productsMenuRef.current?.contains(t) || productsBtnRef.current?.contains(t)) return;
      setProdDrop(false);
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [prodDrop]);

  const closeMobile = () => {
    setMobileOpen(false);
    setProdDrop(false);
  };

  const navLinks: { label: string; page?: Page; children?: { label: string; page: Page }[] }[] = [
    { label: "Home", page: "home" },
    { label: "Products", children: [{ label: "Business ERP Software", page: "erp" }, { label: "Sales & Distribution Software", page: "sd" }] },
    { label: "Industries", page: "industries" },
    { label: "Features", page: "features" },
    { label: "Pricing", page: "demo" },
    { label: "Blog", page: "blog" },
    { label: "FAQ", page: "faq" },
    { label: "Contact", page: "contact" },
  ];

  const isTransparent = onHome && !scrolled;
  const bg = isTransparent ? "transparent" : "rgba(255,255,255,0.97)";
  const shadow = !isTransparent ? "0 2px 20px rgba(0,0,0,0.08)" : "none";
  const borderBottom = !isTransparent ? `1px solid ${C.cardBorder}` : "1px solid transparent";
  const textColor = isTransparent ? "rgba(255,255,255,0.85)" : C.slate;
  const activeColor = isTransparent ? "#fff" : C.blue;
  const logoVariant = isTransparent ? "white" : "color";
  const iconColor = isTransparent ? "#fff" : C.nearBlack;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: bg,
          boxShadow: shadow,
          borderBottom,
          backdropFilter: !isTransparent ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo variant={logoVariant} />
          <nav className="hidden xl:flex items-center gap-1" aria-label="Primary">
            {navLinks.map((link, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => link.children && setProdDrop(true)}
                onMouseLeave={() => link.children && setProdDrop(false)}
              >
                {link.children ? (
                  <>
                    <button
                      ref={productsBtnRef}
                      type="button"
                      className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors duration-150"
                      style={{ color: link.children.some((c) => c.page === current) ? activeColor : textColor, fontFamily: bodyFont }}
                      aria-expanded={prodDrop}
                      aria-haspopup="menu"
                      aria-controls="products-menu"
                      onClick={() => setProdDrop((o) => !o)}
                    >
                      {link.label}
                      <ChevronDown size={13} aria-hidden />
                    </button>
                    {prodDrop && (
                      <div className="absolute top-full left-0 pt-2" ref={productsMenuRef}>
                        <div
                          id="products-menu"
                          className="rounded-2xl overflow-hidden py-2"
                          style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 20px 50px rgba(0,0,0,0.12)", minWidth: 220 }}
                          role="menu"
                        >
                          {link.children.map((c, j) => (
                            <Link
                              key={j}
                              href={PAGE_PATHS[c.page]}
                              role="menuitem"
                              onClick={closeMobile}
                              className="block w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#EFF4FF]"
                              style={{ color: C.nearBlack, fontFamily: bodyFont }}
                            >
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={PAGE_PATHS[link.page!]}
                    className="px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors duration-150"
                    style={{ color: link.page === current ? activeColor : textColor, fontFamily: bodyFont }}
                    aria-current={link.page === current ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden xl:block">
              <PrimaryBtn href={PAGE_PATHS.demo} size="sm">Book Free Demo</PrimaryBtn>
            </div>
            <button
              ref={menuBtnRef}
              type="button"
              className="xl:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              style={{ color: iconColor }}
            >
              {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
            </button>
          </div>
        </div>
      </header>
      {mobileOpen && (
        <div id="mobile-nav" className="fixed inset-0 z-40 pt-16" style={{ background: "rgba(10,26,79,0.98)" }} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <nav className="p-6 space-y-1" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <div key={i}>
                {link.page ? (
                  <Link href={PAGE_PATHS[link.page]} className="block w-full text-left px-4 py-3 rounded-xl text-base font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: headingFont }} onClick={closeMobile}>
                    {link.label}
                  </Link>
                ) : (
                  <p className="px-4 py-3 text-base font-semibold" style={{ color: "rgba(255,255,255,0.85)", fontFamily: headingFont }}>{link.label}</p>
                )}
                {link.children?.map((c, j) => (
                  <Link key={j} href={PAGE_PATHS[c.page]} className="block w-full text-left px-8 py-2.5 text-sm" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }} onClick={closeMobile}>
                    {c.label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="pt-4">
              <PrimaryBtn href={PAGE_PATHS.demo} full size="lg">Book Free Demo</PrimaryBtn>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
