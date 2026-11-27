/**
 * Snaprint Homepage Centralized Content Store
 * Single source of truth for all copy, labels, specifications, and links.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface BuyerPathItem {
  id: string;
  title: string;
  badge: string;
  oneLiner: string;
  detailedDescription: string;
  bestFitModel: string;
  ctaText: string;
  href: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  iconName: "scan" | "upload" | "pay" | "collect";
  detail: string;
}

export interface TrustItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  note?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const SITE_CONTENT = {
  brand: {
    name: "Snaprint",
    city: "Bengaluru, India",
    tagline: "Automated Self-Service Print Kiosks",
    ctaLabel: "Request a callback",
    phonePlaceholder: "+91 99999 99999",
    whatsappLink: "https://wa.me/919999999999?text=Hi%20Snaprint,%20I'm%20interested%20in%20a%20print%20kiosk%20franchise.",
    paperFormat: "A4",
    // UPI only or UPI and card? Snaprint's pages differ. Confirm with Snaprint.
    // Kiosk prints A4. Confirm A3 / 4x6 with Snaprint.
    paymentMethodNote: "Instant UPI. Kiosk prints A4.",
  },

  nav: {
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Payback", href: "#calculator" },
      { label: "Trust & Support", href: "#trust" },
      { label: "FAQ", href: "#faq" },
    ],
    franchiseDropdown: {
      label: "Buyer Paths",
      items: [
        { label: "Campuses & Colleges", href: "/franchise/campus" },
        { label: "Commercial & Coworking", href: "/franchise/commercial" },
        { label: "Apartment Societies", href: "/franchise/apartments" },
        { label: "Standalone & Retail", href: "/franchise/standalone" },
      ],
    },
  },

  hero: {
    badge: "Self-service print kiosks • Bengaluru",
    headline: "Turn a small corner into a passive print business.",
    subhead:
      "Snaprint self-service kiosks let students, residents, and visitors print A4 documents in seconds. People scan QR, upload files, pay by UPI, and collect — zero staff required.",
    primaryCta: "Request a callback",
    secondaryCta: "See your payback",
    highlights: [
      { label: "Zero staff needed", desc: "100% self-service" },
      { label: "Compact footprint", desc: "About 55 × 70 cm floor space" },
      { label: "UPI payments", desc: "Customers pay by UPI. Settlement timing to be confirmed with Snaprint." },
      { label: "Prints A4 sheets", desc: "Mono & color prints" },
    ],
  },

  buyerPaths: {
    sectionTitle: "Built for Spaces Where People Need Instant Prints",
    sectionSubhead:
      "Choose your space category to see how a self-service kiosk fits into your venue and serves daily visitors.",
    paths: [
      {
        id: "campus",
        title: "Campus & Colleges",
        badge: "Campus",
        oneLiner: "Eliminate stationery shop queues before exams and submission deadlines.",
        detailedDescription:
          "Perfect for universities, student hostelling hubs, libraries, and coaching centers. Handles batches of project reports, hall tickets, lab manuals, and notes without staff intervention.",
        bestFitModel: "Snaprint S1 Pro Max (2,000 sheets)",
        ctaText: "Learn more",
        href: "/franchise/campus",
      },
      {
        id: "commercial",
        title: "Commercial & Coworking",
        badge: "Commercial",
        oneLiner: "Provide walk-up printing for founders, teams, and visitors without IT overhead.",
        detailedDescription:
          "Ideal for flexible coworking spaces, tech parks, and enterprise reception lobbies. No drivers or shared office network setup needed — users upload directly from their phone browser.",
        bestFitModel: "Snaprint S1 Pro (550 sheets)",
        ctaText: "Learn more",
        href: "/franchise/commercial",
      },
      {
        id: "apartments",
        title: "Apartment Societies",
        badge: "Apartments",
        oneLiner: "Give hundreds of resident families doorstep printing convenience inside the clubhouse.",
        detailedDescription:
          "No more emergency night runs to distant xerox shops for school homework, KYC identity proofs, boarding passes, or lease deeds. High resident satisfaction with passive society income.",
        bestFitModel: "Snaprint S1 Pro (550 sheets)",
        ctaText: "Learn more",
        href: "/franchise/apartments",
      },
      {
        id: "standalone",
        title: "Standalone & Retail",
        badge: "Standalone",
        oneLiner: "Monetize unused entryway or sidewalk corners in stationery shops, cafes, and transit hubs.",
        detailedDescription:
          "If you already run a retail shop, stationery outlet, cafe, or transit corner with regular walking footfall, add automated printing without hiring helper staff or handling loose cash.",
        bestFitModel: "Snaprint S1 Pro (550 sheets)",
        ctaText: "Learn more",
        href: "/franchise/standalone",
      },
    ] as BuyerPathItem[],
  },

  calculator: {
    sectionTitle: "Interactive Payback Calculator",
    sectionSubhead:
      "Model your monthly earnings based on your expected footfall and pricing. Adjust the sliders to see how quickly your kiosk pays for itself.",
    disclaimer:
      "An estimate, not a promise. Excludes electricity, connectivity, rent and servicing.",
    defaults: {
      modelId: "s1-pro" as const,
      sidesPerDay: 150,
      pricePerSide: 3,
      costPerSide: 1, // paper + ink
      gatewayFeePercent: 2, // default 2%
      workingDaysPerMonth: 26,
    },
    labels: {
      modelSelect: "Select Kiosk Model",
      sidesSlider: "Printed Sides Per Day (A4)",
      priceInput: "Customer Price Per Side (₹)",
      costInput: "Estimated Cost Per Side (Paper & Ink) (₹)",
      gatewayFeeInput: "Gateway fee (default 2%)",
      workingDaysInput: "Operating Days Per Month",
    },
  },

  howItWorks: {
    sectionTitle: "How It Works",
    sectionSubhead:
      "No app download, no account creation, no printer drivers. From phone to printed A4 sheet.",
    // UPI only or UPI and card? Snaprint's pages differ. Confirm with Snaprint.
    // Kiosk prints A4. Confirm A3 / 4x6 with Snaprint.
    steps: [
      {
        number: "01",
        title: "Scan QR",
        description:
          "User scans the dynamic QR code displayed on the kiosk screen with their mobile camera.",
        iconName: "scan",
        detail: "Opens a secure, lightweight browser upload portal instantly.",
      },
      {
        number: "02",
        title: "Upload File",
        description:
          "User picks PDF, document, or image files directly from phone storage.",
        iconName: "upload",
        detail: "Real-time print preview with color, B&W, and double-sided controls.",
      },
      {
        number: "03",
        title: "Pay by UPI",
        description:
          "Approve the micro-payment by UPI on your phone.",
        iconName: "pay",
        detail: "Quick, contactless payment via UPI QR.",
      },
      {
        number: "04",
        title: "Collect Prints",
        description:
          "Prints A4 sheets into the collection tray in seconds.",
        iconName: "collect",
        detail: "Clean A4 printing with automatic session wipe after collection.",
      },
    ] as HowItWorksStep[],
  },

  pricing: {
    sectionTitle: "Transparent Kiosk Hardware Pricing",
    sectionSubhead:
      "Buy outright with no mandatory AMC. Includes lifetime software updates.",
    note: "All prices in INR, plus 18% GST.",
  },

  trust: {
    sectionTitle: "Built on Predictable Ownership & Solid Trust",
    sectionSubhead:
      "You buy the kiosk outright and keep your print revenue. Gateway fee and GST apply.",
    // Source: Snaprint franchise page. Confirm with Snaprint before launch.
    features: [
      {
        id: "no-royalties",
        title: "No Royalty or Revenue Share",
        description:
          "Keep your print revenue. Gateway fee and GST apply.",
        badge: "No Royalty",
      },
      {
        id: "no-amc",
        title: "No Mandatory AMC",
        description:
          "You are not locked into any mandatory annual maintenance contract.",
        badge: "No Mandatory AMC",
      },
      {
        id: "warranty",
        title: "1-Year Hardware Warranty",
        description:
          "Comprehensive 1-year warranty included, extendable to 2 or 3 years.",
        badge: "Extendable Warranty",
      },
      {
        id: "updates",
        title: "Lifetime Software Updates",
        description:
          "Cloud software and firmware updates delivered over the air at no extra cost.",
        badge: "Software Included",
      },
      {
        id: "hardware-support",
        title: "48-Hour Hardware Support",
        description:
          "Hardware support response within 48 hours when you need assistance.",
        badge: "48-Hour Support",
      },
      {
        id: "dashboard",
        title: "Owner Dashboard",
        description:
          "Monitor revenue, transaction history, and paper and ink levels from your phone.",
        badge: "Owner Dashboard",
      },
    ] as TrustItem[],
    placeholders: {
      photoBoxText: "Photo placeholder",
      photoBoxSubtext: "Real kiosk photos from Snaprint go here.",
      testimonialBoxText: "Testimonial placeholder",
      testimonialBoxSubtext: "Real owner feedback from Snaprint goes here.",
    },
  },

  faq: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubhead:
      "Everything you need to know about purchasing, placing, and running a self-service Snaprint kiosk.",
    items: [
      {
        id: "cost",
        category: "Pricing & Investment",
        question: "How much does a kiosk cost?",
        answer:
          "S1 Pro is Rs 1,39,999 and S1 Pro Max is Rs 2,99,999. Both plus 18% GST. Delivery and installation charges to be confirmed with Snaprint.",
      },
      {
        id: "space-power",
        category: "Installation & Site Prep",
        question: "How much floor space and power does it need?",
        answer:
          "About 55 x 70 cm of floor space. Power consumption to be confirmed with Snaprint.",
      },
      {
        id: "payments",
        category: "Financials & Payouts",
        question: "How do customers pay, and how do I get my money?",
        answer:
          "Customers pay by UPI at the kiosk. Gateway fee (default 2%) and GST apply. Settlement timing to be confirmed with Snaprint.",
      },
      {
        id: "refills",
        category: "Operations & Maintenance",
        question: "Who handles paper and ink refills and routine upkeep?",
        answer:
          "As the kiosk owner, you or your venue staff handle loading standard A4 paper and replacing ink. The kiosk's owner dashboard tracks paper and ink levels so you can refill before they run out.",
      },
      {
        id: "delivery",
        category: "Logistics & Setup",
        question: "Is Snaprint available outside Bengaluru?",
        answer:
          "Snaprint is currently live in Bengaluru. Delivery to other locations to be confirmed with Snaprint.",
      },
      {
        id: "jam",
        category: "Troubleshooting",
        question: "What happens if paper runs out or paper jams?",
        answer:
          "Paper and ink levels are tracked in the owner dashboard so you can refill before they run out. Snaprint provides 48-hour hardware support.",
      },
    ] as FAQItem[],
  },

  callbackForm: {
    sectionTitle: "Ready to request a callback?",
    sectionSubhead:
      "Tell us about your space and we'll call you back.",
    spaceOptions: [
      { value: "campus", label: "College / University / Coaching Campus" },
      { value: "commercial", label: "Commercial Office / Coworking Space" },
      { value: "apartments", label: "Apartment Society / Gated Community" },
      { value: "standalone", label: "Retail Shop / Cafe / Transit Space" },
      { value: "other", label: "Other Space / Mixed Facility" },
    ],
    fields: {
      name: "Your Full Name",
      phone: "Phone Number (10 digits)",
      spaceType: "Type of Space",
      city: "Your City",
    },
    privacyNote:
      "We respect your privacy. No spam. A Snaprint advisor will call you back soon.",
    successTitle: "Callback Request Received!",
    successMessage:
      "Thanks, we'll call you back soon.",
  },

  footer: {
    disclaimer:
      "Concept built for Snaprint. Logo and brand belong to Snaprint. This page is a portfolio showcase created by a front-end developer applicant.",
    links: [
      { label: "Payback Calculator", href: "#calculator" },
      { label: "Buyer Paths", href: "#buyer-paths" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Kiosk Models", href: "#pricing" },
      { label: "Trust & Support", href: "#trust" },
      { label: "FAQ", href: "#faq" },
      { label: "Request a callback", href: "#callback" },
    ],
    copyright: "Concept homepage by Seikh. Snaprint name, logo and brand belong to Snaprint.",
  },
};

export interface FranchiseDeliverable {
  title: string;
  description: string;
  icon: string;
}

export interface FranchisePathDetail {
  id: string;
  slug: string;
  title: string;
  badge: string;
  heroHeadline: string;
  heroSubhead: string;
  problemStatement: string;
  deliverables: FranchiseDeliverable[];
  recommendedModelId: "s1-pro" | "s1-pro-max";
  queryHeadline: string;
}

export const FRANCHISE_DETAILS: Record<string, FranchisePathDetail> = {
  campus: {
    id: "campus",
    slug: "campus",
    title: "Campuses & Colleges",
    badge: "Campus",
    heroHeadline: "Automate High-Volume Academic Printing with Zero Staff Queues",
    heroSubhead:
      "Deploy Snaprint inside college libraries, hostel lobbies, and student centres. Students scan, upload thesis reports and hall tickets via mobile, pay UPI, and collect in seconds.",
    problemStatement:
      "Traditional campus xerox shops suffer from chaotic morning queues, constant ink runouts before exam submissions, cash handling delays, and uncaptured print revenue for the institution.",
    deliverables: [
      {
        title: "S1 Pro Max (up to 2,000 sheets)",
        description:
          "Snaprint S1 Pro Max enclosure built to withstand continuous high-throughput student printing sessions.",
        icon: "🖨️",
      },
      {
        title: "Zero-App Mobile Web Upload",
        description:
          "Students scan the kiosk QR to upload PDFs or documents directly from their mobile browser with instant print previews.",
        icon: "📲",
      },
      {
        title: "Direct UPI Institutional Settlement",
        description:
          "All print transactions are collected through instant UPI and settled into the designated bank account.",
        icon: "⚡",
      },
      {
        title: "Paper & Ink Level Monitoring",
        description:
          "Administrators track paper and ink levels via the owner dashboard, avoiding exam-season disruptions.",
        icon: "📊",
      },
    ],
    recommendedModelId: "s1-pro-max",
    queryHeadline: "Have Questions About Deploying Snaprint on Your College Campus?",
  },

  commercial: {
    id: "commercial",
    slug: "commercial",
    title: "Commercial & Coworking",
    badge: "Commercial",
    heroHeadline: "Walk-Up Printing for Teams & Visitors",
    heroSubhead:
      "No printer drivers to configure or shared office network passwords to share. Founders, remote workers, and visitors upload directly from their phone browser.",
    problemStatement:
      "Shared office printers require connecting to secure local networks, configuring complex printer drivers, and handling shared ink expenses. Guest visitors are frequently unable to print without staff help.",
    deliverables: [
      {
        title: "No Corporate Network Needed",
        description:
          "Operates independently without needing connection to your internal corporate office network or IT permissions.",
        icon: "🔒",
      },
      {
        title: "Driverless Phone Upload",
        description:
          "Users upload files from their phone browser in seconds. No drivers to download or software to install.",
        icon: "📄",
      },
      {
        title: "Self-Service UPI Payments",
        description:
          "Guests pay for their own prints via UPI at the kiosk. Gateway fee and GST apply.",
        icon: "💳",
      },
      {
        title: "48-Hour Hardware Support",
        description:
          "Hardware support response within 48 hours ensures your workspace amenity stays operational.",
        icon: "🛠️",
      },
    ],
    recommendedModelId: "s1-pro",
    queryHeadline: "Want to Provide Friction-Free Printing in Your Coworking or Tech Park?",
  },

  apartments: {
    id: "apartments",
    slug: "apartments",
    title: "Apartment Societies",
    badge: "Apartments",
    heroHeadline: "Printing Convenience Inside Your Clubhouse",
    heroSubhead:
      "No more late-night runs to distant commercial xerox shops. Give resident families convenient access to print school homework, tickets, and documents right inside the clubhouse.",
    problemStatement:
      "When residents need emergency prints for school projects or morning flights, they are forced to travel to market shops. Meanwhile, society clubhouses have unutilized lobby space that could generate passive funds.",
    deliverables: [
      {
        title: "Quiet Clubhouse Fit",
        description:
          "The Snaprint S1 Pro takes about 55 × 70 cm of floor space with standard A4 printing.",
        icon: "🏢",
      },
      {
        title: "Resident Self-Service",
        description:
          "Residents print securely at any time by scanning QR on their phone without needing staff present.",
        icon: "🌙",
      },
      {
        title: "Income for Society",
        description:
          "UPI print revenue deposits into the society's account, creating passive income from lobby space.",
        icon: "📈",
      },
      {
        title: "Paper & Ink Alerts",
        description:
          "Dashboard alerts notify your society manager when paper or ink is low, making restocks straightforward.",
        icon: "🔔",
      },
    ],
    recommendedModelId: "s1-pro",
    queryHeadline: "Want to Bring Automated Printing to Your Residential Society?",
  },

  standalone: {
    id: "standalone",
    slug: "standalone",
    title: "Standalone & Retail",
    badge: "Standalone",
    heroHeadline: "Turn an Unused Shop Corner into Regular Print Revenue",
    heroSubhead:
      "If you own or manage a stationery outlet, cafe, clinic, or transit corner with steady footfall, add automated printing without hiring extra staff or handling cash.",
    problemStatement:
      "Traditional xerox machines require a dedicated staff operator to stand behind the counter, waste time on loose change, and suffer frequent manual paper jams that eat into profit margins.",
    deliverables: [
      {
        title: "Zero Staff Required",
        description:
          "100% self-service by customers. You never have to stop serving your core customers to print a document.",
        icon: "🤖",
      },
      {
        title: "Digital UPI Payments",
        description:
          "Customers scan and pay the exact amount via UPI. No cash handling or change disputes.",
        icon: "₹",
      },
      {
        title: "Compact Steel Enclosure",
        description:
          "Lockable steel chassis with secure internal storage for paper and ink, taking about 55 × 70 cm of floor space.",
        icon: "🛡️",
      },
      {
        title: "Zero Monthly Royalty Lock-in",
        description:
          "You own the machine outright with lifetime software updates and no monthly revenue splits.",
        icon: "✨",
      },
    ],
    recommendedModelId: "s1-pro",
    queryHeadline: "Have Unused Floor Space in Your Store, Cafe, or Commercial Space?",
  },
};

