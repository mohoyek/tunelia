import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    id: 1,
    num: 'SVC.01',
    title: 'بکاپ‌گیری',
    description:
      'پیاده‌سازی بکاپ‌گیری خودکار و بازیابی اطلاعات تا هیچ خرابی یا خطایی به نابودی داده‌های شما منجر نشود.',
    tags: ['خودکار', 'ابری', 'NAS', 'بازیابی'],
    iconKey: 'backup',
  },
  {
    id: 2,
    num: 'SVC.02',
    title: 'نرم‌افزارهای حسابداری',
    description:
      'نصب، راه‌اندازی و پشتیبانی نرم‌افزارهای حسابداری و مالی به‌همراه آموزش و رفع مشکلات نرم‌افزاری.',
    tags: ['هلو', 'سپیدار', 'پارسا', 'آموزش'],
    iconKey: 'accounting',
  },
  {
    id: 3,
    num: 'SVC.03',
    title: 'راه‌اندازی و مدیریت سرور',
    description:
      'راه‌اندازی و مدیریت سرورهای ویندوز و لینوکس؛ مدیریت کاربران و دسترسی‌ها، بهینه‌سازی و پایش مستمر.',
    tags: ['Windows Server', 'Linux', 'Active Directory', 'Hyper-V'],
    iconKey: 'server',
  },
  {
    id: 4,
    num: 'SVC.04',
    title: 'تأمین امنیت شبکه و سرور',
    description:
      'فایروال، کنترل دسترسی و شناسایی آسیب‌پذیری‌ها برای محافظت از شبکه و سرور در برابر حملات امنیتی.',
    tags: ['Firewall', 'VPN', 'IDS/IPS', 'Monitoring'],
    iconKey: 'security',
  },
  {
    id: 5,
    num: 'SVC.05',
    title: 'شبکه‌های کامپیوتری',
    description:
      'طراحی، راه‌اندازی و پشتیبانی شبکه‌های کامپیوتری سازمانی؛ از کابل‌کشی و تجهیزات تا سوییچ و روتر.',
    tags: ['LAN', 'WAN', 'Wi-Fi', 'Cisco', 'MikroTik'],
    iconKey: 'network',
  },
  {
    id: 6,
    num: 'SVC.06',
    title: 'رفع مشکلات سیستم و شبکه',
    description:
      'بررسی و رفع سریع مشکلات سیستم و شبکه با پشتیبانی فنی پاسخگو، در دسترس و متخصص.',
    tags: ['ریموت', 'حضوری', '۲۴/۷'],
    iconKey: 'support',
  },
  {
    id: 7,
    num: 'SVC.07',
    title: 'اشتراک فایل و منابع',
    description:
      'اشتراک‌گذاری فایل، پرینتر و منابع بین سیستم‌ها با سطح دسترسی مناسب، مرتب و امن.',
    tags: ['File Sharing', 'Printer', 'Permissions'],
    iconKey: 'sharing',
  },
  {
    id: 8,
    num: 'SVC.08',
    title: 'پشتیبانی و نگهداری دوره‌ای',
    description:
      'قرارداد پشتیبانی و نگهداری دوره‌ای؛ بازرسی منظم، به‌روزرسانی‌ها و پیشگیری از توقف کار مجموعه.',
    tags: ['ماهانه', 'فصلی', 'قرارداد'],
    iconKey: 'maintenance',
  },
  {
    id: 9,
    num: 'SVC.09',
    title: 'طراحی سایت‌های شرکتی',
    description:
      'طراحی و توسعه وب‌سایت‌های شرکتی، پورتال‌های سازمانی و فروشگاه‌های آنلاین با تکنولوژی‌های مدرن و سئو بهینه.',
    tags: ['React', 'Next.js', 'SEO', 'Responsive'],
    iconKey: 'web',
  },
];