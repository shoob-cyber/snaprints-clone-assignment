import React from "react";

// Replace with the official SVG if Snaprint provides one.

export interface LogoProps {
  variant?: "dark" | "light"; // "dark" = for dark backgrounds (wordmark 'rint' is white), "light" = for light backgrounds (wordmark 'rint' is charcoal)
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
}

export function Logo({
  variant = "light",
  size = "md",
  showWordmark = true,
  className = "",
}: LogoProps) {
  // Dimensions based on size prop
  const mascotDimensions = {
    sm: { width: 30, height: 32 },
    md: { width: 38, height: 40 },
    lg: { width: 50, height: 53 },
  }[size];

  const wordmarkTextClass = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }[size];

  // Charcoal text for light backgrounds, white for dark backgrounds
  const rintColorClass = variant === "dark" ? "text-white" : "text-charcoal";

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="Snaprint"
      role="img"
    >
      {/* Inline SVG Mascot */}
      <svg
        width={mascotDimensions.width}
        height={mascotDimensions.height}
        viewBox="0 0 100 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0 transition-transform duration-200 hover:scale-105"
      >
        {/* Two red feet */}
        <rect x="28" y="90" width="18" height="10" rx="5" fill="#E63946" />
        <rect x="54" y="90" width="18" height="10" rx="5" fill="#E63946" />

        {/* Small grey arms */}
        <rect x="9" y="44" width="8" height="18" rx="4" fill="#888882" />
        <rect x="83" y="44" width="8" height="18" rx="4" fill="#888882" />

        {/* Mascot Body: near-black (#0e0e0d) rounded rectangle */}
        <rect x="18" y="10" width="64" height="80" rx="16" fill="#0e0e0d" />

        {/* Red band (#E63946) across the top */}
        <path
          d="M 18 28 L 18 22 C 18 15.37 23.37 10 30 10 L 70 10 C 76.63 10 82 15.37 82 22 L 82 28 Z"
          fill="#E63946"
        />

        {/* Light (#f5f5f3) face panel */}
        <rect x="24" y="32" width="52" height="36" rx="10" fill="#f5f5f3" />

        {/* Two dark oval eyes */}
        <ellipse cx="37" cy="46" rx="3.2" ry="4.2" fill="#0e0e0d" />
        <ellipse cx="63" cy="46" rx="3.2" ry="4.2" fill="#0e0e0d" />

        {/* Two small red cheeks */}
        <circle cx="32" cy="53" r="2.8" fill="#E63946" opacity="0.9" />
        <circle cx="68" cy="53" r="2.8" fill="#E63946" opacity="0.9" />

        {/* Small curved smile */}
        <path
          d="M 43 51 Q 50 56.5 57 51"
          stroke="#0e0e0d"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />

        {/* Kiosk dispensing slot hint */}
        <rect x="33" y="76" width="34" height="3" rx="1.5" fill="#363633" />
      </svg>

      {/* Wordmark: "snap" in red, "rint" in white (dark variant) or charcoal (light variant) */}
      {showWordmark && (
        <span
          className={`font-heading font-black tracking-tight leading-none ${wordmarkTextClass}`}
        >
          <span className="text-brand-red">snap</span>
          <span className={rintColorClass}>rint</span>
        </span>
      )}
    </div>
  );
}

export default Logo;
