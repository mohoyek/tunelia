import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { professionalServiceJsonLd, webSiteJsonLd, organizationJsonLd } from '@/lib/metadata';
import Image from 'next/image';
import IconSvg from '@/components/ui/IconSvg';

const CITY_TO_ID: Record<string, number> = {
  dezful: 1,
  shush: 2,
  andimeshk: 3,
  khuzestan: 4,
};

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.city);

  if (!city) {
    return {
      title: 'شهر یافت نشد | تونلیها',
      description: 'شهر مورد نظر یافت نشد.',
    };
  }

  const title = `خدمات شبکه و سرور در ${city.name} | تونلیها`;
  const description = `${city.description} — پشتیبانی حرفه‌ای شبکه، سرور و امنیت اطلاعات با پشتیبانی تخصصی تونلیها.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://tunelia.ir/${params.city}`,
    },
    openGraph: {
      title,
      description,
      url: `https://tunelia.ir/${params.city}`,
      type: 'website',
      images: [
        {
          url: '/tunelia-logo.png',
          width: 640,
          height: 360,
          alt: `${city.name} - تونلیها`,
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

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((c) => c.slug === params.city);

  if (!city) {
    return (
      <section className="max-w-container mx-auto py-20 px-[5%]">
        <h1 className="text-steel font-bold text-2xl">شهر یافت نشد</h1>
        <p className="text-steel-muted mt-4">شهر مورد نظر در سایت تونلیها موجود نیست.</p>
      </section>
    );
  }

  return (
    <section className="max-w-container mx-auto py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%]">
      <h1 className="text-[2.2rem] font-extrabold text-steel mb-6 leading-tight">
        خدمات شبکه و سرور در {city.name}
      </h1>

      <p className="text-lg text-steel-muted mb-8 leading-relaxed">
        {city.description} با 팀 تخصصی تونلیها، خدمات شبکه، سرور، امنیت اطلاعات و بکاپ‌گیری را در
        {city.name} و مناطق حومه ارائه می‌دهیم.
      </p>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px bg-line border border-line mb-16">
        {services.map((service) => (
          <a
            key={service.id}
            href={`/services/${Object.entries({ network: 1, accounting: 2, server: 3, security: 4, backup: 5, support: 6, sharing: 7, maintenance: 8 }).find(([, id]) => id === service.id)?.[0] || service.id}`}
            className="bg-panel p-6 transition-colors hover:bg-panel-2 border-b border-line last:border-0"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-[24px] h-[24px] text-accent flex-shrink-0">
                <IconSvg name={service.iconKey} />
              </span>
              <span className="font-mono text-accent text-[0.75rem]">{service.num}</span>
            </div>
            <h3 className="text-steel font-semibold text-[1.05rem] mb-2">{service.title}</h3>
            <p className="text-steel-muted text-[0.9rem]">{service.description}</p>
          </a>
        ))}
      </div>

      <div className="bg-panel border border-line p-12 rounded-[2px] mb-16 text-center">
        <h2 className="text-[1.7rem] font-bold text-steel mb-6">تماس سریع برای {city.name}</h2>
        <p className="text-steel-muted text-[1.05rem] mb-8">
          برای دریافت استعلام قیمت و راهنمایی درباره خدمات شبکه و سرور در{' '}
          <span className="text-accent font-bold">{city.name}</span>، با ما تماس بگیرید.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://t.me/mohoyek"
            className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            تلگرام: mohoyek@
          </a>
          <a
            href="mailto:info@tunelia.com"
            className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
          >
            info@tunelia.com
          </a>
          <a
            href="tel:+989013365949"
            className="block bg-accent-soft border border-accent-line text-accent px-5 py-3 text-[0.95rem] font-medium rounded-[2px] text-center hover:bg-accent transition-colors"
            dir="ltr"
          >
            0901 336 5949
          </a>
        </div>
      </div>

      <div className="bg-panel border border-line p-10 rounded-[2px]">
        <h2 className="text-[1.4rem] font-bold text-steel mb-4">آیا در {city.name} خدمت می‌دهید؟</h2>
        <ul className="space-y-3 text-steel-muted text-[0.95rem] leading-relaxed">
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            راه‌اندازی شبکه کامپیوتری در {city.name}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            مدیریت سرور ویندوز و لینوکس در {city.name}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            امنیت شبکه و فایروال در {city.name}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            بکاپ‌گیری و بازیابی اطلاعات در {city.name}
          </li>
          <li className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">✓</span>
            پشتیبانی و نگهداری دوره‌ای در {city.name}
          </li>
        </ul>
      </div>
    </section>
  );
}
