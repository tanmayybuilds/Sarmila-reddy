import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const { activeTheme } = useTheme();

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-white transition-colors duration-500 overflow-hidden">
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
            Real Stories, Real Peace of Mind
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Trusted by Canadian Families{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Coast-to-Coast.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed">
            Read how authentic, tailored financial advice gave these families the clarity to thrive and build their Canadian dreams.
          </p>
        </motion.div>

        {/* Testimonials Grid with Motion Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 sm:p-8 rounded-3xl border transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              style={{
                backgroundColor: activeTheme.bgLight,
                borderColor: activeTheme.border,
              }}
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 opacity-30" style={{ color: activeTheme.primary }} />
                </div>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed italic font-light">
                  “{item.quote}”
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-5 sm:pt-6 border-t mt-6 flex items-center justify-between" style={{ borderColor: activeTheme.border }}>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.clientName}
                    className="w-11 h-11 rounded-full object-cover border-2 shadow-xs"
                    style={{ borderColor: activeTheme.primary }}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-semibold text-sm" style={{ color: activeTheme.textDark }}>
                      {item.clientName}
                    </h4>
                    <p className="text-xs text-stone-500">{item.location}</p>
                  </div>
                </div>

                <span
                  className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white border text-stone-600"
                  style={{ borderColor: activeTheme.border }}
                >
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs text-stone-600"
          style={{
            backgroundColor: activeTheme.accentLight,
            borderColor: activeTheme.border,
          }}
        >
          <div className="flex items-center gap-2 font-semibold text-stone-800">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Canadian Professional Compliance Adherence</span>
          </div>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>100% Client Privacy & PIPEDA Security</span>
          <span className="hidden sm:inline text-stone-300">•</span>
          <span>No Obligation or Hidden Product Fees</span>
        </motion.div>
      </div>
    </section>
  );
};

