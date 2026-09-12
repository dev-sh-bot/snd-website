"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  MapPin,
  Phone,
  Mail,
  MessageCircle
} from "lucide-react";
import {
  PrimaryBtn,
  Eyebrow,
  H1,
  Sub,
  Section,
  Container
} from "@/components/ui";
import {
  C,
  grad,
  headingFont,
  bodyFont
} from "@/lib/brand";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.office)}`;

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const upd = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center">
            <Eyebrow><Mail size={11} aria-hidden /> Contact</Eyebrow>
            <H1 light>Get in Touch</H1>
            <Sub light>Our team is available 6 days a week to answer your questions in Urdu or English.</Sub>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MessageCircle, title: "WhatsApp", info: CONTACT.phoneDisplay, sub: "Chat with us directly", color: C.wa, href: WHATSAPP_URL, external: true },
              { icon: Phone, title: "Call Us", info: CONTACT.phoneDisplay, sub: "Mon–Sat, 9am–6pm", color: C.blue, href: `tel:${CONTACT.phoneTel}`, external: false },
              { icon: Mail, title: "Email", info: CONTACT.email, sub: "We reply within 4 hours", color: C.bright, href: `mailto:${CONTACT.email}`, external: false },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="p-6 rounded-2xl text-center block transition-shadow hover:shadow-md"
                style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 4px 16px rgba(0,0,0,0.04)" }}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: c.color + "15" }} aria-hidden>
                  <c.icon size={24} color={c.color} />
                </div>
                <h2 className="font-bold mb-1" style={{ color: C.nearBlack, fontFamily: headingFont }}>{c.title}</h2>
                <p className="font-semibold mb-1" style={{ color: C.blue, fontFamily: bodyFont }}>{c.info}</p>
                <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{c.sub}</p>
              </a>
            ))}
          </div>

          <div className="grid xl:grid-cols-2 gap-12 xl:gap-16">
            <div className="rounded-2xl overflow-hidden" style={{ background: C.lightGray, border: `1px solid ${C.cardBorder}`, minHeight: 300 }}>
              <div className="h-full flex flex-col items-center justify-center p-10 text-center" style={{ minHeight: 300 }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" style={{ background: "#EFF4FF" }} aria-hidden>
                  <MapPin size={28} color={C.blue} />
                </div>
                <h2 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>Our Office</h2>
                <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{CONTACT.office.split(", ").slice(0, 2).join(", ")}<br />{CONTACT.office.split(", ").slice(2).join(", ")}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm font-semibold" style={{ color: C.blue, fontFamily: bodyFont }}>
                  View on Google Maps →
                </a>
              </div>
            </div>

            <div className="rounded-2xl p-5 sm:p-7" style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 8px 30px rgba(0,0,0,0.05)" }}>
              {sent ? (
                <div className="text-center py-10" role="status" aria-live="polite">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "#DCFCE7" }} aria-hidden>
                    <Check size={24} color={C.green} />
                  </div>
                  <h2 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>Message Sent!</h2>
                  <p style={{ color: C.slate, fontFamily: bodyFont }}>We will get back to you within 4 hours.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-6" style={{ color: C.nearBlack, fontFamily: headingFont }}>Send Us a Message</h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Your Name</label>
                      <input id="contact-name" name="name" autoComplete="name" required aria-required="true" value={form.name} onChange={e => upd("name", e.target.value)} placeholder="Muhammad Ali" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, fontFamily: bodyFont }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Email</label>
                        <input id="contact-email" name="email" type="email" autoComplete="email" required aria-required="true" value={form.email} onChange={e => upd("email", e.target.value)} placeholder="ali@business.com" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, fontFamily: bodyFont }} />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Phone</label>
                        <input id="contact-phone" name="tel" type="tel" autoComplete="tel" value={form.phone} onChange={e => upd("phone", e.target.value)} placeholder="+92 300..." className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, fontFamily: bodyFont }} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Message</label>
                      <textarea id="contact-message" name="message" required aria-required="true" value={form.message} onChange={e => upd("message", e.target.value)} placeholder="Tell us about your business and what you need..." rows={4} className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, fontFamily: bodyFont }} />
                    </div>
                    <PrimaryBtn type="submit" full size="lg">Send Message <ArrowRight size={16} aria-hidden /></PrimaryBtn>
                  </form>
                </>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
