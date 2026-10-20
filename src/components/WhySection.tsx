import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { WHY_PILLARS, ADVISOR_PROFILE } from '../data/content';
import { Target, Sparkles, ShieldCheck, MessageSquareHeart, Quote, BookOpen, Coffee, Award } from 'lucide-react';
import { motion } from 'motion/react';

export const WhySection: React.FC = () => {
  const { activeTheme } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'MessageSquareHeart':
        return <MessageSquareHeart className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <section id="my-why" className="py-8 sm:py-14 lg:py-16 relative overflow-hidden transition-colors duration-500" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-6 sm:mb-10"
        >
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-white text-stone-800 border border-stone-200 shadow-xs">
            <span>Guiding Principles</span>
          </div>

          <h2
            className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Beyond the Numbers,{' '}
            <span className="font-serif font-bold" style={{ color: activeTheme.primary }}>
              Here’s My Core Purpose.
            </span>
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Finance is rarely just about spreadsheets and market charts. It is about waking up knowing your family is safe, your hard work is compounding, and your future in Canada is anchored in certainty.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 lg:gap-6">
          {WHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative flex flex-col justify-between bg-white shadow-xs"
              style={{
                borderColor: activeTheme.border,
              }}
            >
              <div>
                {/* Icon Header without useless indexing numbers */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: activeTheme.primaryLight,
                      color: activeTheme.primary,
                    }}
                  >
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-stone-500">
                    {pillar.subtitle}
                  </span>
                </div>

                <h3
                  className="font-serif text-base sm:text-lg font-bold mb-1 sm:mb-2 tracking-tight"
                  style={{ color: activeTheme.textDark }}
                >
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Quote That Stuck With Me - Big Editorial Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-6 sm:mt-10 p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border relative overflow-hidden transition-colors shadow-xs"
          style={{
            backgroundColor: '#FFFFFF',
            borderColor: activeTheme.border,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-left">
              <div className="flex items-center gap-2">
                <Quote className="w-5 h-5 sm:w-8 sm:h-8 opacity-40" style={{ color: activeTheme.primary }} />
                <span
                  className="text-[11px] sm:text-sm font-semibold"
                  style={{ color: activeTheme.primary }}
                >
                  The Words That Defined My Career
                </span>
              </div>

              <blockquote
                className="font-serif text-xl sm:text-3xl lg:text-4xl italic font-semibold leading-snug"
                style={{ color: activeTheme.textDark }}
              >
                “You made something so confusing... finally make sense.”
              </blockquote>

              <p className="text-xs sm:text-base text-stone-600 leading-relaxed font-light" style={{ maxWidth: '420px' }}>
                When a client shared that after our first strategy blueprint, I realized my role isn’t to sell complex products. My mission is to give you total mastery and clarity over your Canadian wealth, so you never feel intimidated by finance again.
              </p>

              {/* Sarmila Signature Persona Strip */}
              <div className="pt-1 sm:pt-2 flex items-center gap-3">
                <img
                  src={ADVISOR_PROFILE.images.whyAvatar}
                  alt="Sarmila Reddy"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover object-center border-2 shadow-xs"
                  style={{ borderColor: activeTheme.accent }}
                />
                <div>
                  <h4 className="font-serif text-sm sm:text-base font-bold" style={{ color: activeTheme.textDark }}>
                    Sarmila Reddy
                  </h4>
                  <p className="text-[11px] sm:text-sm text-stone-500 font-medium">
                    Licensed Financial Advisor • Serving Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Desk Philosophy Highlight with Clean Editorial Border */}
            <div
              className="lg:col-span-4 pt-4 lg:pt-0 lg:pl-8 lg:border-l border-stone-300/70 space-y-3 sm:space-y-4 text-left"
            >
              <h4 className="font-serif text-sm sm:text-base font-bold text-stone-900">
                On My Daily Desk
              </h4>

              <div className="space-y-2 sm:space-y-3 text-xs text-stone-700">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="p-1 sm:p-1.5 rounded-md bg-stone-100 text-stone-900 shrink-0">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span><strong className="text-stone-900">Plan. Protect. Grow.</strong> (Daily client roadmap)</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="p-1 sm:p-1.5 rounded-md bg-stone-100 text-stone-900 shrink-0">
                    <Coffee className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span><strong className="text-stone-900">“Discipline brings Freedom”</strong> (Guiding principle)</span>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="p-1 sm:p-1.5 rounded-md bg-stone-100 text-stone-900 shrink-0">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span><strong className="text-stone-900">Atomic Habits</strong> (Daily compounding steps)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

