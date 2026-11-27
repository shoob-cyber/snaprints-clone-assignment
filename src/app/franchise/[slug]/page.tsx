import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import CallbackForm from "@/components/CallbackForm";
import { KIOSK_MODELS } from "@/lib/calc";
import { FRANCHISE_DETAILS, FranchisePathDetail } from "@/lib/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Ensure route is strictly statically rendered at build time with no dynamic URL bailout
export const dynamic = "force-static";
export const dynamicParams = false;

// Pre-render all 4 buyer path pages statically at build time for Vercel
export function generateStaticParams() {
  return [
    { slug: "campus" },
    { slug: "commercial" },
    { slug: "apartments" },
    { slug: "standalone" },
  ];
}

// Dynamic SEO metadata for each buyer path
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = FRANCHISE_DETAILS[slug];

  if (!detail) {
    return {
      title: "Franchise Path Not Found | Snaprint",
    };
  }

  return {
    title: `${detail.title} — Snaprint Self-Service Print Kiosk Franchise`,
    description: detail.heroSubhead,
    openGraph: {
      title: `${detail.title} — Snaprint Kiosk Franchise`,
      description: detail.heroSubhead,
    },
  };
}

export default async function FranchiseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const detail: FranchisePathDetail | undefined = FRANCHISE_DETAILS[slug];

  if (!detail) {
    notFound();
  }

  const recommendedModel = KIOSK_MODELS[detail.recommendedModelId];

  return (
    <>
      <Nav />

      <main id="main" className="flex-1 bg-canvas dark:bg-[#0e0e0d] transition-colors duration-300">
        {/* Top Breadcrumb & Hero */}
        <section className="pt-10 pb-16 md:pt-14 md:pb-24 border-b border-charcoal/10 dark:border-white/10 bg-dot-pattern relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Home link */}
            <div className="mb-8">
              <Link
                href="/#buyer-paths"
                className="inline-flex items-center text-sm font-heading font-bold text-charcoal-muted dark:text-white/70 hover:text-brand-red dark:hover:text-brand-red transition-colors group"
              >
                <svg
                  className="w-4 h-4 mr-1.5 transition-transform duration-200 group-hover:-translate-x-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Back to all franchise paths</span>
              </Link>
            </div>

            {/* Path Hero Content */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red-dark dark:text-brand-red text-xs font-heading font-bold tracking-wide uppercase mb-4 shadow-xs">
                {detail.badge}
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-charcoal dark:text-white tracking-tight leading-tight">
                {detail.heroHeadline}
              </h1>
              <p className="mt-6 text-base sm:text-xl text-charcoal-muted dark:text-white/70 leading-relaxed">
                {detail.heroSubhead}
              </p>
            </div>

            {/* Space needed callout */}
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#181816] border border-charcoal-border dark:border-[#2c2c28] text-sm text-charcoal dark:text-white shadow-xs">
              <span className="text-brand-red-dark dark:text-brand-red font-bold">Space needed:</span>
              <span>about 55 x 70 cm</span>
            </div>
          </div>
        </section>

        {/* The Problem We Solve Section */}
        <section className="py-14 sm:py-20 bg-surface-subtle/50 dark:bg-black/20 border-b border-charcoal/5 dark:border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-[#181816] p-6 sm:p-10 rounded-3xl border border-charcoal-border dark:border-[#2c2c28] shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 text-amber-700 dark:text-amber-300 font-heading font-bold text-xs uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  Operational Challenge
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-charcoal dark:text-white">
                Why Traditional Printing Fails in {detail.title}
              </h2>
              <p className="mt-3 text-base text-charcoal-muted dark:text-white/70 leading-relaxed">
                {detail.problemStatement}
              </p>
            </div>
          </div>
        </section>

        {/* What Snaprint Actually Provides (4 Core Deliverables) */}
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
                What Snaprint Provides for Your Venue
              </h2>
              <p className="mt-3 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed">
                Everything required to turn a small corner (about 55 × 70 cm) into a seamless self-service print station with zero operational headache.
              </p>
            </div>

            {/* 4 Deliverables Cards with numbered index steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {detail.deliverables.map((deliv, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#181816] p-6 sm:p-8 rounded-3xl border border-charcoal-border dark:border-[#2c2c28] shadow-sm hover:shadow-xl hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                >
                  <span className="font-heading font-black text-sm text-brand-red-dark dark:text-brand-red shrink-0 w-10 h-10 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-charcoal dark:text-white mb-2">
                      {deliv.title}
                    </h3>
                    <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed">
                      {deliv.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Hardware Section */}
        <section className="py-16 sm:py-24 bg-surface-subtle/50 dark:bg-black/30 border-y border-charcoal/5 dark:border-white/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
                Recommended Kiosk Model
              </h2>
              <p className="mt-2 text-sm sm:text-base text-charcoal-muted dark:text-white/70">
                Engineered specifically for {detail.title.toLowerCase()} volume and footfall patterns.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <PricingCard
                model={recommendedModel}
                highlighted={true}
                badge={`Recommended for ${detail.title}`}
              />
            </div>
          </div>
        </section>

        {/* Query & Callback Card Section */}
        <CallbackForm
          initialSpaceType={detail.id}
          title={detail.queryHeadline}
          subhead="Tell us about your space and we'll call you back."
        />
      </main>

      <Footer />
    </>
  );
}
