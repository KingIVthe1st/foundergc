import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ScrollProgress } from '@/components/ui/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kingivthe1st.github.io'),
  title: 'FounderGC | Startup Legal OS - Install Your Legal Operating System in 7 Days',
  description:
    'Get GC-level legal infrastructure without the $250K-$350K full-time cost. Complete legal operating system for funded startups $3M-$30M revenue. Contract management, templates, compliance, and strategic counsel.',
  keywords: [
    'startup legal',
    'general counsel',
    'legal operations',
    'startup lawyer',
    'legal infrastructure',
    'fractional GC',
    'legal operating system',
    'startup compliance',
  ],
  authors: [{ name: 'FounderGC' }],
  creator: 'FounderGC',
  publisher: 'Thompson Burton PLLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kingivthe1st.github.io/foundergc/',
    siteName: 'FounderGC',
    title: 'FounderGC | Startup Legal OS',
    description:
      'Install a complete legal operating system in 7 days. GC-level support for growth-stage startups.',
    images: [
      {
        url: '/foundergc/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FounderGC - Install Your Startup Legal OS in 7 Days',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FounderGC | Startup Legal OS',
    description:
      'Install a complete legal operating system in 7 days. GC-level support for growth-stage startups.',
    images: ['/foundergc/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {/* Skip to main content - accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Premium scroll progress indicator */}
        <ScrollProgress />

        {/* Noise texture overlay for premium agency feel */}
        <div className="noise-overlay" aria-hidden="true" />

        {children}
      </body>
    </html>
  );
}
