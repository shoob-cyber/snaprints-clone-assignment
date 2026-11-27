import React from "react";
import { KIOSK_MODELS } from "@/lib/calc";
import { SITE_CONTENT } from "@/lib/content";
import PricingCard from "./PricingCard";

export function ModelCards() {
  const s1Pro = KIOSK_MODELS["s1-pro"];
  const s1ProMax = KIOSK_MODELS["s1-pro-max"];

  return (
    <section id="pricing" className="py-16 md:py-24 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
            {SITE_CONTENT.pricing.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed">
            {SITE_CONTENT.pricing.sectionSubhead}
          </p>
        </div>

        {/* Pricing Cards Grid using the single reusable PricingCard component */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          <PricingCard
            model={s1Pro}
            badge="Best for Society Clubhouses & Cafes"
          />
          <PricingCard
            model={s1ProMax}
            highlighted={true}
            badge="Most Popular for Campuses"
          />
        </div>

        {/* Bottom tax note */}
        <div className="mt-10 text-center max-w-2xl mx-auto text-xs text-charcoal-light dark:text-white/50">
          <p>{SITE_CONTENT.pricing.note}</p>
        </div>
      </div>
    </section>
  );
}

export default ModelCards;
