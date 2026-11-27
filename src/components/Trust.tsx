import React from "react";
import { SITE_CONTENT, TrustItem } from "@/lib/content";

// Source: Snaprint franchise page. Confirm with Snaprint before launch.

export function Trust() {
  const trustFeatures = SITE_CONTENT.trust.features;

  return (
    <section id="trust" className="py-16 md:py-24 bg-white/70 dark:bg-black/20 border-t border-charcoal/5 dark:border-white/5 scroll-mt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
            {SITE_CONTENT.trust.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed">
            {SITE_CONTENT.trust.sectionSubhead}
          </p>
        </div>

        {/* Feature Grid: 6 Trust Pillars with Smooth Hover Lifts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {trustFeatures.map((item: TrustItem) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-[#181816] rounded-3xl p-6 sm:p-7 border border-charcoal-border dark:border-[#2c2c28] shadow-xs hover:shadow-xl hover:border-brand-red/40 hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider px-3 py-1 rounded-lg bg-surface-subtle dark:bg-[#222220] text-charcoal dark:text-white/80 group-hover:bg-brand-red/10 group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                    {item.badge}
                  </span>
                  <div className="p-2 rounded-xl bg-surface-subtle dark:bg-[#222220] group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                    <svg
                      className="w-5 h-5 text-brand-red-dark dark:text-brand-red group-hover:text-white transition-colors duration-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white mb-2 group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-muted dark:text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clearly Labelled Placeholder Boxes for Photos and Testimonials */}
        {/* Do NOT invent testimonials, customer counts, or statistics. */}
        <div className="pt-8 border-t border-charcoal-border dark:border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-xl font-heading font-bold text-charcoal dark:text-white">
              Photos & Feedback
            </h3>
            <p className="text-xs text-charcoal-light dark:text-white/50 mt-1">
              Official photos and owner feedback to be provided by Snaprint
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Photo Placeholder Box */}
            <div className="group rounded-3xl border-2 border-dashed border-charcoal-border dark:border-[#2c2c28] bg-surface-subtle/50 dark:bg-[#181816]/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px] hover:border-brand-red/40 hover:bg-white dark:hover:bg-[#181816] hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#222220] border border-charcoal-border dark:border-[#2c2c28] flex items-center justify-center text-charcoal-light dark:text-white/60 mb-3 group-hover:scale-105 group-hover:text-brand-red group-hover:border-brand-red/30 transition-all duration-200 shadow-xs">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <span className="font-heading font-bold text-sm text-charcoal dark:text-white group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                {SITE_CONTENT.trust.placeholders.photoBoxText}
              </span>
              <p className="text-xs text-charcoal-muted dark:text-white/60 mt-1.5 max-w-sm">
                {SITE_CONTENT.trust.placeholders.photoBoxSubtext}
              </p>
              <span className="mt-3 text-xs font-heading font-bold text-charcoal-light dark:text-white/50 uppercase tracking-wider">
                Photo assets to be provided by Snaprint
              </span>
            </div>

            {/* Testimonials Placeholder Box */}
            <div className="group rounded-3xl border-2 border-dashed border-charcoal-border dark:border-[#2c2c28] bg-surface-subtle/50 dark:bg-[#181816]/50 p-8 flex flex-col items-center justify-center text-center min-h-[220px] hover:border-brand-red/40 hover:bg-white dark:hover:bg-[#181816] hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#222220] border border-charcoal-border dark:border-[#2c2c28] flex items-center justify-center text-charcoal-light dark:text-white/60 mb-3 group-hover:scale-105 group-hover:text-brand-red group-hover:border-brand-red/30 transition-all duration-200 shadow-xs">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </div>
              <span className="font-heading font-bold text-sm text-charcoal dark:text-white group-hover:text-brand-red-dark dark:group-hover:text-brand-red transition-colors duration-200">
                {SITE_CONTENT.trust.placeholders.testimonialBoxText}
              </span>
              <p className="text-xs text-charcoal-muted dark:text-white/60 mt-1.5 max-w-sm">
                {SITE_CONTENT.trust.placeholders.testimonialBoxSubtext}
              </p>
              <span className="mt-3 text-xs font-heading font-bold text-charcoal-light dark:text-white/50 uppercase tracking-wider">
                Unverified stats omitted per strict integrity guidelines
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trust;
