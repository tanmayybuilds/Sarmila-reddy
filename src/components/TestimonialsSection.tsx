import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const { activeTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const totalReviews = TESTIMONIALS.length;

  const nextReview = () => {
    setCurrentIndex(prev => (prev + 1) % totalReviews);
  };

  const prevReview = () => {
    setCurrentIndex(prev => (prev - 1 + totalReviews) % totalReviews);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        nextReview();
      }, 5500);
    }
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, currentIndex]);

  // Touch Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 45) {
      nextReview(); // Swiped left -> next
    } else if (diff < -45) {
      prevReview(); // Swiped right -> prev
    }
    setTouchStartX(null);
  };

  const currentItem = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-28 bg-white transition-colors duration-500 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14"
        >
          <div
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: activeTheme.badgeBg,
              color: activeTheme.badgeText,
            }}
          >
            Client Experiences Across Canada
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
            Real stories from newcomers, professionals, entrepreneurs, and young families building their wealth and security with Sarmila Reddy.
          </p>
        </motion.div>

        {/* Interactive Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Card with Smooth Fade & Slide Animation */}
          <div className="relative min-h-[340px] sm:min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0, x: 25, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -25, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full p-6 sm:p-10 lg:p-12 rounded-3xl border shadow-lg flex flex-col justify-between"
                style={{
                  backgroundColor: activeTheme.bgLight,
                  borderColor: activeTheme.border,
                }}
              >
                <div className="space-y-4 sm:space-y-6">
                  {/* Top Bar inside card: Stars, Quote mark, and Category badge */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(currentItem.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                      ))}
                      <span className="ml-2 text-xs font-semibold text-stone-500">5.0 Star Verified Review</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-white border text-stone-700 shadow-2xs"
                        style={{ borderColor: activeTheme.border }}
                      >
                        {currentItem.category}
                      </span>
                      <Quote className="w-8 h-8 opacity-25" style={{ color: activeTheme.primary }} />
                    </div>
                  </div>

                  {/* Main Quote Content */}
                  <p className="text-base sm:text-xl lg:text-2xl text-stone-800 font-light leading-relaxed italic">
                    “{currentItem.quote}”
                  </p>
                </div>

                {/* Client Profile Footer */}
                <div
                  className="pt-6 border-t mt-6 sm:mt-8 flex items-center justify-between"
                  style={{ borderColor: activeTheme.border }}
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={currentItem.avatarUrl}
                      alt={currentItem.clientName}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 shadow-xs"
                      style={{ borderColor: activeTheme.primary }}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold" style={{ color: activeTheme.textDark }}>
                        {currentItem.clientName}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {currentItem.location} • Advisory Client
                      </p>
                    </div>
                  </div>

                  {/* Slide Position Counter */}
                  <div className="text-xs sm:text-sm font-semibold text-stone-400">
                    <span className="text-stone-800">{currentIndex + 1}</span> / {totalReviews}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Arrows */}
          <button
            id="testimonial-prev-btn"
            onClick={prevReview}
            aria-label="Previous testimonial"
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-stone-700 hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
            style={{ borderColor: activeTheme.border }}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            id="testimonial-next-btn"
            onClick={nextReview}
            aria-label="Next testimonial"
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border shadow-md flex items-center justify-center text-stone-700 hover:scale-110 active:scale-95 transition-all z-10 cursor-pointer"
            style={{ borderColor: activeTheme.border }}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots & Play/Pause Controls */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                id={`testimonial-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                }`}
                style={{
                  backgroundColor: currentIndex === idx ? activeTheme.primary : undefined,
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? 'Resume autoplay' : 'Pause autoplay'}
            className="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors ml-2"
            title={isPaused ? 'Resume auto-advance' : 'Pause auto-advance'}
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Canadian Professional Compliance Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 sm:mt-16 p-5 sm:p-6 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-stone-600"
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
          <span>Zero Obligation or Hidden Product Fees</span>
        </motion.div>
      </div>
    </section>
  );
};


