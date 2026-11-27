"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";
import { SITE_CONTENT } from "@/lib/content";

export function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle keyboard navigation for Franchise dropdown
  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isDropdownOpen) {
        setIsDropdownOpen(true);
      } else {
        menuItemsRef.current[0]?.focus();
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (isDropdownOpen) {
        menuItemsRef.current[menuItemsRef.current.length - 1]?.focus();
      }
    }
  };

  const handleItemKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "Escape") {
      setIsDropdownOpen(false);
      buttonRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (index + 1) % menuItemsRef.current.length;
      menuItemsRef.current[nextIndex]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex =
        (index - 1 + menuItemsRef.current.length) % menuItemsRef.current.length;
      menuItemsRef.current[prevIndex]?.focus();
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F8F7F4]/90 dark:bg-[#0e0e0d]/90 backdrop-blur-md border-b border-charcoal/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep focus-visible:ring-offset-2"
          >
            {/* Logo renders light or dark wordmark depending on root class */}
            <div className="dark:hidden">
              <Logo variant="light" size="md" />
            </div>
            <div className="hidden dark:block">
              <Logo variant="dark" size="md" />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-charcoal dark:text-white/90 hover:text-brand-red-dark dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-md px-1"
            >
              How it works
            </Link>
            <Link
              href="/#pricing"
              className="text-sm font-medium text-charcoal dark:text-white/90 hover:text-brand-red-dark dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-md px-1"
            >
              Pricing
            </Link>
            <Link
              href="/#calculator"
              className="text-sm font-medium text-charcoal dark:text-white/90 hover:text-brand-red-dark dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-md px-1"
            >
              Payback Calculator
            </Link>

            {/* Franchise Paths Dropdown (links to dedicated pages) */}
            <div className="relative" ref={dropdownRef}>
              <button
                ref={buttonRef}
                type="button"
                id="franchise-menu-button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-controls="franchise-menu"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onKeyDown={handleDropdownKeyDown}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-charcoal dark:text-white/90 hover:text-brand-red-dark dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-md px-1.5 py-1 cursor-pointer"
              >
                <span>Franchise Paths</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  id="franchise-menu"
                  role="menu"
                  aria-labelledby="franchise-menu-button"
                  className="absolute right-0 mt-2 w-72 rounded-2xl bg-white dark:bg-[#181816] shadow-xl border border-charcoal-border dark:border-[#2c2c28] py-2 ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-50 animate-in fade-in zoom-in-95 duration-100"
                >
                  <div className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-charcoal-light dark:text-white/50">
                    Dedicated Space Solutions
                  </div>
                  {SITE_CONTENT.buyerPaths.paths.map((path, idx) => (
                    <Link
                      key={path.id}
                      ref={(el) => {
                        menuItemsRef.current[idx] = el;
                      }}
                      role="menuitem"
                      href={`/franchise/${path.id}`}
                      onClick={() => setIsDropdownOpen(false)}
                      onKeyDown={(e) => handleItemKeyDown(e, idx)}
                      className="block px-4 py-2.5 text-sm text-charcoal dark:text-white/90 hover:bg-surface-subtle dark:hover:bg-white/[0.06] hover:text-brand-red-dark dark:hover:text-brand-red focus:bg-surface-subtle dark:focus:bg-white/[0.06] focus:text-brand-red-dark focus:outline-none transition-colors"
                    >
                      <div className="font-bold">{path.title}</div>
                      <div className="text-xs text-charcoal-muted dark:text-white/60 line-clamp-1">
                        {path.oneLiner}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#faq"
              className="text-sm font-medium text-charcoal dark:text-white/90 hover:text-brand-red-dark dark:hover:text-brand-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-md px-1"
            >
              FAQ
            </Link>
          </div>

          {/* Desktop Right CTA + Dark/Night Mode Toggle */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button href="/#callback" size="sm" variant="primary">
              Request a callback
            </Button>
          </div>

          {/* Mobile Right Controls: Dark Toggle + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-charcoal dark:text-white hover:bg-surface-subtle dark:hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep cursor-pointer"
              aria-controls="mobile-nav"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile & Tablet Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-b border-charcoal/10 dark:border-white/10 bg-white dark:bg-[#181816] px-4 pt-3 pb-6 shadow-xl space-y-4"
        >
          <div className="flex flex-col space-y-3">
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal dark:text-white py-1.5 border-b border-surface-subtle dark:border-white/10"
            >
              How it works
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal dark:text-white py-1.5 border-b border-surface-subtle dark:border-white/10"
            >
              Pricing & Models
            </Link>
            <Link
              href="/#calculator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal dark:text-white py-1.5 border-b border-surface-subtle dark:border-white/10"
            >
              Payback Calculator
            </Link>
            <div className="py-2">
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-light dark:text-white/50 mb-2">
                Franchise Space Categories
              </div>
              <div className="grid grid-cols-1 gap-2 pl-2">
                {SITE_CONTENT.buyerPaths.paths.map((path) => (
                  <Link
                    key={path.id}
                    href={`/franchise/${path.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm text-charcoal dark:text-white/80 font-medium hover:text-brand-red-dark dark:hover:text-brand-red py-1"
                  >
                    • {path.title} &rarr;
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/#trust"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal dark:text-white py-1.5 border-b border-surface-subtle dark:border-white/10"
            >
              Trust & Support SLA
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-charcoal dark:text-white py-1.5"
            >
              FAQ
            </Link>
          </div>

          <div className="pt-2">
            <Button
              href="/#callback"
              fullWidth
              size="md"
              variant="primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request a callback
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Nav;
