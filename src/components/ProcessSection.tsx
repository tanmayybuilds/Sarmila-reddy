import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { WORK_PROCESS } from '../data/content';
import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section className="py-16 sm:py-20 lg:py-28 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
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
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            The Advisory Experience
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Simple, Transparent &{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Completely Free.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed">
            Here is what working with an independent licensed financial advisor looks like—from our first conversation to long-term generational wealth.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {WORK_PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-3xl bg-white border shadow-xs transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative flex flex-col justify-between"
              style={{ borderColor: activeTheme.border }}
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className="font-serif text-3xl sm:text-4xl font-bold opacity-30"
                    style={{ color: activeTheme.primary }}
                  >
                    {item.step}
                  </span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: activeTheme.primaryLight,
                      color: activeTheme.primary,
                    }}
                  >
                    {item.time}
                  </span>
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-bold" style={{ color: activeTheme.textDark }}>
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div
                className="mt-6 pt-4 border-t text-xs font-semibold flex items-center justify-between text-stone-500"
                style={{ borderColor: activeTheme.border }}
              >
                <span>Step {item.step} of 04</span>
                <ArrowRight className="w-3.5 h-3.5 text-stone-400" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 sm:mt-14 text-center"
        >
          <button
            id="process-start-journey-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 min-h-[48px] w-full sm:w-auto px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase text-white shadow-lg transition-all hover:brightness-110 active:scale-95 cursor-pointer"
            style={{ backgroundColor: activeTheme.primary }}
          >
            <Calendar className="w-4 h-4" />
            <span>Begin Step 01: Book Your Free Discovery Call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

