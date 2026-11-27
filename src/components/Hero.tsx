"use client";

import React from "react";
import Button from "./Button";
import { SITE_CONTENT } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28 bg-dot-pattern">
      {/* Decorative ambient gradient orbs (adapts to light and dark modes) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[400px] bg-gradient-to-tr from-brand-red/15 via-brand-red/5 to-amber-300/10 dark:from-brand-red/20 dark:via-brand-red/10 dark:to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-brand-red/10 dark:bg-brand-red/15 rounded-full blur-2xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Top Interactive Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 dark:bg-[#181816]/90 backdrop-blur-sm border border-charcoal-border dark:border-[#2c2c28] text-xs font-heading font-bold text-charcoal dark:text-white shadow-xs hover:border-brand-red/50 hover:shadow-md transition-all duration-200 mb-6 group cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-red" />
              </span>
              <span className="group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors">
                {SITE_CONTENT.hero.badge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl/tight xl:text-6xl/tight font-heading font-black text-charcoal dark:text-white tracking-tight">
              Turn a small{" "}
              <span className="relative inline-block text-brand-red">
                corner
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-brand-red/35 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M0 15 Q 50 0 100 12"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              into a passive print business.
            </h1>

            {/* Subhead */}
            <p className="mt-6 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed max-w-2xl">
              {SITE_CONTENT.hero.subhead}
            </p>

            {/* Interactive CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="#callback" size="lg" variant="primary">
                {SITE_CONTENT.hero.primaryCta}
              </Button>
              <a
                href="#calculator"
                className="group inline-flex items-center justify-center font-heading font-bold text-base px-6 py-4 rounded-xl text-charcoal dark:text-white bg-white/80 dark:bg-[#181816]/80 hover:bg-white dark:hover:bg-[#181816] hover:text-brand-red-dark dark:hover:text-brand-red hover:border-brand-red/40 hover:shadow-md border border-charcoal-border dark:border-[#2c2c28] shadow-xs transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <span>{SITE_CONTENT.hero.secondaryCta}</span>
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform duration-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>

            {/* Highlights Grid with subtle hover cards */}
            <div className="mt-12 pt-8 border-t border-charcoal/10 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {SITE_CONTENT.hero.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/60 dark:bg-[#181816]/60 hover:bg-white dark:hover:bg-[#181816] hover:shadow-sm hover:border-brand-red/30 border border-transparent dark:border-transparent transition-all duration-200"
                >
                  <span className="font-heading font-bold text-sm text-charcoal dark:text-white block">
                    {item.label}
                  </span>
                  <span className="text-xs text-charcoal-muted dark:text-white/60 mt-0.5 block">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Vector Illustration Column with Scroll-Linked Zoom & Rotate Miniature */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[390px] sm:max-w-[430px]">
              {/* Floating Chip 1 (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 px-3.5 py-2 bg-white/95 dark:bg-[#181816]/95 backdrop-blur-md rounded-2xl shadow-lg border border-charcoal-border dark:border-[#2c2c28] animate-soft-float hidden sm:flex items-center gap-2 select-none hover:shadow-xl transition-shadow">
                <span className="w-6 h-6 rounded-lg bg-green-500/10 text-green-700 dark:text-green-400 font-bold flex items-center justify-center text-xs">
                  ⚡
                </span>
                <div className="text-left">
                  <div className="text-xs font-heading font-bold text-charcoal dark:text-white">
                    Self-Service
                  </div>
                  <div className="text-xs text-charcoal-muted dark:text-white/60 font-medium">
                    A4 Prints
                  </div>
                </div>
              </div>

              {/* Floating Chip 2 (Bottom Right) */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 z-20 px-3.5 py-2 bg-charcoal dark:bg-[#222220] text-white rounded-2xl shadow-xl border border-white/10 animate-soft-float-delayed hidden sm:flex items-center gap-2 select-none hover:scale-105 transition-transform">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <div className="text-left">
                  <div className="text-xs font-heading font-bold text-white">
                    ₹0 Staff Overhead
                  </div>
                  <div className="text-xs text-white/70">
                    Direct UPI Payouts
                  </div>
                </div>
              </div>

              {/* Miniature Showcase Card */}
              <div className="relative bg-white/90 dark:bg-[#181816]/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-charcoal-border dark:border-[#2c2c28] shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
                {/* Top Badge */}
                <div className="absolute -top-3.5 right-6 px-3.5 py-1 bg-brand-red text-white text-xs font-heading font-bold rounded-full shadow-md">
                  A4 Prints • Instant UPI
                </div>

                {/* Inline SVG Kiosk Illustration */}
                <svg
                  viewBox="0 0 340 440"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto drop-shadow-sm select-none transition-transform duration-300 group-hover:scale-[1.02]"
                  aria-hidden="true"
                >
                  {/* Background kiosk shadow */}
                  <ellipse cx="170" cy="425" rx="100" ry="10" fill="#E2E0D8" className="dark:fill-[#20201d]" />

                  {/* Pedestal Base */}
                  <rect x="115" y="390" width="110" height="25" rx="6" fill="#1C1C1A" />
                  <rect x="125" y="380" width="90" height="15" rx="3" fill="#2E2E2B" />

                  {/* Main Kiosk Body Chassis */}
                  <rect x="80" y="40" width="180" height="345" rx="20" fill="#0E0E0D" />

                  {/* Top Branding Header in Red */}
                  <path
                    d="M 80 62 C 80 49.85 89.85 40 102 40 L 238 40 C 250.15 40 260 49.85 260 62 L 260 72 L 80 72 Z"
                    fill="#E63946"
                  />

                  {/* Snaprint brand on top header */}
                  <circle cx="106" cy="56" r="5" fill="#FFFFFF" />
                  <text
                    x="118"
                    y="60"
                    fill="#FFFFFF"
                    fontSize="12"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    letterSpacing="0.5"
                  >
                    snaprint
                  </text>

                  {/* Screen Enclosure with subtle glow */}
                  <rect x="96" y="86" width="148" height="155" rx="12" fill="#1A1A18" stroke="#333330" strokeWidth="2" />

                  {/* Touchscreen Glass */}
                  <rect x="104" y="94" width="132" height="139" rx="8" fill="#F8F7F4" />

                  {/* Screen Content: Scan to Print UI */}
                  <text x="170" y="116" textAnchor="middle" fill="#0E0E0D" fontSize="11" fontWeight="bold">
                    Scan QR to Print
                  </text>
                  <text x="170" y="128" textAnchor="middle" fill="#777772" fontSize="8">
                    Upload via Phone & Pay UPI
                  </text>

                  {/* Simulated QR Code on Screen */}
                  <rect x="136" y="136" width="68" height="68" rx="6" fill="#FFFFFF" stroke="#D5D3CC" strokeWidth="1" />
                  {/* QR Finder patterns */}
                  <rect x="142" y="142" width="18" height="18" rx="2" fill="#0E0E0D" />
                  <rect x="146" y="146" width="10" height="10" rx="1" fill="#FFFFFF" />
                  <rect x="149" y="149" width="4" height="4" fill="#0E0E0D" />

                  <rect x="180" y="142" width="18" height="18" rx="2" fill="#0E0E0D" />
                  <rect x="184" y="146" width="10" height="10" rx="1" fill="#FFFFFF" />
                  <rect x="187" y="149" width="4" height="4" fill="#0E0E0D" />

                  <rect x="142" y="180" width="18" height="18" rx="2" fill="#0E0E0D" />
                  <rect x="146" y="184" width="10" height="10" rx="1" fill="#FFFFFF" />
                  <rect x="149" y="187" width="4" height="4" fill="#0E0E0D" />

                  {/* QR mini data dots */}
                  <rect x="166" y="145" width="4" height="4" fill="#E63946" />
                  <rect x="172" y="152" width="4" height="4" fill="#0E0E0D" />
                  <rect x="166" y="162" width="4" height="4" fill="#0E0E0D" />
                  <rect x="176" y="166" width="4" height="4" fill="#0E0E0D" />
                  <rect x="166" y="174" width="4" height="4" fill="#0E0E0D" />
                  <rect x="172" y="184" width="4" height="4" fill="#0E0E0D" />
                  <rect x="180" y="172" width="4" height="4" fill="#E63946" />

                  {/* Small UPI Badge on screen */}
                  <rect x="140" y="212" width="60" height="14" rx="4" fill="#0E0E0D" />
                  <text x="170" y="222" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">
                    ⚡ UPI INSTANT
                  </text>

                  {/* Middle Divider & Status Light */}
                  <line x1="96" y1="255" x2="244" y2="255" stroke="#2B2B28" strokeWidth="2" />
                  <circle cx="170" cy="265" r="4" fill="#22C55E" />
                  <text x="170" y="278" textAnchor="middle" fill="#888882" fontSize="7" fontWeight="600">
                    READY
                  </text>

                  {/* Document Dispensing Slot */}
                  <rect x="110" y="290" width="120" height="12" rx="4" fill="#000000" stroke="#333330" strokeWidth="1" />

                  {/* Dispensing A4 Paper Sheet (White sheet sliding out) */}
                  <path
                    d="M 125 296 L 215 296 L 222 360 L 118 360 Z"
                    fill="#FFFFFF"
                    stroke="#D1CFC7"
                    strokeWidth="1"
                  />
                  {/* Lines on printed document */}
                  <line x1="130" y1="312" x2="208" y2="312" stroke="#E63946" strokeWidth="2.5" />
                  <line x1="130" y1="324" x2="204" y2="324" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="130" y1="334" x2="198" y2="334" stroke="#CBD5E1" strokeWidth="2" />
                  <line x1="130" y1="344" x2="206" y2="344" stroke="#CBD5E1" strokeWidth="2" />

                  {/* Paper Output Tray Base */}
                  <path d="M 112 362 L 228 362 L 224 372 L 116 372 Z" fill="#252522" />
                </svg>

                <div className="mt-4 text-center">
                  <span className="text-xs font-heading font-bold text-charcoal dark:text-white tracking-wide">
                    Snaprint Kiosk (Concept Schematic)
                  </span>
                  <p className="text-xs text-charcoal-muted dark:text-white/60 mt-0.5">
                    Floor footprint: ~55 × 70 cm • Self-service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
