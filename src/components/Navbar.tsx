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
    { label: 'Services', href: '#services' },
    { label: 'About Sarmila', href: '#about' },
    { label: 'Calculator', href: '#calculator' },
    { label: 'My Why', href: '#my-why' },
    { label: 'Who I Help', href: '#who-i-help' },
    { label: 'Tax Accounts', href: '#accounts' },
    { label: 'Process', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Advisory Verification Ribbon (Desktop) */}
      <div
        className="hidden lg:block w-full text-xs py-1.5 px-4 border-b transition-colors duration-300 bg-[#080D17] text-stone-300 border-white/10"
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-xs text-white">
              <span className="text-red-500 shrink-0 text-sm">🍁</span>
              <span>Licensed Life & Living Benefits Representative • Canada</span>
            </span>
            <span className="text-white/20">•</span>
            <span className="text-stone-400 font-normal text-xs">
              LLQP Certified • Life, Health & Canadian Registered Planning
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={"mailto:" + ADVISOR_PROFILE.email}
              className="flex items-center gap-1.5 hover:underline font-medium text-amber-300"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{ADVISOR_PROFILE.email}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="text-xs font-semibold text-emerald-300 whitespace-nowrap">
                Serving Canada Coast-to-Coast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE NAVBAR (Screen width < 1024px / lg:hidden)
          Matches the reference image:
          - Deep sovereign navy / obsidian background (#0A111E/95)
          - SR Emblem in gold frame
          - "Sarmila Reddy" serif white + "FINANCIAL ADVISOR • CANADA" gold caps
          - Warm gold pill "Book" button with calendar icon & dark text
          - White hamburger menu icon
          ========================================================================= */}
      <div className="block lg:hidden bg-[#0A111E]/95 backdrop-blur-md border-b border-white/10 px-4 py-3 text-white transition-colors">
        <div className="flex items-center justify-between">
          {/* Brand Signature */}
          <a href="#" className="flex items-center gap-2.5 shrink-0 group">
            <div
              className="w-10 h-10 rounded-xl p-1 bg-black/50 border flex items-center justify-center shrink-0 shadow-xs transition-transform group-hover:scale-105"
              style={{ borderColor: activeTheme.accent || '#D4A359' }}
            >
              <img
                src={ADVISOR_PROFILE.images.logoEmblem || ADVISOR_PROFILE.images.logo}
                alt="Sarmila Reddy"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-cormorant text-xl font-bold tracking-tight text-white leading-tight">
                Sarmila Reddy
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.18em] font-semibold leading-none mt-0.5"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Financial Advisor • Canada
              </span>
            </div>
          </a>

          {/* Right Mobile Actions: Gold Pill "Book" + Hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="mobile-book-pill-btn"
              onClick={onOpenBooking}
              className="h-8 px-3.5 rounded-full font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer transition-transform"
              style={{
                backgroundColor: activeTheme.accent || '#D4A359',
                color: '#0A111E',
              }}
              title="Book Strategy Call"
            >
              <Calendar className="w-3.5 h-3.5 text-[#0A111E]" />
              <span className="font-semibold">Book</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="border-t border-white/10 mt-3 pt-3 pb-2 space-y-2 overflow-hidden bg-[#0A111E]"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 px-1 text-sm font-semibold border-b border-white/5 flex items-center justify-between text-stone-200 hover:text-white transition-colors"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-500" />
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
                  className="w-full min-h-[44px] py-2.5 rounded-full text-center text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-transform shadow-md"
                  style={{
                    backgroundColor: activeTheme.accent || '#D4A359',
                    color: '#0A111E',
                  }}
                >
                  <Calendar className="w-4 h-4 text-[#0A111E]" />
                  <span>Book Complimentary Consultation</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =========================================================================
          DESKTOP NAVBAR (Screen width >= 1024px / hidden lg:block)
          Matches the luxury dark theme for the home section:
          - Deep sovereign navy backdrop (#0A111E/95)
          - Logo & firm title on left with gold border
          - Centered navigation links in crisp white with gold hovers
          - Gold pill button ("Book Consultation") on right
          ========================================================================= */}
      <nav
        className="hidden lg:block w-full backdrop-blur-md border-b transition-colors duration-300 bg-[#0A111E]/95 border-white/10 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Signature Mark */}
          <a href="#" className="flex items-center gap-3.5 group shrink-0 min-w-0">
            <div
              className="w-12 h-12 rounded-xl p-1 bg-black/40 border-2 shadow-xs transition-transform duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center ring-1 ring-white/10"
              style={{ borderColor: activeTheme.accent || '#D4A359' }}
            >
              <img
                src={ADVISOR_PROFILE.images.logoEmblem || ADVISOR_PROFILE.images.logo}
                alt="Sarmila Reddy - Financial Advisor Canada"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
            </div>
            <div className="flex flex-col text-left min-w-0">
              <span className="font-cormorant text-2xl font-bold tracking-tight leading-tight truncate text-white">
                Sarmila Reddy
              </span>
              <span
                className="text-xs font-semibold tracking-[0.16em] uppercase mt-0.5 truncate"
                style={{ color: activeTheme.accent || '#D4A359' }}
              >
                Financial Advisor • Canada
              </span>
            </div>
          </a>

          {/* Centered Navigation Links in White with Gold Hover Underline */}
          <div className="flex items-center gap-7 xl:gap-9 text-sm font-medium font-jakarta">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-200 hover:text-white text-stone-300 py-1 relative group"
              >
                <span>{link.label}</span>
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: activeTheme.accent || '#D4A359' }}
                />
              </a>
            ))}
          </div>

          {/* Desktop Rounded Pill Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              id="nav-desktop-book-btn"
              onClick={onOpenBooking}
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:brightness-110 active:scale-95 shadow-md cursor-pointer"
              style={{
                backgroundColor: activeTheme.accent || '#D4A359',
                color: '#0A111E',
              }}
            >
              <Calendar className="w-4 h-4 text-[#0A111E]" />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
