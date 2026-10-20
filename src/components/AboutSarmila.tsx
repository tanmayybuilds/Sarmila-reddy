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
    <section id="about" className="py-16 sm:py-20 lg:py-28 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Motion Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative halo */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-30 blur-xl"
                style={{ backgroundColor: activeTheme.accent }}
              />

              <div
                className="relative rounded-3xl overflow-hidden border bg-white"
                style={{ borderColor: activeTheme.border }}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={ADVISOR_PROFILE.images.about}
                    alt="Sarmila Reddy Financial Advisor"
                    className="w-full h-full object-cover object-[center_12%] filter brightness-[1.01]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-semibold text-amber-300">
                      Sarmila Reddy
                    </span>
                    <p className="font-serif text-xl sm:text-2xl font-bold mt-0.5">
                      “I am back in business to build your legacy.”
                    </p>
                    <p className="text-sm text-stone-200 mt-1 font-light">
                      Financial Advisor • Serving Canada Coast to Coast
                    </p>
                  </div>
                </div>

                {/* Sub info */}
                <div className="p-4 sm:p-5 bg-white space-y-2.5 sm:space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-stone-600">
                    <span className="font-semibold">Professional Status:</span>
                    <span className="font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full text-xs">
                      Active LLQP License
                    </span>
                  </div>

                  <div className="text-xs sm:text-sm text-stone-600 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
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
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
              style={{ color: activeTheme.textDark }}
            >
              Building Wealth.{' '}
              <span className="font-serif font-bold" style={{ color: activeTheme.primary }}>
                Protecting Families.
              </span>{' '}
              Creating Freedom.
            </h2>

            <div className="space-y-3.5 sm:space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed font-light" style={{ maxWidth: '480px' }}>
              <p style={{ maxWidth: '480px' }}>
                Hello, I’m <strong>Sarmila Reddy</strong>. As a licensed Canadian financial advisor and entrepreneur, my practice was founded on a simple realization: far too many Canadian families work tirelessly every single day, yet feel completely left in the dark when it comes to taxes, insurance, and retirement planning.
              </p>
              <p style={{ maxWidth: '480px' }}>
                The traditional banking system often sells generic products without taking the time to explain how they interact with your taxes or your children’s future. I take the exact opposite approach. I treat every client like family—listening to your worries, analyzing your numbers, and showing you step-by-step how to protect what you’ve built while accelerating your compound growth.
              </p>
              <p style={{ maxWidth: '480px' }}>
                Whether you’ve recently landed in Canada as a new immigrant trying to make sense of the CRA, a young professional seeking smart tax shelters, or a business owner safeguarding corporate retained earnings—you deserve honest, accessible guidance.
              </p>
            </div>

            {/* Micro Stats Banner with Clean Border Divider */}
            <div
              className="py-4 border-y border-stone-200/80 grid grid-cols-3 gap-4"
            >
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={100} suffix="%" duration={1.2} />
                </p>
                <p className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  Fiduciary Mindset
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={30} suffix=" Min" duration={1.0} />
                </p>
                <p className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  Free Strategy Call
                </p>
              </div>
              <div>
                <p className="font-serif text-xl sm:text-2xl font-bold" style={{ color: activeTheme.primary }}>
                  <AnimatedCounter value={10} suffix=" Provinces" duration={1.2} />
                </p>
                <p className="text-xs sm:text-sm text-stone-700 font-medium mt-0.5">
                  Coast-to-Coast
                </p>
              </div>
            </div>

            {/* Checklist of Principles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero Sales Pressure or Jargon</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fiduciary Mindset (Client First)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Access to Canada’s Top Carriers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Complimentary Discovery Sessions</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                id="about-schedule-consultation-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer"
                style={{ backgroundColor: activeTheme.primary }}
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule a 1-on-1 Strategy Session</span>
              </button>

              <a
                href="#testimonials"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 rounded-full text-sm font-semibold border transition-all hover:bg-white cursor-pointer"
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

