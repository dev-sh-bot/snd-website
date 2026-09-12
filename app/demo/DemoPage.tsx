"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  MessageCircle,
  Calendar
} from "lucide-react";
import {
  PrimaryBtn,
  Eyebrow
} from "@/components/ui";
import {
  C,
  gradBtn,
  headingFont,
  bodyFont
} from "@/lib/brand";
import { CONTACT, WHATSAPP_URL } from "@/lib/site";

export default function DemoPage() {
  const [form, setForm] = useState({ name: "", business: "", city: "", phone: "", type: "", product: "", employees: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const upd = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));
  const cityOpts = ["Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta", "Sialkot", "Gujranwala", "Other"];
  const typeOpts = ["Distributor", "Wholesaler", "Manufacturer", "Retailer", "Trading Company", "Services", "Other"];
  const productOpts = ["Business ERP Software", "Sales & Distribution Software", "Both"];
  const empOpts = ["1–5 employees", "6–15 employees", "16–50 employees", "51–150 employees", "150+ employees"];

  return (
    <div>
      <div className="pt-24" style={{ background: C.lightGray }}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Eyebrow><Calendar size={11} aria-hidden /> Free Demo</Eyebrow>
              <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ color: C.nearBlack, fontFamily: headingFont, letterSpacing: "-0.5px" }}>
                Book Your Free Demo
              </h1>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>
                See SalesVince working with your own data. Our team will walk you through the software in Urdu or English and answer all your questions — no pressure, no commitment.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  { n: "1", title: "We confirm your demo", text: "Our team calls you to confirm a convenient time — usually within 2 hours." },
                  { n: "2", title: "Live demo session", text: "We show you the software working with your products, customers, and processes." },
                  { n: "3", title: "Your questions answered", text: "Ask anything — pricing, setup, features, migration. We answer in full." },
                  { n: "4", title: "Custom proposal", text: "We send you a proposal tailored to your business size and needs." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ background: gradBtn, color: "white", fontFamily: headingFont }} aria-hidden>{s.n}</div>
                    <div>
                      <p className="font-semibold mb-0.5" style={{ color: C.nearBlack, fontFamily: headingFont }}>{s.title}</p>
                      <p className="text-sm" style={{ color: C.slate, fontFamily: bodyFont }}>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: MessageCircle, label: "WhatsApp", val: CONTACT.phoneDisplay, href: WHATSAPP_URL, color: C.wa, external: true },
                  { icon: Phone, label: "Call Us", val: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}`, color: C.blue, external: false },
                  { icon: Mail, label: "Email", val: CONTACT.email, href: `mailto:${CONTACT.email}`, color: C.bright, external: false },
                ].map((c, i) => (
                  <a
                    key={i}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="p-4 rounded-2xl text-center block transition-shadow hover:shadow-md"
                    style={{ background: "white", border: `1px solid ${C.cardBorder}` }}
                  >
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center mx-auto mb-2" style={{ background: c.color + "15" }} aria-hidden>
                      <c.icon size={16} color={c.color} />
                    </div>
                    <p className="font-semibold text-xs mb-0.5" style={{ color: C.nearBlack, fontFamily: headingFont }}>{c.label}</p>
                    <p className="text-xs" style={{ color: C.slate, fontFamily: bodyFont }}>{c.val}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8" style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 20px 60px rgba(0,0,0,0.07)" }}>
              {submitted ? (
                <div className="text-center py-12" role="status" aria-live="polite">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#DCFCE7" }} aria-hidden>
                    <Check size={28} color={C.green} />
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: C.nearBlack, fontFamily: headingFont }}>Demo Request Received!</h2>
                  <p style={{ color: C.slate, fontFamily: bodyFont }}>Our team will call you within 2 business hours to confirm your demo time.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-6" style={{ color: C.nearBlack, fontFamily: headingFont }}>Tell us about your business</h2>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="demo-name" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Full Name *</label>
                        <input id="demo-name" name="name" autoComplete="name" required aria-required="true" value={form.name} onChange={e => upd("name", e.target.value)} placeholder="Muhammad Ali" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: C.nearBlack, fontFamily: bodyFont }} />
                      </div>
                      <div>
                        <label htmlFor="demo-business" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Business Name *</label>
                        <input id="demo-business" name="organization" autoComplete="organization" required aria-required="true" value={form.business} onChange={e => upd("business", e.target.value)} placeholder="Al-Madina Distributors" className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: C.nearBlack, fontFamily: bodyFont }} />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="demo-city" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>City *</label>
                        <select id="demo-city" name="city" autoComplete="address-level2" required aria-required="true" value={form.city} onChange={e => upd("city", e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: form.city ? C.nearBlack : C.slate, fontFamily: bodyFont }}>
                          <option value="">Select city</option>
                          {cityOpts.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="demo-phone" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>WhatsApp / Phone *</label>
                        <div className="flex">
                          <span className="px-3 flex items-center rounded-l-xl text-sm" style={{ background: "#DDE5F0", color: C.slate, fontFamily: bodyFont, border: `1px solid ${C.cardBorder}`, borderRight: "none" }} aria-hidden>+92</span>
                          <input id="demo-phone" name="tel" type="tel" autoComplete="tel-national" required aria-required="true" inputMode="tel" value={form.phone} onChange={e => upd("phone", e.target.value)} placeholder="3001234567" className="flex-1 px-3 py-3 rounded-r-xl text-sm min-w-0" style={{ border: `1px solid ${C.cardBorder}`, borderLeft: "none", background: C.lightGray, color: C.nearBlack, fontFamily: bodyFont }} />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="demo-type" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Business Type *</label>
                        <select id="demo-type" name="businessType" required aria-required="true" value={form.type} onChange={e => upd("type", e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: form.type ? C.nearBlack : C.slate, fontFamily: bodyFont }}>
                          <option value="">Select type</option>
                          {typeOpts.map(t => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="demo-product" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Solution Interested In</label>
                        <select id="demo-product" name="product" value={form.product} onChange={e => upd("product", e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: form.product ? C.nearBlack : C.slate, fontFamily: bodyFont }}>
                          <option value="">Select solution</option>
                          {productOpts.map(p => <option key={p}>{p}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="demo-employees" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Number of Employees</label>
                      <select id="demo-employees" name="employees" value={form.employees} onChange={e => upd("employees", e.target.value)} className="w-full px-4 py-3 rounded-xl text-sm" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: form.employees ? C.nearBlack : C.slate, fontFamily: bodyFont }}>
                        <option value="">Select range</option>
                        {empOpts.map(e => <option key={e}>{e}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="demo-message" className="block text-sm font-semibold mb-1.5" style={{ color: C.nearBlack, fontFamily: bodyFont }}>Message (optional)</label>
                      <textarea id="demo-message" name="message" value={form.message} onChange={e => upd("message", e.target.value)} placeholder="Tell us anything specific about your business or what you want to see in the demo..." rows={3} className="w-full px-4 py-3 rounded-xl text-sm resize-none" style={{ border: `1px solid ${C.cardBorder}`, background: C.lightGray, color: C.nearBlack, fontFamily: bodyFont }} />
                    </div>
                    <PrimaryBtn type="submit" full size="lg">
                      Book My Free Demo <ArrowRight size={16} aria-hidden />
                    </PrimaryBtn>
                    <p className="text-center text-xs" style={{ color: C.slate, fontFamily: bodyFont }}>
                      Your information is private. No spam, only a demo call.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
