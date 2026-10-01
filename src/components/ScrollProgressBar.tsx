import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export const ScrollProgressBar: React.FC = () => {
  const { activeTheme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        backgroundColor: activeTheme.primary,
        transformOrigin: '0%',
      }}
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none shadow-sm"
    />
  );
};
