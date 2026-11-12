import type { Metadata } from 'next';
import { cities } from '@/data/cities';
import { services } from '@/data/services';
import { serviceSlug } from '@/lib/serviceSlugs';
import Link from 'next/link';
import IconSvg from '@/components/ui/IconSvg';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const city = cities.find((c) => c.slug === params.city);

  if (!city) {
    return {
      title: 'شهر یافت نشد | تونلیا',
      description: 'شهر مورد نظر یافت نشد.',
    };
  }

  const title = `خدمات شبکه و سرور در ${city.name} | تونلیا`;
  const description = `${city.description} — پشتیبانی حرفه‌ای شبکه، سرور و امنیت اطلاعات با پشتیبانی تخصصی تونلیا.`;

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
          alt: `${city.name} - تونلیا`,
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
        <p className="text-steel-muted mt-4">شهر مورد نظر در سایت تونلیا موجود نیست.</p>
      </section>
    );
  }

  return (
    <>
      <Navbar />
      <main className="max-w-container mx-auto py-20 px-[5%] max-[640px]:py-14 max-[640px]:px-[6%]">
      <h1 className="text-[2.2rem] font-extrabold text-steel mb-6 leading-tight">
        خدمات شبکه و سرور در {city.name}
      </h1>

      <p className="text-lg text-steel-muted mb-8 leading-relaxed">
        {city.description} با تیم تخصصی تونلیا، خدمات شبکه، سرور، امنیت اطلاعات و بکاپ‌گیری را در
        {city.name} و مناطق حومه ارائه می‌دهیم.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-16">
        {services.map((service) => {
          return (
            <Link
              key={service.id}
              href={`/services/${serviceSlug(service.id)}`}
              className="group bg-panel p-6 rounded-2xl border border-line transition-all duration-300 hover:-translate-y-1 hover:border-accent-line"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-[24px] h-[24px] text-accent-bright flex-shrink-0">
                  <IconSvg name={service.iconKey} />
                </span>
                <span className="font-mono text-accent-bright text-[0.75rem]">{service.num}</span>
              </div>
              <h3 className="text-steel font-semibold text-[1.05rem] mb-2">{service.title}</h3>
              <p className="text-steel-muted text-[0.9rem]">{service.description}</p>
            </Link>
          );
        })}
      </div>

      <div className="bg-panel border border-line p-12 rounded-2xl mb-16 text-center">
        <h2 className="text-[1.7rem] font-bold text-steel mb-6">تماس سریع برای {city.name}</h2>
        <p className="text-steel-muted text-[1.05rem] mb-8">
          برای دریافت استعلام قیمت و راهنمایی درباره خدمات شبکه و سرور در{' '}
          <span className="text-accent font-bold">{city.name}</span>، با ما تماس بگیرید.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
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

      <div className="bg-panel border border-line p-10 rounded-2xl">
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
      </main>
      <Footer />
    </>
  );
}
