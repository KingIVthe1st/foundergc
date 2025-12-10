'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[100]"
      style={{
        scaleX,
        background:
          'linear-gradient(90deg, var(--color-accent-500) 0%, var(--color-accent-300) 50%, var(--color-accent-500) 100%)',
        boxShadow: '0 0 10px var(--color-accent-500), 0 0 20px var(--color-accent-500)',
      }}
    />
  );
}
