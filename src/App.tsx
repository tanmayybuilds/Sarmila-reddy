import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhySection } from './components/WhySection';
import { ServicesSection } from './components/ServicesSection';
import { AudienceSolutions } from './components/AudienceSolutions';
import { CanadianWealthCalculator } from './components/CanadianWealthCalculator';
import { AccountExplainer } from './components/AccountExplainer';
import { AboutSarmila } from './components/AboutSarmila';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ProcessSection } from './components/ProcessSection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ColorProfileSwitcher } from './components/ColorProfileSwitcher';
import { BookingModal } from './components/BookingModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-500">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Verified Credentials & Direct Calendly CTA */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Core Purpose & Why - Directly Translating Her Viral Principles */}
        <WhySection />

        {/* 3. Comprehensive Services (Investments, Life, Living Benefits, Business) */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 4. Target Canadian Audiences (Immigrants, Professionals, Families, Business) */}
        <AudienceSolutions onOpenBooking={handleOpenBooking} />

        {/* 5. Interactive Canadian Wealth & Tax Shelter Calculator */}
        <CanadianWealthCalculator onOpenBooking={handleOpenBooking} />

        {/* 6. CRA Registered Accounts Explainer (TFSA, RRSP, FHSA, RESP) */}
        <AccountExplainer onOpenBooking={handleOpenBooking} />

        {/* 7. About Sarmila Reddy - Journey, Fiduciary Ethics & Desk Philosophy */}
        <AboutSarmila onOpenBooking={handleOpenBooking} />

        {/* 8. Client Testimonials & Experiences Across Canada */}
        <TestimonialsSection />

        {/* 9. The 4-Step Advisory Process (100% Free Discovery) */}
        <ProcessSection onOpenBooking={handleOpenBooking} />

        {/* 10. Direct Calendly Scheduling & Strategy Inquiry Form */}
        <BookingSection />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer with Canadian Regulatory Notice & PIPEDA Disclosures */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Interactive Light Color Profile Switcher */}
      <ColorProfileSwitcher />

      {/* Universal Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />

      {/* Mobile Sticky Booking Bar */}
      <MobileStickyCTA onOpenBooking={handleOpenBooking} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
