'use client';

import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      className,
      children,
      icon,
      iconPosition = 'right',
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      // Base
      'relative inline-flex items-center justify-center gap-2',
      'font-semibold rounded-xl',
      'transition-all duration-300',
      // Focus
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-500)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-obsidian)]',
      // Disabled
      'disabled:opacity-50 disabled:pointer-events-none',
      // Touch optimization
      'touch-manipulation select-none',
      '-webkit-tap-highlight-color-transparent'
    );

    const variants = {
      primary: cn(
        'bg-gradient-to-r from-[var(--color-accent-500)] to-[var(--color-accent-600)]',
        'text-white',
        'shadow-lg shadow-[var(--color-accent-500)]/25',
        'hover:shadow-xl hover:shadow-[var(--color-accent-500)]/30',
        'hover:from-[var(--color-accent-400)] hover:to-[var(--color-accent-500)]',
        'active:shadow-md'
      ),
      secondary: cn(
        'bg-[var(--color-charcoal)]',
        'text-[var(--color-text-primary)]',
        'border border-[var(--glass-border)]',
        'hover:bg-[var(--color-graphite)] hover:border-[var(--color-accent-500)]/20'
      ),
      ghost: cn(
        'bg-transparent',
        'text-[var(--color-text-secondary)]',
        'hover:text-[var(--color-text-primary)] hover:bg-white/5'
      ),
      outline: cn(
        'bg-transparent',
        'text-[var(--color-text-primary)]',
        'border border-[var(--glass-border)]',
        'hover:border-[var(--color-accent-500)]/50 hover:bg-[var(--color-accent-500)]/5'
      ),
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm min-h-[40px]',
      md: 'px-6 py-3 text-base min-h-[48px]',
      lg: 'px-8 py-4 text-lg min-h-[56px]',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={disabled ? {} : { scale: 1.02 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        disabled={disabled}
        {...props}
      >
        {/* Glow effect for primary variant */}
        {variant === 'primary' && (
          <span
            className="absolute inset-0 rounded-xl bg-[var(--color-accent-500)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            aria-hidden="true"
          />
        )}
        <span className="relative z-10 flex items-center gap-2">
          {icon && iconPosition === 'left' && icon}
          {children}
          {icon && iconPosition === 'right' && icon}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
