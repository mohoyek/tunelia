import Link from 'next/link';
import { services } from '@/data/services';
import { serviceSlug } from '@/lib/serviceSlugs';
import IconSvg from '../ui/IconSvg';
import Reveal from '../ui/Reveal';

const FA_NUMS = ['۰۱', '۰۲', '۰۳', '۰۴', '۰۵', '۰۶', '۰۷', '۰۸', '۰۹'];

/** کلاس‌های جانمایی بنتو در گریز اندوم — دقیق و بدون خونهٔ خالی در هیچ عرضی */
const BENTO_LAYOUT: Record<number, string> = {
  1: 'sm:col-span-2 sm:row-span-2 lg:col-start-1 lg:row-start-1 lg:col-span-2 lg:row-span-2',
  2: 'lg:col-start-3 lg:row-start-1',
  3: 'lg:col-start-3 lg:row-start-2',
  4: 'lg:col-start-1 lg:row-start-3',
  5: 'sm:col-span-2 lg:col-start-2 lg:row-start-3 lg:col-span-2',
  6: 'lg:col-start-1 lg:row-start-4',
  7: 'lg:col-start-2 lg:row-start-4',
  8: 'lg:col-start-3 lg:row-start-4',
  9: 'sm:col-span-2 lg:col-start-1 lg:row-start-5 lg:col-span-2',
};

const TILE_BASE =
  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-line hover:shadow-[0_14px_48px_-16px_rgba(209,128,44,0.4)] max-[400px]:p-5';

function TileArrow() {
  return (
    <span
      aria-hidden="true"
      className="mt-auto inline-flex items-center gap-1.5 pt-4 text-accent-bright text-[0.85rem] font-semibold opacity-0 translate-x-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
    >
      مشاهدهٔ خدمت
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function Tags({ tags, limit = 3 }: { tags: string[]; limit?: number }) {
  return (
    <div className="mt-3.5 flex flex-wrap gap-2">
      {tags.slice(0, limit).map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-ink px-3 py-1 text-[0.72rem] text-steel-muted border border-line [direction:ltr]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ServicesBento() {
  const featured = services.find((s) => s.id === 1)!; // بکاپ‌گیری — کاشی بزرگ

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 auto-rows-min">
      {/* ── کاشی شاخص: بکاپ‌گیری (۲×۲) ── */}
      <Reveal className={BENTO_LAYOUT[1]}>
        <Link href={`/services/${serviceSlug(featured.id)}`} className={`${TILE_BASE} p-8 max-[400px]:p-6 bg-gradient-to-bl from-accent-soft via-panel to-panel`}>
          <span className="ghost-num !text-[7.5rem]" aria-hidden="true">
            {FA_NUMS[0]}
          </span>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft border border-accent-line text-accent-bright">
            <IconSvg name={featured.iconKey} width={26} height={26} />
          </div>
          <h3 className="text-[1.5rem] font-extrabold text-steel">{featured.title}</h3>
          <p className="mt-3 max-w-[420px] text-steel-muted text-[0.98rem] leading-relaxed">
            {featured.description}
          </p>
          <Tags tags={featured.tags} limit={4} />
          <TileArrow />
        </Link>
      </Reveal>

      {services
        .filter((s) => s.id !== 1)
        .map((service, i) => (
          <Reveal key={service.id} className={BENTO_LAYOUT[service.id]} delay={i * 60}>
            <Link
              href={`/services/${serviceSlug(service.id)}`}
              className={
                service.id === 9
                  ? `${TILE_BASE} bg-gradient-to-bl from-accent-soft via-panel to-panel`
                  : TILE_BASE
              }
            >
              <span className="ghost-num" aria-hidden="true">
                {FA_NUMS[service.id - 1]}
              </span>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft border border-accent-line text-accent-bright transition-colors duration-300 group-hover:bg-accent group-hover:text-[#191008]">
                <IconSvg name={service.iconKey} width={22} height={22} />
              </div>
              <h3 className="text-[1.12rem] font-bold text-steel">{service.title}</h3>
              <p className="mt-2 text-steel-muted text-[0.9rem] leading-relaxed">
                {service.description}
              </p>
              {service.id === 9 ? <Tags tags={service.tags} /> : null}
              <TileArrow />
            </Link>
          </Reveal>
        ))}

      {/* ── کاشی CTA: مشاورهٔ رایگان ── */}
      <Reveal className="sm:col-span-2 lg:col-start-3 lg:row-start-5" delay={300}>
        <a
          href="https://t.me/mohoyek"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-center rounded-2xl bg-accent p-6 text-[#191008] transition-all duration-300 hover:bg-accent-bright hover:-translate-y-1 hover:shadow-[0_14px_48px_-12px_rgba(209,128,44,0.65)] max-[400px]:p-5"
        >
          <p className="text-[1.15rem] font-extrabold">مشاورهٔ رایگان بگیر</p>
          <p className="mt-1.5 text-[0.85rem] font-medium opacity-80">
            پاسخ‌گویی در کمتر از ۴ ساعت کاری
          </p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-bold">
            شروع تماس در تلگرام
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </Reveal>
    </div>
  );
}
