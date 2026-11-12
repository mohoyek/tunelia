/**
 * نمونه‌کارهای واقعی تونلیا — منبع واحد داده برای صفحهٔ /projects
 * دستهٔ «network»: پروژه‌های زیرساخت شبکه
 * دستهٔ «software»: محصولات نرم‌افزاری و وب (با لینک گیت‌هاب و نسخهٔ لایو)
 */

export type ProjectKind = 'network' | 'software';

export interface ProjectLink {
  label: string;
  href: string;
  /** چرخهٔ بیرونی = گیت‌هاب، سایت لایو یا وب‌سایت مشتری */
  external?: boolean;
}

export interface Project {
  id: string;
  kind: ProjectKind;
  /** شمارهٔ نمایشی فارسی */
  num: string;
  title: string;
  /** یک‌خطی نقش تونلیا در پروژه */
  role: string;
  description: string;
  /** بولت‌های کوتاه از کارهای انجام‌شده */
  highlights: string[];
  tags: string[];
  iconKey: string;
  /** برچسب دامنه یا نام پروژه به لاتین (mono chip) */
  code?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  // ───────────── پروژه‌های شبکه ─────────────
  {
    id: 'amin-hesab-taraz',
    kind: 'network',
    num: '۰۱',
    title: 'امین حساب تراز دز',
    role: 'زیرساخت شبکهٔ دو شعبه + اتصال اختصاصی بین‌شعبه‌ای',
    description:
      'اجرای کامل زیرساخت شبکه در دو شعبه — از کابل‌کشی پسیو تا تجهیزات اکتیو — و اتصال امن دو شعبه از طریق تونل اختصاصی ایرانسل؛ نتیجه: دو شعبه دقیقاً مثل یک شبکهٔ واحد کار می‌کنند و منابع بین آن‌ها بدون وقفه به اشتراک گذاشته می‌شود.',
    highlights: [
      'اجرای کابل‌کشی و زیرساخت پسیو هر دو شعبه',
      'راه‌اندازی تجهیزات اکتیو و سوئیچینگ',
      'تونل اختصاصی ایرانسل برای ارتباط امن و دائم بین شعب',
    ],
    tags: ['پسیو', 'اکتیو', 'تونل اختصاصی', 'ایرانسل'],
    iconKey: 'network',
  },
  {
    id: 'sazeh-afzar-fath',
    kind: 'network',
    num: '۰۲',
    title: 'سازه‌افزار فتح',
    role: 'تجمیع پهنای باند اینترنت با روتر میکروتیک',
    description:
      'تجمیع باند چند خط اینترنت روی روتر میکروتیک تا پهنای باند مؤثر و پایدار برای کل مجموعه فراهم شود. وب‌سایت رسمی همین شرکت را هم طراحی و راه‌اندازی کرده‌ایم — نمونهٔ کامل از زیرساخت تا محصول وب در یک پروژه.',
    highlights: [
      'تجمیع باند چند خط اینترنت روی RouterOS',
      'پایداری و افزایش پهنای باند مؤثر کاربران',
      'طراحی وب‌سایت رسمی شرکت (SAZEH.TUNELIA.IR)',
    ],
    tags: ['میکروتیک', 'تجمیع باند', 'RouterOS'],
    iconKey: 'sharing',
  },

  // ───────────── پروژه‌های نرم‌افزاری و وب ─────────────
  {
    id: 'sazeh-website',
    kind: 'software',
    num: '۰۳',
    title: 'وب‌سایت رسمی سازه‌افزار فتح',
    role: 'طراحی و اجرای سایت شرکتی با Next.js',
    description:
      'وب‌سایت رسمی شرکت سازه‌افزار فتح — تولیدکنندهٔ تیرهای بتنی برق برای شبکه‌های توزیع برق — معرفی محصولات، خدمات تولید و مشاورهٔ فنی؛ با معماری Next.js و سئوی ساختاریافته برای جست‌وجوهای صنعتی.',
    highlights: [
      'طراحی اختصاصی متناسب با برند صنعتی',
      'معرفی خط تولید و خدمات سفارشی‌سازی',
      'استقرار روی دامنهٔ اختصاصی sazeh.tunelia.ir',
    ],
    tags: ['Next.js', 'TypeScript'],
    iconKey: 'web',
    code: 'SAZEH.TUNELIA.IR',
    links: [
      { label: 'GitHub', href: 'https://github.com/mohoyek/sazeh-afzar', external: true },
      { label: 'سایت لایو', href: 'https://sazeh.tunelia.ir', external: true },
    ],
  },
  {
    id: 'csr-modian',
    kind: 'software',
    num: '۰۴',
    title: 'ابزار تولید کلید سامانهٔ مودیان',
    role: 'ساخت کلید و CSR برای مؤدیان مالیاتی',
    description:
      'ابزار آنلاین تولید کلید و CSR سامانهٔ مودیان مالیاتی برای اشخاص حقیقی و حقوقی؛ تمام عملیات رمزنگاری به‌صورت محلی در مرورگر انجام می‌شود و هیچ داده‌ای به سروری ارسال نمی‌شود — امنیت کامل اطلاعات کاربر.',
    highlights: [
      'تولید کلید و CSR برای اشخاص حقیقی و حقوقی',
      'رمزنگاری صددرصد محلی در مرورگر، بدون ارسال داده',
      'استقرار روی دامنهٔ اختصاصی csr.tunelia.ir',
    ],
    tags: ['TypeScript', 'Web Crypto'],
    iconKey: 'certificate',
    code: 'CSR.TUNELIA.IR',
    links: [
      { label: 'GitHub', href: 'https://github.com/mohoyek/CSR', external: true },
      { label: 'سایت لایو', href: 'https://csr.tunelia.ir', external: true },
    ],
  },
  {
    id: 'rayno-desk',
    kind: 'software',
    num: '۰۵',
    title: 'راینو دسک',
    role: 'ریموت دسکتاپ اختصاصی برای پویا رایانه فرتاک',
    description:
      'راهکار ارتباط ریموت دسکتاپ اختصاصی برای شرکت پویا رایانه فرتاک، تا تیم پشتیبانی بتواند به‌صورت امن و مستقیم به سیستم مشتریان خود متصل شود؛ پروژه با زبان Rust توسعه یافته و تحت مجوز AGPL-3.0 منتشر شده است.',
    highlights: [
      'اتصال ریموت اختصاصی به سیستم‌های مشتریان',
      'توسعه با Rust و انتشار متن‌باز',
      'سفارشی‌سازی‌شده برای فرایند پشتیبانی شرکت',
    ],
    tags: ['Rust', 'Remote Desktop', 'AGPL-3.0'],
    iconKey: 'server',
    code: 'RAYNO_DESK',
    links: [
      { label: 'GitHub', href: 'https://github.com/mohoyek/RAYNO_DESK', external: true },
      { label: 'وب‌سایت مشتری', href: 'https://raynogroup.com', external: true },
    ],
  },
];

export const networkProjects = projects.filter((p) => p.kind === 'network');
export const softwareProjects = projects.filter((p) => p.kind === 'software');
