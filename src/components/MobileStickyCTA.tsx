import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calendar, Phone, Mail } from 'lucide-react';
import { ADVISOR_PROFILE } from '../data/content';
import { motion, AnimatePresence } from 'motion/react';

interface MobileStickyCTAProps {
  onOpenBooking: () => void;
}

export const MobileStickyCTA: React.FC<MobileStickyCTAProps> = ({ onOpenBooking }) => {
  const { activeTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past 260px (hero initial view)
      if (window.scrollY > 260) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t md:hidden pb-safe"
          style={{ borderColor: activeTheme.border }}
        >
          <div className="flex items-center gap-2 max-w-md mx-auto">
            {/* Quick Call or Email icon */}
            <a
              href={`mailto:${ADVISOR_PROFILE.email}?subject=Financial%20Advisory%20Inquiry`}
              className="flex items-center justify-center w-11 h-11 rounded-full border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors shrink-0"
              aria-label="Email Sarmila"
              title="Email Sarmila"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              id="mobile-sticky-book-btn"
              onClick={onOpenBooking}
              className="flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-full text-xs sm:text-sm font-semibold text-white active:scale-98 transition-transform"
              style={{ backgroundColor: activeTheme.primary }}
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span className="truncate">Book Free Consultation</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
