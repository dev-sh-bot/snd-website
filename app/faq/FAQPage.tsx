import {
  Headphones,
  Settings,
  MessageSquare,
  Wrench,
  CreditCard,
  ChevronDown,
} from "lucide-react";
import {
  Eyebrow,
  H1,
  Sub,
  Section,
  Container,
  CTABanner,
} from "@/components/ui";
import { C, grad, headingFont, bodyFont } from "@/lib/brand";

function faqSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const FAQ_CATEGORIES = [
  {
    title: "Software & Features",
    icon: Settings,
    items: [
      { q: "What does SalesVince include?", a: "SalesVince includes inventory management, accounting, sales management, purchase management, recovery tracking, multi-branch support, user roles, and reporting — in one integrated system." },
      { q: "Does it work on mobile phones?", a: "Yes. Owners can view reports on their phone. Salespeople can book orders and record collections using the mobile app. The system works on any device." },
      { q: "Can I manage multiple branches?", a: "Yes. SalesVince supports multiple branches or warehouses. Each location has its own stock and records, with consolidated reporting for the owner." },
      { q: "Does it support Urdu?", a: "Yes. Our interface and support are available in both Urdu and English." },
    ],
  },
  {
    title: "Pricing",
    icon: CreditCard,
    items: [
      { q: "How much does SalesVince cost?", a: "Pricing depends on the modules you need and the number of users. We offer flexible plans for businesses of different sizes. Book a demo and we will share a custom proposal for your business." },
      { q: "Is there a free trial?", a: "We offer a free demo where we show you the software live with your own data. This is better than a trial because we configure it specifically for your business." },
      { q: "Are there any hidden charges?", a: "No. Our proposal includes all costs upfront — software, setup, training, and support. Nothing is added later without your agreement." },
    ],
  },
  {
    title: "Implementation",
    icon: Wrench,
    items: [
      { q: "How long does setup take?", a: "Most businesses are fully running within 5 to 7 working days. This includes data migration, configuration, and staff training." },
      { q: "Do you help with data migration?", a: "Yes. Our team migrates your existing customer list, product list, opening stock, and opening balances as part of the standard setup." },
      { q: "Do you train our staff?", a: "Yes. Training is included. We train your team in Urdu or English, on-site or online, depending on your location and preference." },
    ],
  },
  {
    title: "Support",
    icon: Headphones,
    items: [
      { q: "What support do you provide after go-live?", a: "We provide phone, WhatsApp, and email support during business hours, 6 days a week. Our local support team responds quickly and explains in Urdu or English." },
      { q: "What if we have a problem during business hours?", a: "Call us, WhatsApp us, or email us. We aim to resolve all issues on the same day. Critical issues are treated as priority." },
      { q: "Do you provide software updates?", a: "Yes. Software updates are included in your subscription. New features are added regularly based on customer feedback." },
    ],
  },
] as const;

export default function FAQPage() {
  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center">
            <Eyebrow><MessageSquare size={11} aria-hidden /> FAQ</Eyebrow>
            <H1 light>Frequently Asked Questions</H1>
            <Sub light>Everything you need to know about SalesVince — software, pricing, setup, and support.</Sub>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-12">
            {FAQ_CATEGORIES.map((cat) => {
              const id = `faq-${faqSlug(cat.title)}`;
              return (
              <section key={cat.title} aria-labelledby={id}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#EFF4FF" }}>
                    <cat.icon size={18} color={C.blue} aria-hidden />
                  </div>
                  <h2 id={id} className="text-xl font-bold" style={{ color: C.nearBlack, fontFamily: headingFont }}>{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <details key={item.q} className="rounded-2xl overflow-hidden group" style={{ border: `1px solid ${C.cardBorder}`, background: "white" }}>
                      <summary className="w-full flex items-center justify-between p-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="font-semibold pr-4" style={{ color: C.nearBlack, fontSize: 15, fontFamily: headingFont }}>{item.q}</span>
                        <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center bg-[#EFF4FF] group-open:bg-[#1E3FAE] group-open:rotate-180 transition-all">
                          <ChevronDown size={14} className="text-[#1E3FAE] group-open:text-white" aria-hidden />
                        </span>
                      </summary>
                      <div className="px-5 pb-5">
                        <p style={{ color: C.slate, lineHeight: 1.7, fontSize: 14, fontFamily: bodyFont }}>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
              );
            })}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </div>
  );
}
