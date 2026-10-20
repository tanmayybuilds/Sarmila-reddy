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
    <section className="py-10 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 mb-6 sm:mb-8"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
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

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Here is what working with an independent licensed financial advisor looks like—from our first conversation to long-term generational wealth.
          </p>
        </motion.div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {WORK_PROCESS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between shadow-sm"
              style={{ borderColor: activeTheme.border }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: activeTheme.primaryLight,
                      color: activeTheme.primary,
                    }}
                  >
                    Phase {idx + 1}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    {item.time}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold" style={{ color: activeTheme.textDark }}>
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div
                className="mt-5 pt-3.5 border-t text-xs font-semibold flex items-center justify-between text-stone-500"
                style={{ borderColor: activeTheme.border }}
              >
                <span>Fiduciary Commitment</span>
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
          className="mt-8 text-center"
        >
          <button
            id="process-start-journey-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2.5 min-h-[48px] w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-sm"
            style={{ backgroundColor: activeTheme.primary }}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Free Discovery Call</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

