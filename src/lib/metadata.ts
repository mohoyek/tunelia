export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'تونلیها',
  alternateName: 'TUNELIA',
  description:
    'ارائه‌دهنده خدمات حرفه‌ای شبکه، زیرساخت و فناوری اطلاعات؛ راه‌اندازی و پشتیبانی شبکه‌های کامپیوتری، مدیریت سرور، امنیت اطلاعات، بکاپ‌گیری، نصب نرم‌افزارهای حسابداری و نگهداری دوره‌ای مجموعه‌ها',
  url: 'https://tunelia.ir/',
  logo: 'https://tunelia.ir/brand.svg',
  telephone: '+989013365949',
  email: 'info@tunelia.com',
  priceRange: '$$',
  inLanguage: 'fa',
  areaServed: 'IR',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: ['https://t.me/mohoyek', 'https://wa.me/989013365949'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'خدمات تونلیها',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'راه‌اندازی و پشتیبانی شبکه‌های کامپیوتری' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'نصب و پشتیبانی نرم‌افزارهای حسابداری' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'راه‌اندازی و مدیریت سرور' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'تأمین امنیت شبکه و سرور' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'بکاپ‌گیری حرفه‌ای و جلوگیری از نابودی اطلاعات' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'رفع مشکلات سیستم و شبکه با پشتیبانی سریع' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'راه‌اندازی اشتراک فایل و منابع بین سیستم‌ها' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'پشتیبانی و نگهداری دوره‌ای مجموعه‌ها' },
      },
    ],
  },
};

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'تونلیها',
  alternateName: 'TUNELIA',
  url: 'https://tunelia.ir/',
  inLanguage: 'fa',
};
