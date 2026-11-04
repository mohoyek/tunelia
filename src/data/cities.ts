export interface City {
  slug: string;
  name: string;
  province: string;
  description: string;
}

export const cities: City[] = [
  {
    slug: 'dezful',
    name: 'دزفول',
    province: 'خوزستان',
    description:
      'خدمات شبکه، سرور، امنیت اطلاعات و بکاپ‌گیری در شهر دزفول و نقاط حومه.',
  },
  {
    slug: 'shush',
    name: 'شوش',
    province: 'خوزستان',
    description:
      'پشتیبانی شبکه و سرور، نصب کابل‌کشی و تجهیزات شبکه در شهر شوش.',
  },
  {
    slug: 'andimeshk',
    name: 'اندیمشک',
    province: 'خوزستان',
    description:
      'راه‌اندازی شبکه کامپیوتری، مدیریت سرور و امنیت اطلاعات در شهر اندیمشک.',
  },
  {
    slug: 'khuzestan',
    name: 'خوزستان',
    province: 'خوزستان',
    description:
      'خدمات فنی شبکه و سرور در سراسر استان خوزستان (دزفول، شوش، اندیمشک و شهرهای دیگر).',
  },
];
