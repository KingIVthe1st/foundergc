'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[var(--color-obsidian)]">
        {/* Hero gradient glow */}
        <div
          className="absolute inset-0"
          style={{ background: 'var(--gradient-hero)' }}
        />

        {/* Animated glow orbs */}
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] gradient-orb gradient-orb-cyan opacity-60" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] gradient-orb gradient-orb-teal opacity-40" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid" />
      </div>

      <Container className="relative z-10">
        <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="accent" pulse className="mb-6 md:mb-8">
              For Funded Startups $3M-$30M Revenue
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6 md:mb-8"
          >
            <span className="text-[var(--color-text-primary)]">Install Your</span>
            <br />
            <span className="text-gradient">Startup Legal OS&trade;</span>
            <br />
            <span className="text-[var(--color-text-primary)]">in 7 Days</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto mb-4"
          >
            Get GC-level legal infrastructure without the $250K-$350K full-time cost.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[var(--color-text-tertiary)] max-w-xl mx-auto mb-10 md:mb-12"
          >
            Built for Series A-C startups who need to move fast and stay protected.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="primary"
              icon={
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
              className="group"
              onClick={() => {
                document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Legal Audit
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 md:mt-20"
          >
            <p className="text-[var(--color-text-muted)] text-sm uppercase tracking-widest mb-6">
              Delivered by partners at
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="text-[var(--color-text-secondary)] text-lg font-semibold">
                Thompson Burton
              </span>
              <span className="text-[var(--color-accent-500)]">PLLC</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="scroll-indicator">
          <div className="w-6 h-10 rounded-full border-2 border-[var(--color-text-muted)]/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-[var(--color-text-muted)]/50 rounded-full"
              animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
