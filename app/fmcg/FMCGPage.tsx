import Link from "next/link";

import {
  ChevronRight,
  ArrowRight,
  Check,
  BarChart3,
  AlertCircle,
  ShoppingBag,
  Route
} from "lucide-react";
import {
  PrimaryBtn,
  WABtn,
  Eyebrow,
  H1,
  H2,
  Section,
  Container,
  CTABanner
} from "@/components/ui";
import {
  C,
  grad,
  headingFont,
  bodyFont,
  type Page,
  PAGE_PATHS
} from "@/lib/brand";

export default function FMCGPage() {
  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="flex items-center gap-2 mb-6 text-sm" style={{ color: "rgba(255,255,255,0.6)", fontFamily: bodyFont }}>
            <span>Industries</span><ChevronRight size={14} /><span style={{ color: "rgba(255,255,255,0.85)" }}>FMCG</span>
          </div>
          <div className="max-w-2xl">
            <Eyebrow><ShoppingBag size={11} /> FMCG</Eyebrow>
            <H1 light>ERP & Distribution Software for FMCG Businesses</H1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}>
              From primary distribution to retail beat routes — SalesVince gives FMCG distributors and manufacturers complete control over their supply chain in Pakistan.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <PrimaryBtn href={PAGE_PATHS.demo} size="lg">Book Free Demo <ArrowRight size={16} /></PrimaryBtn>
              <WABtn>WhatsApp Us Now</WABtn>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain Points */}
      <Section bg={C.lightGray}>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><AlertCircle size={11} /> Challenges</Eyebrow>
            <H2>Pain Points of FMCG Distribution in Pakistan</H2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Beat routes are planned on paper — shops are missed and salespeople are unsupervised.",
              "Stock loading errors result in wrong products reaching wrong areas.",
              "Recovery from retailers is tracked manually and many outstanding balances go unnoticed.",
              "No visibility into which SKUs are performing in which areas.",
              "Secondary sales data is collected with delays — decisions are based on last week's numbers.",
              "Van loading, unloading, and van inventory are not reconciled properly.",
            ].map((p, i) => (
              <div key={i} className="flex gap-3 p-5 rounded-2xl" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#FFF7ED" }}>
                  <AlertCircle size={15} color="#D97706" />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.nearBlack, fontFamily: bodyFont }}>{p}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* How SalesVince Helps */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><Check size={11} /> How SalesVince Helps</Eyebrow>
            <H2>Built for How FMCG Distribution Works in Pakistan</H2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Digital beat routes with shop-level visit tracking for every salesperson.",
              "Van loading and unloading captured in the system — inventory always accurate.",
              "Recovery collected at the retail point and synced to office in real time.",
              "Area-wise, route-wise, and SKU-wise sales reports to make quick decisions.",
              "Secondary sales data available same day — no more weekly reporting delays.",
              "Credit limit controls on each retailer to reduce bad debts.",
              "Mobile order booking — salesperson fills the order form at the shop counter.",
              "Owner gets a daily performance report on their phone every evening.",
            ].map((h, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ border: `1px solid #D1FAE5`, background: "#F0FDF4" }}>
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: C.green }}>
                  <Check size={12} color="white" />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.nearBlack, fontFamily: bodyFont }}>{h}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section bg={C.lightGray}>
        <Container>
          <div className="text-center mb-10"><H2>Recommended Solutions for FMCG</H2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { page: "erp" as Page, icon: BarChart3, title: "Business ERP Software", desc: "Manage inventory, accounts, purchases, and reports for your FMCG business." },
              { page: "sd" as Page, icon: Route, title: "Sales & Distribution Software", desc: "Route planning, field order booking, recovery tracking, and daily performance reports." },
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#EFF4FF" }}>
                  <p.icon size={20} color={C.blue} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: C.slate, fontFamily: bodyFont }}>{p.desc}</p>
                <Link href={PAGE_PATHS[p.page]} className="text-sm font-semibold flex items-center gap-1" style={{ color: C.blue, fontFamily: bodyFont }}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </div>
  );
}
