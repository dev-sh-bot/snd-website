import Link from "next/link";

import {
  ArrowRight,
  BarChart3,
  Package,
  DollarSign,
  Users,
  Building2,
  Shield,
  Smartphone,
  Headphones,
  TrendingUp,
  FileText,
  Settings,
  Layers,
  Truck,
  ShoppingCart,
  Star,
  Clock,
  Award,
  Zap,
  Factory,
  Store,
  Calendar,
  MessageSquare,
  Boxes,
  Calculator,
  UserCheck,
  BarChart2,
  Lock,
  Eye,
  Receipt,
  Scissors,
  ShoppingBag,
  Route,
  Warehouse
} from "lucide-react";
import {
  PrimaryBtn,
  SecBtn,
  WABtn,
  Eyebrow,
  H1,
  H2,
  Section,
  Container,
  DashboardMockup,
  PhoneMockup,
  FAQAccordion,
  CTABanner
} from "@/components/ui";
import {
  C,
  grad,
  gradBtn,
  gradLight,
  headingFont,
  bodyFont,
  type Page,
  PAGE_PATHS
} from "@/lib/brand";

export default function HomePage() {
  const benefits = [
    { icon: FileText, title: "End Manual Registers", text: "Replace paper ledgers with a digital system that records every sale, purchase, and payment automatically.", color: C.blue },
    { icon: Boxes, title: "Real Stock Position", text: "Know exactly what's in stock, what's running low, and what's overstocked — in real time, across all branches.", color: "#10B981" },
    { icon: DollarSign, title: "Track Every Rupee", text: "Accounts, recoveries, expenses, and profit — all in one place. No more guessing where the money went.", color: "#F59E0B" },
    { icon: Users, title: "Control Your Sales Team", text: "Track which salesperson visited which shop, what they sold, and how much recovery they collected.", color: "#8B5CF6" },
    { icon: BarChart3, title: "Decide With Real Numbers", text: "Get daily sales reports, area-wise performance, and top customer data — straight to your phone.", color: C.bright },
    { icon: TrendingUp, title: "Grow Without Chaos", text: "Add new branches, products, or salespeople without losing track. SalesVince scales as you grow.", color: C.green },
  ];

  const features = [
    { icon: Boxes, label: "Inventory Management" }, { icon: Calculator, label: "Accounting & Finance" },
    { icon: ShoppingCart, label: "Sales & Orders" }, { icon: Truck, label: "Purchase Management" },
    { icon: UserCheck, label: "Sales Team Tracking" }, { icon: DollarSign, label: "Recovery Management" },
    { icon: Building2, label: "Multi-Branch" }, { icon: Lock, label: "User Roles & Permissions" },
    { icon: BarChart2, label: "Dashboards & Reports" },
  ];

  const industries = [
    { icon: ShoppingBag, label: "FMCG" }, { icon: Package, label: "Pharma" },
    { icon: Scissors, label: "Textile" }, { icon: Store, label: "Retail" },
    { icon: Warehouse, label: "Wholesale" }, { icon: Factory, label: "Manufacturing" },
    { icon: BarChart3, label: "Trading" }, { icon: ShoppingCart, label: "Supermarkets" },
    { icon: Users, label: "Services" },
  ];

  const whyPoints = [
    { n: "01", title: "Built for Pakistani Business Reality", text: "PKR currency, local tax formats, Urdu support, and business flows that match how distributors and traders actually work in Pakistan." },
    { n: "02", title: "Setup in Days, Not Months", text: "We handle data migration, training, and go-live support. Most businesses are fully running within one week." },
    { n: "03", title: "Works on Any Device", text: "Owner checks reports on phone. Accountant uses desktop. Sales team uses mobile. It all syncs automatically." },
    { n: "04", title: "Support in Urdu & English", text: "Our team speaks your language. Call, WhatsApp, or email — we respond quickly and explain clearly." },
    { n: "05", title: "Affordable for SMEs", text: "SalesVince is priced for Pakistani SMEs — not enterprise software prices that only big corporations can afford." },
  ];

  const faq = [
    { q: "Is SalesVince suitable for a small business?", a: "Yes. SalesVince is built specifically for Pakistani SMEs — from a 5-person trading company to a distributor managing 50 salespeople. The software scales with your business." },
    { q: "Do I need technical knowledge to use it?", a: "No. SalesVince is designed for business owners and their teams — not IT professionals. Our team handles setup and provides training in Urdu and English." },
    { q: "Can I see reports on my mobile phone?", a: "Yes. Owners and managers can see daily sales, recovery, stock, and team performance reports directly on their smartphones." },
    { q: "How long does it take to set up?", a: "Most businesses are up and running within 5 to 7 working days. We handle data migration and provide full training as part of the setup." },
    { q: "What kind of support do you provide?", a: "We provide phone, WhatsApp, and email support in Urdu and English. Our local support team is available during business hours, 6 days a week." },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-x-clip lg:overflow-x-visible" style={{ background: grad }}>
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15" style={{ background: C.bright, filter: "blur(120px)" }} />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative w-full min-w-0 overflow-visible px-1 lg:px-10 order-1 lg:order-2">
          <DashboardMockup />
        </div>
        <div className="order-2 lg:order-1 min-w-0 text-center lg:text-left">
              <Eyebrow><Zap size={11} /> ERP & Sales Distribution Software for Pakistan</Eyebrow>
              <H1 light>Run Your Entire Business From One Software</H1>
              <p className="text-lg mb-8 leading-relaxed mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont, maxWidth: 480 }}>
                SalesVince helps Pakistani SMEs, distributors, and manufacturers manage sales, inventory, accounts, and reporting in one place. Less manual work, fewer errors, and clear numbers you can trust.
              </p>
              <div className="flex flex-row gap-2 sm:gap-3 mb-5 justify-center lg:justify-start">
                <PrimaryBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !gap-1 !text-xs sm:!px-8 sm:!py-4 sm:!gap-2 sm:!text-base">Book Free Demo <ArrowRight size={16} className="shrink-0" aria-hidden /></PrimaryBtn>
                <WABtn className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !py-2.5 !gap-1 !text-xs sm:!px-6 sm:!py-3 sm:!gap-2 sm:!text-sm">WhatsApp Us Now</WABtn>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)", fontFamily: bodyFont }}>
                Free demo · No commitment · Setup support in Urdu and English
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <H2>Built for How Business Actually Works in Pakistan</H2>
            <p className="text-base max-w-xl mx-auto" style={{ color: C.slate, fontFamily: bodyFont }}>
              We designed SalesVince for the real challenges Pakistani distributors, traders, and manufacturers face every day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { icon: Headphones, label: "Local Support Team", desc: "Karachi-based team" },
              { icon: MessageSquare, label: "Urdu & English Support", desc: "Your language" },
              { icon: Shield, label: "Data Security & Backups", desc: "Daily cloud backups" },
              { icon: Smartphone, label: "Mobile & Desktop", desc: "Works everywhere" },
              { icon: Receipt, label: "Pakistani Invoicing", desc: "PKR, SRB, FBR ready" },
            ].map((t, i) => (
              <div key={i} className="text-center p-5 rounded-2xl" style={{ border: `1px solid ${C.cardBorder}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "#EFF4FF" }}>
                  <t.icon size={20} color={C.blue} />
                </div>
                <p className="font-semibold text-sm mb-1" style={{ color: C.nearBlack, fontFamily: headingFont }}>{t.label}</p>
                <p className="text-xs" style={{ color: C.slate, fontFamily: bodyFont }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section bg={C.lightGray}>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><Layers size={11} /> Software Solutions</Eyebrow>
            <H2>Our Software Solutions</H2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {[
              { page: "erp" as Page, icon: BarChart3, title: "Business ERP Software", desc: "Complete business management for SMEs — inventory, accounts, purchases, reports, and multi-branch control in one system.", chips: ["Inventory", "Accounts", "Purchases", "Reports", "Multi-Branch"] },
              { page: "sd" as Page, icon: Route, title: "Sales & Distribution Software", desc: "Manage your entire distribution network — route planning, order booking, recovery tracking, and real-time salesperson monitoring.", chips: ["Route Planning", "Order Booking", "Recovery", "GPS Tracking"] },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8" style={{ border: `1px solid ${C.cardBorder}`, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: gradLight }}>
                  <p.icon size={22} color={C.blue} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: C.nearBlack, fontFamily: headingFont }}>{p.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.slate, fontFamily: bodyFont }}>{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.chips.map(c => (
                    <span key={c} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background: "#EFF4FF", color: C.blue, fontFamily: bodyFont }}>{c}</span>
                  ))}
                </div>
                <Link href={PAGE_PATHS[p.page]} className="flex items-center gap-1 text-sm font-semibold" style={{ color: C.blue, fontFamily: bodyFont }}>
                  Explore {p.title.split(" ")[0]} <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <div className="rounded-2xl p-6 text-center" style={{ border: `1.5px dashed #C7D7FF`, background: "#EFF4FF" }}>
            <p className="font-semibold" style={{ color: C.navy, fontFamily: headingFont }}>More solutions coming.</p>
            <p className="text-sm mt-1" style={{ color: C.slate, fontFamily: bodyFont }}>Talk to us about your specific business needs — we may have a custom solution for you.</p>
            <Link href={PAGE_PATHS.contact} className="inline-block mt-3 text-sm font-semibold" style={{ color: C.blue, fontFamily: bodyFont }}>Contact Us →</Link>
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><TrendingUp size={11} /> Business Impact</Eyebrow>
            <H2>What Changes When You Use SalesVince</H2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-2xl p-6" style={{ border: `1px solid ${C.cardBorder}`, boxShadow: "0 4px 16px rgba(0,0,0,0.03)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: b.color + "18" }}>
                  <b.icon size={20} color={b.color} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont, fontSize: 16 }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>{b.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Industries strip */}
      <section className="py-16 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center mb-10">
            <H2 light>Trusted Across Industries</H2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 mb-8">
            {industries.map((ind, i) => (
              <Link key={i} href={PAGE_PATHS.industries} className="flex flex-col items-center gap-2 group min-w-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110" style={{ background: "rgba(255,255,255,0.12)" }}>
                  <ind.icon size={20} color="rgba(255,255,255,0.85)" />
                </div>
                <span className="text-[10px] sm:text-xs text-center font-medium leading-tight" style={{ color: "rgba(255,255,255,0.65)", fontFamily: bodyFont }}>{ind.label}</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href={PAGE_PATHS.industries} className="text-sm font-semibold inline-flex items-center gap-1 mx-auto" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>
              See How We Help Your Industry <ArrowRight size={14} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Feature highlights */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><Zap size={11} /> Features</Eyebrow>
            <H2>Powerful Features, Simple to Use</H2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-4 p-5 rounded-2xl" style={{ border: `1px solid ${C.cardBorder}`, background: "white" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF4FF" }}>
                  <f.icon size={18} color={C.blue} />
                </div>
                <span className="font-semibold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>{f.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <SecBtn href={PAGE_PATHS.features}>See All Features <ArrowRight size={14} /></SecBtn>
          </div>
        </Container>
      </Section>

      {/* Why SalesVince */}
      <Section bg={C.lightGray} className="!px-8 sm:!px-10 md:!px-12">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow><Star size={11} /> Why Choose Us</Eyebrow>
              <H2 center={false}>Why Pakistani Businesses Choose SalesVince</H2>
              <div className="space-y-6 mt-8">
                {whyPoints.map((p, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm" style={{ background: gradBtn, color: "white", fontFamily: headingFont }}>
                      {p.n}
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: C.nearBlack, fontFamily: headingFont }}>{p.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>{p.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end pr-4 sm:pr-8">
              <PhoneMockup />
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="sm:px-8 md:px-10">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow><Clock size={11} /> Getting Started</Eyebrow>
            <H2>Getting Started Is Easy</H2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 hidden lg:block" style={{ background: `linear-gradient(90deg, ${C.blue}, ${C.bright})`, opacity: 0.2 }} />
            {[
              { n: "1", title: "Book a Free Demo", text: "Schedule a call with our team. We will show you the software live.", icon: Calendar },
              { n: "2", title: "See It With Your Data", text: "We set up a demo using your actual products, customers, and pricing.", icon: Eye },
              { n: "3", title: "Setup & Training", text: "Our team handles data migration and trains your staff in Urdu or English.", icon: Settings },
              { n: "4", title: "Go Live With Support", text: "You launch with us beside you. Full support for the first 30 days.", icon: Award },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl relative" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: gradLight }}>
                  <s.icon size={22} color={C.blue} />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: gradBtn, fontFamily: headingFont }}>{s.n}</div>
                <h4 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>{s.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />

      {/* FAQ */}
      <Section>
        <Container>
          <div className="text-center mb-10">
            <H2>Frequently Asked Questions</H2>
          </div>
          <FAQAccordion items={faq} />
        </Container>
      </Section>

      {/* Final CTA */}
      <section className="py-24 px-6" style={{ background: C.navy }}>
        <div className="max-w-3xl mx-auto text-center">
          <H2 light>Stop Managing Your Business on Registers and Memory</H2>
          <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.65)", fontFamily: bodyFont }}>
            Join hundreds of Pakistani businesses already running on SalesVince. Book your free demo today and see the difference.
          </p>
          <div className="flex flex-row gap-2 sm:gap-3 justify-center">
            <PrimaryBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !gap-1 !text-xs sm:!px-8 sm:!py-4 sm:!gap-2 sm:!text-base">Book Free Demo <ArrowRight size={16} className="shrink-0" aria-hidden /></PrimaryBtn>
            <WABtn className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !py-2.5 !gap-1 !text-xs sm:!px-6 sm:!py-3 sm:!gap-2 sm:!text-sm">WhatsApp Us Now</WABtn>
          </div>
        </div>
      </section>
    </div>
  );
}
