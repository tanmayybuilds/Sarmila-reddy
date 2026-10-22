import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TARGET_AUDIENCES } from '../data/content';
import { Plane, Briefcase, Users, Building, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface AudienceSolutionsProps {
  onOpenBooking: () => void;
}

export const AudienceSolutions: React.FC<AudienceSolutionsProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [activeTab, setActiveTab] = useState(TARGET_AUDIENCES[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'PlaneLanding':
        return <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'BriefcaseBusiness':
        return <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Users':
        return <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'Building2':
        return <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default:
        return <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  const currentAudience = TARGET_AUDIENCES.find(a => a.id === activeTab) || TARGET_AUDIENCES[0];

  return (
    <section id="who-i-help" className="py-8 sm:py-14 lg:py-16 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-2 sm:space-y-3 mb-5 sm:mb-8"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            Specialized Canadian Chapters
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Proudly Serving Clients{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Coast-to-Coast.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Financial guidance isn’t one-size-fits-all. Each chapter of life in Canada carries distinct CRA tax rules, residency considerations, and family responsibilities.
          </p>
        </motion.div>

        {/* Luxury Segmented Audience Switcher: 2x2 symmetrical grid on mobile, sleek capsule on desktop */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-10">
          <div
            role="tablist"
            aria-label="Canadian Life Chapters"
            className="p-1 sm:p-1.5 rounded-2xl sm:rounded-full border shadow-inner bg-stone-100/90 backdrop-blur-md grid grid-cols-2 sm:grid-cols-4 gap-1 sm:gap-1.5"
            style={{
              borderColor: activeTheme.border,
            }}
          >
            {TARGET_AUDIENCES.map(audience => {
              const isSelected = audience.id === activeTab;
              return (
                <button
                  key={audience.id}
                  role="tab"
                  id={`audience-tab-${audience.id}`}
                  aria-selected={isSelected}
                  aria-controls={`audience-panel-${audience.id}`}
                  onClick={() => setActiveTab(audience.id)}
                  className={`relative flex items-center justify-center text-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-sm md:text-base font-semibold transition-all duration-200 cursor-pointer min-h-[44px] sm:min-h-[48px] leading-tight select-none z-10 ${
                    isSelected
                      ? 'text-white font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-white/50 active:scale-98'
                  }`}
                >
                  {/* Sliding Animated Active Pill */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeAudiencePill"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
                      className="absolute inset-0 rounded-xl sm:rounded-full shadow-sm"
                      style={{
                        backgroundColor: activeTheme.primary,
                      }}
                    />
                  )}

                  <span className="relative z-10 shrink-0">
                    {getIcon(audience.icon)}
                  </span>
                  <span className="relative z-10">
                    {audience.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Audience Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAudience.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            id={`audience-panel-${currentAudience.id}`}
            role="tabpanel"
            aria-labelledby={`audience-tab-${currentAudience.id}`}
            className="rounded-2xl sm:rounded-3xl border p-4 sm:p-8 lg:p-12 transition-all duration-300 text-left"
            style={{
              backgroundColor: activeTheme.bgLight,
              borderColor: activeTheme.border,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-serif text-lg sm:text-2xl lg:text-3xl font-bold" style={{ color: activeTheme.textDark }}>
                    Financial Strategy for {currentAudience.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-semibold text-stone-700 tracking-wide">
                    Focus: {currentAudience.subtitle}
                  </p>

                  <p className="text-stone-600 text-xs sm:text-base leading-relaxed font-light">
                    {currentAudience.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2 sm:space-y-3 pt-0.5">
                  {currentAudience.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-stone-700">
                      <div
                        className="p-1 rounded-full shrink-0 mt-0.5"
                        style={{ backgroundColor: activeTheme.primaryLight, color: activeTheme.primary }}
                      >
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1 sm:pt-4">
                  <button
                    id={`book-audience-${currentAudience.id}-btn`}
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[48px] w-full sm:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer shadow-xs"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <span>Book Strategy Call for {currentAudience.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Informational Pane with Clean Vertical Divider */}
              <div className="lg:col-span-5 pt-4 lg:pt-0 lg:pl-8 lg:border-l border-stone-200/80 space-y-3.5 sm:space-y-5 text-left">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div
                    className="p-2 sm:p-3 rounded-xl shrink-0"
                    style={{
                      backgroundColor: activeTheme.primaryLight,
                      color: activeTheme.primary,
                    }}
                  >
                    {getIcon(currentAudience.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm sm:text-lg font-bold" style={{ color: activeTheme.textDark }}>
                      The {currentAudience.title} Roadmap
                    </h4>
                    <p className="text-[11px] sm:text-xs text-stone-500">Customized step-by-step strategy</p>
                  </div>
                </div>

                <div className="py-2.5 sm:py-3.5 border-y border-stone-100 text-xs text-stone-600 space-y-1.5 sm:space-y-2">
                  <p className="font-semibold text-stone-800 text-[11px] sm:text-xs">What to expect in your session:</p>
                  <ul className="list-disc pl-4 space-y-1 text-stone-600 leading-relaxed text-[11px] sm:text-xs">
                    <li>30-minute confidential 1-on-1 virtual or phone session</li>
                    <li>Audit of your current accounts, insurance & cashflow</li>
                    <li>Zero sales jargon, zero hidden fees, zero pressure</li>
                    <li>Clear customized PDF blueprint tailored to Canada</li>
                  </ul>
                </div>

                <div className="text-[11px] sm:text-xs text-stone-500 italic">
                  * All discussions adhere to strict Canadian PIPEDA privacy regulations and professional compliance standards.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

