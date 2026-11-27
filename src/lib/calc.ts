/**
 * Pure calculation functions for the Snaprint Payback Calculator.
 * Kept simple, modular, and easy to test or explain.
 */

export interface KioskModel {
  id: "s1-pro" | "s1-pro-max";
  name: string;
  tagline: string;
  basePrice: number; // In INR, excluding GST
  capacitySheets: number;
  footfallTarget: string;
  recommendedFor: string;
  specs: string[];
}

// Specs limited to what Snaprint's site states. Compare with their Ownership page and confirm.
export const KIOSK_MODELS: Record<string, KioskModel> = {
  "s1-pro": {
    id: "s1-pro",
    name: "Snaprint S1 Pro",
    tagline: "Compact self-service kiosk for steady daily volume",
    basePrice: 139999, // Rs 1,39,999
    capacitySheets: 550,
    footfallTarget: "Suits low to medium footfall",
    recommendedFor: "Apartment clubhouses, small coworking hubs, standalone cafes & shops",
    specs: [
      "550 sheets (A4)",
      "Floor footprint about 55 × 70 cm",
      "UPI QR payments",
      "Paper and ink level monitoring",
    ],
  },
  "s1-pro-max": {
    id: "s1-pro-max",
    name: "Snaprint S1 Pro Max",
    tagline: "High-capacity workhorse for heavy printing demand",
    basePrice: 299999, // Rs 2,99,999
    capacitySheets: 2000,
    footfallTarget: "Suits high footfall",
    recommendedFor: "College campuses, exam centres, large tech parks & central libraries",
    specs: [
      "Up to 2,000 sheets (A4)",
      "Floor footprint about 55 × 70 cm",
      "UPI QR payments",
      "Paper and ink level monitoring",
    ],
  },
};

export interface CalculatorInputs {
  modelId: "s1-pro" | "s1-pro-max";
  sidesPerDay: number; // e.g. 20 to 600
  pricePerSide: number; // Rs 1 to 15
  costPerSide: number; // default Rs 1 (paper + ink)
  gatewayFeePercent: number; // default 2%
  workingDaysPerMonth: number; // default 26 days
}

export interface CalculatorResults {
  profitPerSide: number;
  monthlyRevenue: number;
  monthlyCost: number;
  monthlyProfit: number;
  totalPriceWithGst: number;
  paybackMonths: number | null; // null if profit <= 0
  isProfitable: boolean;
  annualProfit: number;
}

/**
 * Calculates net profit per side printed after deducting paper, ink and payment gateway fee.
 * Formula: profitPerSide = price - cost - (price * fee / 100)
 */
export function calculateProfitPerSide(
  price: number,
  cost: number,
  gatewayFeePercent: number
): number {
  const feeAmount = (price * gatewayFeePercent) / 100;
  return price - cost - feeAmount;
}

/**
 * Calculates total purchase price inclusive of 18% GST.
 * Formula: totalPrice = kioskPrice * 1.18
 */
export function calculateTotalPriceWithGst(basePrice: number): number {
  return Math.round(basePrice * 1.18);
}

/**
 * Calculates monthly net profit.
 * Formula: monthlyProfit = sidesPerDay * workingDays * profitPerSide
 */
export function calculateMonthlyProfit(
  sidesPerDay: number,
  workingDays: number,
  profitPerSide: number
): number {
  return sidesPerDay * workingDays * profitPerSide;
}

/**
 * Calculates estimated payback period in months.
 * Formula: paybackMonths = totalPrice / monthlyProfit
 * Returns null if monthly profit is <= 0.
 */
export function calculatePaybackPeriod(
  totalPrice: number,
  monthlyProfit: number
): number | null {
  if (monthlyProfit <= 0) {
    return null;
  }
  const months = totalPrice / monthlyProfit;
  // Round to one decimal place for clarity
  return Math.round(months * 10) / 10;
}

/**
 * Executes the full calculation pipeline from user inputs.
 */
export function runCalculator(inputs: CalculatorInputs): CalculatorResults {
  const model = KIOSK_MODELS[inputs.modelId] || KIOSK_MODELS["s1-pro"];
  const profitPerSide = calculateProfitPerSide(
    inputs.pricePerSide,
    inputs.costPerSide,
    inputs.gatewayFeePercent
  );

  const monthlySides = inputs.sidesPerDay * inputs.workingDaysPerMonth;
  const monthlyRevenue = monthlySides * inputs.pricePerSide;
  const monthlyGatewayFees = (monthlyRevenue * inputs.gatewayFeePercent) / 100;
  const monthlyPaperInkCost = monthlySides * inputs.costPerSide;
  const monthlyCost = monthlyPaperInkCost + monthlyGatewayFees;

  const monthlyProfit = calculateMonthlyProfit(
    inputs.sidesPerDay,
    inputs.workingDaysPerMonth,
    profitPerSide
  );

  const totalPriceWithGst = calculateTotalPriceWithGst(model.basePrice);
  const paybackMonths = calculatePaybackPeriod(totalPriceWithGst, monthlyProfit);
  const isProfitable = monthlyProfit > 0;
  const annualProfit = isProfitable ? monthlyProfit * 12 : 0;

  return {
    profitPerSide: Math.round(profitPerSide * 100) / 100,
    monthlyRevenue: Math.round(monthlyRevenue),
    monthlyCost: Math.round(monthlyCost),
    monthlyProfit: Math.round(monthlyProfit),
    totalPriceWithGst,
    paybackMonths,
    isProfitable,
    annualProfit: Math.round(annualProfit),
  };
}

/**
 * Formats a number as Indian Currency (INR) string, e.g. "₹1,39,999".
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats standard numbers with Indian number formatting commas, e.g. "1,500".
 */
export function formatNumberIN(num: number): string {
  return new Intl.NumberFormat("en-IN").format(num);
}

/*
 * Verification check:
 * S1 Pro (base Rs 1,39,999 * 1.18 = Rs 1,65,199 with GST)
 * Inputs: price = Rs 3, cost = Rs 1, fee = 2%, sidesPerDay = 100, workingDays = 26
 *   profitPerSide = 3 - 1 - (3 * 0.02) = 1.94
 *   monthlyProfit = 100 * 26 * 1.94 = Rs 5,044
 *   paybackMonths = 165199 / 5044 = 32.75... rounded to 32.8 months.
 */
