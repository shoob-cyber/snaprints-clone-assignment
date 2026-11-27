import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}

/**
 * Shared Button Component
 * Consistency Rule: Default label across the site is always "Request a callback".
 * Enhanced with smooth hover, red shadow glow, and tactile click transitions.
 */
export function Button({
  variant = "primary",
  size = "md",
  href,
  children = "Request a callback",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  // Base styles including min font size (14px min for buttons), accessible focus rings & smooth tactile feedback
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-bold rounded-xl transition-all duration-200 ease-out cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97]";

  // Sizing: Ensures minimum 14px text and generous touch targets
  const sizeStyles = {
    sm: "text-sm px-4 py-2.5 min-h-[42px] gap-1.5",
    md: "text-base px-6 py-3 min-h-[48px] gap-2 shadow-sm",
    lg: "text-lg px-8 py-4 min-h-[54px] gap-2.5 shadow-md",
  }[size];

  // Colors:
  // Primary uses deep red #C1121F with smooth red glow on hover
  const variantStyles = {
    primary:
      "bg-brand-red-deep text-white shadow-md shadow-brand-red-deep/20 hover:bg-[#A30D19] hover:shadow-lg hover:shadow-brand-red-deep/35 hover:-translate-y-0.5",
    secondary:
      "bg-charcoal text-white hover:bg-[#22221f] hover:shadow-md hover:shadow-charcoal/20 hover:-translate-y-0.5",
    outline:
      "border-2 border-charcoal text-charcoal bg-transparent hover:bg-charcoal hover:text-white hover:shadow-sm hover:-translate-y-0.5",
    white:
      "bg-white text-charcoal hover:bg-surface-subtle border border-charcoal-border hover:border-brand-red/40 hover:shadow-md hover:-translate-y-0.5",
  }[variant];

  const combinedClasses = `${baseStyles} ${sizeStyles} ${variantStyles} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

export default Button;
