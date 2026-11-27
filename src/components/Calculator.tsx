"use client";

import React, { useState, useId } from "react";
import {
  KIOSK_MODELS,
  CalculatorInputs,
  runCalculator,
  formatINR,
  formatNumberIN,
} from "@/lib/calc";
import { SITE_CONTENT } from "@/lib/content";
import Button from "./Button";

export function Calculator() {
  const [modelId, setModelId] = useState<"s1-pro" | "s1-pro-max">("s1-pro");
  const [sidesPerDay, setSidesPerDay] = useState<number>(
    SITE_CONTENT.calculator.defaults.sidesPerDay
  );
  const [pricePerSide, setPricePerSide] = useState<number>(
    SITE_CONTENT.calculator.defaults.pricePerSide
  );
  const [costPerSide, setCostPerSide] = useState<number>(
    SITE_CONTENT.calculator.defaults.costPerSide
  );
  const [gatewayFeePercent, setGatewayFeePercent] = useState<number>(
    SITE_CONTENT.calculator.defaults.gatewayFeePercent
  );
  const [workingDaysPerMonth, setWorkingDaysPerMonth] = useState<number>(
    SITE_CONTENT.calculator.defaults.workingDaysPerMonth
  );

  // Generate unique IDs for accessibility
  const idPrefix = useId();
  const modelSelectId = `${idPrefix}-model`;
  const sidesId = `${idPrefix}-sides`;
  const priceId = `${idPrefix}-price`;
  const costId = `${idPrefix}-cost`;
  const feeId = `${idPrefix}-fee`;
  const daysId = `${idPrefix}-days`;

  // Run calculation
  const calcInputs: CalculatorInputs = {
    modelId,
    sidesPerDay,
    pricePerSide,
    costPerSide,
    gatewayFeePercent,
    workingDaysPerMonth,
  };

  const results = runCalculator(calcInputs);
  const selectedModel = KIOSK_MODELS[modelId];

  return (
    <section id="calculator" className="py-16 md:py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight">
            {SITE_CONTENT.calculator.sectionTitle}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted dark:text-white/70 leading-relaxed">
            {SITE_CONTENT.calculator.sectionSubhead}
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-white dark:bg-[#181816] rounded-3xl p-6 sm:p-8 border border-charcoal-border dark:border-[#2c2c28] shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-lg font-heading font-bold text-charcoal dark:text-white pb-4 border-b border-charcoal-border dark:border-[#2c2c28] mb-6">
              Adjust Your Operating Parameters
            </h3>

            <div className="space-y-6">
              {/* 1. Model Selector */}
              <div>
                <label
                  htmlFor={modelSelectId}
                  className="block text-sm font-heading font-bold text-charcoal dark:text-white mb-2"
                >
                  {SITE_CONTENT.calculator.labels.modelSelect}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(["s1-pro", "s1-pro-max"] as const).map((mId) => {
                    const m = KIOSK_MODELS[mId];
                    const isSelected = modelId === mId;
                    return (
                      <button
                        key={mId}
                        type="button"
                        onClick={() => setModelId(mId)}
                        className={`flex flex-col text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer active:scale-[0.98] ${
                          isSelected
                            ? "bg-brand-red/5 dark:bg-brand-red/10 border-brand-red text-charcoal dark:text-white ring-2 ring-brand-red/20 shadow-xs"
                            : "bg-surface-subtle dark:bg-[#222220] border-charcoal-border dark:border-[#2c2c28] text-charcoal-muted dark:text-white/70 hover:border-brand-red/40 hover:bg-white dark:hover:bg-[#1c1c1a]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-sm text-charcoal dark:text-white">
                            {m.name}
                          </span>
                          {isSelected && (
                            <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                          )}
                        </div>
                        <span className="text-xs font-semibold text-charcoal-muted dark:text-white/70 mt-1">
                          {formatINR(m.basePrice)} + 18% GST
                        </span>
                        <span className="text-[12px] text-charcoal-light dark:text-white/50 mt-1">
                          {m.capacitySheets} sheets • {mId === "s1-pro" ? "Standard" : "High footfall"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Sides Printed Per Day Slider */}
              <div className="bg-surface-subtle dark:bg-[#222220] p-5 rounded-2xl hover:bg-surface-subtle/80 dark:hover:bg-[#262624] transition-colors">
                <div className="flex justify-between items-baseline mb-2">
                  <label
                    htmlFor={sidesId}
                    className="text-sm font-heading font-bold text-charcoal dark:text-white"
                  >
                    {SITE_CONTENT.calculator.labels.sidesSlider}
                  </label>
                  <span className="text-base font-heading font-black text-brand-red-dark dark:text-brand-red">
                    {formatNumberIN(sidesPerDay)}{" "}
                    <span className="text-xs font-medium text-charcoal-muted dark:text-white/60">
                      sides/day
                    </span>
                  </span>
                </div>
                <input
                  id={sidesId}
                  type="range"
                  min={20}
                  max={600}
                  step={10}
                  value={sidesPerDay}
                  onChange={(e) => setSidesPerDay(Number(e.target.value))}
                  className="w-full h-2.5 bg-charcoal-border dark:bg-[#333330] rounded-lg appearance-none cursor-pointer accent-brand-red transition-all"
                  aria-valuemin={20}
                  aria-valuemax={600}
                  aria-valuenow={sidesPerDay}
                />
                <div className="flex justify-between text-xs text-charcoal-light dark:text-white/50 mt-1.5 font-medium">
                  <span>20</span>
                  <span>150</span>
                  <span>350</span>
                  <span>600</span>
                </div>
              </div>

              {/* 3. Price Per Side & Cost Per Side (2-col grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Customer Price Per Side */}
                <div className="bg-surface-subtle dark:bg-[#222220] p-4 rounded-2xl">
                  <div className="flex justify-between items-baseline mb-2">
                    <label
                      htmlFor={priceId}
                      className="text-xs font-heading font-bold text-charcoal dark:text-white"
                    >
                      {SITE_CONTENT.calculator.labels.priceInput}
                    </label>
                    <span className="text-sm font-heading font-black text-charcoal dark:text-white">
                      ₹{pricePerSide}
                    </span>
                  </div>
                  <input
                    id={priceId}
                    type="range"
                    min={1}
                    max={15}
                    step={0.5}
                    value={pricePerSide}
                    onChange={(e) => setPricePerSide(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal-border dark:bg-[#333330] rounded-lg appearance-none cursor-pointer accent-brand-red"
                    aria-valuemin={1}
                    aria-valuemax={15}
                    aria-valuenow={pricePerSide}
                  />
                  <div className="flex justify-between text-xs text-charcoal-light dark:text-white/50 mt-1">
                    <span>₹1</span>
                    <span>₹5</span>
                    <span>₹15</span>
                  </div>
                </div>

                {/* Consumable Cost Per Side */}
                <div className="bg-surface-subtle dark:bg-[#222220] p-4 rounded-2xl">
                  <div className="flex justify-between items-baseline mb-2">
                    <label
                      htmlFor={costId}
                      className="text-xs font-heading font-bold text-charcoal dark:text-white"
                    >
                      {SITE_CONTENT.calculator.labels.costInput}
                    </label>
                    <span className="text-sm font-heading font-black text-charcoal dark:text-white">
                      ₹{costPerSide}
                    </span>
                  </div>
                  <input
                    id={costId}
                    type="range"
                    min={0.5}
                    max={3}
                    step={0.25}
                    value={costPerSide}
                    onChange={(e) => setCostPerSide(Number(e.target.value))}
                    className="w-full h-2 bg-charcoal-border dark:bg-[#333330] rounded-lg appearance-none cursor-pointer accent-brand-red"
                    aria-valuemin={0.5}
                    aria-valuemax={3}
                    aria-valuenow={costPerSide}
                  />
                  <div className="flex justify-between text-xs text-charcoal-light dark:text-white/50 mt-1">
                    <span>₹0.50</span>
                    <span>₹1.00</span>
                    <span>₹3.00</span>
                  </div>
                </div>
              </div>

              {/* Edge Case Helper: Price <= Cost */}
              {pricePerSide <= costPerSide && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 flex items-center gap-2">
                  <span className="font-bold">Note:</span>
                  <span>Customer price (₹{pricePerSide}) is currently less than or equal to estimated paper & ink cost (₹{costPerSide}).</span>
                </div>
              )}

              {/* 4. Secondary Inputs: Gateway Fee & Working Days */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Gateway Fee % */}
                <div className="p-4 rounded-2xl border border-charcoal-border dark:border-[#2c2c28] hover:border-brand-red/30 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      htmlFor={feeId}
                      className="text-xs font-bold text-charcoal dark:text-white"
                    >
                      {SITE_CONTENT.calculator.labels.gatewayFeeInput}
                    </label>
                    <span className="text-xs font-bold text-charcoal dark:text-white">
                      {gatewayFeePercent}%
                    </span>
                  </div>
                  <input
                    id={feeId}
                    type="number"
                    min={0}
                    max={5}
                    step={0.5}
                    value={gatewayFeePercent}
                    onChange={(e) =>
                      setGatewayFeePercent(Math.max(0, Number(e.target.value)))
                    }
                    className="w-full mt-1 px-3 py-1.5 text-sm rounded-lg border border-charcoal-border dark:border-[#2c2c28] bg-white dark:bg-[#121210] text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red-deep transition-all"
                  />
                  <p className="text-xs text-charcoal-light dark:text-white/50 mt-1">
                    Snaprint&apos;s own calculator uses 2%.
                  </p>
                </div>

                {/* Working Days */}
                <div className="p-4 rounded-2xl border border-charcoal-border dark:border-[#2c2c28] hover:border-brand-red/30 transition-colors">
                  <div className="flex justify-between items-center mb-1">
                    <label
                      htmlFor={daysId}
                      className="text-xs font-bold text-charcoal dark:text-white"
                    >
                      {SITE_CONTENT.calculator.labels.workingDaysInput}
                    </label>
                    <span className="text-xs font-bold text-charcoal dark:text-white">
                      {workingDaysPerMonth} days
                    </span>
                  </div>
                  <input
                    id={daysId}
                    type="number"
                    min={15}
                    max={31}
                    step={1}
                    value={workingDaysPerMonth}
                    onChange={(e) =>
                      setWorkingDaysPerMonth(
                        Math.min(31, Math.max(1, Number(e.target.value)))
                      )
                    }
                    className="w-full mt-1 px-3 py-1.5 text-sm rounded-lg border border-charcoal-border dark:border-[#2c2c28] bg-white dark:bg-[#121210] text-charcoal dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-red-deep transition-all"
                  />
                  <p className="text-xs text-charcoal-light dark:text-white/50 mt-1">
                    Operating days per month
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Results Display with Ambient Glass Finish */}
          <div
            className="lg:col-span-5 relative bg-charcoal text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between overflow-hidden group border border-white/10"
            aria-live="polite"
          >
            {/* Ambient top red glow */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 bg-brand-red/25 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-white/70">
                  Estimated Financial Return
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-white">
                  {selectedModel.name}
                </span>
              </div>

              {/* Primary Output: Payback Months */}
              <div className="my-6">
                <div className="text-xs font-medium text-white/70 mb-1">
                  Estimated Payback Period
                </div>
                {results.isProfitable && results.paybackMonths !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-heading font-black text-brand-red tracking-tight drop-shadow-sm">
                      {results.paybackMonths}
                    </span>
                    <span className="text-xl font-heading font-bold text-white">
                      months
                    </span>
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-brand-red/20 border border-brand-red/30 text-white text-sm">
                    <p className="font-bold">No payback at current settings</p>
                    <p className="text-xs text-white/80 mt-1">
                      Increase price per side or reduce paper/ink cost to see a positive return.
                    </p>
                  </div>
                )}
              </div>

              {/* Secondary Output: Monthly & Annual Profit */}
              <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div>
                  <div className="text-xs text-white/60">Estimated Monthly Profit</div>
                  <div className="text-2xl font-heading font-black text-white mt-0.5">
                    {results.isProfitable ? formatINR(results.monthlyProfit) : "₹0"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    Net after paper, ink & UPI
                  </div>
                </div>

                <div>
                  <div className="text-xs text-white/60">Annualized Profit</div>
                  <div className="text-2xl font-heading font-black text-white mt-0.5">
                    {results.isProfitable ? formatINR(results.annualProfit) : "₹0"}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    Based on 12 operating months
                  </div>
                </div>
              </div>

              {/* Breakdown Details */}
              <div className="space-y-2 text-xs text-white/70 mb-6">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Gross Monthly Revenue:</span>
                  <span className="text-white font-medium">
                    {formatINR(results.monthlyRevenue)}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Net Profit Per Side Printed:</span>
                  <span className="text-white font-medium">
                    ₹{results.profitPerSide.toFixed(2)} / side
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span>Total Kiosk Price (incl. 18% GST):</span>
                  <span className="text-white font-medium">
                    {formatINR(results.totalPriceWithGst)}
                  </span>
                </div>
              </div>
            </div>

            {/* Disclaimer & CTA */}
            <div className="relative z-10 pt-4 border-t border-white/10 space-y-4">
              <p className="text-[12px] text-white/60 leading-normal">
                <strong className="text-white/80">Note: </strong>
                {SITE_CONTENT.calculator.disclaimer}
              </p>

              <Button
                href="#callback"
                fullWidth
                variant="primary"
                size="md"
              >
                Request a callback
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
