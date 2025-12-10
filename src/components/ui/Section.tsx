import { cn } from '@/lib/cn';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'dark' | 'gradient';
}

export function Section({
  children,
  className,
  id,
  background = 'default',
}: SectionProps) {
  const backgrounds = {
    default: 'bg-[var(--color-obsidian)]',
    dark: 'bg-[var(--color-charcoal)]',
    gradient: 'bg-gradient-to-b from-[var(--color-obsidian)] to-[var(--color-charcoal)]',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative py-16 md:py-24 lg:py-32 overflow-hidden',
        backgrounds[background],
        className
      )}
    >
      {children}
    </section>
  );
}
