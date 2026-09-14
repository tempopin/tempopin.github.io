import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tempopin.github.io'),
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            var preference = localStorage.getItem('tempopin-theme');
            var dark = preference === 'dark' || (preference !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
            document.documentElement.dataset.theme = dark ? 'dark' : 'light';
          } catch (_) {
            document.documentElement.dataset.theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
