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
    <section id="my-why" className="py-16 sm:py-20 lg:py-28 relative overflow-hidden bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            Core Advisory Purpose
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Beyond the Numbers,{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Here’s My Why.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed">
            Finance is rarely just about spreadsheets and market charts. It is about waking up knowing your family is safe, your hard work is compounding, and your future in Canada is anchored in certainty.
          </p>
        </motion.div>

        {/* 4 Pillars Grid with Staggered Scroll Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {WHY_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative flex flex-col justify-between"
              style={{
                backgroundColor: activeTheme.bgLight,
                borderColor: activeTheme.border,
              }}
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <span
                    className="font-serif text-2xl font-bold opacity-40"
                    style={{ color: activeTheme.primary }}
                  >
                    {pillar.number}
                  </span>
                  <div
                    className="p-2.5 sm:p-3 rounded-xl shadow-xs"
                    style={{
                      backgroundColor: '#FFFFFF',
                      color: activeTheme.primary,
                      border: `1px solid ${activeTheme.border}`,
                    }}
                  >
                    {getIcon(pillar.icon)}
                  </div>
                </div>

                <p className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 mb-1">
                  {pillar.subtitle}
                </p>

                <h3
                  className="font-serif text-lg sm:text-xl font-bold mb-2 sm:mb-3 tracking-tight"
                  style={{ color: activeTheme.textDark }}
                >
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div
                className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t text-[11px] font-medium flex items-center gap-1.5"
                style={{
                  borderColor: activeTheme.border,
                  color: activeTheme.primary,
                }}
              >
                <span>Client Commitment</span>
                <span className="w-1 h-1 rounded-full bg-stone-400" />
                <span className="text-stone-500">Uncompromised</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Quote That Stuck With Me - Big Editorial Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-16 p-5 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border shadow-sm relative overflow-hidden transition-colors"
          style={{
            backgroundColor: activeTheme.primaryLight,
            borderColor: activeTheme.border,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 opacity-40" style={{ color: activeTheme.primary }} />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: activeTheme.primary }}
                >
                  The Words That Defined My Career
                </span>
              </div>

              <blockquote
                className="font-serif text-2xl sm:text-3xl lg:text-4xl italic font-semibold leading-snug"
                style={{ color: activeTheme.textDark }}
              >
                “You made something so confusing... finally make sense.”
              </blockquote>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl font-light">
                When a client shared that after our first strategy blueprint, I realized my role isn’t to sell complex products. My mission is to give you total mastery and clarity over your Canadian wealth, so you never feel intimidated by finance again.
              </p>

              {/* Sarmila Signature Persona Strip */}
              <div className="pt-2 flex items-center gap-3">
                <img
                  src={ADVISOR_PROFILE.images.whyAvatar}
                  alt="Sarmila Reddy"
                  className="w-12 h-12 rounded-full object-cover object-[center_15%] border-2 shadow-xs"
                  style={{ borderColor: activeTheme.accent }}
                />
                <div>
                  <h4 className="font-serif text-sm font-bold" style={{ color: activeTheme.textDark }}>
                    Sarmila Reddy
                  </h4>
                  <p className="text-[11px] text-stone-500 font-medium">
                    Licensed Financial Advisor • Serving Canada
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Desk Philosophy Highlight from her photos */}
            <div
              className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white/90 backdrop-blur-sm border shadow-sm space-y-4 text-left"
              style={{ borderColor: activeTheme.border }}
            >
              <h4 className="font-serif text-base font-bold" style={{ color: activeTheme.textDark }}>
                On My Daily Desk
              </h4>

              <div className="space-y-3 text-xs text-stone-600">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-stone-100 text-stone-700 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span><strong>Plan. Protect. Grow.</strong> (Daily client roadmap)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-stone-100 text-stone-700 shrink-0">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <span><strong>“Discipline brings Freedom”</strong> (My guiding motto)</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-stone-100 text-stone-700 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <span><strong>Atomic Habits</strong> (Small daily compounding wins)</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

