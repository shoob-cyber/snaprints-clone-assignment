import React from "react";
import Logo from "./Logo";
import { SITE_CONTENT } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-24 sm:pb-16 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-deep rounded-lg"
            >
              <Logo variant="dark" size="md" />
            </a>
            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Self-service A4 printing kiosks for campuses,
              apartment societies, offices, and retail venues in Bengaluru.
            </p>
            {/* UPI only or UPI and card? Snaprint's pages differ. Confirm with Snaprint. */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-white/80">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Instant UPI & QR Scan • Prints A4</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-white/70" role="list">
              {SITE_CONTENT.nav.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Venues */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-white">
              Franchise Categories
            </h4>
            <ul className="space-y-2 text-sm text-white/70" role="list">
              {SITE_CONTENT.buyerPaths.paths.map((path) => (
                <li key={path.id}>
                  <a
                    href={`/franchise/${path.id}`}
                    className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
                  >
                    {path.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#callback"
                  className="text-brand-red font-bold hover:underline"
                >
                  Request a callback &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>{SITE_CONTENT.footer.copyright}</p>
          <p className="max-w-xl text-xs leading-relaxed">
            {SITE_CONTENT.footer.disclaimer}
          </p>
        </div>
      </div>

      {/* Sticky WhatsApp Button on Mobile */}
      {/* Links to https://wa.me/ with a placeholder number */}
      <div className="fixed bottom-5 right-5 z-40 sm:hidden">
        <a
          href={SITE_CONTENT.brand.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Snaprint on WhatsApp"
          className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="font-heading font-bold text-sm">WhatsApp</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
