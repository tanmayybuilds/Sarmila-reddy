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
      // Show sticky bar after scrolling past 220px
      if (window.scrollY > 220) {
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
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className=fixed bottom-0 left-0 right-0 z-40 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border-t md:hidden pb-safe shadow-xl
          style={{ borderColor: activeTheme.border }}
        >
          <div className=flex items-center gap-2 max-w-md mx-auto>
            {/* Direct Call Button (minimum 44px touch target) */}
            <a
              href={	el:}
              className=flex items-center justify-center w-11 h-11 rounded-full border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors shrink-0 shadow-xs active:scale-95
              aria-label=Call Sarmila
              title=Call Sarmila
            >
              <Phone className=w-4 h-4 text-emerald-700 />
            </a>

            {/* Quick Email Inquiry Button (minimum 44px touch target) */}
            <a
              href={mailto:?subject=Financial%20and%20Insurance%20Planning%20Inquiry}
              className=flex items-center justify-center w-11 h-11 rounded-full border border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100 transition-colors shrink-0 shadow-xs active:scale-95
              aria-label=Email Sarmila
              title=Email Sarmila
            >
              <Mail className=w-4 h-4 text-stone-700 />
            </a>

            {/* Primary Action Button (minimum 44px touch target) */}
            <button
              id=mobile-sticky-book-btn
              onClick={onOpenBooking}
              className=flex-1 flex items-center justify-center gap-2 h-11 px-4 rounded-full text-sm font-semibold text-white active:scale-98 transition-transform shadow-sm cursor-pointer
              style={{ backgroundColor: activeTheme.primary }}
            >
              <Calendar className=w-4 h-4 shrink-0 />
              <span className=truncate>Book Consultation</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
