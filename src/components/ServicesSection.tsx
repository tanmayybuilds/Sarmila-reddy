import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { SERVICES_LIST } from '../data/content';
import { TrendingUp, Shield, HeartPulse, Briefcase, CheckCircle, ArrowRight, Info } from 'lucide-react';
import { ServiceItem } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_LIST[0]);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Comprehensive Financial Solutions
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Strategic Guidance for{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Every Chapter of Life.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            All financial recommendations in Canada are structured specifically around CRA tax regulations, your family goals, and established Canadian financial institutions.
          </p>
        </motion.div>

        {/* Tab Selector - Touch Optimized & Clean Presentation */}
        <div role="tablist" aria-label="Financial Services Categories" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {SERVICES_LIST.map(service => {
            const isSelected = service.id === selectedService.id;
            return (
              <button
                key={service.id}
                role="tab"
                id={`service-tab-${service.id}`}
                aria-selected={isSelected}
                aria-controls={`service-panel-${service.id}`}
                onClick={() => setSelectedService(service)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center sm:items-start gap-3 sm:gap-3.5 cursor-pointer min-h-[58px] ${
                  isSelected ? 'scale-[1.01] border-2 font-bold' : 'hover:bg-white/80 bg-white/60 active:scale-98'
                }`}
                style={{
                  borderColor: isSelected ? activeTheme.primary : activeTheme.border,
                  backgroundColor: isSelected ? '#FFFFFF' : undefined,
                }}
              >
                <div
                  className="p-2.5 rounded-xl shrink-0 transition-colors"
                  style={{
                    backgroundColor: isSelected ? activeTheme.primary : activeTheme.primaryLight,
                    color: isSelected ? '#FFFFFF' : activeTheme.primary,
                  }}
                >
                  {getServiceIcon(service.iconName)}
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className="font-semibold text-sm sm:text-base leading-tight block"
                    style={{ color: activeTheme.textDark }}
                  >
                    {service.title}
                  </span>
                  <p className="text-xs text-stone-500 mt-1 leading-snug">{service.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase Card with Smooth Tab Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.id}
            id={`service-panel-${selectedService.id}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${selectedService.id}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="rounded-2xl sm:rounded-3xl border bg-white p-6 sm:p-10 lg:p-12 text-left"
            style={{ borderColor: activeTheme.border }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left: Deep Overview */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-md"
                      style={{
                        backgroundColor: activeTheme.primaryLight,
                        color: activeTheme.primary,
                      }}
                    >
                      {selectedService.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: activeTheme.textDark }}>
                    {selectedService.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed text-sm sm:text-base font-light">
                    {selectedService.description}
                  </p>
                </div>

                {/* Core Features / Breakdown */}
                <div className="space-y-3 pt-1">
                  <h4 className="text-xs font-semibold text-stone-600">
                    Included Strategic Solutions
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-700">
                        <CheckCircle
                          className="w-4 h-4 mt-0.5 shrink-0"
                          style={{ color: activeTheme.primary }}
                        />
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking CTA for this service */}
                <div className="pt-2 sm:pt-4">
                  <button
                    id={`book-service-${selectedService.id}-btn`}
                    onClick={onOpenBooking}
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] w-full sm:w-auto px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95 cursor-pointer"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    <span>{selectedService.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right: Canadian Regulatory & Strategic Highlights with Clean Vertical Border */}
              <div
                className="lg:col-span-5 pt-6 lg:pt-0 lg:pl-10 lg:border-l border-stone-200/80 space-y-4 sm:space-y-5"
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4" style={{ color: activeTheme.accent }} />
                  <h4 className="font-serif text-sm sm:text-base font-bold" style={{ color: activeTheme.textDark }}>
                    Canadian Advantage & Rules
                  </h4>
                </div>

                <div className="space-y-2">
                  {selectedService.canadianKeyPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 border-b border-stone-100 text-xs text-stone-700 space-y-1"
                    >
                      <div className="font-semibold text-stone-900 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: activeTheme.primary }} />
                        <span>Regulatory Focus {idx + 1}</span>
                      </div>
                      <p className="text-stone-600 pl-3.5 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div
                  className="pl-3.5 border-l-2 py-1 text-xs space-y-1"
                  style={{
                    borderColor: activeTheme.primary,
                  }}
                >
                  <span className="font-bold text-stone-900 block">Licensed Independent Advisor Promise:</span>
                  <p className="text-stone-600 leading-relaxed">
                    We compare and recommend policies from Canada’s leading tier-1 insurance institutions and investment managers to find your optimum rate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

