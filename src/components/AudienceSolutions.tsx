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
        return <Plane className="w-5 h-5" />;
      case 'BriefcaseBusiness':
        return <Briefcase className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'Building2':
        return <Building className="w-5 h-5" />;
      default:
        return <Users className="w-5 h-5" />;
    }
  };

  const currentAudience = TARGET_AUDIENCES.find(a => a.id === activeTab) || TARGET_AUDIENCES[0];

  return (
    <section id="who-i-help" className="py-16 sm:py-20 lg:py-28 bg-white transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
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

        {/* Audience Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {TARGET_AUDIENCES.map(audience => {
            const isSelected = audience.id === activeTab;
            return (
              <button
                key={audience.id}
                id={`audience-pill-${audience.id}`}
                onClick={() => setActiveTab(audience.id)}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer min-h-[44px] ${
                  isSelected ? 'scale-102 border-2' : 'hover:bg-stone-50 text-stone-600 active:scale-98'
                }`}
                style={{
                  backgroundColor: isSelected ? activeTheme.primary : '#FFFFFF',
                  color: isSelected ? '#FFFFFF' : undefined,
                  borderColor: isSelected ? activeTheme.primary : activeTheme.border,
                }}
              >
                {getIcon(audience.icon)}
                <span>{audience.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Audience Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentAudience.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl sm:rounded-3xl border p-5 sm:p-10 lg:p-12 transition-all duration-300 text-left"
            style={{
              backgroundColor: activeTheme.bgLight,
              borderColor: activeTheme.border,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: activeTheme.textDark }}>
                    Financial Strategy for {currentAudience.title}
                  </h3>

                  <p className="text-xs font-semibold text-stone-700 tracking-wide">
                    Focus: {currentAudience.subtitle}
                  </p>

                  <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                    {currentAudience.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 sm:space-y-3 pt-1">
                  {currentAudience.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                      <div
                        className="p-1 rounded-full shrink-0 mt-0.5"
                        style={{ backgroundColor: activeTheme.primaryLight, color: activeTheme.primary }}
                      >
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 sm:pt-4">
                  <button
                    id={`book-audience-${currentAudience.id}-btn`}
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <span>Book Strategy Call for {currentAudience.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Informational Pane with Clean Vertical Divider */}
              <div className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-10 lg:border-l border-stone-200/80 space-y-5 text-left">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 sm:p-3 rounded-xl shrink-0"
                    style={{
                      backgroundColor: activeTheme.primaryLight,
                      color: activeTheme.primary,
                    }}
                  >
                    {getIcon(currentAudience.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-bold" style={{ color: activeTheme.textDark }}>
                      The {currentAudience.title} Roadmap
                    </h4>
                    <p className="text-xs text-stone-500">Customized step-by-step strategy</p>
                  </div>
                </div>

                <div className="py-3.5 border-y border-stone-100 text-xs text-stone-600 space-y-2">
                  <p className="font-semibold text-stone-800">What to expect in your session:</p>
                  <ul className="list-disc pl-4 space-y-1 text-stone-600 leading-relaxed">
                    <li>30-minute confidential 1-on-1 virtual or phone session</li>
                    <li>Audit of your current accounts, insurance & cashflow</li>
                    <li>Zero sales jargon, zero hidden fees, zero pressure</li>
                    <li>Clear customized PDF blueprint tailored to Canada</li>
                  </ul>
                </div>

                <div className="text-xs sm:text-sm text-stone-500 italic">
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

