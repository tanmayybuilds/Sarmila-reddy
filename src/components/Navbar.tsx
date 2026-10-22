import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Calendar, Menu, X, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Why Sarmila', href: '#why-sarmila' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Tax Accounts', href: '#accounts' },
    { label: 'Who I Help', href: '#audiences' },
    { label: 'Calculator', href: '#wealth-calculator' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-xs">
      {/* Top Advisory Verification Ribbon */}
      <div
        className="w-full text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 border-b transition-colors duration-300"
        style={{
          backgroundColor: activeTheme.primaryLight,
          color: activeTheme.textDark,
          borderColor: activeTheme.border,
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 font-semibold text-xs sm:text-sm">
              <span className="text-red-600 shrink-0 text-sm">🍁</span>
              <span>Licensed Life & Living Benefits Representative • Canada</span>
            </span>
            <span className="hidden md:inline text-stone-300">•</span>
            <span className="hidden md:inline text-stone-500 font-normal text-xs sm:text-sm">
              LLQP Certified • Life, Health & Canadian Registered Planning
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <a
              href={"mailto:" + ADVISOR_PROFILE.email}
              className="hidden lg:flex items-center gap-1.5 hover:underline font-medium"
              style={{ color: activeTheme.primary }}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{ADVISOR_PROFILE.email}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-emerald-900 whitespace-nowrap">
                Serving Canada Coast-to-Coast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <nav
        className="w-full backdrop-blur-md border-b transition-colors duration-300 bg-white/95"
        style={{
          borderColor: activeTheme.border,
        }}
      >
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2.5 sm:gap-4">
          {/* Refined Brand Signature Mark - Prominent, standing out on top */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 min-w-0">
            <div
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl p-1 bg-white border-2 shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center ring-1 ring-black/5"
              style={{ borderColor: activeTheme.accent }}
            >
              <img
                src={ADVISOR_PROFILE.images.logoEmblem || ADVISOR_PROFILE.images.logo}
                alt="Sarmila Reddy - Financial Advisor Canada"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span
                className="font-serif text-lg sm:text-2xl font-bold tracking-tight leading-tight truncate"
                style={{ color: activeTheme.textDark }}
              >
                Sarmila Reddy
              </span>
              <span
                className="text-xs sm:text-sm font-semibold tracking-normal mt-0.5 truncate"
                style={{ color: activeTheme.accent }}
              >
                Financial Advisor • Canada
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Single line, elegant spacing */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs xl:text-sm font-medium">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:opacity-100 opacity-75 py-1 relative group"
                style={{ color: activeTheme.textDark }}
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: activeTheme.accent }}
                />
              </a>
            ))}
          </div>

          {/* Desktop Action CTA - Single line, proportioned */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              id="nav-book-consultation-btn"
              onClick={onOpenBooking}
              className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95 shadow-sm cursor-pointer"
              style={{
                backgroundColor: activeTheme.primary,
              }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <button
              id="mobile-book-header-btn"
              onClick={onOpenBooking}
              className="h-9 px-3 rounded-full text-white text-xs sm:text-sm font-semibold sm:hidden flex items-center gap-1.5 shadow-xs active:scale-95 cursor-pointer"
              style={{ backgroundColor: activeTheme.primary }}
              title="Book Strategy Call"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl border text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              style={{ borderColor: activeTheme.border }}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-b px-4 py-4 space-y-3 overflow-hidden shadow-lg"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: activeTheme.border,
              }}
            >
              <div className="flex flex-col space-y-1.5">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-xs sm:text-sm font-medium border-b border-stone-100 flex items-center justify-between active:bg-stone-50 transition-colors"
                    style={{ color: activeTheme.textDark }}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2">
                <button
                  id="mobile-menu-book-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full min-h-[44px] py-2.5 rounded-full text-center text-xs sm:text-sm font-semibold text-white flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform shadow-sm"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Complimentary Consultation</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
