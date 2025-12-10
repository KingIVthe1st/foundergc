'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/cn';

const includedFeatures = [
  'Full Startup Legal OS\u2122 implementation',
  'Up to 6 contract reviews monthly (20 pages max)',
  'Template drafting (NDAs, IC, advisor, offer letters)',
  'Employment & HR issue-spotting',
  'Annual corporate minutes & housekeeping',
  'Monthly strategy session',
  'Twice-monthly office hours',
  '1-business-day email response SLA',
  '2-business-day contract review SLA',
  'Direct partner delivery',
];

const exclusions = [
  { item: 'Litigation & disputes', note: 'Available at preferred rates' },
  { item: 'Executive employment & severance', note: 'Available at preferred rates' },
  { item: 'Fundraising/securities docs', note: 'Available at preferred rates' },
  { item: 'M&A transactions', note: 'Available at preferred rates' },
  { item: 'Complex regulatory programs', note: 'GDPR, SOC2 available separately' },
];

export function Pricing() {
  return (
    <Section id="pricing" background="dark">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
            Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-[var(--color-text-primary)]">Predictable Legal Costs,</span>{' '}
            <span className="text-gradient">Exceptional Value</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            One flat monthly fee. No hourly surprises. No nickel-and-diming.
            Just consistent, high-quality legal support.
          </p>
        </FadeIn>

        {/* Pricing Card */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto">
            <div
              className={cn(
                'relative rounded-3xl overflow-hidden',
                'bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-graphite)]',
                'border border-[var(--glass-border)]',
                'p-8 md:p-12',
                'glow-animate'
              )}
            >
              {/* Popular badge */}
              <div className="absolute top-6 right-6">
                <Badge variant="accent">Most Popular</Badge>
              </div>

              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                  The Founder GC System&trade;
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  Complete legal operating system for growth-stage startups
                </p>
              </div>

              {/* Pricing */}
              <div className="flex flex-wrap items-end gap-4 mb-8 pb-8 border-b border-[var(--glass-border)]">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-bold text-[var(--color-text-primary)]">
                    $7,500
                  </span>
                  <span className="text-xl text-[var(--color-text-tertiary)]">/month</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-graphite)] text-[var(--color-text-secondary)]">
                    12-month commitment
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-graphite)] text-[var(--color-text-secondary)]">
                    +$2,500 one-time onboarding
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Included */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[var(--color-success)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-3">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--color-accent-500)] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-[var(--color-text-secondary)]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Out of Scope */}
                <div>
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                    <svg
                      className="w-5 h-5 text-[var(--color-text-tertiary)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Intentionally Out of Scope
                  </h4>
                  <ul className="space-y-3">
                    {exclusions.map((exclusion) => (
                      <li key={exclusion.item} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[var(--color-text-muted)] flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                        <div>
                          <span className="text-[var(--color-text-tertiary)]">
                            {exclusion.item}
                          </span>
                          <span className="text-[var(--color-text-muted)] text-sm ml-2">
                            ({exclusion.note})
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-[var(--glass-border)] flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <p className="text-[var(--color-text-tertiary)] text-sm">
                    Month-to-month available at{' '}
                    <span className="text-[var(--color-text-secondary)]">$8,500/month</span>
                  </p>
                </div>
                <Button
                  size="lg"
                  variant="primary"
                  onClick={() => {
                    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  icon={
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  }
                >
                  Apply for Legal Audit
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
