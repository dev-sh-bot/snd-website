"use client";


import { useState, type ComponentType } from "react";
import {
  BarChart3,
  DollarSign,
  Users,
  Building2,
  MapPin,
  Smartphone,
  TrendingUp,
  FileText,
  Truck,
  ShoppingCart,
  Zap,
  Target,
  RefreshCw,
  Boxes,
  Calculator,
  BarChart2,
  Banknote,
  Receipt,
  AlertCircle,
  Route,
  PieChart,
  Tag,
  CreditCard
} from "lucide-react";
import {
  Eyebrow,
  H1,
  Sub,
  Section,
  Container,
  CTABanner
} from "@/components/ui";
import {
  C,
  grad,
  gradBtn,
  headingFont,
  bodyFont
} from "@/lib/brand";

export default function FeaturesPage() {
  const tabs = ["Inventory", "Accounting", "Sales", "Distribution", "Reports"];
  const [active, setActive] = useState(0);

  const content: Record<number, { icon: ComponentType<{ size?: number; color?: string }>; title: string; desc: string }[]> = {
    0: [
      { icon: Boxes, title: "Real-Time Stock Levels", desc: "See current stock for every product across all locations at any moment." },
      { icon: AlertCircle, title: "Low Stock Alerts", desc: "Get notified when any product drops below the minimum level you set." },
      { icon: Truck, title: "Goods Received Note (GRN)", desc: "Record incoming stock from suppliers with full purchase order matching." },
      { icon: RefreshCw, title: "Stock Transfers", desc: "Move stock between branches or warehouses with a full transfer trail." },
      { icon: BarChart3, title: "Stock Valuation Reports", desc: "FIFO and average cost valuation with full stock history." },
      { icon: Tag, title: "Batch & Expiry Tracking", desc: "Track batch numbers and expiry dates — essential for pharma and food businesses." },
    ],
    1: [
      { icon: Calculator, title: "General Ledger", desc: "Full double-entry accounting with automatic postings from sales, purchases, and payments." },
      { icon: Receipt, title: "Vouchers & Journals", desc: "Create payment, receipt, journal, and contra vouchers with proper accounts." },
      { icon: Banknote, title: "Party Ledgers", desc: "Full receivable and payable ledger for every customer and supplier." },
      { icon: Building2, title: "Bank Reconciliation", desc: "Match your bank statements with the system records easily." },
      { icon: FileText, title: "Financial Statements", desc: "Profit & loss, balance sheet, and trial balance generated automatically." },
      { icon: CreditCard, title: "Tax Management", desc: "Sales tax, withholding tax, and SRB/FBR compliance built in." },
    ],
    2: [
      { icon: ShoppingCart, title: "Sales Orders", desc: "Create and manage sales orders that convert to invoices and update stock automatically." },
      { icon: Receipt, title: "Professional Invoices", desc: "Print invoices with your company logo, tax details, and PKR formatting." },
      { icon: RefreshCw, title: "Sales Returns", desc: "Handle returns with proper inventory and account updates." },
      { icon: Users, title: "Customer Management", desc: "Full customer database with credit limits, ledger, and contact history." },
      { icon: DollarSign, title: "Discounts & Pricing", desc: "Set customer-specific prices, discount rules, and promotional pricing." },
      { icon: BarChart2, title: "Sales Analytics", desc: "Product-wise, customer-wise, and area-wise sales analysis." },
    ],
    3: [
      { icon: Route, title: "Route Planning", desc: "Create and manage beat routes with shop-level visit scheduling." },
      { icon: Smartphone, title: "Mobile Order Booking", desc: "Salesperson books orders from the field on their phone — syncs instantly." },
      { icon: MapPin, title: "Field Visit Tracking", desc: "See which shops each salesperson visited, when, and what they sold." },
      { icon: DollarSign, title: "Recovery Collection", desc: "Collect and record payments in the field. Real-time balance updates." },
      { icon: Truck, title: "Van Inventory", desc: "Manage loading and unloading of delivery vans with inventory reconciliation." },
      { icon: Target, title: "Target vs Achievement", desc: "Set daily and monthly targets per salesperson and track achievement live." },
    ],
    4: [
      { icon: BarChart3, title: "Daily Sales Dashboard", desc: "One-screen overview of today's sales, collections, and key KPIs." },
      { icon: PieChart, title: "Area-Wise Reports", desc: "Break down performance by route, area, city, or region." },
      { icon: TrendingUp, title: "Trend Analysis", desc: "Monthly and quarterly trends for sales, purchases, and profit." },
      { icon: Users, title: "Salesperson Performance", desc: "Compare salespeople by sales, visits, orders, and recovery." },
      { icon: Smartphone, title: "Mobile Reports", desc: "Owner gets key reports on their phone — anywhere, any time." },
      { icon: FileText, title: "Export to Excel", desc: "Export any report to Excel for further analysis or sharing." },
    ],
  };

  return (
    <div>
      <section className="pt-32 pb-20 px-6" style={{ background: grad }}>
        <Container>
          <div className="text-center">
            <Eyebrow><Zap size={11} aria-hidden /> Features</Eyebrow>
            <H1 light>Powerful Features, Simple to Use</H1>
            <Sub light>Everything your business needs — designed for Pakistani SMEs, not enterprise IT teams.</Sub>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="flex flex-nowrap gap-2 justify-start sm:justify-center mb-10 overflow-x-auto overscroll-x-contain pb-1 -mx-2 px-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Feature categories">
            {tabs.map((tab, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                id={`features-tab-${i}`}
                aria-selected={active === i}
                aria-controls={`features-panel-${i}`}
                onClick={() => setActive(i)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") {
                    e.preventDefault();
                    const next = (i + 1) % tabs.length;
                    setActive(next);
                    document.getElementById(`features-tab-${next}`)?.focus();
                  } else if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    const prev = (i - 1 + tabs.length) % tabs.length;
                    setActive(prev);
                    document.getElementById(`features-tab-${prev}`)?.focus();
                  }
                }}
                className="shrink-0 px-3 py-2 rounded-xl font-semibold text-xs sm:px-5 sm:py-2.5 sm:text-sm transition-all duration-200"
                style={{ background: active === i ? gradBtn : "#EFF4FF", color: active === i ? "white" : C.blue, boxShadow: active === i ? "0 4px 16px rgba(59,108,246,0.3)" : "none", fontFamily: bodyFont }}
              >
                {tab}
              </button>
            ))}
          </div>
          <div
            id={`features-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`features-tab-${active}`}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {content[active].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl" style={{ background: "white", border: `1px solid ${C.cardBorder}` }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "#EFF4FF" }} aria-hidden>
                  <f.icon size={20} color={C.blue} />
                </div>
                <h3 className="font-bold mb-2" style={{ color: C.nearBlack, fontFamily: headingFont }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate, fontFamily: bodyFont }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <CTABanner />
    </div>
  );
}
