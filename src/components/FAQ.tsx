"use client";

import React, { useState } from "react";
import { SITE_CONTENT, FAQItem } from "@/lib/content";

export function FAQ() {
  // Store set of open item IDs (first item open by default for discoverability)
  const [openIds, setOpenIds] = useState<string[]>(["cost"]);
  const faqItems = SITE_CONTENT.faq.items;

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-red/10 text-brand-red-dark dark:text-brand-red text-xs font-heading font-bold tracking-wide uppercase mb-3">
            Clear Answers & SLAs
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
            {SITE_CONTENT.faq.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed">
            {SITE_CONTENT.faq.sectionSubhead}
          </p>
        </div>

        {/* Accessible Accordion List with Smooth Fade & Grid Height Transitions */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {faqItems.map((item: FAQItem) => {
            const isOpen = openIds.includes(item.id);
            const buttonId = `faq-btn-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 ease-out overflow-hidden ${
                  isOpen
                    ? "bg-white dark:bg-[#181816] border-brand-red/40 dark:border-brand-red/50 shadow-md ring-1 ring-brand-red/10"
                    : "bg-white/90 dark:bg-[#181816]/90 border-charcoal-border dark:border-[#2c2c28] hover:border-brand-red/30 hover:bg-white dark:hover:bg-[#181816] shadow-2xs hover:shadow-sm"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between text-left p-5 sm:p-6 text-charcoal dark:text-white hover:bg-brand-red/[0.02] active:bg-brand-red/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep cursor-pointer transition-colors duration-200"
                  >
                    <span
                      className={`font-heading font-bold text-base sm:text-lg pr-4 transition-colors duration-200 ${
                        isOpen ? "text-brand-red-dark dark:text-brand-red" : "text-charcoal dark:text-white"
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`p-2 rounded-full shrink-0 transition-all duration-300 ease-out ${
                        isOpen
                          ? "rotate-180 bg-brand-red text-white shadow-sm"
                          : "bg-surface-subtle dark:bg-[#222220] text-charcoal-muted dark:text-white/60 hover:bg-charcoal/10"
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>

                {/* Smooth CSS Grid Row + Opacity Transition */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 pt-1 text-sm sm:text-base text-charcoal-muted dark:text-white/70 leading-relaxed border-t border-surface-subtle/80 dark:border-white/10">
                      <p className="pt-2">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Small note at bottom of FAQ */}
        <div className="mt-8 text-center text-xs text-charcoal-light dark:text-white/50">
          Have a specific technical or space question? Our hardware engineering team can clarify exact specs.
        </div>
      </div>
    </section>
  );
}

export default FAQ;
