"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Package,
  Headphones,
  ShoppingCart,
  Award,
  Zap,
  Factory,
  Store,
  Boxes,
  Calculator,
  BarChart2,
  BarChart3,
  Scissors,
  ShoppingBag,
  Warehouse,
  Truck,
  Users,
} from "lucide-react";
import {
  PrimaryBtn,
  SecBtn,
  WABtn,
  Eyebrow,
  H2,
  LightMod,
  ErpShot,
  WaShot,
} from "@/components/ui";
import {
  C,
  grad,
  gradBtn,
  headingFont,
  bodyFont,
  PAGE_PATHS,
} from "@/lib/brand";
import { submitLead } from "@/lib/lead";

type Mod = {
  title: string;
  subhead: string;
  body: string;
  bullets: string[];
  screenshot: ReactNode;
};

const MODULES: Mod[] = [
  {
    title: "AI Agent",
    subhead: "An assistant that reads your live data, in English or Roman Urdu.",
    body: "Type or speak a question the way you would ask your accountant. The agent answers with a figure, the table it came from, and a link to the source vouchers so the number can be checked. It also watches your data in the background and raises a flag when a margin drops, a discount looks unusual or a purchase rate jumps.",
    bullets: [
      "Plain language questions in English and Roman Urdu",
      "Every answer drills down to the source vouchers",
      "Written explanations, not just numbers",
      "Reads a vendor bill photo and prefills the entry",
      "Works only inside the asking user's own permissions",
    ],
    screenshot: <ErpShot src="ai-agent.png" alt="AI Agent" />,
  },
  {
    title: "Dashboard",
    subhead: "A live command centre that opens the moment you log in.",
    body: "Cash in bank, yesterday's sales, margin, overdue receivables, cheques due today and everything waiting for your approval, on one screen. Every number is clickable, so you go from a figure that worries you to the exact voucher behind it in two taps. Each role gets its own dashboard, so the storekeeper and the owner do not see the same thing.",
    bullets: [
      "Owner cockpit with the day's twelve key numbers",
      "Every tile drills down to the source voucher",
      "Separate dashboards for owner, accounts, sales and stores",
      "Comparison against yesterday, last month and last year",
      "Full screen mode for a wall mounted office display",
    ],
    screenshot: <ErpShot src="dashboard.png" alt="Dashboard" />,
  },
  {
    title: "Mobile App",
    subhead: "Android and iOS, with everything the web has and nothing removed.",
    body: "Approve, invoice, collect, count stock and check reports from the phone. Then the parts only a phone can do: photograph a handwritten order slip and it becomes an order, or speak the order in Roman Urdu while standing in the shop. Field entry keeps working without internet and syncs when the signal returns.",
    bullets: [
      "Full parity with web — create and approve, not just view",
      "Order from a photo of a handwritten slip or a vendor bill",
      "Order by voice in English or Roman Urdu",
      "Barcode scanning with the phone camera",
      "Works offline and syncs when connectivity returns",
    ],
    screenshot: <ErpShot src="mobile-app.png" alt="Mobile App" />,
  },
  {
    title: "WhatsApp Updates",
    subhead: "Invoices, receipts, reminders and approvals delivered on WhatsApp.",
    body: "The invoice reaches the customer the moment it is posted. The receipt confirms the moment money is taken. Payment reminders go out before the due date without anyone remembering to send them. Owners get the morning brief and approval requests in the same chat, and can approve straight from it.",
    bullets: [
      "Invoices, receipts and delivery updates sent automatically",
      "Payment reminders before due and after overdue",
      "Purchase orders and payment advice sent to vendors",
      "Morning brief and exception alerts to management",
      "Approve or reject documents directly from the chat",
    ],
    screenshot: <WaShot />,
  },
  {
    title: "Reporting & Analytics",
    subhead: "Every figure drills to source. Every report exports clean.",
    body: "The standard set is all there: ledgers, statements, aging, registers, stock and payroll. What decides the demo is the other set. Profit leakage ranks every rupee lost to discounts, wastage and price variance. Customer profitability strips out delivery and credit cost. A thirteen week cash forecast builds itself from documents already in the system.",
    bullets: [
      "Over 100 reports across every module",
      "Profit leakage ranked in rupees by source",
      "Customer profitability after cost to serve",
      "Working capital cycle with the value of each day",
      "Scheduled delivery by email and WhatsApp",
    ],
    screenshot: <ErpShot src="reporting.png" alt="Reporting & Analytics" />,
  },
  {
    title: "POS with FBR integration",
    subhead: "A fast counter, fully integrated with the FBR system, that keeps billing when the internet drops.",
    body: "FBR requires Tier-1 retailers to connect their point of sale to its system, so every sale generates a verified invoice with an FBR number and a QR code the customer can check. SalesVince POS handles that transmission automatically, and keeps selling when connectivity fails by queuing invoices and sending them the moment the line returns.",
    bullets: [
      "Real time FBR transmission with invoice number and QR code",
      "Offline billing with an automatic transmission queue",
      "Barcode billing, returns, exchanges and split payments",
      "Cash, card, wallet and bank transfer at the counter",
      "Shift open and close with cash drawer reconciliation",
    ],
    screenshot: <ErpShot src="pos.png" alt="POS with FBR integration" />,
  },
  {
    title: "Sales",
    subhead: "Quotation, order, delivery, invoice and receipt, each one built from the last.",
    body: "Your team never retypes the same order twice. A quotation becomes an order, an order becomes a delivery, a delivery becomes an invoice, and nothing gets lost between the steps. Stock availability and the customer's credit limit are visible while the order is still being taken, so problems get caught before delivery, not after.",
    bullets: [
      "Live stock and credit limit visible during order entry",
      "Margin shown on screen before the invoice is saved",
      "Price lists and schemes applied automatically",
      "Discount ceilings per role with approval beyond them",
      "Sales returns with mandatory reason tracking",
    ],
    screenshot: <ErpShot src="sales.png" alt="Sales" />,
  },
  {
    title: "Smart Inventory",
    subhead: "Batch, expiry, serial tracking and reorder intelligence in one module.",
    body: "Most systems tell you what you have. SalesVince tells you what will expire before you can sell it, what has not moved in six months, and what to reorder based on how fast it actually consumes. Barcode and QR scanning works from the phone camera, so you do not need handheld devices to start.",
    bullets: [
      "Batch, lot and serial tracking with FEFO picking",
      "Barcode and QR scanning from any phone camera",
      "Physical count with variance approval",
      "Dead stock analysis with provision value",
      "Stock reservation against confirmed orders",
    ],
    screenshot: <ErpShot src="inventory.png" alt="Smart Inventory" />,
  },
  {
    title: "Purchase",
    subhead: "Requisition, order, receipt and bill, matched automatically before payment is released.",
    body: "The purchase order says one thing, the gate receipt says another, the vendor bill says a third. SalesVince matches all three and holds the payment until the difference is explained or approved. Approval routes by value, so small purchases move quickly and large ones reach you.",
    bullets: [
      "Three way match with configurable tolerance",
      "Approval routing by value, department and category",
      "Landed cost with freight, duty and clearing allocation",
      "Rate contract enforcement against agreed prices",
      "Vendor scoring on delivery, quality and lead time",
    ],
    screenshot: <ErpShot src="purchase.png" alt="Purchase" />,
  },
  {
    title: "Import & Export",
    subhead: "Letter of credit, shipment, clearing, duty and export documentation in one module.",
    body: "Import costing usually ends up in a spreadsheet nobody else can read. SalesVince tracks the letter of credit from opening to retirement, records the bank margin and forward cover, captures the goods declaration, duty, clearing and freight, and allocates all of it back to the item so the landed cost is real rather than estimated. Export runs the same way in reverse.",
    bullets: [
      "Letter of credit lifecycle with bank margin and expiry alerts",
      "Goods declaration, bill of entry, duty and clearing charges",
      "Landed cost allocated by value, quantity or weight",
      "Shipment tracking from dispatch to warehouse receipt",
      "Export documentation, realisation and rebate tracking",
    ],
    screenshot: <ErpShot src="import-export.png" alt="Import & Export" />,
  },
  {
    title: "Production",
    subhead: "Bill of material, work orders, consumption, wastage and real job costing.",
    body: "Standard cost is a plan. SalesVince records what was actually issued, actually produced and actually wasted on every work order, then shows you the gap. Material, labour, machine time and overhead roll into a job cost sheet you can compare against the price you sold at.",
    bullets: [
      "Multi level bill of material with version control",
      "Standard versus actual consumption on every component",
      "Job cost sheet with material, labour and overhead",
      "Yield, wastage and rework by shift and operator",
      "Work in process valuation that ties to your ledger",
    ],
    screenshot: <ErpShot src="production.png" alt="Production" />,
  },
  {
    title: "Finance",
    subhead: "A full accounting core, with tax compliance built in rather than bolted on.",
    body: "Trial balance, profit and loss, balance sheet and cash flow, all generated from the same postings your team makes during the day. Multi company, multi branch and multi currency out of the box. Period locking and backdated entry control mean the figures you signed off last month are still the figures this month.",
    bullets: [
      "Trial balance, P&L, balance sheet and cash flow",
      "Cost centre and department wise profitability",
      "Budget versus actual with variance tracking",
      "Bank reconciliation and post dated cheque control",
      "FBR digital invoicing and withholding tax built in",
    ],
    screenshot: <ErpShot src="finance.png" alt="Finance" />,
  },
  {
    title: "Party Management",
    subhead: "One master record holding sales, payments, returns, documents and follow ups.",
    body: "Stop opening four screens to answer one question. The party view shows what they bought, what they owe, how long they take to pay, which documents are expiring and what was discussed at the last follow up. Credit limits and payment terms sit on the same record, and orders block automatically when the limit is breached.",
    bullets: [
      "Full 360 view of sales, payments, returns and follow ups",
      "Credit limit and terms with automatic order blocking",
      "Tax profile with NTN, filer status and exemption certificates",
      "Document storage with expiry alerts",
      "Statements emailed to every customer in one action",
    ],
    screenshot: <ErpShot src="party.png" alt="Party Management" />,
  },
  {
    title: "Commission & Incentives",
    subhead: "Slabs, schemes, targets and distributor claims, all settled from live data.",
    body: "Commission runs on rules, and rules change. Set slabs by value, volume, product or margin, tie payout to collection rather than just to the sale, and let the system calculate every rupee from transactions already posted. Your sales team sees their own running total, so the month end argument disappears.",
    bullets: [
      "Slab based commission by value, volume, product or margin",
      "Payout tied to collection, not only to the invoice",
      "Target versus achievement per person, team and territory",
      "Distributor and dealer claim processing with approval",
      "Running commission visible to each salesperson on their own app",
    ],
    screenshot: <ErpShot src="commission.png" alt="Commission & Incentives" />,
  },
  {
    title: "Expense & Petty Cash",
    subhead: "Claims, approvals, imprest and direct posting, from the phone.",
    body: "An employee photographs a receipt on the phone, picks a category, and submits. It routes for approval by amount, posts straight to the ledger once approved, and reduces the petty cash imprest without a separate register. Every branch and every custodian has their own float with its own balance and replenishment cycle.",
    bullets: [
      "Expense claims with receipt photo from the mobile app",
      "Category limits and policy rules enforced at entry",
      "Approval routing by amount, department and category",
      "Petty cash imprest per branch and per custodian",
      "Direct posting to the ledger with no re entry",
    ],
    screenshot: <ErpShot src="expense.png" alt="Expense & Petty Cash" />,
  },
  {
    title: "Branches & Warehouses",
    subhead: "Unlimited branches and warehouses, consolidated whenever you want them.",
    body: "Each branch runs its own sales, stock and expenses with its own numbering and its own targets. Head office sees any single branch, or all of them combined, in one click. Transfers between locations stay visible in transit until the receiving end acknowledges them, so stock cannot quietly disappear between two godowns.",
    bullets: [
      "Unlimited branches, warehouses, bins and companies",
      "Branch wise profit and loss and balance sheet",
      "One click consolidation across all locations",
      "Transfers tracked in transit until acknowledged",
      "Users restricted to their own branch data",
    ],
    screenshot: <ErpShot src="warehouse.png" alt="Branches & Warehouses" />,
  },
  {
    title: "HR & Payroll",
    subhead: "Biometric and mobile attendance, leave, loans, tax and payslips in one run.",
    body: "Punches come in from the biometric device or the mobile app with GPS. Shifts, overtime, late deductions, leave, loan instalments and income tax all calculate on their own. At the end of the run you get payslips ready to email and a transfer file ready to upload to your bank.",
    bullets: [
      "Biometric and GPS mobile attendance with selfie",
      "Shift, roster and overtime with holiday multipliers",
      "Income tax, EOBI, social security and provident fund",
      "Payslips emailed individually, password protected",
      "Bank transfer file in your bank's upload format",
    ],
    screenshot: <ErpShot src="hr.png" alt="HR & Payroll" />,
  },
  {
    title: "Alerts & Approvals",
    subhead: "Multi stage approvals and rule based alerts across every module.",
    body: "Set who approves what, at which value, and what happens when they do not respond. Approvals arrive on the web, the mobile app, email or WhatsApp, and can be actioned from any of them. Alerts fire on credit breaches, stock outs, expiry, margin drops and bounced cheques, and each person configures only what they want to hear about.",
    bullets: [
      "Unlimited approval stages with value based routing",
      "Approve from web, mobile, email or WhatsApp",
      "Escalation when a document sits too long",
      "Alerts on credit, stock, expiry, margin and cheques",
      "Bottleneck report showing who is holding what",
    ],
    screenshot: <ErpShot src="alerts.png" alt="Alerts & Approvals" />,
  },
  {
    title: "Users & Roles",
    subhead: "Unlimited users with control down to the column.",
    body: "Add every person in the company without watching a licence counter. Then decide exactly what each of them sees: which modules, which screens, which reports, and even which columns. A salesman can see the item and the price but not the cost. A branch user sees only their branch. Every action is logged.",
    bullets: [
      "Unlimited user accounts",
      "Access control by module, screen, report and button",
      "Hide cost, margin and salary columns from chosen roles",
      "Branch, department and salesperson level data restriction",
      "Complete audit trail of every action, including exports",
    ],
    screenshot: <ErpShot src="users.png" alt="Users & Roles" />,
  },
];

