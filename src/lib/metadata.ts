export const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'تونلیا',
  alternateName: 'TUNELIA',
  description:
    'ارائه‌دهنده خدمات حرفه‌ای شبکه، زیرساخت و فناوری اطلاعات؛ راه‌اندازی و پشتیبانی شبکه‌های کامپیوتری، مدیریت سرور، امنیت اطلاعات، بکاپ‌گیری، نصب نرم‌افزارهای حسابداری و نگهداری دوره‌ای مجموعه‌ها',
  url: 'https://tunelia.ir/',
  logo: 'https://tunelia.ir/tunelia-logo.png',
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
    name: 'خدمات تونلیا',
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
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'طراحی سایت‌های شرکتی' },
      },
    ],
  },
};

export const webSiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'تونلیا',
  alternateName: 'TUNELIA',
  url: 'https://tunelia.ir/',
  inLanguage: 'fa',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tunelia.ir/search?q={search_term}',
    'query-input': 'required name=search_term',
  },
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'تونلیا',
  alternateName: 'TUNELIA',
  url: 'https://tunelia.ir/',
  logo: 'https://tunelia.ir/tunelia-logo.png',
  telephone: '+989013365949',
  email: 'info@tunelia.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'تهران، ایران',
    addressLocality: 'تهران',
    addressRegion: 'تهران',
    postalCode: '',
    addressCountry: 'IR',
  },
  areaServed: [
    { '@type': 'City', name: 'دزفول' },
    { '@type': 'City', name: 'شوش' },
    { '@type': 'City', name: 'اندیمشک' },
    { '@type': 'City', name: 'خوزستان' },
  ],
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
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+989013365949',
    contactType: 'customer service',
    availableLanguage: ['Persian', 'English'],
  },
  serviceType: [
    'راه‌اندازی و پشتیبانی شبکه‌های کامپیوتری',
    'نصب و پشتیبانی نرم‌افزارهای حسابداری',
    'راه‌اندازی و مدیریت سرور',
    'تأمین امنیت شبکه و سرور',
    'بکاپ‌گیری حرفه‌ای و بازیابی اطلاعات',
    'رفع مشکلات سیستم و شبکه',
    'راه‌اندازی اشتراک فایل و منابع',
    'پشتیبانی و نگهداری دوره‌ای',
    'طراحی سایت‌های شرکتی',
  ],
};

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `https://tunelia.ir${item.url}`,
    })),
  };
}
