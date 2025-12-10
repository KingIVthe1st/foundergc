'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps, TargetAndTransition } from 'framer-motion';
import { cn } from '@/lib/cn';

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'glass' | 'bordered' | 'gradient';
  hoverable?: boolean;
  glowOnHover?: boolean;
  children: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = 'default',
      hoverable = false,
      glowOnHover = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'rounded-2xl overflow-hidden',
      'transition-all duration-300'
    );

    const variants = {
      default: cn(
        'bg-[var(--color-charcoal)]',
        'border border-[var(--glass-border)]'
      ),
      glass: cn('glass'),
      bordered: cn('bg-transparent', 'border-2 border-[var(--color-slate)]'),
      gradient: cn(
        'bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-graphite)]',
        'border border-[var(--glass-border)]'
      ),
    };

    // Build hover animation based on props
    const getHoverAnimation = (): TargetAndTransition | undefined => {
      if (!hoverable && !glowOnHover) return undefined;

      const animation: TargetAndTransition = {};

      if (hoverable) {
        animation.y = -4;
        animation.transition = { duration: 0.3, ease: [0.16, 1, 0.3, 1] };
      }

      if (glowOnHover) {
        animation.boxShadow = '0 0 60px rgba(6, 182, 212, 0.1)';
      }

      return animation;
    };

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        whileHover={getHoverAnimation()}
        whileTap={hoverable ? { scale: 0.995 } : undefined}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
