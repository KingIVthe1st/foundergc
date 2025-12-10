import { Variants } from 'framer-motion';

// Premium expo-out easing for smooth, professional feel
// Typed as tuple for Framer Motion compatibility
export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Fade in from bottom - most common animation
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Simple fade
export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

// Stagger container for child elements
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger with faster timing for lists
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Button hover/tap variants
export const buttonVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  tap: {
    scale: 0.98,
    transition: { duration: 0.1 },
  },
};

// Card hover with glow effect
export const cardHover: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 0 0 rgba(6, 182, 212, 0)',
  },
  hover: {
    y: -4,
    boxShadow: '0 0 60px rgba(6, 182, 212, 0.1)',
    transition: { duration: 0.3, ease: easeOutExpo },
  },
};

// For accordion/expandable content
export const expandVariants: Variants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: easeOutExpo },
      opacity: { duration: 0.2 },
    },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: easeOutExpo },
      opacity: { duration: 0.3, delay: 0.1 },
    },
  },
};

// Hero text reveal animation
export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Subtle float animation for decorative elements
export const float: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Glow pulse for accent elements
export const glowPulse: Variants = {
  initial: {
    boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(6, 182, 212, 0.1)',
      '0 0 40px rgba(6, 182, 212, 0.2)',
      '0 0 20px rgba(6, 182, 212, 0.1)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
