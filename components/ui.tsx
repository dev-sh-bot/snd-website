"use client";

import type { ComponentType, ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import {
  ChevronDown,
  ArrowRight,
  Check,
  BarChart3,
  Package,
  DollarSign,
  Users,
  MapPin,
  MessageCircle,
  Settings,
  ShoppingCart,
  Bell,
  Zap,
  Receipt,
  AlertCircle
} from "lucide-react";
import {
  C,
  grad,
  gradBtn,
  headingFont,
  bodyFont,
  PAGE_PATHS,
} from "@/lib/brand";
import { WHATSAPP_URL } from "@/lib/site";

type BtnSize = "sm" | "md" | "lg";

function btnPadding(size: BtnSize) {
  return size === "lg" ? "px-8 py-4 text-base" : size === "sm" ? "px-4 py-2.5 text-sm" : "px-6 py-3 text-sm";
}

export function Logo({ variant = "color" }: { variant?: "white" | "color" }) {
  const wc = variant === "white" ? "#fff" : C.navy;
  return (
    <Link href={PAGE_PATHS.home} className="flex items-center gap-2.5 select-none" aria-label="SalesVince home">
      <Image
        src={variant === "white" ? "/salesvince-mark.png" : "/salesvince-mark-blue.png"}
        alt=""
        aria-hidden="true"
        width={28}
        height={28}
        className="h-7 w-7 shrink-0 object-contain"
      />
      <span style={{ color: wc, fontWeight: 700, fontSize: 17, fontFamily: headingFont, letterSpacing: "-0.3px" }}>SalesVince</span>
    </Link>
  );
}

export function PrimaryBtn({ children, onClick, href, size = "md", full = false, className = "", type = "button" }: { children: ReactNode; onClick?: () => void; href?: string; size?: BtnSize; full?: boolean; className?: string; type?: "button" | "submit" }) {
  const classes = `${btnPadding(size)} ${full ? "w-full justify-center" : ""} rounded-xl font-semibold text-white inline-flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:shadow-xl active:scale-[0.98] cursor-pointer ${className}`;
  const style = { background: gradBtn, boxShadow: "0 4px 20px rgba(59,108,246,0.3)", fontFamily: bodyFont };
  if (href) {
    return <Link href={href} className={classes} style={style}>{children}</Link>;
  }
  return (
    <button type={type} onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export function SecBtn({ children, onClick, href, dark = false, full = false, className = "", size = "md" }: { children: ReactNode; onClick?: () => void; href?: string; dark?: boolean; full?: boolean; className?: string; size?: BtnSize }) {
  const classes = `${btnPadding(size)} rounded-xl font-semibold inline-flex items-center gap-2 border transition-all duration-200 active:scale-[0.98] cursor-pointer ${full ? "w-full justify-center" : ""} ${dark ? "hover:bg-white/10" : "hover:bg-[#EFF4FF]"} ${className}`;
  const style = { borderColor: dark ? "rgba(255,255,255,0.45)" : C.blue, color: dark ? "#fff" : C.blue, background: "transparent", fontFamily: bodyFont };
  if (href) {
    const external = href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (external) {
      return <a href={href} className={classes} style={style} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>{children}</a>;
    }
    return <Link href={href} className={classes} style={style}>{children}</Link>;
  }
  return (
    <button type="button" onClick={onClick} className={classes} style={style}>
      {children}
    </button>
  );
}

export function WABtn({ children, href = WHATSAPP_URL, full = false, className = "" }: { children: ReactNode; href?: string; full?: boolean; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`px-6 py-3 rounded-xl font-semibold text-sm inline-flex items-center gap-2 text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer ${full ? "w-full justify-center" : ""} ${className}`} style={{ background: C.wa, fontFamily: bodyFont }}>
      <MessageCircle size={16} className="shrink-0" aria-hidden />
      {children}
    </a>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "#EFF4FF", color: C.blue, fontFamily: bodyFont }}>{children}</div>;
}

export function H1({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h1 className="text-4xl md:text-5xl xl:text-[56px] font-bold leading-[1.1] mb-5 tracking-tight" style={{ color: light ? "#fff" : C.nearBlack, fontFamily: headingFont }}>{children}</h1>;
}

export function H2({ children, light = false, center = true }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight ${center ? "text-center" : ""}`} style={{ color: light ? "#fff" : C.nearBlack, fontFamily: headingFont }}>{children}</h2>;
}

export function Sub({ children, light = false, center = true }: { children: ReactNode; light?: boolean; center?: boolean }) {
  return <p className={`text-base md:text-lg leading-relaxed mb-10 max-w-2xl ${center ? "mx-auto text-center" : ""}`} style={{ color: light ? "rgba(255,255,255,0.75)" : C.slate, fontFamily: bodyFont }}>{children}</p>;
}

export function Section({ children, bg = "#fff", className = "" }: { children: ReactNode; bg?: string; className?: string }) {
  return <section className={`py-20 px-6 ${className}`} style={{ background: bg }}>{children}</section>;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-7xl mx-auto ${className}`}>{children}</div>;
}

export function IconBadge({ icon: Icon, color = C.blue, bg = "#EFF4FF", size = 20 }: { icon: ComponentType<{ size?: number; color?: string }>; color?: string; bg?: string; size?: number }) {
  return (
    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 flex-shrink-0" style={{ background: bg }} aria-hidden>
      <Icon size={size} color={color} />
    </div>
  );
}

export function DashboardMockup() {
  const chartData = [
    { name: "Saddar", val: 320 }, { name: "PECHS", val: 480 },
    { name: "Gulshan", val: 290 }, { name: "Clifton", val: 560 }, { name: "Korangi", val: 210 },
  ];
  return (
    <div className="relative w-full max-w-[500px] mx-auto xl:mx-0">
      {/* Browser frame */}
      <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)" }}>
        {/* Chrome bar */}
        <div className="px-4 py-2.5 flex items-center gap-2" style={{ background: "#050D20" }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28CA42" }} />
          </div>
          <div className="flex-1 mx-2 rounded px-3 py-0.5 flex items-center gap-2 min-w-0" style={{ background: "#0A1A4F" }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: C.bright }} />
            <span className="text-[9px] truncate" style={{ color: "rgba(255,255,255,0.35)", fontFamily: bodyFont }}>app.salesvince.com/dashboard</span>
          </div>
          <Bell size={11} color="rgba(255,255,255,0.25)" />
        </div>
        {/* Dashboard body */}
        <div className="flex min-w-0" style={{ background: "#0D1B3E", minHeight: 310 }}>
          {/* Sidebar */}
          <div className="w-12 py-4 flex flex-col items-center gap-3 flex-shrink-0" style={{ background: "#06101E", borderRight: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: gradBtn }}>
              <BarChart3 size={14} color="white" />
            </div>
            {[Package, ShoppingCart, DollarSign, Users, Settings].map((Icon, i) => (
              <div key={i} className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ color: "rgba(255,255,255,0.28)" }}>
                <Icon size={13} />
              </div>
            ))}
          </div>
          {/* Main content */}
          <div className="flex-1 p-3 sm:p-4 min-w-0 overflow-hidden">
            <div className="flex items-start justify-between mb-3 gap-2">
              <div className="min-w-0">
                <p className="font-semibold text-white text-xs truncate" style={{ fontFamily: headingFont }}>Good morning, Ali!</p>
                <p className="truncate" style={{ color: "rgba(255,255,255,0.38)", fontSize: 9, fontFamily: bodyFont }}>Al-Madina Distributors · Karachi · Mon 17 Jun 2026</p>
              </div>
              <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-semibold flex-shrink-0" style={{ background: "rgba(59,108,246,0.18)", color: C.bright }}>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </div>
            </div>
            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-3">
              {[
                { label: "Today's Sales", val: "Rs. 1,245,000", sub: "↑ 12% vs yesterday", c: C.bright },
                { label: "Stock Value", val: "Rs. 8.4M", sub: "98 active SKUs", c: "#10B981" },
                { label: "Recovery", val: "Rs. 320,500", sub: "28 parties settled", c: "#F59E0B" },
              ].map((m, i) => (
                <div key={i} className="rounded-lg p-1.5 sm:p-2.5 min-w-0" style={{ background: "rgba(255,255,255,0.045)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="truncate" style={{ color: "rgba(255,255,255,0.38)", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: bodyFont, marginBottom: 3 }}>{m.label}</p>
                  <p className="font-bold text-white truncate" style={{ fontSize: 11, letterSpacing: "-0.3px", fontFamily: headingFont }}>{m.val}</p>
                  <p className="truncate" style={{ color: m.c, fontSize: 8, marginTop: 2, fontFamily: bodyFont }}>{m.sub}</p>
                </div>
              ))}
            </div>
            {/* Chart */}
            <div className="rounded-lg p-2.5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
              <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: bodyFont, marginBottom: 6 }}>Area-Wise Sales (Rs. 000s)</p>
              <div style={{ height: 90 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart id="hero-area-chart" data={chartData} margin={{ top: 0, right: 0, left: -32, bottom: 0 }}>
                    <Bar dataKey="val" fill={C.bright} radius={[3, 3, 0, 0]} />
                    <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,0.32)", fontSize: 7, fontFamily: bodyFont }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: "rgba(255,255,255,0.32)", fontSize: 7 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: "#0A1A4F", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 10, fontFamily: bodyFont }} labelStyle={{ color: "white" }} itemStyle={{ color: C.bright }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Floating cards: tucked inside on lg, float outside on xl+ */}
      <div className="absolute left-2 xl:-left-14 top-[30%] rounded-2xl p-3.5 hidden xl:block z-10" style={{ background: "white", minWidth: 165, border: `1px solid ${C.cardBorder}`, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#DCFCE7" }}>
            <DollarSign size={13} color={C.green} />
          </div>
          <p style={{ color: C.slate, fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: bodyFont }}>Recovery Collected</p>
        </div>
        <p className="font-bold" style={{ color: C.nearBlack, fontSize: 16, fontFamily: headingFont }}>Rs. 320,500</p>
        <p style={{ color: C.green, fontSize: 9, fontFamily: bodyFont }}>✓ 28 parties settled</p>
      </div>
      <div className="absolute right-2 xl:-right-12 bottom-[28%] rounded-2xl p-3.5 hidden xl:block z-10" style={{ background: "white", minWidth: 158, border: `1px solid ${C.cardBorder}`, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "#EFF4FF" }}>
            <MapPin size={13} color={C.blue} />
          </div>
          <p style={{ color: C.slate, fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: bodyFont }}>New Order</p>
        </div>
        <p className="font-bold" style={{ color: C.nearBlack, fontSize: 13, fontFamily: headingFont }}>Bismillah Traders</p>
        <p style={{ color: C.blue, fontSize: 9, fontFamily: bodyFont }}>Saddar Route 3 · Rs. 45,200</p>
      </div>
    </div>
  );
}

export function RouteMapMockup() {
  const stops = [
    { x: 60, y: 180, label: "Depot", type: "depot" },
    { x: 150, y: 80, label: "Bismillah Traders", type: "stop" },
    { x: 270, y: 110, label: "Al-Noor Store", type: "stop" },
    { x: 340, y: 200, label: "Pak Medicos", type: "stop" },
    { x: 220, y: 250, label: "City Mart", type: "stop" },
    { x: 100, y: 290, label: "Star Mart", type: "stop" },
  ];
  const path = stops.map((s, i) => `${i === 0 ? "M" : "L"} ${s.x} ${s.y}`).join(" ");
  return (
    <div className="relative rounded-2xl overflow-hidden" style={{ background: "#EFF4FF", border: "1px solid #C7D7FF", height: 360 }}>
      {/* Map background grid */}
      <svg width="100%" height="100%" style={{ position: "absolute", opacity: 0.18 }}>
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={C.blue} strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg width="100%" height="100%" style={{ position: "absolute" }} viewBox="0 0 400 370">
        {/* Route path */}
        <path d={path} fill="none" stroke={C.blue} strokeWidth="2" strokeDasharray="6,3" opacity="0.5" />
        {/* Stops */}
        {stops.map((s, i) => (
          <g key={i}>
            <circle cx={s.x} cy={s.y} r={s.type === "depot" ? 14 : 10} fill={s.type === "depot" ? C.blue : "white"} stroke={C.blue} strokeWidth="2" />
            {s.type === "depot" ? (
              <text x={s.x} y={s.y + 4} textAnchor="middle" fontSize="10" fill="white" fontWeight="700" fontFamily={headingFont}>D</text>
            ) : (
              <circle cx={s.x} cy={s.y} r={4} fill={C.bright} />
            )}
            <rect x={s.x + 12} y={s.y - 14} rx="4" ry="4" width={s.label.length * 5.8 + 8} height="16" fill="white" opacity="0.95" />
            <text x={s.x + 16} y={s.y - 3} fontSize="8" fill={C.navy} fontFamily={bodyFont} fontWeight="600">{s.label}</text>
          </g>
        ))}
      </svg>
      {/* Route label */}
      <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold" style={{ background: C.blue, color: "white", fontFamily: bodyFont }}>
        Saddar Route 3 · Karachi
      </div>
      {/* Salesperson card */}
      <div className="absolute bottom-4 right-4 rounded-xl p-3" style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", minWidth: 160 }}>
        <p style={{ color: C.slate, fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: bodyFont }}>Salesperson</p>
        <p className="font-bold" style={{ color: C.nearBlack, fontSize: 13, fontFamily: headingFont }}>Usman Raza</p>
        <div className="flex items-center gap-3 mt-1.5">
          <div style={{ fontSize: 9, color: C.green, fontFamily: bodyFont }}>✓ 4 orders booked</div>
          <div style={{ fontSize: 9, color: C.blue, fontFamily: bodyFont }}>Rs. 142,000</div>
        </div>
      </div>
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[280px] xl:w-[320px]">
      <div className="rounded-[40px] overflow-hidden" style={{ border: "8px solid #0A1A4F", boxShadow: "0 40px 80px rgba(10,26,79,0.35)" }}>
        {/* Status bar */}
        <div className="px-4 pt-3 pb-1 flex items-center justify-between" style={{ background: "#050D20" }}>
          <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 10 }}>9:41</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map(i => <div key={i} className="h-2 rounded-sm" style={{ width: i * 3, background: "rgba(255,255,255,0.6)" }} />)}
          </div>
        </div>
        {/* App content */}
        <div style={{ background: "#0D1B3E", padding: "12px 14px 18px" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, fontFamily: bodyFont, marginBottom: 8 }}>OWNER REPORT · Today</p>
          {[
            { label: "Total Sales", val: "Rs. 1,245,000", up: true },
            { label: "Collections", val: "Rs. 320,500", up: true },
            { label: "Expenses", val: "Rs. 42,300", up: false },
            { label: "Stock Value", val: "Rs. 8.4M", up: true },
          ].map((r, i) => (
            <div key={i} className="flex items-center justify-between py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <span style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, fontFamily: bodyFont }}>{r.label}</span>
              <span className="font-semibold" style={{ color: r.up ? "#10B981" : "#F87171", fontSize: 12, fontFamily: headingFont }}>{r.val}</span>
            </div>
          ))}
          <div className="mt-3 rounded-xl p-3" style={{ background: "rgba(59,108,246,0.15)", border: "1px solid rgba(59,108,246,0.25)" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 9, fontFamily: bodyFont }}>TOP PERFORMER</p>
            <p style={{ color: "white", fontSize: 12, fontFamily: headingFont, fontWeight: 600 }}>Usman Raza</p>
            <p style={{ color: C.bright, fontSize: 10, fontFamily: bodyFont }}>Rs. 142,000 · 4 orders</p>
          </div>
        </div>
      </div>
      {/* Floating pulse */}
      <div className="absolute -right-4 sm:-right-6 top-1/3 rounded-xl p-2.5 sm:p-3" style={{ background: "white", border: `1px solid ${C.cardBorder}`, boxShadow: "0 8px 24px rgba(0,0,0,0.1)", minWidth: 120 }}>
        <p style={{ color: C.slate, fontSize: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.3px" }}>Net Profit</p>
        <p style={{ color: C.green, fontSize: 17, fontWeight: 700, fontFamily: headingFont }}>↑ 18.4%</p>
        <p style={{ color: C.slate, fontSize: 8 }}>vs last month</p>
      </div>
    </div>
  );
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <details key={i} className="rounded-2xl overflow-hidden group" style={{ border: `1px solid ${C.cardBorder}`, background: "white" }} open={i === 0}>
          <summary className="w-full flex items-center justify-between p-5 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden" style={{ fontFamily: headingFont }}>
            <span className="font-semibold pr-4" style={{ color: C.nearBlack, fontSize: 15 }}>{item.q}</span>
            <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 bg-[#EFF4FF] group-open:bg-[#1E3FAE] group-open:rotate-180" aria-hidden>
              <ChevronDown size={14} className="text-[#1E3FAE] group-open:text-white" />
            </div>
          </summary>
          <div className="px-5 pb-5">
            <p style={{ color: C.slate, lineHeight: 1.7, fontSize: 14, fontFamily: bodyFont }}>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function CTABanner() {
  return (
    <section className="py-20 px-6" style={{ background: grad }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", fontFamily: bodyFont }}>
          <Zap size={11} aria-hidden />
          Free Demo · No Commitment
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: headingFont, letterSpacing: "-0.5px" }}>See SalesVince in Action</h2>
        <p className="text-base md:text-lg mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}>
          Book a free demo and see exactly how SalesVince can work for your business — with your own data, in Urdu or English.
        </p>
        <div className="flex flex-row gap-2 sm:gap-3 justify-center">
          <PrimaryBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !gap-1 !text-xs sm:!px-8 sm:!py-4 sm:!gap-2 sm:!text-base">
            Book Free Demo <ArrowRight size={16} className="shrink-0" aria-hidden />
          </PrimaryBtn>
          <WABtn className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !py-2.5 !gap-1 !text-xs sm:!px-6 sm:!py-3 sm:!gap-2 sm:!text-sm">WhatsApp Us Now</WABtn>
        </div>
      </div>
    </section>
  );
}

export function FloatingWA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <span className="px-3 py-2 rounded-xl text-sm font-semibold text-white shadow-lg opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: C.navy, fontFamily: bodyFont, whiteSpace: "nowrap" }}>
        Chat with us
      </span>
      <span className="relative w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-200 group-hover:scale-105" style={{ background: C.wa, boxShadow: `0 6px 24px rgba(37,211,102,0.4)` }}>
        <MessageCircle size={26} aria-hidden />
        <span className="absolute inset-0 rounded-full animate-ping opacity-20 motion-reduce:animate-none" style={{ background: C.wa }} aria-hidden />
      </span>
    </a>
  );
}

