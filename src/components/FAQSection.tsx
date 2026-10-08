import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FAQSection: React.FC = () => {
  const { activeTheme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-28 transition-colors duration-500 overflow-hidden" style={{ backgroundColor: activeTheme.bgLight }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>

          <h2
            className="font-serif text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: activeTheme.textDark }}
          >
            Clear Answers to Your{' '}
            <span className="italic font-serif font-normal" style={{ color: activeTheme.primary }}>
              Financial Questions.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about working with a licensed Canadian financial advisor, registered tax accounts, and protecting your family.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3 sm:space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl border bg-white overflow-hidden transition-all"
                style={{
                  borderColor: isOpen ? activeTheme.primary : activeTheme.border,
                }}
              >
                <button
                  type="button"
                  id={`faq-toggle-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors cursor-pointer min-h-[48px]"
                  style={{
                    backgroundColor: isOpen ? activeTheme.primaryLight : '#FFFFFF',
                  }}
                >
                  <span
                    className="font-serif font-bold text-sm sm:text-base tracking-tight leading-snug"
                    style={{ color: activeTheme.textDark }}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-full shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    style={{ color: activeTheme.primary }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-toggle-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div
                        className="p-4 sm:p-5 pt-3 sm:pt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-light border-t"
                        style={{ borderColor: activeTheme.border }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

