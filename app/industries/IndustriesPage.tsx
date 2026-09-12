import Link from "next/link";

import {
  ArrowRight,
  Package,
  Building2,
  Headphones,
  ShoppingCart,
  Factory,
  Store,
  BarChart2,
  Scissors,
  ShoppingBag,
  Warehouse
} from "lucide-react";
import {
  Eyebrow,
  H2,
  Sub,
  Section,
  Container,
  CTABanner
} from "@/components/ui";
import {
  C,
  grad,
  headingFont,
  bodyFont,
  PAGE_PATHS,
  type Page
} from "@/lib/brand";

export default function IndustriesPage() {
  const industries = [
    { icon: ShoppingBag, name: "FMCG", pain: "Route-to-market complexity and distributor management", page: "fmcg" as Page },
    { icon: Package, name: "Pharma", pain: "Batch tracking, expiry management, and regulatory compliance", page: "industries" as Page },
    { icon: Scissors, name: "Textile", pain: "Raw material tracking, lot-wise costing, and B2B sales", page: "industries" as Page },
    { icon: Store, name: "Retail", pain: "Point-of-sale, inventory, and multiple store management", page: "industries" as Page },
    { icon: Warehouse, name: "Wholesale", pain: "High volume transactions, credit management, and ledgers", page: "industries" as Page },
    { icon: Factory, name: "Manufacturing", pain: "Production planning, raw materials, and finished goods", page: "industries" as Page },
    { icon: BarChart2, name: "Trading", pain: "Purchase-to-sell cycles, margin tracking, and multi-supplier", page: "industries" as Page },
    { icon: ShoppingCart, name: "Supermarkets", pain: "POS integration, stock replenishment, and daily reconciliation", page: "industries" as Page },
    { icon: Headphones, name: "Services", pain: "Client billing, job tracking, and recurring payments", page: "industries" as Page },
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center">
            <Eyebrow><Building2 size={11} /> Industries</Eyebrow>
            <H2 light>Software That Understands Your Industry</H2>
            <Sub light>SalesVince is built around how Pakistani businesses in different sectors actually operate — not generic software adapted for Pakistan as an afterthought.</Sub>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <Link key={i} href={PAGE_PATHS[ind.page]} className="block p-6 rounded-2xl group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "#EFF4FF" }}>
                  <ind.icon size={22} color={C.blue} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont, fontSize: 18 }}>{ind.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.slate, fontFamily: bodyFont }}>{ind.pain}</p>
                <span className="text-sm font-semibold flex items-center gap-1" style={{ color: C.blue, fontFamily: bodyFont }}>Learn more <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </div>
  );
}
