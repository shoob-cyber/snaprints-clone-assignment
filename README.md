# Snaprint — Self-Service Print Kiosk Concept Homepage

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

## What I Changed vs. the Current Site

- **Surfaced the four buyer paths on the homepage and rebuilt them as simpler pages (Snaprint's site already has franchise sub-pages).**
- **Positioned the Payback Calculator Near the Top**: Gives potential franchise buyers immediate visibility into monthly returns and payback timelines.
- **Strengthened Trust Details**: Highlighted the 1-year warranty, zero royalties, no mandatory AMC, lifetime software updates, and 48-hour hardware support on the homepage.
- **High-Definition Vector Logo**: Recreated the Snaprint mascot and wordmark as an inline SVG so it scales crisply on all screen resolutions and dark mode.
- **Cleaned Up Visual Contrast**: Ensured all text passes WCAG AA accessibility contrast guidelines.

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
