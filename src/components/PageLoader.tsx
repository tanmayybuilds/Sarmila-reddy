import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ADVISOR_PROFILE } from '../data/content';

interface PageLoaderProps {
  onComplete?: () => void;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(55), 180);
    const timer2 = setTimeout(() => setProgress(90), 420);
    const timer3 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        if (onComplete) onComplete();
      }, 350);
    }, 650);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF8F5] text-stone-900 select-none overflow-hidden"
          style={{ willChange: 'opacity' }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none -top-10 -right-10" />
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/8 blur-3xl pointer-events-none -bottom-10 -left-10" />

          <div className="relative flex flex-col items-center max-w-sm px-6 text-center space-y-6">
            {/* Animated Logo Container */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-2 bg-white border border-stone-200/80 shadow-md flex items-center justify-center"
            >
              <img
                src={ADVISOR_PROFILE.images.logo}
                alt="Sarmila Reddy"
                className="w-full h-full object-contain filter drop-shadow-xs"
              />
              <span className="absolute -inset-1 rounded-full border border-amber-600/30 animate-ping opacity-35" />
            </motion.div>

            {/* Brand Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="space-y-1.5"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/70 text-xs font-semibold text-amber-900">
                <span>🍁</span>
                <span>Licensed Canadian Advisor</span>
              </div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
                Sarmila Reddy
              </h1>
              <p className="text-xs sm:text-sm text-stone-500 font-light">
                Plan Smart • Live Confident • Build Your Legacy
              </p>
            </motion.div>

            {/* Elegant Progress Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="w-48 sm:w-56 space-y-2"
            >
              <div className="w-full h-1 bg-stone-200/80 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: 'easeInOut', duration: 0.4 }}
                />
              </div>
              <div className="flex justify-between items-center text-xs font-medium text-stone-500">
                <span>Curating Strategy</span>
                <span>{progress}%</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
