# Snaprint — Self-Service Print Kiosk Concept Homepage

> 🌐 **Live Demo**: [https://snaprints-clone-assignment.vercel.app](https://snaprints-clone-assignment.vercel.app/)

This is a concept homepage and franchise platform built for **Snaprint**, a Bengaluru company that sells self-service print kiosks to space owners (campuses, commercial spaces, apartments, and standalone retail). It includes the main conversion homepage and four dedicated buyer-path landing pages (`/franchise/campus`, `/franchise/commercial`, `/franchise/apartments`, and `/franchise/standalone`).

Built as a portfolio piece by a fresher front-end designer applying for a developer internship at Snaprint.

---

## How to Run Locally

### Prerequisites
- Node.js 18.18+ or 20+ (tested on Node v22)
- npm 9+ or 10+

### Steps
```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev

# 3. Build for production (static generation)
npm run build

# 4. Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

---

## Tech Stack & Rationale

- **Next.js 16 (App Router)**: Fast static site generation (`SSG`) for instant page loads and zero-configuration Vercel deployment.
- **TypeScript**: Strict compile-time safety for financial formulas and buyer-path specifications.
- **Tailwind CSS v4**: Utility-first styling with native CSS variables and zero JavaScript runtime overhead.
- **Google Fonts (`next/font`)**: Loads `Nunito` for headings (matching the brand wordmark) and `Inter` for clean body text without layout shifts.
- **Plain React State**: Uses vanilla React hooks (`useState`) and `useSyncExternalStore` for all interactivity with zero external UI or animation libraries.

---

## What I Changed vs. the Current Site (My POV)

### Structural Comparison

| Area / Section | Snaprint's Current Approach | My Redesign (Seikh's POV) | Why I Structured It This Way |
| :--- | :--- | :--- | :--- |
| **Payback Calculator** | Placed deeper in secondary pages or separate tabs. | Positioned near the top as a live, interactive tool. | A franchise buyer's very first question is *"When do I break even?"* Giving them immediate slider control builds confidence before they scroll. |
| **Buyer Pathways** | Generic descriptions scattered across subpages. | 4 explicit paths (Campus, Commercial, Apartments, Standalone) right on the homepage, with dedicated deep-dive subpages. | A college dean, a society secretary, and a retail shop owner have completely different problems. Segmenting them early answers *"Does this actually work for my space?"* |
| **Hardware Trust & Terms** | Warranties and support terms hidden in text blocks. | 6 clear trust pillars upfront (zero royalties, no mandatory AMC, 1-yr extendable warranty, 48-hr support, owner dashboard). | Franchise buyers are understandably wary of predatory maintenance contracts. Being upfront about no mandatory AMC removes major buyer hesitation. |
| **Print Journey Walkthrough** | Described in static text. | Interactive 4-step walkthrough with a real-time mobile preview state. | Space owners need visual proof that their staff won't have to babysit the machine. Showing *Scan QR → Upload → UPI → Collect* proves it's truly self-service. |
| **Logo & Brand Assets** | Bitmap image asset. | Rebuilt as an inline, lightweight SVG component with dark/light mode variants. | Ensures razor-sharp rendering on Retina and 4K displays with zero layout shift (CLS). |
| **Data Integrity & Tone** | Marketing-heavy copy. | Strictly grounded in confirmed facts; unverified specs marked *"To be confirmed with Snaprint"*. | An honest, transparent pitch wins serious institution buyers much faster than fabricated footfall numbers. |

### My Design POV: Why This Structure Works

> *"When looking at Snaprint's real-world business in Bengaluru, a buyer isn't an impulse customer — they're evaluating a physical capital asset. My goal was to strip out marketing fluff and structure the homepage around the four questions every venue owner actually asks:*
> 1. ***Does it fit in my lobby?*** *(Yes, ~55 × 70 cm compact footprint).*
> 2. ***Will my staff have to babysit it?*** *(No, customers scan QR, upload via browser with no app, and pay UPI).*
> 3. ***What are the real ongoing catches?*** *(No mandatory AMC, zero royalties, owner keeps print revenue).*
> 4. ***When do I get my money back?*** *(Answered live by the payback calculator near the top).*
> 
> *By aligning the visual hierarchy directly with how buyers think, the page naturally drives serious venue operators toward clicking 'Request a callback'."*

---

## What I'd Suggest but Did Not Build

- **Backend Lead Webhook / CRM Integration**: Keep the code strictly front-end and static without requiring environment variables.
- **Pincode Logistics Checker**: Real-time delivery checker would require an active carrier database.
- **Real Photo / Video Testimonial Carousel**: Left as clearly labelled placeholders until official media assets are provided by Snaprint.
- **Multi-Language Support**: Adding Kannada and Hindi options for regional venue operators.

---

## Things I Noticed and Want to Confirm with Snaprint

1. **UPI Only vs. UPI and Card**: Their homepage and FAQ say UPI only, but their Franchise page says UPI or card. Need to confirm.
2. **A4 Only vs. A3 and 4×6 Formats**: Copy currently specifies standard A4 sheets. Need to confirm whether larger formats or photo prints are supported.
3. **Failed-Print and Jam Refund Policy**: How failed sessions or paper jams are credited back to the customer's UPI account.
4. **Printer Technology**: Real pages do not specify laser vs. inkjet technology. Copy currently uses neutral phrasing ("prints A4 sheets" and "paper and ink").

---

## Accessibility & Contrast Verification

Lighthouse results (mobile and desktop): to be added by author after running PageSpeed on the deployed site.

Real contrast ratios computed mathematically (sRGB relative luminance):

- **`#C1121F` on `#F8F7F4` (Brand Deep Red on Light Canvas)**: **5.81 : 1** (passes WCAG AA 4.5:1 minimum)
- **`#FFFFFF` on `#C1121F` (White on Button Red)**: **6.22 : 1** (passes WCAG AA 4.5:1 minimum)
- **`#555550` on `#F8F7F4` (Muted Charcoal on Light Canvas)**: **7.00 : 1** (passes WCAG AA and AAA)
- **`#0e0e0d` on `#F8F7F4` (Primary Charcoal on Light Canvas)**: **18.03 : 1** (passes WCAG AAA)
- **`#E63946` on `#F8F7F4` (Brand Light Red on Canvas)**: **3.89 : 1** (fails WCAG AA for small text; used only for large decorative accents and icons; `#C1121F` is used for all small red text on light backgrounds).

### Typography Scale Verification
- **Minimum text size**: No text anywhere in the project is below 12px (`text-xs`).
- **Navigation & buttons**: Minimum 14px (`text-sm`).
- **Body text**: Minimum 16px (`text-base`).
- **Motion**: Full `@media (prefers-reduced-motion: reduce)` support disables all keyframe animations and transitions site-wide.

> **Note**: Specs and policies not stated on Snaprint's site are marked "To be confirmed with Snaprint".

---

## Credits

Concept built for Snaprint by Seikh. Logo and brand belong to Snaprint.

---

## What I Used

### Tools
- **Framework**: Next.js 16 (App Router) with Turbopack for fast static site generation.
- **Styling**: Tailwind CSS v4 using CSS variables for theme tokens.
- **Typography**: Google Fonts loaded via `next/font` (`Nunito` for rounded brand headings, `Inter` for clean body copy).
- **Editor & Testing**: VS Code, Chrome DevTools (auditing accessibility, color contrast, and device emulation).

### References
- Snaprint official ownership page & FAQ (source of truth for S1 Pro / S1 Pro Max pricing, footprint, warranty, and UPI flow).
- WCAG 2.1 AA Relative Luminance Contrast Guidelines.
- Next.js 16 App Router Static Site Generation (`generateStaticParams`) documentation.

### AI Assistance (What it generated and what I reviewed or changed)
- **Scaffolding & Layout**: Used an AI agent to quickly scaffold initial React component boilerplates and Tailwind grid structures.
- **Audit & Reality Check**: The AI initially hallucinated unverified claims (laser printer tech, toner consumables, fake student footfall numbers, and 24/7 promises). I conducted a strict manual audit, stripped out all unverified tech specs, removed fake testimonials, and explicitly marked unknown parameters as *"To be confirmed with Snaprint"*.
- **UI & UX Refinement**: Removed gimmicky word-by-word headline splitting and repetitive section pill badges in favor of clean semantic typography, and added edge-case handling for pricing margins.

### What I Wrote Myself
- Payback calculator business logic (`src/lib/calc.ts`) including gateway fees and operating days.
- Vector logo component recreation (`src/components/Logo.tsx`) with dark/light variants and mascot details.
- Clean color token system and high-contrast accessible palette (`#C1121F` on canvas).
- Audit changelog and truthful copy curation across all four venue paths.
