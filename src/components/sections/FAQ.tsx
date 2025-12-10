'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { FadeIn } from '@/components/animations/FadeIn';
import { cn } from '@/lib/cn';

const faqs = [
  {
    question: 'What makes this different from hiring a regular law firm?',
    answer:
      'Traditional law firms bill hourly for reactive work. We install a proactive legal operating system with flat, predictable pricing. You get the infrastructure and ongoing support of a full-time GC without the $250K-$350K salary, benefits, and management overhead.',
  },
  {
    question: 'What types of companies is this best suited for?',
    answer:
      'The Founder GC System is designed for funded startups generating $3M-$30M in annual revenue, or recently funded companies who need GC-level support. You\'ve outgrown ad-hoc legal but aren\'t ready for a full-time General Counsel hire.',
  },
  {
    question: 'What happens if I need help with something outside the scope?',
    answer:
      'Work outside the core scope (litigation, M&A, fundraising docs, etc.) is available at preferred member rates. We\'ll handle coordination and provide seamless support—you\'ll never be left hanging.',
  },
  {
    question: 'How quickly can you start?',
    answer:
      'Once you\'re accepted and we complete conflicts checks, we can begin the Legal Base Layer installation within days. The first phase takes 7 days, so you\'ll have your foundational systems in place quickly.',
  },
  {
    question: 'What if I need to exit the agreement early?',
    answer:
      'The 12-month commitment ensures we can deliver the full system and value. However, we understand startups face unexpected changes. Contact us to discuss your situation—we prioritize long-term relationships over rigid contracts.',
  },
  {
    question: 'Who actually does the work?',
    answer:
      'All work is delivered directly by partners at Thompson Burton PLLC—not associates, not paralegals. You get senior-level attention and expertise on every matter.',
  },
  {
    question: 'What\'s your response time?',
    answer:
      'We commit to 1-business-day email response SLA and 2-business-day contract review SLA. If we miss an SLA, you receive service credits. We take our commitments seriously.',
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        'border-b border-[var(--glass-border)] last:border-b-0',
        'transition-colors duration-300',
        isOpen && 'bg-[var(--color-charcoal)]/50'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'w-full flex items-center justify-between gap-4',
          'py-6 px-4 md:px-6 text-left',
          'transition-colors duration-300 touch-manipulation',
          'hover:bg-[var(--color-charcoal)]/30'
        )}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            'text-lg font-medium transition-colors',
            isOpen ? 'text-[var(--color-accent-400)]' : 'text-[var(--color-text-primary)]'
          )}
        >
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <svg
            className={cn(
              'w-6 h-6 transition-colors',
              isOpen ? 'text-[var(--color-accent-500)]' : 'text-[var(--color-text-tertiary)]'
            )}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="px-4 md:px-6 pb-6 text-[var(--color-text-secondary)] leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section>
      <Container size="narrow">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[var(--color-accent-500)] text-sm font-medium uppercase tracking-widest mb-4 block">
            Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[var(--color-text-primary)]">
            Frequently Asked
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Everything you need to know about The Founder GC System.
          </p>
        </FadeIn>

        {/* FAQ List */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-[var(--glass-border)] overflow-hidden bg-[var(--color-graphite)]/50">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
