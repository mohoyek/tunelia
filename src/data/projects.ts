import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    id: 1,
    title: 'راه‌اندازی شبکه اداری',
    description:
      'طراحی و اجرای زیرساخت شبکه برای یک مجموعه اداری با ۴۰ کاربر، شامل کابل‌کشی، سوییچ‌های مدیریتی و Wi-Fi حرفه‌ای.',
    iconKey: 'office',
  },
  {
    id: 2,
    title: 'مغازه‌های زنجیره‌ای',
    description:
      'پیاده‌سازی شبکه یکپارچه بین چند شعبه با VPN سایت‌تو‌سایت و مدیریت متمرکز سرور.',
    iconKey: 'store',
  },
  {
    id: 3,
    title: 'کارخانه تولیدی',
    description:
      'راه‌اندازی بکاپ‌گیری خودکار و فایروال سخت‌افزاری برای حفاظت از داده‌های تولید و حسابداری.',
    iconKey: 'factory',
  },
  {
    id: 4,
    title: 'مرکز درمانی',
    description:
      'مدیریت سرور و پشتیبانی شبکه با رعایت الزامات امنیتی و پایش ۲۴ ساعته.',
    iconKey: 'clinic',
  },
];