export default function ERPPage() {
  const [demoForm, setDemoForm] = useState({
    name: "",
    company: "",
    phone: "",
    industry: "",
    currentSystem: "",
  });
  const [demoSent, setDemoSent] = useState(false);
  const [demoSubmitting, setDemoSubmitting] = useState(false);
  const [demoError, setDemoError] = useState("");

  const handleDemoSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDemoSubmitting(true);
    setDemoError("");

    try {
      await submitLead("erp-demo", demoForm);
      setDemoSent(true);
    } catch (submissionError) {
      setDemoError(submissionError instanceof Error ? submissionError.message : "We could not send your request. Please try again.");
    } finally {
      setDemoSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="pt-28 pb-16 px-6 relative overflow-x-hidden"
        style={{ background: C.lightGray }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, #EFF4FF 0%, #F4F6FB 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="min-w-0 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start">
              <Eyebrow>
              <Zap size={11} /> Business ERP Software
              </Eyebrow>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] mb-5 tracking-tight"
              style={{ color: C.nearBlack, fontFamily: headingFont }}
            >
              The ERP that helps you manage{" "}
              <span style={{ color: C.blue }}>YOUR BUSINESS.</span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ color: C.slate, fontFamily: bodyFont }}
            >
              Sales, purchase, inventory, production, finance, payroll and POS in one
              system — with AI forecasting and smart alerts built into every module.
            </p>
            <div className="flex flex-row gap-2 sm:gap-3 justify-center lg:justify-start mb-6 w-full max-w-md sm:max-w-none mx-auto lg:mx-0">
              <PrimaryBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !gap-1 !text-xs sm:!px-8 sm:!py-4 sm:!gap-2 sm:!text-base">
                Start for Free <ArrowRight size={16} className="shrink-0" />
              </PrimaryBtn>
              <SecBtn href={PAGE_PATHS.demo} size="sm" className="flex-1 sm:flex-none min-w-0 justify-center whitespace-nowrap !px-2 !text-xs sm:!px-6 sm:!py-3 sm:!text-sm">
                Schedule a Demo
              </SecBtn>
            </div>
            <div
              className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-x-5 gap-y-2 text-xs max-w-sm sm:max-w-none mx-auto lg:mx-0 text-left sm:text-center lg:text-left"
              style={{ color: C.slate, fontFamily: bodyFont }}
            >
              {[
                "FBR digital invoicing and POS ready",
                "AI in every module",
                "Unlimited users",
                "Android and iOS",
                "Cloud or on premise",
              ].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5 justify-start sm:justify-center">
                  <Check size={11} color={C.green} aria-hidden className="flex-shrink-0" />
                  <span>{t}</span>
                </span>
              ))}
            </div>
            </div>
            <div className="w-full order-first lg:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/erp/hero-banner.png"
              alt="SalesVince ERP on desktop and mobile"
              className="w-full h-auto object-contain"
              style={{ filter: "drop-shadow(0 32px 60px rgba(10,26,79,0.22))" }}
            />
            </div>
          </div>
        </div>
      </section>

      {/* Smart in every module */}
      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <H2 center={false}>Smart in every module</H2>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: C.slate, fontFamily: bodyFont }}
              >
                Most systems bolt an AI chatbot onto the side and call the product
                intelligent. SalesVince puts forecasting, anomaly detection and smart
                alerts inside every module, so the warning reaches you from wherever
                the problem started. A margin drop is flagged by Sales. A price jump
                is flagged by Purchase. Stock that will expire unsold is flagged by
                Inventory.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Forecasting in inventory, cash, demand, payroll and production",
                  "Anomaly detection on price, margin, discount, expense and attendance",
                  "Smart alerts routed to the right person on the right channel",
                  "Every prediction shows the data it was built from",
                  "Plain language questions answered from live records",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: C.nearBlack, fontFamily: bodyFont }}
                  >
                    <Check
                      size={14}
                      color={C.green}
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { icon: Boxes, label: "Inventory", alert: "Reorder 4 items within 6 days" },
                { icon: ShoppingCart, label: "Sales", alert: "Margin on Brand X down 4.2%" },
                { icon: Truck, label: "Purchase", alert: "Vendor rate up 11% vs last PO" },
                { icon: Calculator, label: "Finance", alert: "Rs. 340K stock expires in 30d" },
                { icon: Users, label: "HR", alert: "Overtime cost +18% this week" },
                { icon: BarChart3, label: "Reports", alert: "Profit leakage Rs. 1.28M Jun" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="p-3 rounded-2xl flex flex-col items-center text-center gap-2"
                  style={{
                    background: "white",
                    border: `1px solid ${C.cardBorder}`,
                    boxShadow: "0 1px 3px rgba(10,26,79,0.04)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center"
                    style={{ background: "#EFF4FF" }}
                  >
                    <m.icon size={16} color={C.blue} />
                  </div>
                  <p
                    style={{
                      color: C.nearBlack,
                      fontSize: 12,
                      fontFamily: headingFont,
                      fontWeight: 600,
                    }}
                  >
                    {m.label}
                  </p>
                  <div
                    className="w-full px-2 py-1.5 rounded-lg text-[10px] leading-tight flex items-start justify-center gap-1"
                    style={{
                      background: "#EFF4FF",
                      border: "1px solid #C7D7FF",
                      color: C.blue,
                      fontFamily: bodyFont,
                      fontWeight: 500,
                    }}
                  >
                    <Zap size={10} color="#D97706" style={{ flexShrink: 0, marginTop: 2 }} />
                    {m.alert}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key highlights strip — between Smart and modules */}
      <section className="py-5 px-6" style={{ background: C.lightGray }}>
        <div
          className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm"
          style={{ color: C.slate, fontFamily: bodyFont }}
        >
          {[
            "FBR digital invoicing and POS ready",
            "AI in every module",
            "Unlimited users",
            "Android and iOS",
            "Cloud or on premise",
          ].map((t, i) => (
            <span key={i} className="flex items-center gap-1.5">
              <Check size={12} color={C.green} aria-hidden className="flex-shrink-0" />
              <span>{t}</span>
            </span>
          ))}
        </div>
      </section>

      {/* Alternating modules — no CTAs in these sections */}
      {MODULES.map((m, i) => (
        <LightMod
          key={m.title}
          n={i + 1}
          headline={m.title}
          subhead={m.subhead}
          body={m.body}
          bullets={m.bullets}
          imageRight={i % 2 === 0}
          bg={i % 2 === 0 ? "white" : C.lightGray}
          screenshot={m.screenshot}
        />
      ))}

      {/* Why SalesVince */}
      <section className="py-20 px-6" style={{ background: C.lightGray }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <Eyebrow>
                <Award size={11} /> Why SalesVince
              </Eyebrow>
              <H2 center={false}>Built for how business actually runs here.</H2>
              <p
                className="text-base font-semibold mb-3"
                style={{ color: C.blue, fontFamily: bodyFont }}
              >
                Not a global product translated into your market as an afterthought.
              </p>
              <p
                className="text-base leading-relaxed mb-5"
                style={{ color: C.slate, fontFamily: bodyFont }}
              >
                FBR digital invoicing, POS integration, withholding tax, post dated
                cheques, letters of credit, Roman Urdu voice entry and WhatsApp delivery
                are core parts of the product — not paid extras.
              </p>
              <ul className="space-y-2.5">
                {[
                  "FBR digital invoicing, POS integration and reconciliation built in",
                  "Letter of credit and landed costing as first class features",
                  "Roman Urdu support in voice and AI",
                  "Cloud or on premise, your choice",
                  "Data migration included in onboarding",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: C.nearBlack, fontFamily: bodyFont }}
                  >
                    <Check
                      size={14}
                      color={C.green}
                      style={{ flexShrink: 0, marginTop: 3 }}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-3xl p-8"
              style={{ background: "white", border: `1px solid ${C.cardBorder}` }}
            >
              <p
                className="font-bold mb-6 text-center"
                style={{ color: C.nearBlack, fontFamily: headingFont }}
              >
                Implementation Timeline
              </p>
              {[
                {
                  n: "Week 1",
                  step: "Discovery",
                  desc: "We map your processes, data structure and team requirements.",
                },
                {
                  n: "Week 2",
                  step: "Data migration",
                  desc: "Masters, opening balances and history imported from Excel or your current system.",
                },
                {
                  n: "Week 3",
                  step: "Training",
                  desc: "Role-based training for every team, in Urdu or English, on-site or remote.",
                },
                {
                  n: "Week 4",
                  step: "Go live",
                  desc: "You go live with our team on call for the first 30 days.",
                },
              ].map((s, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: gradBtn, fontFamily: headingFont }}
                    >
                      {i + 1}
                    </div>
                    {i < arr.length - 1 && (
                      <div className="w-0.5 flex-1 my-1" style={{ background: "#C7D7FF" }} />
                    )}
                  </div>
                  <div className="pb-6">
                    <p
                      style={{
                        color: C.blue,
                        fontSize: 10,
                        fontFamily: bodyFont,
                        fontWeight: 600,
                      }}
                    >
                      {s.n}
                    </p>
                    <p
                      className="font-bold"
                      style={{ color: C.nearBlack, fontFamily: headingFont }}
                    >
                      {s.step}
                    </p>
                    <p style={{ color: C.slate, fontSize: 13, fontFamily: bodyFont }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-20 px-6" style={{ background: "white" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <H2>Businesses already running on SalesVince.</H2>
            <p style={{ color: C.slate, fontFamily: bodyFont, fontSize: 14 }}>
              Across 9 industries in Pakistan&apos;s main commercial cities.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3 mb-12">
            {[
              { icon: ShoppingBag, label: "FMCG" },
              { icon: Package, label: "Pharma" },
              { icon: Scissors, label: "Textile" },
              { icon: Store, label: "Retail" },
              { icon: Warehouse, label: "Wholesale" },
              { icon: Factory, label: "Manufacturing" },
              { icon: BarChart2, label: "Trading" },
              { icon: ShoppingCart, label: "Supermarkets" },
              { icon: Headphones, label: "Services" },
            ].map((ind, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 p-3 rounded-2xl min-w-0"
                style={{ background: C.lightGray, border: `1px solid ${C.cardBorder}` }}
              >
                <ind.icon size={18} color={C.blue} />
                <span
                  className="text-[10px] sm:text-[11px] leading-tight break-words"
                  style={{
                    color: C.nearBlack,
                    fontFamily: bodyFont,
                    fontWeight: 600,
                    textAlign: "center",
                  }}
                >
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Stock discrepancies dropped to near zero within the first month. We now reconcile in an hour, not a day.",
                name: "Tariq Mahmood",
                role: "Director",
                company: "Al-Madina Distributors, Karachi",
              },
              {
                quote:
                  "The profit leakage report showed us we were losing Rs. 1.2M a month on excess discounts. We fixed it in two weeks.",
                name: "Sadia Farooq",
                role: "CFO",
                company: "Noor Textile Mills, Faisalabad",
              },
              {
                quote:
                  "Our salespeople now book 40% more orders per day because they are not writing on paper and re-entering later.",
                name: "Bilal Chaudhry",
                role: "Sales Manager",
                company: "Star Enterprises, Lahore",
              },
            ].map((q, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl"
                style={{ background: C.lightGray, border: `1px solid ${C.cardBorder}` }}
              >
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{
                    color: C.nearBlack,
                    fontFamily: bodyFont,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: gradBtn, fontFamily: headingFont }}
                  >
                    {q.name[0]}
                  </div>
                  <div>
                    <p
                      className="font-bold text-sm"
                      style={{ color: C.nearBlack, fontFamily: headingFont }}
                    >
                      {q.name}
                    </p>
                    <p style={{ color: C.slate, fontSize: 11, fontFamily: bodyFont }}>
                      {q.role} · {q.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA + lead form */}
      <section className="py-20 px-6 relative overflow-x-hidden" style={{ background: grad }}>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="min-w-0">
              <h2
                className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: headingFont, letterSpacing: "-0.5px" }}
              >
                See it running on your own numbers.
              </h2>
              <p
                className="text-base mb-8 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)", fontFamily: bodyFont }}
              >
                Book a demo and we will load a sample of your own data before the call,
                so you are looking at your business rather than a generic sample company.
                Thirty minutes, no obligation, and you keep the report pack we produce from it.
              </p>
              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 w-full sm:w-auto [&>*]:w-full sm:[&>*]:w-auto">
                <PrimaryBtn
                  href="#erp-demo-form"
                  size="md"
                >
                  Book a live demo <ArrowRight size={16} aria-hidden />
                </PrimaryBtn>
                <SecBtn dark size="md" href={PAGE_PATHS.features}>
                  Download module overview
                </SecBtn>
                <WABtn>WhatsApp us directly</WABtn>
              </div>
            </div>
            <div
              id="erp-demo-form"
              className="rounded-2xl p-5 sm:p-6 scroll-mt-24 shadow-xl min-w-0"
              style={{
                background: "#fff",
                border: `1px solid ${C.cardBorder}`,
              }}
            >
              {demoSent ? (
                <div className="text-center py-8" role="status" aria-live="polite">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "#DCFCE7" }}
                    aria-hidden
                  >
                    <Check size={24} color={C.green} />
                  </div>
                  <p
                    className="font-bold text-lg mb-2"
                    style={{ color: C.nearBlack, fontFamily: headingFont }}
                  >
                    Request received!
                  </p>
                  <p style={{ color: C.slate, fontFamily: bodyFont, fontSize: 14 }}>
                    We will call you within 2 business hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3
                    className="font-bold mb-5 text-lg"
                    style={{ color: C.nearBlack, fontFamily: headingFont }}
                  >
                    Quick demo request
                  </h3>
                  <form
                    className="space-y-3"
                    onSubmit={handleDemoSubmit}
                    aria-busy={demoSubmitting}
                  >
                    {[
                      { key: "name", id: "erp-demo-name", label: "Your name", placeholder: "Muhammad Ali", autoComplete: "name", type: "text" },
                      {
                        key: "company",
                        id: "erp-demo-company",
                        label: "Company",
                        placeholder: "Al-Madina Distributors",
                        autoComplete: "organization",
                        type: "text",
                      },
                      {
                        key: "phone",
                        id: "erp-demo-phone",
                        label: "WhatsApp / Phone",
                        placeholder: "+92 320 2665270",
                        autoComplete: "tel",
                        type: "tel",
                      },
                    ].map((f) => (
                      <div key={f.key}>
                        <label
                          htmlFor={f.id}
                          className="block text-xs font-semibold mb-1.5"
                          style={{ color: C.slate, fontFamily: bodyFont }}
                        >
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          name={f.key}
                          type={f.type}
                          autoComplete={f.autoComplete}
                          required
                          aria-required="true"
                          value={(demoForm as Record<string, string>)[f.key]}
                          onChange={(e) =>
                            setDemoForm((p) => ({ ...p, [f.key]: e.target.value }))
                          }
                          placeholder={f.placeholder}
                          className="w-full px-3 py-2.5 rounded-xl text-sm"
                          style={{
                            background: C.lightGray,
                            border: `1px solid ${C.cardBorder}`,
                            color: C.nearBlack,
                            fontFamily: bodyFont,
                          }}
                        />
                      </div>
                    ))}
                    <div>
                      <label
                        htmlFor="erp-demo-industry"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: C.slate, fontFamily: bodyFont }}
                      >
                        Industry
                      </label>
                      <select
                        id="erp-demo-industry"
                        name="industry"
                        value={demoForm.industry}
                        onChange={(e) =>
                          setDemoForm((p) => ({ ...p, industry: e.target.value }))
                        }
                        className="w-full px-3 py-2.5 rounded-xl text-sm"
                        style={{
                          background: C.lightGray,
                          border: `1px solid ${C.cardBorder}`,
                          color: demoForm.industry ? C.nearBlack : C.slate,
                          fontFamily: bodyFont,
                        }}
                      >
                        <option value="">Select industry</option>
                        {[
                          "FMCG",
                          "Pharma",
                          "Textile",
                          "Retail",
                          "Wholesale",
                          "Manufacturing",
                          "Trading",
                          "Supermarkets",
                          "Services",
                          "Other",
                        ].map((i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="erp-demo-system"
                        className="block text-xs font-semibold mb-1.5"
                        style={{ color: C.slate, fontFamily: bodyFont }}
                      >
                        Current system
                      </label>
                      <input
                        id="erp-demo-system"
                        name="currentSystem"
                        value={demoForm.currentSystem}
                        onChange={(e) =>
                          setDemoForm((p) => ({ ...p, currentSystem: e.target.value }))
                        }
                        placeholder="Excel, QuickBooks, manual registers..."
                        className="w-full px-3 py-2.5 rounded-xl text-sm"
                        style={{
                          background: C.lightGray,
                          border: `1px solid ${C.cardBorder}`,
                          color: C.nearBlack,
                          fontFamily: bodyFont,
                        }}
                      />
                    </div>
                    <PrimaryBtn type="submit" full size="lg" disabled={demoSubmitting} className="mt-1">
                      {demoSubmitting ? "Sending request…" : "Book a live demo"} {!demoSubmitting && <ArrowRight size={16} aria-hidden />}
                    </PrimaryBtn>
                    {demoError && <p className="text-sm text-center" style={{ color: "#B42318", fontFamily: bodyFont }} role="alert">{demoError}</p>}
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
