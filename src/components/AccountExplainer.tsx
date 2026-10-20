import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { CANADIAN_ACCOUNTS_GUIDE } from '../data/content';
import { Lightbulb, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface AccountExplainerProps {
  onOpenBooking: () => void;
}

export const AccountExplainer: React.FC<AccountExplainerProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section id="accounts" className="py-16 sm:py-20 lg:py-28 bg-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            CRA Registered Vehicles
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Canadian Accounts{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Decoded & Demystified.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            The Canadian government offers some of the world's most powerful tax shelters. Here is how we strategically stack them to protect your money from unnecessary taxation.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CANADIAN_ACCOUNTS_GUIDE.map((acc, idx) => (
            <motion.div
              key={acc.code}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              style={{
                backgroundColor: activeTheme.bgLight,
                borderColor: activeTheme.border,
              }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span
                      className="font-serif text-2xl sm:text-3xl font-bold tracking-tight"
                      style={{ color: activeTheme.primary }}
                    >
                      {acc.code}
                    </span>
                    <p className="text-xs font-semibold text-stone-700">{acc.fullName}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700">
                    {acc.annualLimit}
                  </span>
                </div>

                <div className="space-y-2 pt-2 text-xs sm:text-sm text-stone-600">
                  <div>
                    <span className="font-semibold text-stone-800 text-xs block mb-0.5">
                      Tax Advantage:
                    </span>
                    <p className="leading-snug">{acc.taxTreatment}</p>
                  </div>

                  <div>
                    <span className="font-semibold text-stone-800 text-xs block mb-0.5">
                      Best Suited For:
                    </span>
                    <p className="leading-snug">{acc.bestFor}</p>
                  </div>
                </div>

                {/* Pro-Tip with Clean Divider */}
                <div
                  className="pt-3 border-t border-stone-200/70 text-xs flex items-start gap-2.5"
                >
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <p className="text-stone-600 leading-relaxed">
                    <strong className="text-stone-800">Sarmila's Pro-Tip:</strong> {acc.proTip}
                  </p>
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t mt-6 flex items-center justify-between" style={{ borderColor: activeTheme.border }}>
                <span className="text-xs text-stone-500 font-medium">Ready to open or optimize?</span>
                <button
                  id={`explainer-open-${acc.code}-btn`}
                  onClick={onOpenBooking}
                  className="text-xs font-bold flex items-center gap-1 hover:underline transition-all cursor-pointer py-1.5"
                  style={{ color: activeTheme.primary }}
                >
                  <span>Discuss {acc.code} Strategy</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

