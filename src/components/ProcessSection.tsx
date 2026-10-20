import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { WORK_PROCESS } from '../data/content';
import { Calendar, ArrowRight, Clock, CheckCircle2, Sparkles, Shield } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();

  return (
    <section className="py-8 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Disciplined 4-Stage Advisory Process</span>
          </div>

          <h2
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Simple, Transparent &{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              100% Complimentary.
            </span>
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Education first, personalized strategy second, protection last. Here is the structured path every client experiences from initial conversation to lifelong security.
          </p>
        </motion.div>

        {/* 4 Steps Grid with Visual Connecting Progress Line */}
        <div className="relative">
          {/* Subtle horizontal connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-7 left-12 right-12 h-[2px] -z-0 opacity-40 border-t-2 border-dashed"
            style={{ borderColor: activeTheme.border }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 relative z-10">
            {WORK_PROCESS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border transition-shadow duration-300 hover:shadow-md flex flex-col justify-between shadow-xs text-left group"
                style={{ borderColor: activeTheme.border }}
              >
                <div className="space-y-3">
                  {/* Top Bar with Number Badge & Duration */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-mono text-xs sm:text-sm font-bold shadow-xs transition-colors group-hover:scale-105"
                      style={{
                        backgroundColor: activeTheme.primaryLight,
                        color: activeTheme.primary,
                      }}
                    >
                      0{idx + 1}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs text-stone-500 font-medium bg-stone-50 px-2 py-0.5 rounded-full border border-stone-100">
                      <Clock className="w-3 h-3 text-stone-400" />
                      <span>{item.time}</span>
                    </span>
                  </div>

                  {/* Title & Phase */}
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-1">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold leading-snug" style={{ color: activeTheme.textDark }}>
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div
                  className="mt-4 pt-3 border-t text-[11px] sm:text-xs font-semibold flex items-center justify-between"
                  style={{ borderColor: activeTheme.border }}
                >
                  <span className="text-stone-500 font-medium">Client-First Standard</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Banner with Direct Call Scheduling */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-10 text-center space-y-2"
        >
          <button
            id="process-start-journey-btn"
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 min-h-[44px] sm:min-h-[48px] w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-xs"
            style={{ backgroundColor: activeTheme.primary }}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Complimentary Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-stone-500 font-light">
            No obligation • 30-minute virtual strategy call • Full confidentiality
          </p>
        </motion.div>
      </div>
    </section>
  );
};
