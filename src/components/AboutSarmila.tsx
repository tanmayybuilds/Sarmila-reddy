import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ADVISOR_PROFILE } from '../data/content';
import { ShieldCheck, Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface AboutProps {
  onOpenBooking: () => void;
}

export const AboutSarmila: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section id="about" className="py-8 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Column: Visual Showcase with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative halo */}
              <div
                className="absolute -inset-1.5 rounded-3xl opacity-25 blur-lg"
                style={{ backgroundColor: activeTheme.accent }}
              />

              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden border bg-white shadow-xs"
                style={{ borderColor: activeTheme.border }}
              >
                <div className="aspect-[4/3.8] sm:aspect-[4/4.9] overflow-hidden relative">
                  <img
                    src={ADVISOR_PROFILE.images.about}
                    alt="Sarmila Reddy Financial Advisor"
                    className="w-full h-full object-cover object-[center_18%]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Sarmila Reddy
                    </span>
                    <p className="font-serif text-lg sm:text-2xl font-bold mt-0.5 leading-snug">
                      “I am back in business to build your legacy.”
                    </p>
                    <p className="text-[11px] sm:text-sm text-stone-200 mt-0.5 sm:mt-1 font-light">
                      Licensed Life & Living Benefits Representative • Canada
                    </p>
                  </div>
                </div>

                {/* Sub info */}
                <div className="p-3 sm:p-5 bg-white space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between text-[11px] sm:text-sm text-stone-600">
                    <span className="font-semibold text-stone-800">Professional Status:</span>
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs">
                      Active LLQP License
                    </span>
                  </div>

                  <div className="text-[11px] sm:text-sm text-stone-600 flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Compliant with Canadian Insurance Regulations</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Philosophy with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-3.5 sm:space-y-5 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>About Sarmila Reddy • Licensed Canadian Advisory Professional</span>
            </div>

            <h2
              className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight"
              style={{ color: activeTheme.textDark }}
            >
              Building Wealth.{' '}
              <span className="font-serif font-bold" style={{ color: activeTheme.primary }}>
                Protecting Families.
              </span>{' '}
              Creating Freedom.
            </h2>

            <div className="space-y-2.5 text-stone-600 text-xs sm:text-base leading-relaxed font-light max-w-2xl">
              <p>
                Hello, I’m <strong>Sarmila Reddy</strong>. As a licensed Canadian life and living benefits representative and entrepreneur, my practice was founded on a simple realization: far too many Canadian families work tirelessly every single day, yet feel completely left in the dark when it comes to taxes, insurance, and retirement planning.
              </p>
              <p>
                The traditional banking system often sells generic products without taking the time to explain how they interact with your taxes or your children’s future. I take the exact opposite approach. I treat every client like family—listening to your worries, analyzing your numbers, and showing you step-by-step how to protect what you’ve built while accelerating your compound growth.
              </p>
              <p>
                Whether you’ve recently landed in Canada as a new immigrant trying to make sense of the CRA, a young professional seeking smart tax shelters, or a business owner safeguarding corporate retained earnings—you deserve honest, accessible guidance.
              </p>
            </div>

            {/* Micro Stats Banner with Clean Border Divider */}
            <div
              className="py-2.5 sm:py-3.5 border-y border-stone-200/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl"
            >
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={100} suffix="%" duration={1.2} />
                </p>
                <p className="text-[10px] sm:text-sm text-stone-700 font-medium mt-0.5">
                  Client Best-Interest
                </p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={30} suffix=" Min" duration={1.0} />
                </p>
                <p className="text-[10px] sm:text-sm text-stone-700 font-medium mt-0.5">
                  Complimentary Call
                </p>
              </div>
              <div>
                <p className="font-serif text-lg sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={10} suffix=" Prov" duration={1.2} />
                </p>
                <p className="text-[10px] sm:text-sm text-stone-700 font-medium mt-0.5">
                  Coast-to-Coast
                </p>
              </div>
            </div>

            {/* Checklist of Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-0.5 text-xs sm:text-sm text-stone-700 font-medium max-w-2xl">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>Zero Sales Pressure or Jargon</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>Client-First Ethical Practice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>Access to Canada’s Top Carriers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <span>Complimentary Discovery Sessions</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                id="about-schedule-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[48px] px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-xs"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 1-on-1 Strategy Session</span>
              </button>

              <a
                href="#testimonials"
                className="inline-flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[48px] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold border transition-all hover:bg-stone-50 cursor-pointer"
                style={{
                  borderColor: activeTheme.border,
                  color: activeTheme.textDark,
                }}
              >
                <span>Read Client Experiences</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

