"use client";

import React, { useState } from "react";
import Button from "./Button";
import { SITE_CONTENT } from "@/lib/content";

interface FormState {
  name: string;
  phone: string;
  spaceType: string;
  city: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  spaceType?: string;
  city?: string;
}

export function CallbackForm({
  initialSpaceType = "campus",
  title,
  subhead,
}: {
  initialSpaceType?: string;
  title?: string;
  subhead?: string;
}) {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    spaceType: initialSpaceType,
    city: "Bengaluru",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validate form fields with plain JavaScript code
  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    // 1. Name validation (at least 2 characters)
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // 2. Phone validation: 10 digits Indian mobile number (optionally prefixed with +91)
    const cleanedPhone = formData.phone.replace(/[\s\-()]/g, "");
    const phoneRegex = /^(?:\+91|91|0)?[6-9]\d{9}$/;
    if (!cleanedPhone) {
      newErrors.phone = "Please enter your 10-digit phone number.";
    } else if (!phoneRegex.test(cleanedPhone)) {
      newErrors.phone = "Please enter a valid 10-digit Indian mobile number.";
    }

    // 3. Space type validation
    if (!formData.spaceType) {
      newErrors.spaceType = "Please select the type of space.";
    }

    // 4. City validation
    if (!formData.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Connect this form to Snaprint's CRM endpoint or lead webhook (e.g., Zapier/HubSpot).
    // Simulated network call (600ms mock delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      spaceType: initialSpaceType,
      city: "Bengaluru",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="callback" className="py-16 md:py-24 bg-surface-subtle/50 dark:bg-black/30 border-t border-charcoal/5 dark:border-white/5 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#181816] rounded-3xl p-6 sm:p-10 md:p-12 border border-charcoal-border dark:border-[#2c2c28] shadow-xl hover:shadow-2xl transition-shadow duration-300">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-red-dark bg-brand-red/10 px-3.5 py-1 rounded-full shadow-xs">
              Direct Hardware Inquiry
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-charcoal dark:text-white tracking-tight mt-3">
              {title || SITE_CONTENT.callbackForm.sectionTitle}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-charcoal-muted dark:text-white/70 leading-relaxed">
              {subhead || SITE_CONTENT.callbackForm.sectionSubhead}
            </p>
          </div>

          {/* Success State */}
          {isSubmitted ? (
            <div
              className="p-8 rounded-3xl bg-brand-red/5 border border-brand-red/20 text-center space-y-4 animate-in fade-in zoom-in-95"
              role="alert"
            >
              <div className="w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-red/25">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-heading font-black text-charcoal">
                {SITE_CONTENT.callbackForm.successTitle}
              </h3>
              <p className="text-sm text-charcoal-muted max-w-md mx-auto leading-relaxed">
                {SITE_CONTENT.callbackForm.successMessage}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-sm font-heading font-bold text-brand-red-dark hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep px-3 py-1.5 rounded cursor-pointer"
                >
                  Submit another inquiry
                </button>
              </div>
            </div>
          ) : (
            /* Form inputs with smooth focus glow */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* 1. Name Field */}
                <div>
                  <label
                    htmlFor="callback-name"
                    className="block text-sm font-heading font-bold text-charcoal dark:text-white mb-1.5"
                  >
                    {SITE_CONTENT.callbackForm.fields.name} *
                  </label>
                  <input
                    id="callback-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Ramesh Kumar"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base text-charcoal dark:text-white bg-white dark:bg-[#121210] transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-brand-red focus:ring-brand-red/30"
                        : "border-charcoal-border dark:border-[#2c2c28] focus:border-brand-red-deep focus:ring-brand-red/15 focus:shadow-xs"
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1.5 text-xs font-semibold text-brand-red-dark animate-in fade-in" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Phone Field */}
                <div>
                  <label
                    htmlFor="callback-phone"
                    className="block text-sm font-heading font-bold text-charcoal dark:text-white mb-1.5"
                  >
                    {SITE_CONTENT.callbackForm.fields.phone} *
                  </label>
                  <input
                    id="callback-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. 9876543210"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base text-charcoal dark:text-white bg-white dark:bg-[#121210] transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? "border-brand-red focus:ring-brand-red/30"
                        : "border-charcoal-border dark:border-[#2c2c28] focus:border-brand-red-deep focus:ring-brand-red/15 focus:shadow-xs"
                    }`}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-1.5 text-xs font-semibold text-brand-red-dark animate-in fade-in" role="alert">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* 3. Type of Space Field */}
                <div>
                  <label
                    htmlFor="callback-space"
                    className="block text-sm font-heading font-bold text-charcoal dark:text-white mb-1.5"
                  >
                    {SITE_CONTENT.callbackForm.fields.spaceType} *
                  </label>
                  <select
                    id="callback-space"
                    name="spaceType"
                    value={formData.spaceType}
                    onChange={(e) =>
                      setFormData({ ...formData, spaceType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-charcoal-border dark:border-[#2c2c28] text-sm sm:text-base text-charcoal dark:text-white bg-white dark:bg-[#121210] transition-all duration-200 focus:outline-none focus:border-brand-red-deep focus:ring-2 focus:ring-brand-red/15 focus:shadow-xs cursor-pointer"
                  >
                    {SITE_CONTENT.callbackForm.spaceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-white dark:bg-[#181816] text-charcoal dark:text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. City Field */}
                <div>
                  <label
                    htmlFor="callback-city"
                    className="block text-sm font-heading font-bold text-charcoal dark:text-white mb-1.5"
                  >
                    {SITE_CONTENT.callbackForm.fields.city} *
                  </label>
                  <input
                    id="callback-city"
                    name="city"
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    placeholder="e.g. Bengaluru, Mysuru, Hyderabad"
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base text-charcoal dark:text-white bg-white dark:bg-[#121210] transition-all duration-200 focus:outline-none focus:ring-2 ${
                      errors.city
                        ? "border-brand-red focus:ring-brand-red/30"
                        : "border-charcoal-border dark:border-[#2c2c28] focus:border-brand-red-deep focus:ring-brand-red/15 focus:shadow-xs"
                    }`}
                  />
                  {errors.city && (
                    <p id="city-error" className="mt-1.5 text-xs font-semibold text-brand-red-dark animate-in fade-in" role="alert">
                      {errors.city}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit CTA with smooth active elevation */}
              <div className="pt-4">
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Request..." : "Request a callback"}
                </Button>
              </div>

              {/* Privacy text */}
              <p className="text-center text-xs text-charcoal-light leading-relaxed">
                {SITE_CONTENT.callbackForm.privacyNote}
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default CallbackForm;
