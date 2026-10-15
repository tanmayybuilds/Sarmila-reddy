import { useState } from 'react';
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
import { BookingModal } from './components/BookingModal';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  return <div className="site-shell">
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar onOpenBooking={openBooking} />
    <main id="main-content" tabIndex={-1}>
      <Hero onOpenBooking={openBooking} />
      <ServicesSection onOpenBooking={openBooking} />
      <AboutSarmila onOpenBooking={openBooking} />
      <WhySection />
      <AudienceSolutions onOpenBooking={openBooking} />
      <CanadianWealthCalculator onOpenBooking={openBooking} />
      <AccountExplainer onOpenBooking={openBooking} />
      <TestimonialsSection />
      <ProcessSection onOpenBooking={openBooking} />
      <FAQSection />
      <BookingSection />
    </main>
    <Footer onOpenBooking={openBooking} />
    <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    <MobileStickyCTA onOpenBooking={openBooking} />
  </div>;
}

export default function App() {
  return <ThemeProvider><AppContent /></ThemeProvider>;
}

