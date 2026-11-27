import React from "react";
import Link from "next/link";
import { SITE_CONTENT, BuyerPathItem } from "@/lib/content";

export function BuyerPaths() {
  const getIconForPath = (id: string) => {
    switch (id) {
      case "campus":
        return (
          <svg
            className="w-6 h-6 transition-colors duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
        );
      case "commercial":
        return (
          <svg
            className="w-6 h-6 transition-colors duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        );
      case "apartments":
        return (
          <svg
            className="w-6 h-6 transition-colors duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        );
      case "standalone":
      default:
        return (
          <svg
            className="w-6 h-6 transition-colors duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        );
    }
  };

  return (
    <section id="buyer-paths" className="py-16 md:py-24 bg-white/60 border-y border-charcoal/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal tracking-tight">
            {SITE_CONTENT.buyerPaths.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            {SITE_CONTENT.buyerPaths.sectionSubhead}
          </p>
        </div>

        {/* 4 Cards Grid with Smooth Hover Lifts & Tactile Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SITE_CONTENT.buyerPaths.paths.map((path: BuyerPathItem) => (
            <article
              key={path.id}
              id={`buyer-paths-${path.id}`}
              className="group flex flex-col justify-between bg-white dark:bg-[#181816] rounded-3xl p-6 sm:p-7 border border-charcoal-border dark:border-[#2c2c28] shadow-xs hover:shadow-xl hover:border-brand-red/40 dark:hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 ease-out"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="p-3 rounded-2xl bg-surface-subtle dark:bg-[#222220] text-brand-red-dark dark:text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:scale-105 transition-all duration-300 shadow-xs">
                    {getIconForPath(path.id)}
                  </div>
                  <span className="text-xs font-heading font-bold px-3 py-1 rounded-full bg-surface-subtle dark:bg-[#222220] text-charcoal-muted dark:text-white/70 group-hover:bg-brand-red/10 group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                    {path.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white mb-2 group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                  <Link href={`/franchise/${path.id}`} className="hover:underline focus:outline-none">
                    {path.title}
                  </Link>
                </h3>

                {/* One-Liner Description */}
                <p className="text-sm font-bold text-charcoal/80 dark:text-white/80 mb-3 leading-snug">
                  {path.oneLiner}
                </p>

                {/* Detailed Description */}
                <p className="text-sm text-charcoal-muted dark:text-white/60 leading-relaxed mb-6">
                  {path.detailedDescription}
                </p>
              </div>

              {/* Footer info & Link */}
              <div className="pt-4 border-t border-charcoal-border/70 dark:border-white/10 mt-auto">
                <div className="text-xs text-charcoal-light dark:text-white/50 mb-3">
                  <span className="font-bold text-charcoal dark:text-white">Best Fit: </span>
                  {path.bestFitModel}
                </div>

                <Link
                  href={`/franchise/${path.id}`}
                  className="inline-flex items-center text-sm font-heading font-bold text-brand-red-dark dark:text-brand-red hover:text-brand-red dark:hover:text-white transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded"
                >
                  <span className="relative">
                    {path.ctaText}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-brand-red transition-all duration-200 group-hover:w-full" />
                  </span>
                  <svg
                    className="w-4 h-4 ml-1.5 transition-transform duration-200 group-hover:translate-x-1.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuyerPaths;
