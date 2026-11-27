import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";

// Bold rounded sans for headings (matches Snaprint wordmark style)
const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

// Clean sans for body text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://snaprints-clone-assignment.vercel.app"),
  title: "Snaprint — Self-Service Smart Print Kiosks | Franchise & Ownership",
  description:
    "Turn a small corner into a self-service print business. Calculate your payback period and request a callback today.",
  keywords: [
    "Snaprint",
    "print kiosk",
    "self service printing",
    "automated print station",
    "Bengaluru franchise",
    "campus printing",
    "apartment amenities",
  ],
  authors: [{ name: "Seikh" }],
  creator: "Seikh",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://snaprints-clone-assignment.vercel.app",
    siteName: "Snaprint",
    title: "Snaprint — Self-Service Print Kiosks for Space Owners",
    description:
      "Self-service printing kiosks for campuses, apartments, and commercial spaces with zero staff overhead and instant UPI payments.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snaprint — Self-Service Print Kiosks for Space Owners",
    description:
      "Turn a small corner into a self-service print business with no staff required.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${inter.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-canvas dark:bg-[#0e0e0d] text-charcoal dark:text-[#f8f7f4] font-body antialiased flex flex-col selection:bg-brand-red selection:text-white transition-colors duration-300">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-charcoal focus:text-white dark:focus:bg-white dark:focus:text-charcoal focus:rounded-md focus:shadow-md focus:ring-2 focus:ring-brand-red-deep focus:ring-offset-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
