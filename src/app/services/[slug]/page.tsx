import type { Metadata } from 'next';
import { services } from '@/data/services';
import { breadcrumbJsonLd } from '@/lib/metadata';
import { SLUG_TO_ID, ID_TO_SLUG } from '@/lib/serviceSlugs';
import Image from 'next/image';
import Link from 'next/link';
import IconSvg from '@/components/ui/IconSvg';

const SERVICE_DETAILS: Record<number, { summary: string; details: string[]; faq: { q: string; a: string }[] }> = {
  1: {
    summary:
      'پیاده‌سازی بکاپ‌گیری خودکار و بازیابی اطلاعات تا هیچ خرابی یا خطایی به نابودی داده‌های شما منجر نشود.',
    details: [
      'راه‌اندازی بکاپ‌گیری خودکار روزانه و هفته‌ای.',
      'ذخیره بکاپ در NAS یا فضای ابری، بر اساس نیاز شما.',
      'تست منظم بازیابی اطلاعات.',
      'بازیابی سریع در صورت خطای سیستم.',
    ],
    faq: [
      { q: 'بکاپ کجا ذخیره می‌شود؟', a: 'در NAS محلی و/یا فضای ابری، بر اساس نیاز شما.' },
      { q: 'آیا بازیابی تست می‌شود؟', a: 'بله، تست دوره‌ای بازیابی برای اطمینان از صحت بکاپ انجام می‌گیرد.' },
    ],
  },
  2: {
    summary:
      'نصب، راه‌اندازی و پشتیبانی نرم‌افزارهای حسابداری و مالی (هلو، سپیدار، پارسا و غیره) با آموزش کاربران.',
    details: [
      'نصب نرم‌افزارهای حسابداری روی سرور یا کامپیوتر کاربری.',
      'پیکربندی شبکه کاربری و دسترسی‌ها.',
      'آموزش کاربران برای کار با نرم‌افزار.',
      'پشتیبانی و رفع مشکلات نرم‌افزاری در آینده.',
    ],
    faq: [
      { q: 'کدام نرم‌افزار حسابداری پشتیبانی می‌کنید؟', a: 'هلو، سپیدار، پارسا و سایر نرم‌افزارهای حسابداری رایج در ایران.' },
      { q: 'آیا آموزش داده می‌شود؟', a: 'بله، آموزش اولیه به کاربران شامل است.' },
    ],
  },
  3: {
    summary:
      'راه‌اندازی و مدیریت سرورهای ویندوز و لینوکس، مدیریت کاربران و دسترسی‌ها، بهینه‌سازی و پایش مستمر.',
    details: [
      'نصب و پیکربندی Windows Server و Linux.',
      'تنظیم Active Directory و دسترسی کاربران.',
      'پایش مستمر سرور و ارسال هشدار در صورت خطا.',
      'بهینه‌سازی منابع سرور برای افزایش سرعت.',
    ],
    faq: [
      { q: 'کدام سرور مناسب است؟', a: 'Windows Server برای محیط‌های مایکروسافت و Linux برای وب و پایگاه داده.' },
      { q: 'آیا پایش ۲۴ ساعته است؟', a: 'بله، پایش دوره‌ای و دائمی بر اساس قرارداد قابل انجام است.' },
    ],
  },
  4: {
    summary:
      'تأمین امنیت شبکه و سرور با فایروال، کنترل دسترسی و شناسایی آسیب‌پذیری‌ها در برابر حملات امنیتی.',
    details: [
      'نصب و پیکربندی فایروال سخت‌افزاری و نرم‌افزاری.',
      'راه‌اندازی VPN امن برای دسترسی ریموت.',
      'اسکن آسیب‌پذیری و اصلاح آن.',
      'پایش ترافیک شبکه برای تشخیص تهدیدات.',
    ],
    faq: [
      { q: 'آیا فایروال سخت‌افزاری نصب می‌کنید؟', a: 'بله، نصب و پیکربندی فایروال‌های Cisco، MikroTik و سایر برندها.' },
      { q: 'آیا امنیت برای سرور هم ارائه می‌شود؟', a: 'بله، امنیت شبکه و سرور به صورت یکپارچه طراحی می‌شود.' },
    ],
  },
  5: {
    summary:
      'طراحی و راه‌اندازی شبکه‌های کامپیوتری سازمانی با تجهیزات معتبر و قابلیت توسعه، از کابل‌کشی تا سوییچ و روتر.',
    details: [
      'طراحی توپولوژی شبکه بر اساس تعداد کاربران و نیازهای سازمانی.',
      'راه‌اندازی سوییچ، روتر و تجهیزات شبکه با برندهای Cisco و MikroTik.',
      'پیکربندی VLAN، DHCP، DNS و کنترل دسترسی.',
      'پشتیبانی مستمر شبکه و رفع سریع اختلال‌ها در کوتاه‌ترین زمان.',
    ],
    faq: [
      { q: 'چه تجهیزاتی برای شبکه سازمانی نیاز است؟', a: 'روتر، سوییچ، کابل‌های شبکه، Patch Panel و تجهیزات Wi-Fi در صورت نیاز.' },
      { q: 'زمان راه‌اندازی شبکه چقدر است؟', a: 'بسته به اندازه شبکه، بین ۲ تا ۷ روز کاری طول می‌کشد.' },
    ],
  },
  6: {
    summary:
      'بررسی و رفع سریع مشکلات سیستم و شبکه با پشتیبانی فنی پاسخگو، در دسترس و متخصص.',
    details: [
      'تشخیص سریع قطعی اتصال شبکه.',
      'راه‌اندازی مجدد سرویس‌های متوقف شده.',
      'راهنمایی ریموت و حضوری برای رفع مشکل.',
      'پشتیبانی ۲۴/۷ بر اساس درخواست.',
    ],
    faq: [
      { q: 'زمان پاسخگویی چقدر است؟', a: 'پاسخگویی زودتر از ۴ ساعت در ساعات اداری.' },
      { q: 'آیا پشتیبانی ریموت دارید؟', a: 'بله، با ابزارهای ریموت امن.' },
    ],
  },
  7: {
    summary:
      'اشتراک‌گذاری فایل، پرینتر و منابع بین سیستم‌ها با سطح دسترسی مناسب، مرتب و امن.',
    details: [
      'راه‌اندازی اشتراک فایل بین کامپیوترها.',
      'اشتراک‌گذاری پرینتر شبکه.',
      'تنظیم سطوح دسترسی به فولدرها.',
      'مرتب و امن نگهداری منابع مشترک.',
    ],
    faq: [
      { q: 'آیا می‌توان دسترسی را محدود کرد؟', a: 'بله، سطوح دسترسی برای هر کاربر یا گروه قابل تنظیم است.' },
      { q: 'آیا پرینتر شبکه مشمول است؟', a: 'بله، اشتراک‌گذاری پرینتر شبکه شامل است.' },
    ],
  },
  8: {
    summary:
      'قرارداد پشتیبانی و نگهداری دوره‌ای؛ بازرسی منظم، به‌روزرسانی‌ها و پیشگیری از توقف کار مجموعه.',
    details: [
      'قرارداد ماهانه یا فصلی پشتیبانی.',
      'بازرسی منظم تجهیزات و نرم‌افزارها.',
      'به‌روزرسانی امنیتی و سیستم.',
      'پیشگیری از توقف کار با نگهداری پیشگیرانه.',
    ],
    faq: [
      { q: 'قرارداد چقدر طول می‌کشد؟', a: 'ماهانه یا فصلی، بر اساس نیاز شما.' },
      { q: 'چه عواقبی در صورت توقف دارد؟', a: 'از توقف کار جلوگیری می‌شود و سریع پاسخگویی امکان‌پذیر است.' },
    ],
  },
  9: {
    summary:
      'طراحی و توسعه وب‌سایت‌های شرکتی، پورتال‌های سازمانی و فروشگاه‌های آنلاین با تکنولوژی‌های مدرن و سئو بهینه.',
    details: [
      'طراحی واکنش‌گرا (Responsive) برای موبایل، تبلت و دسکتاپ.',
      'توسعه با Next.js، React و تکنولوژی‌های مدرن وب.',
      'سئو تکنیکی و محتوایی برای رتبه‌بندی بهتر در گوگل.',
      'پنل مدیریت محتوا (CMS) آسان برای به‌روزرسانی توسط مشتری.',
      'بهینه‌سازی سرعت لود و Core Web Vitals.',
      'امنیت بالا با HTTPS، CSP و هدرهای امنیتی.',
    ],
    faq: [
      { q: 'زمان طراحی سایت چقدر است؟', a: 'بسته به پیچیدگی، بین ۲ تا ۶ هفته.' },
      { q: 'آیا پس از تحویل پشتیبانی دارید؟', a: 'بله، ۳ ماه پشتیبانی رایگان و پس از آن قراردادهای نگهداری.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.entries(SLUG_TO_ID).map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const serviceId = SLUG_TO_ID[params.slug];
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return {
      title: 'خدمت یافت نشد | تونلیا',
      description: 'خدمت مورد نظر یافت نشد.',
    };
  }

  const title = `${service.title} | تونلیا`;
  const description =
    service.description +
    ' — خدمات حرفه‌ای شبکه، سرور و امنیت اطلاعات با پشتیبانی تخصصی تونلیا.';

  return {
    title,
    description,
    alternates: {
      canonical: `https://tunelia.ir/services/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://tunelia.ir/services/${params.slug}`,
      type: 'website',
      images: [
        {
          url: '/tunelia-logo.png',
          width: 640,
          height: 360,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/tunelia-logo.png'],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceId = SLUG_TO_ID[params.slug];
  const service = services.find((s) => s.id === serviceId);
  const detail = SERVICE_DETAILS[serviceId];

  if (!service) {
    return (
      <section className="max-w-container mx-auto py-20 px-[5%]">
        <h1 className="text-steel font-bold text-2xl">خدمت یافت نشد</h1>
        <p className="text-steel-muted mt-4">خدمت مورد نظر در سایت تونلیا موجود نیست.</p>
      </section>
    );
  }

  return (
    <section className="max-w-container mx-auto py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'صفحه اصلی', url: '/' },
              { name: 'خدمات', url: '/#services' },
              { name: service.title, url: `/services/${params.slug}` },
            ])
          ),
        }}
      />
      <nav className="mb-12" aria-label="مسیر صفحه">
        <ol className="flex items-center gap-2 text-[0.85rem] text-steel-muted font-mono">
          <li>
            <a href="/" className="hover:text-accent transition-colors">
              صفحه اصلی
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="/#services" className="hover:text-accent transition-colors">
              خدمات
            </a>
          </li>
          <li>/</li>
          <li className="text-accent">{service.title}</li>
        </ol>
      </nav>

      <h1 className="text-[2.2rem] font-extrabold text-steel mb-6 leading-tight">
        {service.title}
      </h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 space-y-6">
          <p className="text-lg text-steel-muted leading-relaxed font-medium">
            {detail.summary}
          </p>
          <ul className="space-y-4">
            {detail.details.map((d, i) => (
              <li key={i} className="flex items-start gap-3 text-steel-muted text-[1rem] leading-relaxed">
                <span className="text-accent font-bold mt-0.5">•</span>
                {d}
              </li>
            ))}
          </ul>
          <div className="mt-8 p-6 bg-panel border border-line rounded-2xl">
            <h3 className="text-accent-bright font-bold mb-4 font-mono">ویژگی‌های کلیدی</h3>
            <ul className="space-y-3 text-steel-muted text-[0.95rem]">
              {service.tags.map((tag, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent-bright font-mono text-sm mt-0.5">✓</span>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-[340px]">
          <div className="bg-panel border border-line p-8 rounded-2xl sticky top-24">
            <h3 className="text-steel font-bold mb-6 text-[1.1rem]">تماس سریع</h3>
            <p className="text-steel-muted text-[0.95rem] mb-6">
              برای دریافت استعلام قیمت و راهنمایی درباره{' '}
              <span className="text-accent-bright font-bold">{service.title}</span>، با ما تماس بگیرید.
            </p>
            <div className="space-y-4">
              <a
                href="https://t.me/mohoyek"
                className="block bg-accent-soft border border-accent-line text-accent-bright px-5 py-3 text-[0.95rem] font-medium rounded-xl text-center hover:bg-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                تلگرام: mohoyek@
              </a>
              <a
                href="mailto:info@tunelia.com"
                className="block bg-accent-soft border border-accent-line text-accent-bright px-5 py-3 text-[0.95rem] font-medium rounded-xl text-center hover:bg-accent transition-colors"
              >
                info@tunelia.com
              </a>
              <a
                href="tel:+989013365949"
                className="block bg-accent-soft border border-accent-line text-accent-bright px-5 py-3 text-[0.95rem] font-medium rounded-xl text-center hover:bg-accent transition-colors"
                dir="ltr"
              >
                0901 336 5949
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3 mb-16">
        {services.map((s) => (
          <Link
            key={s.id}
            href={`/services/${ID_TO_SLUG[s.id] || s.id}`}
            className="group bg-panel p-6 rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:border-accent-line"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-[24px] h-[24px] text-accent-bright flex-shrink-0">
                <IconSvg name={s.iconKey} />
              </span>
              <span className="font-mono text-accent-bright text-[0.75rem]">{s.num}</span>
            </div>
            <h3 className="text-steel font-semibold text-[1.05rem] mb-2">{s.title}</h3>
            <p className="text-steel-muted text-[0.9rem]">{s.description}</p>
          </Link>
        ))}
      </div>

      <section className="mb-16 border-t border-line pt-12">
        <h2 className="text-[1.7rem] font-bold text-steel mb-8">سوالات متداول</h2>
        <div className="space-y-4">
          {detail.faq.map((item, i) => (
            <div key={i} className="bg-panel border border-line p-6 rounded-2xl">
              <h3 className="text-accent-bright font-semibold mb-2 text-[1rem]">{item.q}</h3>
              <p className="text-steel-muted text-[0.95rem] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
