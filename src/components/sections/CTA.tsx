'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/cn';

export function CTA() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    revenue: '',
    concerns: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Section id="apply" background="gradient">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] gradient-orb gradient-orb-cyan opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <FadeIn direction="left">
            <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
              Get Started
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              <span className="text-[var(--color-text-primary)]">Apply for Your</span>
              <br />
              <span className="text-gradient">Legal Infrastructure Audit</span>
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed">
              We&apos;ll review your current legal state, identify gaps and risks, and show you
              exactly how The Founder GC System would work for your company. No obligation,
              no pressure—just clarity.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              <h3 className="text-[var(--color-text-tertiary)] text-sm uppercase tracking-wider">
                What happens next
              </h3>
              <ul className="space-y-3">
                {[
                  'We review your application within 2 business days',
                  'If there\'s a fit, we schedule a 30-minute discovery call',
                  'We deliver a preliminary audit with specific recommendations',
                  'You decide if The Founder GC System is right for you',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-accent-500)]/20 text-[var(--color-accent-400)] flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-[var(--color-text-secondary)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Right: Form */}
          <FadeIn direction="right" delay={0.2}>
            <div
              className={cn(
                'rounded-2xl md:rounded-3xl overflow-hidden',
                'bg-[var(--color-charcoal)]',
                'border border-[var(--glass-border)]',
                'p-6 md:p-8 lg:p-10'
              )}
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[var(--color-success)]/20 text-[var(--color-success)] flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8"
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
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    Application Received!
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    We&apos;ll review and get back to you within 2 business days.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-[var(--color-graphite)]',
                        'border border-[var(--glass-border)]',
                        'text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]',
                        'focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-1 focus:ring-[var(--color-accent-500)]',
                        'transition-all duration-300'
                      )}
                      placeholder="Jane Founder"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-[var(--color-graphite)]',
                        'border border-[var(--glass-border)]',
                        'text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]',
                        'focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-1 focus:ring-[var(--color-accent-500)]',
                        'transition-all duration-300'
                      )}
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formState.company}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-[var(--color-graphite)]',
                        'border border-[var(--glass-border)]',
                        'text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]',
                        'focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-1 focus:ring-[var(--color-accent-500)]',
                        'transition-all duration-300'
                      )}
                      placeholder="Acme Inc."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="revenue"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Approximate Annual Revenue / Funding Stage
                    </label>
                    <select
                      id="revenue"
                      name="revenue"
                      required
                      value={formState.revenue}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl',
                        'bg-[var(--color-graphite)]',
                        'border border-[var(--glass-border)]',
                        'text-[var(--color-text-primary)]',
                        'focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-1 focus:ring-[var(--color-accent-500)]',
                        'transition-all duration-300'
                      )}
                    >
                      <option value="">Select one...</option>
                      <option value="pre-revenue">Pre-revenue / Seed</option>
                      <option value="1-3m">$1M - $3M ARR</option>
                      <option value="3-10m">$3M - $10M ARR</option>
                      <option value="10-30m">$10M - $30M ARR</option>
                      <option value="30m+">$30M+ ARR</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="concerns"
                      className="block text-sm font-medium text-[var(--color-text-primary)] mb-2"
                    >
                      Top 2-3 Legal Concerns
                    </label>
                    <textarea
                      id="concerns"
                      name="concerns"
                      rows={4}
                      value={formState.concerns}
                      onChange={handleChange}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl resize-none',
                        'bg-[var(--color-graphite)]',
                        'border border-[var(--glass-border)]',
                        'text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)]',
                        'focus:outline-none focus:border-[var(--color-accent-500)] focus:ring-1 focus:ring-[var(--color-accent-500)]',
                        'transition-all duration-300'
                      )}
                      placeholder="e.g., Contract chaos, IP concerns, employment compliance..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      'Submit Audit Request'
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