export function SmartChip({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  const panelId = "smart-chip-panel";
  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
        style={{ background: "#FEF3C7", border: "1px solid #FDE68A", color: "#D97706", fontFamily: bodyFont }}
      >
        <Zap size={11} aria-hidden />
        Smart in this module
        <ChevronDown size={11} aria-hidden style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
      </button>
      {open && (
        <div id={panelId} className="mt-2 p-4 rounded-2xl space-y-2.5" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm" style={{ color: "#92400E", fontFamily: bodyFont }}>
              <Zap size={11} color="#D97706" aria-hidden style={{ flexShrink: 0, marginTop: 2 }} />
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function SFrame({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`, boxShadow: dark ? "0 30px 80px rgba(0,0,0,0.4)" : "0 20px 60px rgba(0,0,0,0.1)" }}>
      <div className="h-8 px-3 flex items-center gap-1.5" style={{ background: dark ? "#06101E" : "#F1F5F9", borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)"}` }}>
        {["#FF5F57","#FFBD2E","#28CA42"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
        <div className="flex-1 mx-2 rounded px-2 py-0.5 text-[8px]" style={{ background: dark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.06)", color: dark ? "rgba(255,255,255,0.3)" : "#94A3B8" }}>
          app.salesvince.com
        </div>
      </div>
      {children}
    </div>
  );
}

export function MockTH({ cols }: { cols: string[] }) {
  return (
    <div className="flex" style={{ background: "#F8FAFC", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
      {cols.map((c, i) => (
        <div key={i} className="flex-1 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide" style={{ color: "#64748B", fontFamily: bodyFont }}>{c}</div>
      ))}
    </div>
  );
}

export function MockTHDark({ cols }: { cols: string[] }) {
  return (
    <div className="flex" style={{ background: "rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
      {cols.map((c, i) => (
        <div key={i} className="flex-1 px-3 py-2 text-[9px] font-semibold uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.4)", fontFamily: bodyFont }}>{c}</div>
      ))}
    </div>
  );
}

export function MockRow({ cols, accent }: { cols: Array<{ v: string; color?: string; bold?: boolean; bg?: string }>; accent?: boolean }) {
  return (
    <div className="flex" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)", background: accent ? "#FFFBEB" : "transparent" }}>
      {cols.map((c, i) => (
        <div key={i} className="flex-1 px-3 py-2 text-[10px] truncate" style={{ color: c.color ?? (c.bold ? C.nearBlack : C.slate), fontWeight: c.bold ? 600 : 400, fontFamily: bodyFont, background: c.bg ?? "transparent" }}>{c.v}</div>
      ))}
    </div>
  );
}

export function MockRowDark({ cols }: { cols: Array<{ v: string; color?: string; bold?: boolean }> }) {
  return (
    <div className="flex" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      {cols.map((c, i) => (
        <div key={i} className="flex-1 px-3 py-2 text-[10px] truncate" style={{ color: c.color ?? "rgba(255,255,255,0.6)", fontWeight: c.bold ? 600 : 400, fontFamily: bodyFont }}>{c.v}</div>
      ))}
    </div>
  );
}

export function LightMod({ n, eyebrow, headline, subhead, body, bullets, imageRight = true, bg = "#fff", screenshot }: {
  n?: number; eyebrow?: string; headline: string; subhead?: string; body: string;
  bullets: string[];
  imageRight?: boolean; bg?: string; screenshot: ReactNode;
}) {
  const label = eyebrow ?? (n != null ? `Module ${String(n).padStart(2, "0")}` : null);
  return (
    <section className="py-20 px-6" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto">
        <div className={`erp-lightmod ${imageRight ? "erp-img-right" : "erp-img-left"}`}>
          <div className={`order-1 min-w-0 ${imageRight ? "xl:order-2" : "xl:order-1"}`}>{screenshot}</div>
          <div className={`order-2 min-w-0 ${imageRight ? "xl:order-1" : "xl:order-2"}`}>
            {label && (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "#EFF4FF", color: C.blue, fontFamily: bodyFont }}>
                {label}
              </div>
            )}
            <h2 className="text-2xl md:text-[28px] font-bold mb-2 leading-tight" style={{ color: C.blue, fontFamily: headingFont, letterSpacing: "-0.3px" }}>{headline}</h2>
            {subhead && <p className="text-base font-semibold mb-3" style={{ color: C.nearBlack, fontFamily: bodyFont }}>{subhead}</p>}
            <p className="text-base leading-relaxed mb-4" style={{ color: C.slate, fontFamily: bodyFont }}>{body}</p>
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm" style={{ color: C.nearBlack, fontFamily: bodyFont }}>
                  <Check size={14} color={C.green} style={{ flexShrink: 0, marginTop: 3 }} aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Product screenshot from /public/images/erp */
export function ErpShot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full max-w-md xl:max-w-none mx-auto flex items-center justify-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/images/erp/${src}`}
        alt={alt}
        className="w-full h-auto object-contain max-h-[420px] xl:max-h-none"
        style={{ filter: "drop-shadow(0 28px 50px rgba(10,26,79,0.18))" }}
        loading="lazy"
      />
    </div>
  );
}

export function DarkMod({ n, headline, subhead, body, bullets, smart, btnLabel = "See it in action", screenshot }: {
  n: number; headline: string; subhead: string; body: string;
  bullets: string[]; smart: string[]; btnLabel?: string;
  screenshot: ReactNode;
}) {
  return (
    <section className="py-20 px-6" style={{ background: grad }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          <div className="order-1 xl:order-2">{screenshot}</div>
          <div className="order-2 xl:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)", fontFamily: bodyFont }}>
              Module {String(n).padStart(2, "0")}
            </div>
            <h2 className="text-2xl md:text-[28px] font-bold mb-2 leading-tight text-white" style={{ fontFamily: headingFont, letterSpacing: "-0.3px" }}>{headline}</h2>
            <p className="text-base font-semibold mb-3" style={{ color: "rgba(255,255,255,0.65)", fontFamily: bodyFont }}>{subhead}</p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)", fontFamily: bodyFont }}>{body}</p>
            <ul className="space-y-2">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-white/80" style={{ fontFamily: bodyFont }}>
                  <Check size={14} color="#34D399" style={{ flexShrink: 0, marginTop: 3 }} aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <SmartChip items={smart} />
            <div className="mt-5">
              <SecBtn dark href={PAGE_PATHS.demo}>{btnLabel} <ArrowRight size={14} aria-hidden /></SecBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AiShot() {
  return (
    <SFrame dark>
      <div className="flex" style={{ background: "#0D1B3E", minHeight: 300 }}>
        <div className="flex-1 p-4" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 8, fontFamily: bodyFont, marginBottom: 8 }}>GROSS MARGIN — JUL 2026</p>
          <MockTHDark cols={["Product", "Revenue", "Cost", "Margin"]} />
          {[
            [{ v: "Brand X 1L", bold: true, color: "rgba(255,255,255,0.85)" }, { v: "Rs. 840,000" }, { v: "Rs. 714,000" }, { v: "15.0%", color: "#F87171" }],
            [{ v: "Brand Y 500ml", bold: true, color: "rgba(255,255,255,0.85)" }, { v: "Rs. 620,000" }, { v: "Rs. 490,000" }, { v: "21.0%", color: "#34D399" }],
            [{ v: "Brand Z Sachet", bold: true, color: "rgba(255,255,255,0.85)" }, { v: "Rs. 310,000" }, { v: "Rs. 248,000" }, { v: "20.0%", color: "#34D399" }],
          ].map((r, i) => <MockRowDark key={i} cols={r} />)}
          <div className="mt-3 rounded-lg p-2.5" style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.2)" }}>
            <p style={{ color: "#F87171", fontSize: 9, fontFamily: bodyFont }}>↓ Brand X margin 4.2% below Jun average</p>
          </div>
        </div>
        <div className="w-52 flex flex-col">
          <div className="px-3 py-2.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
            <p style={{ color: C.bright, fontSize: 9, fontWeight: 600, fontFamily: headingFont }}>AI Agent</p>
          </div>
          <div className="flex-1 p-3 space-y-2.5 overflow-hidden" style={{ background: "rgba(0,0,0,0.15)" }}>
            <div className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.07)" }}>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 9, fontFamily: bodyFont }}>why did margin drop in July</p>
            </div>
            <div className="rounded-lg p-2.5" style={{ background: "rgba(59,108,246,0.2)", border: "1px solid rgba(59,108,246,0.3)" }}>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 9, fontFamily: bodyFont, lineHeight: 1.5 }}>Brand X purchase rate rose Rs. 12/unit from Ali Traders on 3 Jul, pushing COGS from 79% to 85%.</p>
              <div className="flex gap-1.5 mt-2 flex-wrap">
                <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: "rgba(255,255,255,0.1)", color: C.bright }}>3 vouchers</span>
                <span className="px-1.5 py-0.5 rounded text-[8px]" style={{ background: "rgba(255,255,255,0.1)", color: C.bright }}>Purchase register</span>
              </div>
            </div>
          </div>
          <div className="p-2.5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
            <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style={{ background: "rgba(255,255,255,0.06)" }}>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 9, fontFamily: bodyFont, flex: 1 }}>Ask anything…</p>
              <Zap size={10} color={C.bright} />
            </div>
          </div>
        </div>
      </div>
    </SFrame>
  );
}

export function DashShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Owner Dashboard</p>
              <p style={{ color: C.slate, fontSize: 9, fontFamily: bodyFont }}>Al-Madina Distributors · Karachi · Mon 17 Jun 2026</p>
            </div>
            <div className="flex gap-1 text-[9px]" style={{ fontFamily: bodyFont }}>
              {["Today","Month","Year"].map((t, i) => <span key={t} className="px-2 py-0.5 rounded" style={{ background: i === 0 ? C.blue : C.lightGray, color: i === 0 ? "white" : C.slate }}>{t}</span>)}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[{ l: "Sales", v: "Rs. 1,245,000", sub: "↑ 12% vs yesterday" }, { l: "Margin", v: "18.4%", sub: "↓ 1.2% vs last week" }, { l: "Overdue", v: "Rs. 880,000", sub: "6 parties" }].map((m, i) => (
              <div key={i} className="rounded-xl p-2.5" style={{ background: C.lightGray }}>
                <p style={{ color: C.slate, fontSize: 8, fontFamily: bodyFont }}>{m.l}</p>
                <p className="font-bold" style={{ color: C.nearBlack, fontSize: 13, fontFamily: headingFont }}>{m.v}</p>
                <p style={{ color: C.slate, fontSize: 8, fontFamily: bodyFont }}>{m.sub}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-3" style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
            <p style={{ color: "#92400E", fontSize: 9, fontFamily: bodyFont, fontWeight: 600, marginBottom: 4 }}>EXCEPTION STRIP — ranked by rupee impact</p>
            {[["Overdue > 60 days","Rs. 620,000","#DC2626"],["Stock expiry 14 days","Rs. 280,000","#D97706"],["Cheques due today","Rs. 150,000","#D97706"]].map(([l, v, c], i) => (
              <div key={i} className="flex items-center justify-between py-1" style={{ borderBottom: i < 2 ? "1px solid rgba(217,119,6,0.15)" : "none" }}>
                <div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{ background: c as string }} /><p style={{ color: "#92400E", fontSize: 9, fontFamily: bodyFont }}>{l}</p></div>
                <p className="font-semibold" style={{ color: c as string, fontSize: 9, fontFamily: headingFont }}>{v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="px-4 py-3">
          <p style={{ color: C.blue, fontSize: 9, fontFamily: bodyFont }}>💡 Tap any number to see the vouchers behind it</p>
        </div>
      </div>
    </SFrame>
  );
}

export function MobileShot() {
  const phones = [
    { label: "Dashboard", raised: false, content: (
      <div style={{ padding: "8px 10px 14px" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 7, fontFamily: bodyFont, marginBottom: 5 }}>TODAY · Al-Madina</p>
        {[["Sales","Rs. 1,245,000",C.bright],["Margin","18.4%","#10B981"],["Overdue","Rs. 880K","#F87171"]].map(([l,v,c],i) => (
          <div key={i} className="flex justify-between py-1.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 8, fontFamily: bodyFont }}>{l}</span>
            <span style={{ color: c as string, fontSize: 8, fontFamily: headingFont, fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
    )},
    { label: "Photo Order", raised: true, content: (
      <div style={{ padding: "8px 10px 14px" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 7, fontFamily: bodyFont, marginBottom: 5 }}>SLIP SCANNED</p>
        <div className="rounded-lg mb-2.5 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.07)", height: 40 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 7 }}>📷 Handwritten slip</p>
        </div>
        {[["Brand X 1L","24 pcs"],["Brand Y 500ml","12 pcs"]].map(([item,qty],i) => (
          <div key={i} className="flex justify-between py-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 8, fontFamily: bodyFont }}>{item}</span>
            <span style={{ color: C.bright, fontSize: 8 }}>{qty}</span>
          </div>
        ))}
        <button className="w-full mt-2.5 py-1 rounded-lg text-[8px] font-semibold text-white" style={{ background: gradBtn }}>Confirm Order</button>
      </div>
    )},
    { label: "Voice Order", raised: false, content: (
      <div style={{ padding: "8px 10px 14px" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 7, fontFamily: bodyFont, marginBottom: 5 }}>VOICE — listening…</p>
        <div className="flex justify-center mb-2.5"><div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(59,108,246,0.25)", border: `2px solid ${C.bright}` }}><MessageCircle size={14} color={C.bright} /></div></div>
        <div className="rounded-lg p-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 8, fontFamily: bodyFont }}>Bismillah Traders — 2 dozen Brand X aur 1 carton Brand Y</p>
        </div>
        <p style={{ color: "#34D399", fontSize: 7, fontFamily: bodyFont, marginTop: 5 }}>✓ 2 lines recognised</p>
      </div>
    )},
  ];
  return (
    <div className="flex items-end justify-center gap-3">
      {phones.map((ph, i) => (
        <div key={i} className={`rounded-[26px] overflow-hidden flex-shrink-0 ${ph.raised ? "scale-110 shadow-2xl" : "opacity-75"}`} style={{ width: 108, border: "5px solid #0A1A4F", background: "#050D20" }}>
          <div className="h-3.5 flex items-center justify-center" style={{ background: "#06101E" }}><div className="w-7 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} /></div>
          <div style={{ background: "#0D1B3E" }}>{ph.content}</div>
          <div className="py-1 text-center" style={{ background: "#06101E" }}><p style={{ color: "rgba(255,255,255,0.3)", fontSize: 6, fontFamily: bodyFont }}>{ph.label}</p></div>
        </div>
      ))}
    </div>
  );
}

export function WaShot() {
  return (
    <div className="flex justify-center w-full">
      <div className="rounded-[36px] overflow-hidden w-full max-w-[320px]" style={{ border: "7px solid #0A1A4F", boxShadow: "0 30px 70px rgba(0,0,0,0.2)" }}>
        <div className="px-4 pt-3 pb-2 flex items-center gap-2.5" style={{ background: "#075E54" }}>
          <div className="w-8 h-8 rounded-full" style={{ background: "#128C7E" }} />
          <div>
            <p style={{ color: "white", fontSize: 13, fontWeight: 600, fontFamily: headingFont }}>SalesVince</p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10 }}>Business updates</p>
          </div>
        </div>
        <div className="p-3.5 space-y-3" style={{ background: "#ECE5DD", minHeight: 340 }}>
          {[
            { msg: "📄 Invoice #INV-2847 sent to Bismillah Traders — Rs. 45,200. PDF attached.", time: "10:14 AM", action: false },
            { msg: "✅ Payment Rs. 28,000 received from Al-Noor Store against INV-2801.", time: "11:02 AM", action: false },
            { msg: "🔔 PO #PO-419 awaiting approval — Rs. 320,000 from Star Enterprises.", time: "11:45 AM", action: true },
          ].map((m, i) => (
            <div key={i} className="rounded-xl p-3" style={{ background: "white", maxWidth: "92%", boxShadow: "0 1px 2px rgba(0,0,0,0.08)" }}>
              <p style={{ color: "#111827", fontSize: 12, fontFamily: bodyFont, lineHeight: 1.45 }}>{m.msg}</p>
              {m.action && (
                <div className="flex gap-2 mt-2">
                  <button type="button" className="px-3 py-1 rounded text-[11px] font-semibold text-white" style={{ background: "#16A34A" }}>Approve</button>
                  <button type="button" className="px-3 py-1 rounded text-[11px] font-semibold" style={{ background: "#FEE2E2", color: "#DC2626" }}>Reject</button>
                </div>
              )}
              <p className="text-right" style={{ color: "#9CA3AF", fontSize: 10, marginTop: 4 }}>{m.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ReportShot() {
  return (
    <SFrame dark>
      <div className="p-4" style={{ background: "#0D1B3E" }}>
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="font-bold text-white text-xs" style={{ fontFamily: headingFont }}>Profit Leakage — Jun 2026</p>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 8, fontFamily: bodyFont }}>Total leakage vs net profit</p>
          </div>
          <div className="text-right"><p style={{ color: "#F87171", fontSize: 12, fontFamily: headingFont, fontWeight: 700 }}>Rs. 1,284,000</p><p style={{ color: "rgba(255,255,255,0.35)", fontSize: 8 }}>8.7% of revenue</p></div>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
          <MockTHDark cols={["Leakage Source", "Count", "Amount", "% Rev"]} />
          {[
            [{ v: "Excess discounts", bold: true, color: "rgba(255,255,255,0.8)" }, { v: "142" }, { v: "Rs. 520,000", color: "#F87171" }, { v: "3.5%" }],
            [{ v: "Price variance", bold: true, color: "rgba(255,255,255,0.8)" }, { v: "38" }, { v: "Rs. 310,000", color: "#FB923C" }, { v: "2.1%" }],
            [{ v: "Stock wastage", bold: true, color: "rgba(255,255,255,0.8)" }, { v: "24" }, { v: "Rs. 280,000", color: "#FBBF24" }, { v: "1.9%" }],
            [{ v: "Returns — quality", bold: true, color: "rgba(255,255,255,0.8)" }, { v: "17" }, { v: "Rs. 124,000", color: "#FDE68A" }, { v: "0.8%" }],
            [{ v: "Short shipments", bold: true, color: "rgba(255,255,255,0.8)" }, { v: "29" }, { v: "Rs. 50,000", color: "#34D399" }, { v: "0.3%" }],
          ].map((r, i) => <MockRowDark key={i} cols={r} />)}
        </div>
      </div>
    </SFrame>
  );
}

export function PosShot() {
  return (
    <SFrame dark>
      <div className="flex" style={{ background: "#0D1B3E", minHeight: 260 }}>
        <div className="flex-1 p-4" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 8, fontFamily: bodyFont, marginBottom: 6 }}>BILLING — Noor General Store</p>
          <div className="space-y-1.5 mb-3">
            {[["Brand X 1L × 24","Rs. 3,600"],["Brand Y × 12","Rs. 1,440"],["Brand Z × 48","Rs. 2,400"]].map(([item,amt],i) => (
              <div key={i} className="flex justify-between text-[9px]" style={{ color: "rgba(255,255,255,0.7)", fontFamily: bodyFont }}>
                <span>{item}</span><span>{amt}</span>
              </div>
            ))}
          </div>
          <div className="rounded-lg p-2.5 mb-3 flex justify-between" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="text-[10px] font-bold text-white" style={{ fontFamily: headingFont }}>Total</span>
            <span className="text-[10px] font-bold text-white" style={{ fontFamily: headingFont }}>Rs. 7,440</span>
          </div>
          <div className="flex gap-1.5">
            {["Cash","Card","Wallet"].map((m, i) => (
              <button key={m} className="flex-1 py-1.5 rounded-lg text-[8px] font-semibold" style={{ background: i === 0 ? gradBtn : "rgba(255,255,255,0.06)", color: i === 0 ? "white" : "rgba(255,255,255,0.45)" }}>{m}</button>
            ))}
          </div>
        </div>
        <div className="w-44 p-4 space-y-3">
          <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 7, fontFamily: bodyFont }}>FBR Invoice</p>
            <p className="font-bold text-white" style={{ fontSize: 10, fontFamily: headingFont }}>#FBR-2026-48821</p>
            <div className="w-14 h-14 rounded-lg mt-2 flex items-center justify-center mx-auto" style={{ background: "white" }}>
              <div className="grid grid-cols-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, k) => <div key={k} className="w-1.5 h-1.5 rounded-[1px]" style={{ background: (k * 7 + 3) % 5 > 2 ? "#000" : "transparent" }} />)}
              </div>
            </div>
            <div className="flex items-center gap-1 mt-2"><div className="w-2 h-2 rounded-full" style={{ background: "#34D399" }} /><p style={{ color: "#34D399", fontSize: 7, fontFamily: bodyFont }}>Transmitted to FBR</p></div>
          </div>
          <div className="rounded-lg p-2" style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.2)" }}>
            <p style={{ color: "#FBBF24", fontSize: 8, fontFamily: bodyFont }}>⚡ Offline queue: 0 pending</p>
          </div>
        </div>
      </div>
    </SFrame>
  );
}

export function SalesShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="p-3.5" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <div className="flex items-center justify-between mb-3">
            <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>New Sales Invoice</p>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 rounded text-[9px]" style={{ background: "#DCFCE7", color: C.green }}>Margin: 18.4%</span>
              <span className="px-2 py-0.5 rounded text-[9px]" style={{ background: "#FEF3C7", color: "#D97706" }}>Credit 78% used</span>
            </div>
          </div>
          <MockTH cols={["Item","Qty","Rate","Amount","Margin"]} />
          {[
            [{ v: "Brand X 1L", bold: true, color: C.nearBlack }, { v: "24" }, { v: "Rs. 150" }, { v: "Rs. 3,600" }, { v: "14.2%", color: "#D97706" }],
            [{ v: "Brand Y 500ml", bold: true, color: C.nearBlack }, { v: "12" }, { v: "Rs. 120" }, { v: "Rs. 1,440" }, { v: "22.5%", color: C.green }],
            [{ v: "Brand Z Sachet", bold: true, color: C.nearBlack }, { v: "48" }, { v: "Rs. 50" }, { v: "Rs. 2,400" }, { v: "20.0%", color: C.green }],
          ].map((r, i) => <MockRow key={i} cols={r} />)}
        </div>
        <div className="px-4 py-3 flex items-center gap-1 flex-wrap">
          {["Quotation","→","Order","→","Delivery","→","Invoice ●","→","Receipt"].map((s, i) => (
            <span key={i} className="text-[9px] font-semibold" style={{ color: s === "Invoice ●" ? C.blue : C.slate, fontFamily: bodyFont }}>{s}</span>
          ))}
        </div>
      </div>
    </SFrame>
  );
}

export function InventoryShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Expiry Forecast — Value at Risk</p>
          <p className="font-bold" style={{ color: "#DC2626", fontSize: 13, fontFamily: headingFont }}>Rs. 840,000</p>
        </div>
        <MockTH cols={["Item","Days Left","Qty","Unsold","Value at Risk"]} />
        {[
          [{ v: "Pharma Syrup B", bold: true, color: C.nearBlack }, { v: "8 days", color: "#DC2626", bold: true }, { v: "240 pcs" }, { v: "180 pcs" }, { v: "Rs. 54,000", color: "#DC2626", bold: true }],
          [{ v: "ORS Sachets", bold: true, color: C.nearBlack }, { v: "14 days", color: "#DC2626", bold: true }, { v: "1,200" }, { v: "600" }, { v: "Rs. 30,000", color: "#DC2626", bold: true }],
          [{ v: "Antiseptic 500ml", bold: true, color: C.nearBlack }, { v: "22 days", color: "#D97706" }, { v: "480" }, { v: "200" }, { v: "Rs. 28,000", color: "#D97706", bold: true }],
          [{ v: "Paracetamol 250s", bold: true, color: C.nearBlack }, { v: "45 days", color: C.green }, { v: "720" }, { v: "40" }, { v: "Rs. 4,200", color: C.green }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
      </div>
    </SFrame>
  );
}

export function PurchaseShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>3-Way Match — Brand X 1L</p>
          <p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>PO #482 · GRN-318 · Bill from Ali Traders</p>
        </div>
        <div className="p-4">
          <MockTH cols={["","Purchase Order","GRN Receipt","Vendor Bill"]} />
          {[
            [{ v: "Quantity", color: C.slate }, { v: "500 units" }, { v: "480 units" }, { v: "500 units" }],
            [{ v: "Rate / unit", color: C.slate }, { v: "Rs. 138" }, { v: "—" }, { v: "Rs. 150 ⚠", color: "#D97706", bold: true, bg: "#FFFBEB" }],
            [{ v: "Total value", color: C.slate }, { v: "Rs. 69,000" }, { v: "Rs. 66,240" }, { v: "Rs. 75,000 ⚠", color: "#D97706", bold: true, bg: "#FFFBEB" }],
          ].map((r, i) => <MockRow key={i} cols={r} />)}
          <div className="mt-3 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ background: "#FEF3C7", border: "1px solid #FDE68A" }}>
            <AlertCircle size={12} color="#D97706" />
            <p style={{ color: "#92400E", fontSize: 10, fontFamily: bodyFont }}>Rate variance Rs. 12/unit — approval required before payment</p>
          </div>
        </div>
      </div>
    </SFrame>
  );
}

export function ImportShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Landed Cost — Container #KHI-2026-018</p>
          <p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>LC #LC-2026-041 · Bank: HBL · 3 items</p>
        </div>
        <MockTH cols={["Item","Invoice","Freight","Duty","Clearing","Landed/unit"]} />
        {[
          [{ v: "Brand X 1L (500u)", bold: true, color: C.nearBlack }, { v: "Rs. 69,000" }, { v: "Rs. 3,450" }, { v: "Rs. 8,280" }, { v: "Rs. 2,760" }, { v: "Rs. 167", bold: true, color: C.blue }],
          [{ v: "Brand Y 500ml (300u)", bold: true, color: C.nearBlack }, { v: "Rs. 36,000" }, { v: "Rs. 1,800" }, { v: "Rs. 4,320" }, { v: "Rs. 1,440" }, { v: "Rs. 145", bold: true, color: C.blue }],
          [{ v: "Brand Z Sachet (2000u)", bold: true, color: C.nearBlack }, { v: "Rs. 20,000" }, { v: "Rs. 1,000" }, { v: "Rs. 2,400" }, { v: "Rs. 800" }, { v: "Rs. 12", bold: true, color: C.blue }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
        <div className="px-4 py-2.5 flex justify-between items-center" style={{ borderTop: `2px solid ${C.cardBorder}`, background: C.lightGray }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Total landed</p>
          <p className="font-bold" style={{ color: C.blue, fontSize: 14, fontFamily: headingFont }}>Rs. 151,250</p>
        </div>
      </div>
    </SFrame>
  );
}

export function ProductionShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Job Cost Sheet — WO #JC-2026-112</p>
          <p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>Brand X 1L · Batch #B-0614 · 1,000 units</p>
        </div>
        <MockTH cols={["Cost Element","Standard","Actual","Variance"]} />
        {[
          [{ v: "Raw material", bold: true, color: C.nearBlack }, { v: "Rs. 85,000" }, { v: "Rs. 88,200" }, { v: "+Rs. 3,200", color: "#DC2626" }],
          [{ v: "Labour", bold: true, color: C.nearBlack }, { v: "Rs. 12,000" }, { v: "Rs. 11,400" }, { v: "-Rs. 600", color: C.green }],
          [{ v: "Overhead", bold: true, color: C.nearBlack }, { v: "Rs. 8,000" }, { v: "Rs. 8,350" }, { v: "+Rs. 350", color: "#DC2626" }],
          [{ v: "Wastage", bold: true, color: C.nearBlack }, { v: "Rs. 2,500" }, { v: "Rs. 4,100" }, { v: "+Rs. 1,600 ⚠", color: "#D97706", bold: true }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
        <div className="px-4 py-2.5 flex justify-between" style={{ borderTop: `2px solid ${C.cardBorder}`, background: C.lightGray }}>
          <div><p style={{ color: C.slate, fontSize: 9 }}>Cost / unit</p><p className="font-bold" style={{ color: C.nearBlack, fontSize: 13, fontFamily: headingFont }}>Rs. 112.05</p></div>
          <div className="text-right"><p style={{ color: C.slate, fontSize: 9 }}>Margin at sell price</p><p className="font-bold" style={{ color: C.green, fontSize: 13, fontFamily: headingFont }}>Rs. 138 · 18.8%</p></div>
        </div>
      </div>
    </SFrame>
  );
}

export function FinanceShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Profit & Loss — Jun 2026</p>
          <div className="flex gap-2"><button style={{ color: C.blue, fontSize: 9, fontFamily: bodyFont }}>Export Excel</button><button style={{ color: C.blue, fontSize: 9, fontFamily: bodyFont }}>PDF</button></div>
        </div>
        <MockTH cols={["Account","This Month","Last Year","Variance"]} />
        {[
          [{ v: "Revenue", bold: true, color: C.nearBlack }, { v: "Rs. 14,720,000", bold: true }, { v: "Rs. 12,300,000" }, { v: "+19.7%", color: C.green }],
          [{ v: "Cost of Sales" }, { v: "Rs. 12,005,000" }, { v: "Rs. 10,250,000" }, { v: "+17.1%" }],
          [{ v: "Gross Profit", bold: true, color: C.nearBlack }, { v: "Rs. 2,715,000", bold: true }, { v: "Rs. 2,050,000" }, { v: "+32.4%", color: C.green }],
          [{ v: "Operating Expenses" }, { v: "Rs. 840,000" }, { v: "Rs. 720,000" }, { v: "+16.7%" }],
          [{ v: "Net Profit", bold: true, color: C.green }, { v: "Rs. 1,875,000", bold: true, color: C.green }, { v: "Rs. 1,330,000" }, { v: "+40.9%", color: C.green, bold: true }],
        ].map((r, i) => <MockRow key={i} cols={r} accent={i === 4} />)}
      </div>
    </SFrame>
  );
}

export function PartyShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="p-4" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <div className="flex items-start justify-between mb-3">
            <div><p className="font-bold" style={{ color: C.nearBlack, fontSize: 15, fontFamily: headingFont }}>Bismillah Traders</p><p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>Saddar, Karachi · NTN: 4821092-3</p></div>
            <div className="text-right"><p style={{ color: C.slate, fontSize: 9 }}>Outstanding</p><p className="font-bold" style={{ color: "#DC2626", fontSize: 14, fontFamily: headingFont }}>Rs. 142,000</p></div>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <p style={{ color: C.slate, fontSize: 9, flexShrink: 0 }}>Credit Rs. 200,000</p>
            <div className="flex-1 h-1.5 rounded-full" style={{ background: C.lightGray }}><div className="h-1.5 rounded-full" style={{ width: "71%", background: "#D97706" }} /></div>
            <p style={{ color: "#D97706", fontSize: 9, flexShrink: 0 }}>71% used</p>
          </div>
          <p style={{ color: C.slate, fontSize: 9, fontFamily: bodyFont }}>Avg. payment: 18 days · Last order: 3 days ago</p>
        </div>
        <div className="flex" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          {["Transactions","Ledger","Documents","Follow-ups"].map((t, i) => (
            <button key={t} className="flex-1 py-2 text-[9px] font-semibold" style={{ color: i === 0 ? C.blue : C.slate, borderBottom: i === 0 ? `2px solid ${C.blue}` : "2px solid transparent", fontFamily: bodyFont }}>{t}</button>
          ))}
        </div>
        <MockTH cols={["Date","Invoice","Amount","Status"]} />
        {[
          [{ v: "14 Jun" }, { v: "INV-2847" }, { v: "Rs. 45,200" }, { v: "Paid", color: C.green, bold: true }],
          [{ v: "7 Jun" }, { v: "INV-2831" }, { v: "Rs. 62,000" }, { v: "Overdue", color: "#DC2626", bold: true }],
          [{ v: "1 Jun" }, { v: "INV-2810" }, { v: "Rs. 34,800" }, { v: "Paid", color: C.green, bold: true }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
      </div>
    </SFrame>
  );
}

export function CommissionShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <div><p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Commission — Usman Raza</p><p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>Jun 2026 · Saddar Territory</p></div>
          <div className="text-right"><p style={{ color: C.slate, fontSize: 9 }}>Projected payout</p><p className="font-bold" style={{ color: C.green, fontSize: 14, fontFamily: headingFont }}>Rs. 28,400</p></div>
        </div>
        <div className="p-4 grid grid-cols-3 gap-2 mb-0" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          {[{ l: "Sales 0–500K", r: "1.5%", e: "Rs. 7,500" }, { l: "Sales 500K+", r: "2.5%", e: "Rs. 12,500" }, { l: "Collection bonus", r: "0.5%", e: "Rs. 8,400" }].map((s, i) => (
            <div key={i} className="rounded-lg p-2.5" style={{ background: C.lightGray }}>
              <p style={{ color: C.slate, fontSize: 8 }}>{s.l}</p>
              <p style={{ color: C.blue, fontSize: 9, fontWeight: 600 }}>{s.r}</p>
              <p style={{ color: C.nearBlack, fontSize: 11, fontFamily: headingFont, fontWeight: 700 }}>{s.e}</p>
            </div>
          ))}
        </div>
        <MockTH cols={["Invoice","Amount","Collected","Rate","Earned"]} />
        {[
          [{ v: "INV-2831" }, { v: "Rs. 45,200" }, { v: "✓", color: C.green, bold: true }, { v: "2.5%" }, { v: "Rs. 1,130", bold: true, color: C.green }],
          [{ v: "INV-2847" }, { v: "Rs. 62,000" }, { v: "✓", color: C.green, bold: true }, { v: "2.5%" }, { v: "Rs. 1,550", bold: true, color: C.green }],
          [{ v: "INV-2851" }, { v: "Rs. 38,400" }, { v: "Pending", color: C.slate }, { v: "1.5%" }, { v: "Rs. 576" }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
      </div>
    </SFrame>
  );
}

export function ExpenseShot() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-[26px] overflow-hidden mx-auto" style={{ width: 135, border: "5px solid #0A1A4F", boxShadow: "0 20px 50px rgba(0,0,0,0.18)" }}>
        <div className="h-3.5 flex items-center justify-center" style={{ background: "#06101E" }}><div className="w-7 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} /></div>
        <div style={{ background: "#0D1B3E", padding: "10px 12px 14px" }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 7, fontFamily: bodyFont, marginBottom: 5 }}>EXPENSE CLAIM</p>
          <div className="rounded-lg mb-3 flex flex-col items-center justify-center" style={{ background: "rgba(255,255,255,0.06)", height: 42 }}>
            <Receipt size={14} color="rgba(255,255,255,0.3)" />
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 6.5, fontFamily: bodyFont, marginTop: 2 }}>Receipt scanned ✓</p>
          </div>
          {[["Vendor","Ali Petrol Pump"],["Amount","Rs. 2,400"],["Date","17 Jun 2026"],["Category","Vehicle Fuel"]].map(([l,v],i) => (
            <div key={i} className="flex justify-between py-1" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 7.5, fontFamily: bodyFont }}>{l}</span>
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 7.5, fontFamily: bodyFont }}>{v}</span>
            </div>
          ))}
          <button className="w-full mt-2.5 py-1 rounded-lg text-[8px] font-semibold text-white" style={{ background: gradBtn }}>Submit Claim</button>
        </div>
      </div>
      <SFrame>
        <div style={{ background: "white", padding: 12 }}>
          <p className="font-bold text-xs mb-3" style={{ color: C.nearBlack, fontFamily: headingFont }}>Petty Cash — Karachi</p>
          {[{ l: "Float", v: "Rs. 50,000", w: "100%", c: C.blue }, { l: "Spent", v: "Rs. 31,200", w: "62%", c: "#D97706" }, { l: "Balance", v: "Rs. 18,800", w: "38%", c: C.green }].map(m => (
            <div key={m.l} className="mb-2.5">
              <div className="flex justify-between text-[9px] mb-1" style={{ fontFamily: bodyFont }}><span style={{ color: C.slate }}>{m.l}</span><span style={{ color: m.c, fontWeight: 600 }}>{m.v}</span></div>
              <div className="h-1.5 rounded-full" style={{ background: C.lightGray }}><div className="h-1.5 rounded-full" style={{ width: m.w, background: m.c }} /></div>
            </div>
          ))}
          <button className="w-full mt-2 py-1.5 rounded-lg text-[9px] font-semibold" style={{ background: C.lightGray, color: C.blue }}>Request Replenishment</button>
        </div>
      </SFrame>
    </div>
  );
}

export function BranchesShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Branch Comparison — Jun 2026</p>
        </div>
        <MockTH cols={["Metric","Karachi","Lahore","Faisalabad","All Branches"]} />
        {[
          [{ v: "Sales", bold: true }, { v: "Rs. 8.2M" }, { v: "Rs. 4.1M" }, { v: "Rs. 2.4M" }, { v: "Rs. 14.7M", bold: true, color: C.blue }],
          [{ v: "Margin %", bold: true }, { v: "19.2%" }, { v: "17.8%" }, { v: "16.4%" }, { v: "18.4%", bold: true, color: C.blue }],
          [{ v: "Collection", bold: true }, { v: "Rs. 7.8M" }, { v: "Rs. 3.9M" }, { v: "Rs. 2.1M" }, { v: "Rs. 13.8M", bold: true, color: C.blue }],
          [{ v: "Stock Value", bold: true }, { v: "Rs. 4.8M" }, { v: "Rs. 2.4M" }, { v: "Rs. 1.2M" }, { v: "Rs. 8.4M", bold: true, color: C.blue }],
          [{ v: "Expenses", bold: true }, { v: "Rs. 480K" }, { v: "Rs. 240K" }, { v: "Rs. 120K" }, { v: "Rs. 840K", bold: true, color: C.blue }],
        ].map((r, i) => <MockRow key={i} cols={r} />)}
      </div>
    </SFrame>
  );
}

export function HrShot() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-[26px] overflow-hidden mx-auto" style={{ width: 135, border: "5px solid #0A1A4F", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}>
        <div className="h-3.5 flex items-center justify-center" style={{ background: "#06101E" }}><div className="w-7 h-1 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} /></div>
        <div style={{ background: "#0D1B3E", padding: "10px 12px 14px" }}>
          <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 7, fontFamily: bodyFont, marginBottom: 5 }}>ATTENDANCE</p>
          <div className="rounded-full w-14 h-14 mx-auto mb-2.5 flex items-center justify-center" style={{ border: "2px dashed rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)" }}>
            <Users size={18} color="rgba(255,255,255,0.28)" />
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 8.5, textAlign: "center", fontFamily: bodyFont }}>Usman Raza</p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: 7.5, textAlign: "center", marginBottom: 7 }}>Saddar Office · 9:02 AM</p>
          <button className="w-full py-1 rounded-lg text-[8px] font-semibold text-white" style={{ background: gradBtn }}>Punch In ✓</button>
        </div>
      </div>
      <SFrame>
        <div style={{ background: "white", padding: 12 }}>
          <p className="font-bold text-xs mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>Payroll Run — Jun 2026</p>
          <MockTH cols={["Employee","Gross","Deduct","Net"]} />
          {[
            [{ v: "U. Raza", bold: true, color: C.nearBlack }, { v: "Rs. 55,000" }, { v: "Rs. 4,800" }, { v: "Rs. 50,200", bold: true, color: C.green }],
            [{ v: "A. Shah", bold: true, color: C.nearBlack }, { v: "Rs. 42,000" }, { v: "Rs. 3,600" }, { v: "Rs. 38,400", bold: true, color: C.green }],
            [{ v: "F. Khan", bold: true, color: C.nearBlack }, { v: "Rs. 38,000" }, { v: "Rs. 3,200" }, { v: "Rs. 34,800", bold: true, color: C.green }],
          ].map((r, i) => <MockRow key={i} cols={r} />)}
          <button className="w-full mt-2.5 py-1.5 rounded-lg text-[9px] font-semibold text-white" style={{ background: gradBtn }}>Approve & Lock Run</button>
        </div>
      </SFrame>
    </div>
  );
}

export function AlertsShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="m-4 p-3.5 rounded-2xl" style={{ background: C.lightGray, border: `1px solid ${C.cardBorder}` }}>
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: gradBtn }}><Bell size={14} color="white" /></div>
            <div>
              <p className="font-bold text-xs" style={{ color: C.nearBlack, fontFamily: headingFont }}>PO #PO-419 awaiting approval</p>
              <p style={{ color: C.slate, fontSize: 10, fontFamily: bodyFont }}>Rs. 320,000 · Star Enterprises · 2h ago</p>
              <div className="flex gap-2 mt-2">
                <button className="px-3 py-1 rounded-lg text-[10px] font-semibold text-white" style={{ background: C.green }}>Approve</button>
                <button className="px-3 py-1 rounded-lg text-[10px] font-semibold" style={{ background: "#FEE2E2", color: "#DC2626" }}>Reject</button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <p className="font-bold text-xs mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>Approval Bottleneck</p>
          <MockTH cols={["Approver","Pending","Avg. Hold","Longest"]} />
          {[
            [{ v: "Ahmad Raza (GM)", bold: true, color: C.nearBlack }, { v: "7 docs" }, { v: "4.2 hrs" }, { v: "18 hrs ⚠", color: "#D97706", bold: true }],
            [{ v: "Sara Khan (Accts)", bold: true, color: C.nearBlack }, { v: "3 docs" }, { v: "1.8 hrs" }, { v: "6 hrs" }],
            [{ v: "Tariq Ali (Store)", bold: true, color: C.nearBlack }, { v: "1 doc" }, { v: "0.5 hrs" }, { v: "1 hr" }],
          ].map((r, i) => <MockRow key={i} cols={r} />)}
        </div>
      </div>
    </SFrame>
  );
}

export function RolesShot() {
  return (
    <SFrame>
      <div style={{ background: "white" }}>
        <div className="px-4 py-3" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
          <p className="font-bold text-sm" style={{ color: C.nearBlack, fontFamily: headingFont }}>Role Builder — Sales Executive</p>
        </div>
        <div className="flex" style={{ minHeight: 200 }}>
          <div className="flex-1 p-3" style={{ borderRight: `1px solid ${C.cardBorder}` }}>
            <p style={{ color: C.slate, fontSize: 8, fontFamily: bodyFont, marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.4px" }}>Module Permissions</p>
            {[{ m: "Sales", v: true, c: true, e: true, a: false }, { m: "Inventory", v: true, c: false, e: false, a: false }, { m: "Accounts", v: false, c: false, e: false, a: false }, { m: "Reports", v: true, c: false, e: false, a: false }].map(row => (
              <div key={row.m} className="flex items-center gap-2 py-1.5" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
                <p className="text-[10px] flex-1" style={{ color: C.nearBlack, fontFamily: bodyFont, fontWeight: 500 }}>{row.m}</p>
                {([["V", row.v], ["C", row.c], ["E", row.e], ["A", row.a]] as [string, boolean][]).map(([lbl, on]) => (
                  <div key={lbl} className="w-5 h-5 rounded flex items-center justify-center text-[8px] font-bold" style={{ background: on ? "#DCFCE7" : C.lightGray, color: on ? C.green : C.slate, border: `1px solid ${on ? "#BBF7D0" : C.cardBorder}` }}>{lbl}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="w-36 p-3">
            <p style={{ color: C.slate, fontSize: 8, fontFamily: bodyFont, marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.4px" }}>Column Visibility</p>
            {[{ l: "Item name", on: true }, { l: "Sale price", on: true }, { l: "Cost price", on: false }, { l: "Margin %", on: false }, { l: "Customer bal.", on: true }].map(col => (
              <div key={col.l} className="flex items-center justify-between py-1.5" style={{ borderBottom: `1px solid ${C.cardBorder}` }}>
                <p className="text-[9px]" style={{ color: C.nearBlack, fontFamily: bodyFont }}>{col.l}</p>
                <div className="w-7 h-4 rounded-full flex items-center px-0.5 cursor-pointer" style={{ background: col.on ? C.blue : "#E2E8F0" }}>
                  <div className="w-3 h-3 rounded-full bg-white" style={{ marginLeft: col.on ? "auto" : 0 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SFrame>
  );
}
