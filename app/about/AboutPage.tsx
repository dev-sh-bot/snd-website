
import {
  Building2,
  Headphones,
  Star,
  Target
} from "lucide-react";
import {
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
  bodyFont
} from "@/lib/brand";

export default function AboutPage() {
  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="max-w-2xl text-center xl:text-left">
            <Eyebrow><Building2 size={11} /> About Us</Eyebrow>
            <H1 light>Built in Pakistan, Built for Pakistan</H1>
            <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}>
              SalesVince is a Pakistani software company dedicated to building business management tools that work for the real conditions of running a business in Pakistan.
            </p>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center mb-20">
            <div>
              <Eyebrow><Target size={11} /> Our Mission</Eyebrow>
              <H2 center={false}>Why We Built SalesVince</H2>
              <p className="text-base leading-relaxed mb-5" style={{ color: C.slate, fontFamily: bodyFont }}>
                Pakistani SMEs — distributors, traders, wholesalers, and manufacturers — have been running on paper registers, WhatsApp messages, and Excel sheets for decades. They deserve software that understands their business, speaks their language, and actually helps them grow.
              </p>
              <p className="text-base leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>
                We built SalesVince to give every Pakistani business owner — regardless of technical background — a clear picture of their business and the tools to manage it properly. No jargon. No complexity. Just numbers you can trust.
              </p>
            </div>
            <div className="rounded-3xl p-8" style={{ background: C.lightGray, border: `1px solid ${C.cardBorder}` }}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { val: "2019", label: "Founded in Karachi" },
                  { val: "500+", label: "Businesses served" },
                  { val: "9+", label: "Industries covered" },
                  { val: "6 days", label: "Support per week" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="text-3xl font-bold mb-1" style={{ color: C.blue, fontFamily: headingFont }}>{s.val}</p>
                    <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we believe / how we work */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              { icon: Target, title: "Who We Are", text: "A team of Pakistani software engineers, business analysts, and customer success specialists based in Karachi — who understand local business challenges firsthand." },
              { icon: Star, title: "What We Believe", text: "Software should make business simpler — not add complexity. Every feature we build is tested against one question: does this make life easier for a Pakistani SME owner?" },
              { icon: Headphones, title: "How We Work", text: "We work closely with every customer. From demo to go-live to ongoing support, our team is available in Urdu and English to help you get the most out of SalesVince." },
            ].map((c, i) => (
              <div key={i} className="p-7 rounded-2xl" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#EFF4FF" }}>
                  <c.icon size={20} color={C.blue} />
                </div>
                <h3 className="font-bold mb-3" style={{ color: C.nearBlack, fontFamily: headingFont }}>{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>{c.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </div>
  );
}
