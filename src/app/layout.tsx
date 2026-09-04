import type { Metadata } from 'next';
import { Cormorant_Garamond, Space_Grotesk, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meridianwayfinding.co.uk'),
  title: {
    default: 'Meridian Wayfinding | Bespoke Wayfinding Systems for Architects & Institutions',
    template: '%s | Meridian Wayfinding',
  },
  description:
    "Meridian Wayfinding designs and manufactures bespoke wayfinding and signage systems for universities, hospitals, airports and stadiums — in metal, stone, leather and fabric finishes, built directly to your architect's specification.",
  keywords: [
    'wayfinding',
    'bespoke signage',
    'architectural signage',
    'luxury signage',
    'brass signage',
    'stone signage',
    'leather signage',
    'university signage',
    'hospital signage',
    'airport wayfinding',
    'stadium signage',
    'DDA compliant signage',
    'ADA wayfinding UK',
  ],
  alternates: {
    canonical: 'https://www.meridianwayfinding.co.uk/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.meridianwayfinding.co.uk/',
    siteName: 'Meridian Wayfinding',
    title: 'Meridian Wayfinding | Bespoke Wayfinding Systems for Architects & Institutions',
    description:
      "Bespoke wayfinding and signage systems for universities, hospitals, airports and stadiums — engineered to your architect's exact specification.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meridian Wayfinding | Bespoke Wayfinding Systems',
    description:
      "Bespoke wayfinding and signage systems for universities, hospitals, airports and stadiums — engineered to your architect's exact specification.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
