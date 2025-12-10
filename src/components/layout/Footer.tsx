import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/cn';

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Apply', href: '#apply' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 md:py-16 bg-[var(--color-charcoal)] border-t border-[var(--glass-border)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl',
                  'bg-gradient-to-br from-[var(--color-accent-500)] to-[var(--color-accent-600)]',
                  'flex items-center justify-center',
                  'text-white font-bold text-lg'
                )}
              >
                FG
              </div>
              <div>
                <span className="text-[var(--color-text-primary)] font-semibold">
                  Founder
                </span>
                <span className="text-[var(--color-accent-500)] font-semibold">GC</span>
              </div>
            </a>
            <p className="text-[var(--color-text-secondary)] max-w-sm">
              The Startup Legal OS. GC-level infrastructure without the full-time cost.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-8">
            <div>
              <h4 className="text-[var(--color-text-primary)] font-semibold mb-4">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={cn(
                        'text-[var(--color-text-tertiary)]',
                        'hover:text-[var(--color-text-primary)]',
                        'transition-colors duration-200'
                      )}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--glass-border)]">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <p className="text-[var(--color-text-muted)] text-sm text-center md:text-left">
              &copy; {currentYear} The Founder GC System&trade; &middot; Delivered by
              partners at Thompson Burton PLLC
            </p>
          </div>

          {/* Legal disclaimers */}
          <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
            <div className="text-[var(--color-text-muted)] text-xs space-y-1 text-center md:text-left">
              <p>
                For informational purposes only. Not legal advice. Attorney advertising.
              </p>
              <p>
                Past results do not guarantee future outcomes. Services limited to
                jurisdictions where attorneys are licensed.
              </p>
              <p>
                Engagements are accepted only after conflicts checks and execution of a
                written engagement agreement.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
