import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BuyerPaths from "@/components/BuyerPaths";
import Calculator from "@/components/Calculator";
import HowItWorks from "@/components/HowItWorks";
import ModelCards from "@/components/ModelCards";
import Trust from "@/components/Trust";
import FAQ from "@/components/FAQ";
import CallbackForm from "@/components/CallbackForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* 1. Sticky Navigation Bar */}
      <Nav />

      {/* Main Content Area */}
      <main id="main" className="flex-1 focus:outline-none">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Buyer Paths (Campus, Commercial, Apartments, Standalone) */}
        <BuyerPaths />

        {/* 4. Interactive Payback Calculator (Near top of page) */}
        <Calculator />

        {/* 5. How It Works (4 Steps) */}
        <HowItWorks />

        {/* 6. Model Cards (S1 Pro & S1 Pro Max) */}
        <ModelCards />

        {/* 7. Trust Pillars & Verified Support */}
        <Trust />

        {/* 8. Frequently Asked Questions (Accessible Accordion) */}
        <FAQ />

        {/* 9. Callback Request Form */}
        <CallbackForm />
      </main>

      {/* 10. Footer */}
      <Footer />
    </>
  );
}
