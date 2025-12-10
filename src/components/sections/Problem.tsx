'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren';

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Ad-hoc Legal Chaos',
    description: 'Scattered docs across Google Drive, Slack threads, and email. No system, no visibility.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Hourly Bills Add Up',
    description: 'Every call, every email, every "quick question" gets billed. Unpredictable and expensive.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    title: 'Invisible Legal Debt',
    description: 'IP gaps, contractor misclassifications, missing agreements. Problems you don\'t see until they explode.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'No One Owns It',
    description: 'Multiple outside firms, no coordination. No one sees the full picture of your legal needs.',
  },
];

export function Problem() {
  return (
    <Section background="dark">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-[var(--color-text-primary)]">Legal is happening</span>
            <br />
            <span className="text-[var(--color-text-tertiary)]">even if you don&apos;t &quot;do&quot; legal</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            Every contract, every hire, every investor conversation, every product feature
            carries legal implications. The question isn&apos;t whether you need legal—it&apos;s
            whether you&apos;re building on solid ground or invisible debt.
          </p>
        </FadeIn>

        {/* Pain Points Grid */}
        <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((point, index) => (
            <StaggerItem key={index}>
              <div className="group relative p-6 md:p-8 rounded-2xl bg-[var(--color-graphite)] border border-[var(--glass-border)] hover:border-[var(--color-accent-500)]/20 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent-500)]/10 text-[var(--color-accent-400)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </div>
                {/* Content */}
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-2">
                  {point.title}
                </h3>
                <p className="text-[var(--color-text-secondary)]">
                  {point.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom CTA */}
        <FadeIn delay={0.4} className="text-center mt-12 md:mt-16">
          <p className="text-lg text-[var(--color-text-tertiary)] mb-2">
            Sound familiar?
          </p>
          <p className="text-xl md:text-2xl font-semibold text-[var(--color-text-primary)]">
            There&apos;s a better way.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
