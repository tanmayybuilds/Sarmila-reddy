import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { Calendar, ArrowRight, Check, Clock, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section
      className="relative overflow-x-clip pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-14 lg:pb-24 transition-colors duration-500"
      style={{ backgroundColor: activeTheme.bgLight }}
    >
      {/* Subtle Background Lighting */}
      <div
        className="absolute top-0 right-1/4 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ backgroundColor: activeTheme.primaryLight }}
      />
      <div
        className="absolute -bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: activeTheme.accentLight }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Value Proposition & CTAs with Motion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 lg:space-y-7 text-left pt-2"
          >
            {/* Refined Advisory Credential Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium border"
              style={{
                backgroundColor: '#FFFFFF',
                borderColor: activeTheme.border,
                color: activeTheme.textDark,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
              <span className="font-semibold">Licensed Financial Advisor</span>
              <span className="text-stone-300">•</span>
              <span className="text-stone-600">Serving Canada Coast-to-Coast</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.14] sm:leading-[1.12]"
              style={{ color: activeTheme.textDark }}
            >
              Guiding you today for a{' '}
              <span
                className="relative inline-block font-serif font-bold"
                style={{ color: activeTheme.primary }}
              >
                stronger tomorrow.
              </span>
            </motion.h1>

            {/* Subheading Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl font-light"
            >
              Trusted, independent financial and protection guidance for every chapter of your journey in Canada. From maximizing your first tax-advantaged accounts (TFSA, RRSP, FHSA) to safeguarding family income with living benefits—we replace financial overwhelm with enduring clarity.
            </motion.p>

            {/* Key Value Assurances */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-sm font-medium text-stone-700"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>100% Free, Zero-Pressure Consultations</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>TFSA • RRSP • RESP • FHSA Tax Strategy</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Life, Critical Illness & Disability Protection</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0"
                  style={{ backgroundColor: activeTheme.primary }}
                >
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span>Tailored Guidance for Canadian Newcomers</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
            >
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenBooking}
                className="whitespace-nowrap inline-flex items-center justify-center gap-2.5 min-h-[48px] px-8 py-3.5 sm:py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-95 cursor-pointer"
                style={{
                  backgroundColor: activeTheme.primary,
                }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free 30-Min Strategy Call</span>
              </button>

              <a
                href="#calculator"
                className="whitespace-nowrap inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 sm:py-4 rounded-full text-sm font-semibold border transition-all duration-200 hover:bg-white cursor-pointer"
                style={{
                  borderColor: activeTheme.border,
                  color: activeTheme.textDark,
                  backgroundColor: 'rgba(255,255,255,0.85)',
                }}
              >
                <span>Interactive Wealth Calculator</span>
                <ArrowRight className="w-4 h-4 text-stone-400" />
              </a>
            </motion.div>

            <p className="text-xs sm:text-sm text-stone-600 flex items-center gap-2 pt-0.5">
              <Shield className="w-4 h-4 text-stone-400 shrink-0" />
              <span>Independent Fiduciary Care • Strictly Confidential • Zero Obligation</span>
            </p>

            {/* Quick Proof Metrics Strip with Animated Counters */}
            <div
              className="pt-5 sm:pt-6 border-t grid grid-cols-3 gap-3 sm:gap-6"
              style={{ borderColor: activeTheme.border }}
            >
              <div>
                <p
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ color: activeTheme.primary }}
                >
                  <AnimatedCounter value={250} suffix="+" duration={1.5} />
                </p>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">
                  Families Protected
                </p>
              </div>
              <div>
                <p
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ color: activeTheme.primary }}
                >
                  <AnimatedCounter value={0} prefix="$" duration={0.8} />
                </p>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">
                  Consultation Fee
                </p>
              </div>
              <div>
                <p
                  className="font-serif text-2xl sm:text-3xl font-bold tracking-tight"
                  style={{ color: activeTheme.primary }}
                >
                  <AnimatedCounter value={10} suffix="+" duration={1.2} />
                </p>
                <p className="text-xs sm:text-sm text-stone-600 font-medium mt-0.5">
                  Top Insurers in Canada
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Portrait & Strategy Card with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative w-full"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer Subtle Glow Frame */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-30 blur-md transition-all duration-500"
                style={{ backgroundColor: activeTheme.accentLight }}
              />

              {/* Main Card Container */}
              <div
                className="relative rounded-3xl overflow-hidden border transition-all duration-300"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderColor: activeTheme.border,
                }}
              >
                {/* Visual Editorial Portrait Area with real photo */}
                <div className="relative aspect-[4/4.8] overflow-hidden bg-stone-950">
                  <img
                    src={ADVISOR_PROFILE.images.hero}
                    alt="Sarmila Reddy - Licensed Financial Advisor Canada"
                    className="w-full h-full object-cover object-[center_20%] filter brightness-[1.01]"
                    loading="eager"
                  />

                  {/* High-Contrast Gradient Vignette for Guaranteed Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10 pointer-events-none" />

                  {/* Top Subtle Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <div className="px-3 py-1 rounded-full bg-white text-xs font-medium text-stone-900 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" />
                      <span>LLQP Licensed • Canada</span>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-stone-900 text-xs font-medium text-white">
                      Independent Practice
                    </div>
                  </div>
                </div>

                {/* Authoritative Solid Identity Bar (100% WCAG AAA Compliant Contrast) */}
                <div className="px-5 py-4 bg-stone-950 text-white space-y-0.5 text-left">
                  <h2 className="font-serif text-2xl font-bold tracking-tight text-white">
                    Sarmila Reddy
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 font-medium">
                    Licensed Financial Advisor & Wealth Strategist
                  </p>
                </div>

                {/* Strategy Call Scheduling Card */}
                <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4 text-left">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-stone-800">Discovery Strategy Session:</span>
                    <span className="font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full text-xs">
                      Complimentary • 30 Min
                    </span>
                  </div>

                  <div className="py-2.5 border-t border-b border-stone-100 text-xs sm:text-sm space-y-1">
                    <div
                      className="flex items-center justify-between font-semibold"
                      style={{ color: activeTheme.textDark }}
                    >
                      <span>Virtual Zoom or Phone</span>
                      <span className="text-stone-500 font-normal flex items-center gap-1 text-xs">
                        <Clock className="w-3.5 h-3.5" /> Flexible Times
                      </span>
                    </div>
                    <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                      A pressure-free review of your savings, Canadian registered tax accounts, or family protection gaps.
                    </p>
                  </div>

                  <button
                    id="hero-card-book-now-btn"
                    onClick={onOpenBooking}
                    className="w-full min-h-[48px] py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Select Time on Calendly</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
