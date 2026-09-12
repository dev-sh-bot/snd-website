import type { ReactNode } from "react";
import { bodyFont } from "@/lib/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWA } from "@/components/ui";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen" style={{ fontFamily: bodyFont, background: "#fff" }}>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
