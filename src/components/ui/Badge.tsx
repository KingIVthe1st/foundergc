'use client';

import { cn } from '@/lib/cn';

interface BadgeProps {
  variant?: 'default' | 'outline' | 'accent' | 'success';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
}

export function Badge({
  variant = 'default',
  size = 'md',
  children,
  className,
  pulse = false,
}: BadgeProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center',
    'font-medium rounded-full',
    'transition-all duration-300'
  );

  const variants = {
    default: cn(
      'bg-[var(--color-charcoal)]',
      'text-[var(--color-text-secondary)]',
      'border border-[var(--glass-border)]'
    ),
    outline: cn(
      'bg-transparent',
      'text-[var(--color-text-secondary)]',
      'border border-[var(--glass-border)]'
    ),
    accent: cn(
      'bg-[var(--color-accent-500)]/10',
      'text-[var(--color-accent-400)]',
      'border border-[var(--color-accent-500)]/20'
    ),
    success: cn(
      'bg-[var(--color-success)]/10',
      'text-[var(--color-success)]',
      'border border-[var(--color-success)]/20'
    ),
  };

  const sizes = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {pulse && (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-400)] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent-500)]" />
        </span>
      )}
      {children}
    </span>
  );
}
