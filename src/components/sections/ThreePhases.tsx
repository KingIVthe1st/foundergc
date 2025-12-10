'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/cn';

const phases = [
  {
    id: 'base-layer',
    number: '01',
    title: 'Legal Base Layer\u2122',
    timeline: 'Days 1-7',
    tagline: 'Your legal foundation, installed',
    description:
      'We audit your current state and install the foundational systems every startup needs. Contract workflows, standard templates, IP protocols, and governance basics\u2014all in place within your first week.',
    deliverables: [
      'Contract intake & management workflows',
      'Standard templates (NDAs, IC agreements, offer letters)',
      'IP assignment protocols',
      'Entity structure & ownership documentation',
      'Website policies & basic compliance',
    ],
    color: 'from-cyan-500 to-cyan-600',
    iconColor: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
  {
    id: 'foundation-sprint',
    number: '02',
    title: 'Legal Foundation Sprint\u2122',
    timeline: 'Days 8-90',
    tagline: 'Deep clean & customize',
    description:
      'With the base layer in place, we tackle your legal debt. Existing contracts get reviewed, documentation gaps get filled, and we establish your negotiation playbook for maximum efficiency.',
    deliverables: [
      'Comprehensive legal debt cleanup',
      'Existing contract review & organization',
      'Contractor/employee documentation gaps',
      'IP ownership issue resolution',
      'Custom negotiation preferences & playbook',
    ],
    color: 'from-teal-500 to-teal-600',
    iconColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
  },
  {
    id: 'scaling-safe',
    number: '03',
    title: 'Scaling Safe\u2122 Model',
    timeline: 'Months 3-12',
    tagline: 'Ongoing strategic counsel',
    description:
      'Now you have a system. We keep it running smoothly with monthly strategy sessions, contract reviews, office hours, and proactive compliance monitoring. Legal that scales with you.',
    deliverables: [
      'Up to 6 contract reviews monthly',
      'Monthly strategy session',
      'Twice-monthly office hours',
      'Annual corporate minutes & housekeeping',
      'Compliance issue-spotting & alerts',
    ],
    color: 'from-emerald-500 to-emerald-600',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
];

export function ThreePhases() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <Section id="how-it-works">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-orb gradient-orb-cyan opacity-30" />
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
            The Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-[var(--color-text-primary)]">Three Phases to</span>{' '}
            <span className="text-gradient">Legal Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)]">
            A systematic approach to building your legal infrastructure, from emergency
            triage to long-term strategy.
          </p>
        </FadeIn>

        {/* Phase Navigation */}
        <FadeIn delay={0.2} className="mb-8 md:mb-12">
          {/* Progress line - desktop only */}
          <div className="hidden md:block relative mb-8">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-[var(--color-slate)]" />
            <div
              className="absolute top-8 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-500"
              style={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
            />
          </div>

          {/* Phase buttons */}
          <div className="flex overflow-x-auto md:overflow-visible scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 gap-4 md:gap-0 md:justify-between">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={cn(
                  'flex-shrink-0 md:flex-shrink flex flex-col items-center text-center',
                  'min-w-[140px] md:min-w-0 md:w-1/3 p-4 md:p-0',
                  'transition-all duration-300 touch-manipulation',
                  index === activePhase ? 'opacity-100' : 'opacity-50 hover:opacity-75'
                )}
              >
                {/* Phase indicator */}
                <div
                  className={cn(
                    'relative w-14 h-14 md:w-16 md:h-16 rounded-full',
                    'flex items-center justify-center',
                    'border-2 transition-all duration-300 mb-4',
                    index === activePhase
                      ? 'border-[var(--color-accent-500)] bg-[var(--color-accent-500)]/10'
                      : 'border-[var(--color-slate)] bg-[var(--color-charcoal)]'
                  )}
                >
                  <span
                    className={cn(
                      'text-lg font-bold transition-colors',
                      index === activePhase
                        ? 'text-[var(--color-accent-400)]'
                        : 'text-[var(--color-text-tertiary)]'
                    )}
                  >
                    {phase.number}
                  </span>
                  {index === activePhase && (
                    <motion.div
                      layoutId="phase-ring"
                      className="absolute inset-0 rounded-full border-2 border-[var(--color-accent-500)]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
                <span
                  className={cn(
                    'text-sm font-medium transition-colors',
                    index === activePhase
                      ? 'text-[var(--color-text-primary)]'
                      : 'text-[var(--color-text-tertiary)]'
                  )}
                >
                  {phase.timeline}
                </span>
                <span
                  className={cn(
                    'text-base md:text-lg font-semibold mt-1 transition-colors',
                    index === activePhase
                      ? 'text-[var(--color-accent-400)]'
                      : 'text-[var(--color-text-secondary)]'
                  )}
                >
                  {phase.title}
                </span>
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Phase Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              className={cn(
                'relative rounded-2xl md:rounded-3xl overflow-hidden',
                'border border-[var(--glass-border)]',
                'bg-gradient-to-br from-[var(--color-charcoal)] to-[var(--color-graphite)]',
                'p-6 md:p-10 lg:p-12'
              )}
            >
              {/* Gradient accent bar */}
              <div
                className={cn(
                  'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r',
                  phases[activePhase].color
                )}
              />

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Left: Description */}
                <div>
                  <div
                    className={cn(
                      'inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6',
                      'bg-gradient-to-br',
                      phases[activePhase].color,
                      'text-white'
                    )}
                  >
                    <span className="text-xl font-bold">{phases[activePhase].number}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-2">
                    {phases[activePhase].title}
                  </h3>
                  <p className={cn('font-medium mb-4', phases[activePhase].iconColor)}>
                    {phases[activePhase].tagline}
                  </p>
                  <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
                    {phases[activePhase].description}
                  </p>
                </div>

                {/* Right: Deliverables */}
                <div>
                  <h4 className="text-[var(--color-text-tertiary)] text-sm uppercase tracking-wider mb-4">
                    What You Get
                  </h4>
                  <ul className="space-y-3">
                    {phases[activePhase].deliverables.map((item, i) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className={cn(
                            'flex-shrink-0 w-5 h-5 rounded-full mt-0.5',
                            'flex items-center justify-center',
                            'bg-gradient-to-br',
                            phases[activePhase].color
                          )}
                        >
                          <svg
                            className="w-3 h-3 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        <span className="text-[var(--color-text-primary)]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </Section>
  );
}
