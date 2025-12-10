'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren } from '@/components/animations/StaggerChildren';
import { cn } from '@/lib/cn';

const guarantees = [
  {
    metric: '1',
    unit: 'Business Day',
    description: 'Email Response SLA',
    detail: 'Every inquiry answered within one business day. No ghosting, no delays.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    metric: '2',
    unit: 'Business Days',
    description: 'Contract Review SLA',
    detail: 'First-pass review on any standard contract within two business days.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    metric: '6',
    unit: 'Contracts/Month',
    description: 'Review Capacity',
    detail: 'Up to six contract reviews monthly (20 pages max each). Predictable throughput.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    metric: '100%',
    unit: 'Partner-Led',
    description: 'Direct Access',
    detail: 'Work directly with experienced partners. No junior associate hand-offs.',
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export function SLA() {
  return (
    <Section id="sla" background="dark">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-[var(--color-text-primary)]">Service Guarantees</span>{' '}
            <span className="text-gradient">You Can Count On</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            Concrete SLAs, not vague promises. We put our commitments in writing
            because we know you need reliability, not excuses.
          </p>
        </FadeIn>

        {/* Guarantees Grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={guarantee.description}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                'relative p-6 md:p-8 rounded-2xl',
                'bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-graphite)]',
                'border border-[var(--glass-border)]',
                'group hover:border-[var(--color-accent-500)]/30',
                'transition-all duration-300'
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  'w-12 h-12 rounded-xl mb-6',
                  'flex items-center justify-center',
                  'bg-[var(--color-accent-500)]/10',
                  'text-[var(--color-accent-400)]',
                  'group-hover:bg-[var(--color-accent-500)]/20',
                  'transition-colors duration-300'
                )}
              >
                {guarantee.icon}
              </div>

              {/* Metric */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)]">
                  {guarantee.metric}
                </span>
                <span className="text-lg text-[var(--color-accent-400)] ml-2">
                  {guarantee.unit}
                </span>
              </div>

              {/* Description */}
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                {guarantee.description}
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm leading-relaxed">
                {guarantee.detail}
              </p>

              {/* Subtle accent line */}
              <div
                className={cn(
                  'absolute bottom-0 left-6 right-6 h-[2px]',
                  'bg-gradient-to-r from-transparent via-[var(--color-accent-500)]/30 to-transparent',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300'
                )}
              />
            </motion.div>
          ))}
        </StaggerChildren>
      </Container>
    </Section>
  );
}
