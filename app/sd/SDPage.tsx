
import {
  ArrowRight,
  Check,
  DollarSign,
  MapPin,
  Smartphone,
  FileText,
  ShoppingCart,
  Zap,
  RefreshCw,
  AlertCircle,
  Route
} from "lucide-react";
import {
  PrimaryBtn,
  WABtn,
  Eyebrow,
  H2,
  Section,
  Container,
  RouteMapMockup,
  FAQAccordion,
  CTABanner
} from "@/components/ui";
import {
  C,
  gradBtn,
  headingFont,
  bodyFont,
  PAGE_PATHS
} from "@/lib/brand";

export default function SDPage() {
  const faq = [
    { q: "Can salespeople book orders from the field?", a: "Yes. Salespeople use a mobile app to book orders at each shop on their route. Orders sync instantly to the office system." },
    { q: "Does it track where salespeople are?", a: "Yes. The system records check-in locations so you can see which shops were visited, when, and what was sold." },
    { q: "Can I manage multiple sales routes?", a: "Yes. You can set up as many routes as you need, assign salespeople to specific routes, and track performance per route." },
    { q: "How does recovery tracking work?", a: "Each party's balance is tracked. Salespeople can record cash or cheque collections in the field. The office sees collections in real time." },
    { q: "Does it work without internet in the field?", a: "The mobile app works offline and syncs when internet is available — useful for areas with weak connectivity." },
  ];

  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: C.lightGray }}>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-1">
              <RouteMapMockup />
            </div>
            <div className="order-2 min-w-0 text-center lg:text-left">
              <Eyebrow><Route size={11} /> Sales & Distribution Software</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: C.nearBlack, fontFamily: headingFont, letterSpacing: "-0.5px" }}>
                Your Entire Distribution Network. Under Control.
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>
                From route planning to field order booking to recovery collection — SalesVince gives you complete visibility over your distribution operations, in real time.
              </p>
              <div className="flex flex-row gap-2 sm:gap-3 justify-center lg:justify-start w-full max-w-md mx-auto">
                <PrimaryBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !gap-1 !text-xs sm:!px-8 sm:!py-4 sm:!gap-2 sm:!text-base">Book Free Demo <ArrowRight size={16} className="shrink-0" aria-hidden /></PrimaryBtn>
                <WABtn className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !py-2.5 !gap-1 !text-xs sm:!px-6 sm:!py-3 sm:!gap-2 sm:!text-sm">WhatsApp Us Now</WABtn>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain points */}
      <Section bg={C.lightGray}>
        <Container>
          <div className="text-center mb-10">
            <Eyebrow><AlertCircle size={11} /> Sound Familiar?</Eyebrow>
            <H2>The Real Problems Distributors Face</H2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "No idea which shops the salesperson actually visited today.",
              "Orders come through WhatsApp and phone calls — always getting mixed up.",
              "Recovery is tracked on paper. Many outstanding amounts are never followed up.",
              "You find out about missed targets days later, not the same day.",
              "Cannot tell which route or area is most profitable.",
              "Salespeople are writing on paper and entering data later — too many errors.",
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

      {/* Solution */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Mobile app mockup — first on all breakpoints (left at lg+) */}
            <div className="order-1 flex justify-center">
              <div className="relative" style={{ width: 260 }}>
                <div className="rounded-[44px] overflow-hidden" style={{ border: "8px solid #0A1A4F", boxShadow: "0 40px 80px rgba(10,26,79,0.3)" }}>
                  <div className="px-4 pt-3 pb-1 flex items-center justify-between" style={{ background: "#050D20" }}>
                    <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 9 }}>9:41</span>
                    <div className="w-20 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.2)" }} />
                  </div>
                  <div style={{ background: "#0D1B3E", padding: "12px 14px 20px" }}>
                    <p className="font-bold text-white mb-1" style={{ fontSize: 13, fontFamily: headingFont }}>Today&apos;s Route</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontFamily: bodyFont, marginBottom: 12 }}>Saddar Route 3 · Usman Raza</p>
                    {[
                      { shop: "Bismillah Traders", status: "Order Booked", amount: "Rs. 45,200", done: true },
                      { shop: "Al-Noor Store", status: "Recovery", amount: "Rs. 12,000", done: true },
                      { shop: "Pak Medicos", status: "Visited", amount: "—", done: true },
                      { shop: "City Mart", status: "Pending", amount: "—", done: false },
                      { shop: "Star Mart", status: "Pending", amount: "—", done: false },
                    ].map((s, i) => (
                      <div key={i} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: s.done ? "#DCFCE7" : "rgba(255,255,255,0.08)" }}>
                            {s.done ? <Check size={10} color={C.green} /> : <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.3)" }} />}
                          </div>
                          <div>
                            <p style={{ color: "white", fontSize: 10, fontFamily: headingFont, fontWeight: 600 }}>{s.shop}</p>
                            <p style={{ color: s.done ? C.bright : "rgba(255,255,255,0.35)", fontSize: 8, fontFamily: bodyFont }}>{s.status}</p>
                          </div>
                        </div>
                        <p style={{ color: s.done ? "#10B981" : "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: bodyFont }}>{s.amount}</p>
                      </div>
                    ))}
                    <button className="w-full mt-3 py-2.5 rounded-xl text-white text-xs font-semibold" style={{ background: gradBtn, fontFamily: bodyFont }}>Book Next Order</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2">
              <Eyebrow><Zap size={11} /> The SalesVince Solution</Eyebrow>
              <H2 center={false}>Complete Visibility. From Depot to Shop Door.</H2>
              <div className="space-y-5 mt-6">
                {[
                  { icon: Route, title: "Route Planning", text: "Build and manage sales routes for each salesperson. Assign shops, set visit frequency, and optimize for efficiency." },
                  { icon: ShoppingCart, title: "Mobile Order Booking", text: "Salespeople book orders directly on their phone at each shop. No paper, no WhatsApp chaos." },
                  { icon: DollarSign, title: "Recovery Tracking", text: "Record collections at the point of visit. Outstanding balances update instantly in the office system." },
                  { icon: MapPin, title: "Live Field Monitoring", text: "See where each salesperson is, which shops they have visited, and what they have sold — right now." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#EFF4FF" }}>
                      <s.icon size={18} color={C.blue} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1" style={{ color: C.nearBlack, fontFamily: headingFont }}>{s.title}</h4>
                      <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section bg={C.lightGray}>
        <Container>
          <div className="grid md:grid-cols-4 gap-5">
            {[
              { val: "Real-time", label: "Order sync to office", icon: RefreshCw },
              { val: "100%", label: "Field visit tracking", icon: MapPin },
              { val: "0 paper", label: "Fully digital process", icon: FileText },
              { val: "Offline", label: "Works without internet", icon: Smartphone },
            ].map((s, i) => (
              <div key={i} className="text-center p-6 rounded-2xl" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "#EFF4FF" }}>
                  <s.icon size={18} color={C.blue} />
                </div>
                <p className="text-xl font-bold mb-1" style={{ color: C.blue, fontFamily: headingFont }}>{s.val}</p>
                <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABanner />
      <Section>
        <Container>
          <div className="text-center mb-10"><H2>Frequently Asked Questions</H2></div>
          <FAQAccordion items={faq} />
        </Container>
      </Section>
    </div>
  );
}
