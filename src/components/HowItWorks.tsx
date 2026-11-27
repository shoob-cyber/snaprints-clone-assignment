"use client";

import React, { useState } from "react";
import { SITE_CONTENT, HowItWorksStep } from "@/lib/content";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = SITE_CONTENT.howItWorks.steps;

  // Next and Back navigation for the interactive stepper
  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-[#0e0e0d] text-white relative overflow-hidden scroll-mt-16 border-y border-white/10"
    >
      {/* Decorative ambient dark gradient orbs */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white tracking-tight">
            {SITE_CONTENT.howItWorks.sectionTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            {SITE_CONTENT.howItWorks.sectionSubhead}
          </p>
        </div>

        {/* Stepper Grid: Interactive Cards & Phone Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: 4 Step Cards */}
          <div className="lg:col-span-7 space-y-4">
            {steps.map((step: HowItWorksStep, index: number) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className={`group p-5 sm:p-6 rounded-3xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white/[0.09] border-brand-red shadow-2xl ring-2 ring-brand-red/30 -translate-y-0.5"
                      : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20 active:scale-[0.99]"
                  }`}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isActive}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveStep(index);
                    }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-heading font-black text-base sm:text-lg px-3.5 py-1.5 rounded-2xl transition-all duration-200 ${
                        isActive
                          ? "bg-brand-red text-white shadow-lg shadow-brand-red/30 scale-105"
                          : "bg-white/10 text-white/70 group-hover:bg-brand-red/20 group-hover:text-white"
                      }`}
                    >
                      {step.number}
                    </span>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3
                          className={`text-lg sm:text-xl font-heading font-bold transition-colors duration-200 ${
                            isActive
                              ? "text-brand-red"
                              : "text-white group-hover:text-brand-red"
                          }`}
                        >
                          {step.title}
                        </h3>
                        {isActive && (
                          <span className="text-xs font-heading font-bold text-white bg-brand-red/30 border border-brand-red/40 px-3 py-1 rounded-full animate-in fade-in">
                            Step {index + 1} of 4
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-white/80 leading-relaxed">
                        {step.description}
                      </p>
                      <p className="mt-2 text-xs font-semibold text-white/50">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Step navigation controls */}
            <div className="flex items-center justify-between pt-4 px-2">
              <span className="text-xs text-white/50 font-medium">
                Click any step or use controls to preview live phone flow
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous step"
                  className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-brand-red hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next step"
                  className="p-2.5 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-brand-red hover:border-brand-red hover:shadow-lg hover:shadow-brand-red/20 active:scale-95 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Inline SVG Phone Mockup reflecting the active step */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] bg-[#1a1a18] rounded-[44px] p-4 shadow-2xl border-4 border-[#2c2c28] hover:border-brand-red/30 transition-colors duration-300">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-[#0a0a09] rounded-full mx-auto mb-3" />

              {/* Phone Screen Canvas (Bright white/canvas for realistic UI contrast) */}
              <div className="bg-canvas text-charcoal rounded-[32px] p-5 h-[430px] flex flex-col justify-between overflow-hidden border border-charcoal/10 relative shadow-inner">
                {/* Top App Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-charcoal-border">
                  <span className="font-heading font-black text-xs text-charcoal">
                    <span className="text-brand-red">snap</span>rint web
                  </span>
                  <span className="text-xs font-semibold text-charcoal-light bg-surface-subtle px-2 py-0.5 rounded-md">
                    A4 Instant
                  </span>
                </div>

                {/* Dynamic Screen Content based on activeStep */}
                {/* Step 0: Scan QR */}
                {activeStep === 0 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-20 h-20 rounded-2xl bg-white p-2 border border-charcoal-border shadow-xs flex items-center justify-center mb-3">
                      <svg className="w-14 h-14 text-charcoal" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zm-3 2h2v3h-2v-3zm3 3h3v3h-3v-3zm-5 1h2v2h-2v-2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      Camera QR Detected
                    </span>
                    <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
                      Point phone at kiosk screen to open secure session instantly.
                    </p>
                  </div>
                )}

                {/* Step 1: Upload File */}
                {activeStep === 1 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-20 h-20 rounded-full bg-brand-red/10 text-brand-red flex items-center justify-center mb-3">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      Select A4 Document
                    </span>
                    <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
                      Choose PDF, document or image files from your phone with print preview.
                    </p>
                  </div>
                )}

                {/* Step 2: Pay by UPI */}
                {/* UPI only or UPI and card? Snaprint's pages differ. Confirm with Snaprint. */}
                {activeStep === 2 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-20 h-20 rounded-2xl bg-white p-3 border border-charcoal-border shadow-xs flex flex-col items-center justify-center mb-3">
                      <span className="font-heading font-black text-sm text-brand-red-dark">UPI</span>
                      <span className="text-xs text-charcoal-muted font-bold">Pay ₹12.00</span>
                      <span className="text-xs text-charcoal-light">Sample screen</span>
                    </div>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      Pay by UPI
                    </span>
                    <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
                      Approve via UPI on your phone. No loose cash.
                    </p>
                  </div>
                )}

                {/* Step 3: Collect Prints */}
                {activeStep === 3 && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center p-2 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-20 h-20 rounded-2xl bg-white p-3 border border-charcoal-border shadow-xs flex flex-col items-center justify-center mb-3">
                      <svg className="w-10 h-10 text-brand-red-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      Dispensing A4 Prints
                    </span>
                    <p className="text-xs text-charcoal-muted mt-1 max-w-[200px]">
                      Crisp A4 prints slide out into the kiosk tray in seconds.
                    </p>
                  </div>
                )}

                {/* Bottom Status bar with indicator dots */}
                <div className="p-3 bg-white rounded-2xl border border-charcoal-border text-center shadow-xs">
                  <span className="text-xs font-heading font-bold text-charcoal">
                    {steps[activeStep].title}
                  </span>
                  <div className="flex justify-center gap-1.5 mt-2">
                    {steps.map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeStep === i
                            ? "w-6 bg-brand-red"
                            : "w-2 bg-charcoal-border"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
