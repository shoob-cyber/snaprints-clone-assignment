import React from "react";
import {
  KioskModel,
  formatINR,
  calculateTotalPriceWithGst,
} from "@/lib/calc";
import Button from "./Button";

export interface PricingCardProps {
  model: KioskModel;
  highlighted?: boolean;
  badge?: string;
  className?: string;
}

/**
 * Reusable Pricing Card Component
 * Highlights the flagship S1 Pro Max in Snaprint's signature dark aesthetic
 * while keeping the S1 Pro in a crisp light card for dramatic visual contrast.
 */
export function PricingCard({
  model,
  highlighted = false,
  badge,
  className = "",
}: PricingCardProps) {
  const totalPriceWithGst = calculateTotalPriceWithGst(model.basePrice);
  const gstAmount = totalPriceWithGst - model.basePrice;

  // Use dark theme for highlighted flagship model, light theme for standard model
  const isDark = highlighted;

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 transition-all duration-300 ease-out hover:-translate-y-1.5 ${
        isDark
          ? "bg-[#0e0e0d] text-white border-2 border-brand-red shadow-2xl ring-4 ring-brand-red/15 hover:shadow-brand-red/20"
          : "bg-white text-charcoal border border-charcoal-border shadow-md hover:shadow-xl hover:border-brand-red/30"
      } ${className}`}
    >
      {/* Top Banner or Badge if present */}
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-heading font-black tracking-wider uppercase bg-brand-red text-white shadow-md shadow-brand-red/25 group-hover:scale-105 transition-transform duration-200">
            {badge}
          </span>
        </div>
      )}

      <div>
        {/* Model Header */}
        <div className="mb-4">
          <div
            className={`inline-block px-3 py-1 rounded-lg text-xs font-bold mb-2 ${
              isDark
                ? "bg-white/10 text-white/80"
                : "bg-surface-subtle text-charcoal-muted"
            }`}
          >
            Prints A4 • Self-service
          </div>
          <h3
            className={`text-2xl sm:text-3xl font-heading font-black transition-colors duration-200 ${
              isDark ? "text-white group-hover:text-brand-red" : "text-charcoal group-hover:text-brand-red-dark"
            }`}
          >
            {model.name}
          </h3>
          <p
            className={`mt-1 text-sm leading-relaxed ${
              isDark ? "text-white/70" : "text-charcoal-muted"
            }`}
          >
            {model.tagline}
          </p>
        </div>

        {/* Pricing Block */}
        <div
          className={`my-6 pb-6 border-b ${
            isDark ? "border-white/10" : "border-charcoal-border"
          }`}
        >
          <div className="flex items-baseline gap-2">
            <span
              className={`text-3xl sm:text-4xl font-heading font-black tracking-tight ${
                isDark ? "text-white" : "text-charcoal"
              }`}
            >
              {formatINR(model.basePrice)}
            </span>
            <span
              className={`text-sm font-medium ${
                isDark ? "text-white/70" : "text-charcoal-muted"
              }`}
            >
              + 18% GST
            </span>
          </div>
          <div
            className={`mt-1 text-xs flex items-center gap-1.5 ${
              isDark ? "text-white/60" : "text-charcoal-muted"
            }`}
          >
            <span>Total with GST:</span>
            <span
              className={`font-semibold ${
                isDark ? "text-white font-bold" : "text-charcoal"
              }`}
            >
              {formatINR(totalPriceWithGst)}
            </span>
            <span
              className={`text-xs ${
                isDark ? "text-white/40" : "text-charcoal-light"
              }`}
            >
              (₹{gstAmount.toLocaleString("en-IN")} GST)
            </span>
          </div>
        </div>

        {/* Capacity & Target Footfall Box */}
        <div
          className={`space-y-3 mb-6 p-4 rounded-2xl transition-colors duration-200 ${
            isDark
              ? "bg-white/[0.06] border border-white/10"
              : "bg-surface-subtle group-hover:bg-brand-red/[0.03]"
          }`}
        >
          <div className="flex items-start gap-2.5 text-sm">
            <span
              className="text-brand-red mt-0.5 shrink-0"
              aria-hidden="true"
            >
              📄
            </span>
            <div>
              <span className={`font-bold ${isDark ? "text-white" : "text-charcoal"}`}>
                Capacity:{" "}
              </span>
              <span className={isDark ? "text-white/80" : "text-charcoal-muted"}>
                {model.capacitySheets.toLocaleString("en-IN")} sheets (A4)
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2.5 text-sm">
            <span
              className="text-brand-red mt-0.5 shrink-0"
              aria-hidden="true"
            >
              👥
            </span>
            <div>
              <span className={`font-bold ${isDark ? "text-white" : "text-charcoal"}`}>
                Ideal Venue:{" "}
              </span>
              <span className={isDark ? "text-white/80" : "text-charcoal-muted"}>
                {model.footfallTarget}
              </span>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="mb-8">
          <h4
            className={`text-xs font-heading font-bold uppercase tracking-wider mb-3 ${
              isDark ? "text-white/60" : "text-charcoal-muted"
            }`}
          >
            Key specs
          </h4>
          <ul className="space-y-2.5" role="list">
            {model.specs.map((spec, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 text-sm ${
                  isDark ? "text-white/90" : "text-charcoal"
                }`}
              >
                <svg
                  className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="leading-snug">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Shared CTA Button */}
      <div className="pt-2">
        <Button
          href="#callback"
          fullWidth
          variant={isDark ? "primary" : "secondary"}
          size="md"
        >
          Request a callback
        </Button>
      </div>
    </article>
  );
}

export default PricingCard;
