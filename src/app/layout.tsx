import type { Metadata } from 'next';
export const dynamic = 'force-dynamic';
import { Outfit, Playfair_Display } from 'next/font/google';
import { Navbar } from '@/components/ui/Navbar';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Swaddesh | Authentic Taste Brand - Coming Soon',
  description: 'Experience the rich culinary heritage of India with Swaddesh. We bring traditional, handcrafted, and authentic flavors straight to your doorstep. Join our waitlist for early access.',
  keywords: ['Swaddesh', 'indian food', 'authentic food', 'traditional Indian recipes', 'organic ghee', 'handcrafted spices', 'Indian pickles'],
  openGraph: {
    title: 'Swaddesh | Authentic Taste Brand - Coming Soon',
    description: 'Experience the rich culinary heritage of India with Swaddesh. Join our waitlist for exclusive early access and discounts.',
    url: 'https://swaddesh.in',
    siteName: 'Swaddesh',
    images: [
      {
        url: 'https://swaddesh.in/og-image.jpg', // Placeholder
        width: 1200,
        height: 630,
        alt: 'Swaddesh - The Authentic Taste of Home',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaddesh | Authentic Taste Brand - Coming Soon',
    description: 'Experience the rich culinary heritage of India with Swaddesh. Join our waitlist.',
    images: ['https://swaddesh.in/og-image.jpg'], // Placeholder
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body 
        className={`${outfit.variable} ${playfair.variable} font-body bg-cream text-text-dark antialiased selection:bg-maroon selection:text-gold overflow-x-hidden`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
