import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'TempoPin — Your time, visible',
  description: 'A private, customizable live app timer for Android.',
  icons: {
    icon: '/app-icon.svg',
    apple: '/app-icon.svg',
  },
  openGraph: {
    type: 'website',
    title: 'Screen Time Overlay — Your time, visible',
    description: 'A private, on-device live screen-time timer for Android.',
    images: [{ url: '/og.png', width: 1536, height: 1024, alt: 'Screen Time Overlay — Your time, visible.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screen Time Overlay — Your time, visible',
    description: 'A private, on-device live screen-time timer for Android.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
