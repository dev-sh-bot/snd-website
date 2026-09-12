export type BlogPost = {
  slug: string;
  cat: string;
  title: string;
  date: string;
  datePublished: string;
  read: string;
  intro: string;
  body: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "choose-erp-pakistani-distribution-business",
    cat: "ERP",
    title: "How to Choose an ERP System for Your Pakistani Distribution Business",
    date: "10 Jun 2026",
    datePublished: "2026-06-10",
    read: "6 min read",
    intro:
      "Most Pakistani distributors still run their operations on paper ledgers, Excel sheets, and WhatsApp messages. While these tools are familiar, they create serious problems as the business grows — stock discrepancies, missing recovery, and decisions made on outdated information.",
    body: "Choosing the right ERP system for your business is not just about features. It is about finding a system that matches how your business actually works.\n\nThe first thing to look for is whether the software understands Pakistani business requirements. This includes PKR currency, local tax formats (SRB, FBR), Urdu language support, and the common business flows used by Pakistani distributors and traders — not generic international templates.\n\nSecond, look at how the software handles your day-to-day operations. Can you book sales orders? Can salespeople use it on their phones? Can the owner see reports without coming to the office?\n\nThird, consider the implementation and support. Who will set up the system? How long does it take? Is there training? Can you call someone if something goes wrong — and will they explain it in Urdu?\n\nSalesVince is built around all of these requirements. It is designed for Pakistani SMEs — not adapted from a foreign product for the Pakistani market.",
  },
  {
    slug: "signs-distribution-business-needs-software",
    cat: "Distribution",
    title: "5 Signs Your Distribution Business Needs Software Right Now",
    date: "3 Jun 2026",
    datePublished: "2026-06-03",
    read: "4 min read",
    intro:
      "Running a distribution business on paper and WhatsApp works — until it doesn't. Here are the five warning signs that tell you it's time to switch to a proper system.",
    body: "1. You don't know your exact stock position at any moment.\n\nIf you have to physically count products or ask the warehouse to confirm stock before quoting a customer, you have a stock visibility problem. Software gives you real-time stock across all your locations.\n\n2. Recovery is being missed.\n\nIf your salespeople collect payments and record them on paper — or worse, on WhatsApp — you are definitely missing some outstanding amounts. A proper system tracks every rupee owed and every rupee collected.\n\n3. Salespeople are unsupervised.\n\nIf you don't know which shops your team visited today, or how many orders they booked, or how much recovery they collected — you have a field management problem. Distribution software solves this.\n\n4. Closing accounts takes too long.\n\nIf your accountant takes days or weeks to close the books because data is scattered across notebooks, WhatsApp, and Excel — software that integrates all your data solves this in real time.\n\n5. The owner has to be physically present to know what's happening.\n\nIf you have to be in the office to check sales, stock, and team performance — mobile reporting is the answer.",
  },
  {
    slug: "why-stock-accuracy-matters",
    cat: "Inventory",
    title: "Why Stock Accuracy Matters More Than You Think",
    date: "27 May 2026",
    datePublished: "2026-05-27",
    read: "5 min read",
    intro:
      "Stock discrepancies cost Pakistani businesses crores of rupees every year. Here is why getting stock accuracy right is one of the highest-ROI investments you can make.",
    body: "Stock inaccuracy happens slowly. A few units here, a few there. Over months and years, these small differences add up to large losses.\n\nThe most common causes of stock inaccuracy in Pakistani businesses are: manual data entry errors, unrecorded returns, inter-branch transfers without proper documentation, and salesperson van inventory that is never reconciled.\n\nSalesVince eliminates these problems through automated stock updates. Every sale, purchase, return, and transfer updates inventory automatically. Nothing requires manual entry after the initial transaction is recorded.\n\nThe result is a stock position you can trust — which means you can set the right reorder levels, avoid overbuying, and stop emergency orders when you run out of fast-moving products.",
  },
  {
    slug: "track-recovery-distribution-business",
    cat: "Accounting",
    title: "How to Track Recovery Properly in a Distribution Business",
    date: "20 May 2026",
    datePublished: "2026-05-20",
    read: "4 min read",
    intro:
      "Recovery management is one of the biggest pain points for Pakistani distributors. Here is a practical system for tracking outstanding amounts and collecting them on time.",
    body: "Recovery tracking starts with one simple principle: every credit sale must be recorded immediately, and every payment must be matched to that sale.\n\nIn practice, most Pakistani distributors track recovery on paper or on Excel. Salespeople collect money in the field and report it verbally or on WhatsApp. The accountant tries to reconcile at the end of the day — or week.\n\nThis creates gaps. Some collections are not reported. Some are recorded but not matched to the correct invoice. Outstanding balances grow, and the distributor does not realize until it is too late.\n\nThe proper system records the outstanding balance at the point of sale, assigns it to the responsible salesperson, and tracks every payment against that balance. When the salesperson collects from a party, they record it in the system on their phone. The balance updates immediately.\n\nThis is exactly how SalesVince works — and it is why our customers report dramatically lower outstanding balances within the first few months of using the system.",
  },
  {
    slug: "growing-1-to-5-branches",
    cat: "Growth",
    title: "Growing From 1 to 5 Branches Without Losing Control",
    date: "13 May 2026",
    datePublished: "2026-05-13",
    read: "7 min read",
    intro:
      "Multi-branch growth is exciting — but it is also where many Pakistani businesses start to lose control. Here is how to expand without chaos.",
    body: "The first branch is manageable. The owner is there, they know the stock, they know the sales team, and they can reconcile accounts by memory.\n\nThe second branch introduces distance. The third introduces complexity. By the fifth branch, without a proper system, the owner is flying blind.\n\nThe key to multi-branch control is consolidated reporting. You need to see total sales, total stock, and total outstanding — across all branches — in one place, in real time.\n\nSalesVince is designed for this. Each branch has its own stock, its own team, and its own accounts. But the owner — and the management team — can see consolidated reports for all branches from one screen.\n\nThis is how you grow from 1 to 5 branches without losing control.",
  },
  {
    slug: "erp-vs-accounting-software",
    cat: "ERP",
    title: "Understanding the Difference Between ERP and Accounting Software",
    date: "6 May 2026",
    datePublished: "2026-05-06",
    read: "5 min read",
    intro:
      "Many Pakistani business owners use accounting software and think they have ERP. They don't. Here is the practical difference — and why it matters.",
    body: "Accounting software records your financial transactions. It tells you your P&L, your balance sheet, and your party ledgers. It is essential, but it only covers the financial layer of your business.\n\nERP — Enterprise Resource Planning — covers the entire business. It includes inventory management, purchase management, sales management, production planning (for manufacturers), and reporting across all these areas. The accounting is a result of all these activities, not a separate system.\n\nThe practical difference is this: with accounting software only, your stock is tracked separately from your accounts. Sales are entered twice — once in the sales system and once in the accounts. Purchases are entered separately.\n\nWith an ERP like SalesVince, a sale automatically updates the accounts (debits receivable, credits sales), reduces stock, and triggers the delivery process. Everything is connected, and nothing needs to be entered twice.",
  },
];

export function getAllPosts() {
  return BLOG_POSTS;
}

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
