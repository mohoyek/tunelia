import type { Metadata, Viewport } from 'next';
import { professionalServiceJsonLd, webSiteJsonLd, organizationJsonLd } from '@/lib/metadata';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tunelia.ir'),
  title: 'خدمات شبکه، سرور و فناوری اطلاعات | تونلیها',
  description:
    'پشتیبانی حرفه‌ای شبکه و سرور، امنیت اطلاعات، بکاپ‌گیری، نصب نرم‌افزارهای حسابداری و نگهداری دوره‌ای مجموعه‌ها — خدمات جامع فناوری اطلاعات برای کسب‌وکار شما',
  authors: [{ name: 'تونلیها' }],
  creator: 'تونلیها',
  publisher: 'تونلیها',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://tunelia.ir/',
    languages: {
      'fa-IR': 'https://tunelia.ir/',
      'x-default': 'https://tunelia.ir/',
    },
  },
  icons: {
    icon: [{ url: '/tunelia-logo.png', type: 'image/png' }],
    apple: '/tunelia-logo.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'تونلیها',
    locale: 'fa_IR',
    url: 'https://tunelia.ir/',
    title: 'خدمات شبکه، سرور و فناوری اطلاعات | تونلیها',
    description:
      'پشتیبانی حرفه‌ای شبکه و سرور، امنیت اطلاعات، بکاپ‌گیری، نصب نرم‌افزارهای حسابداری و نگهداری دوره‌ای مجموعه‌ها',
    images: [
      {
        url: '/og-card.svg',
        type: 'image/svg+xml',
        width: 1200,
        height: 630,
        alt: 'تونلیها',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدمات شبکه، سرور و فناوری اطلاعات | تونلیها',
    description:
      'پشتیبانی حرفه‌ای شبکه و سرور، امنیت اطلاعات، بکاپ‌گیری، نصب نرم‌افزارهای حسابداری و نگهداری دوره‌ای مجموعه‌ها',
    images: ['/og-card.svg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0c0e',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
