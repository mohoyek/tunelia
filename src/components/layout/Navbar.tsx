'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

/**
 * لینک‌ها با مسیر مطلق تا از هر صفحه‌ای (مثل /projects یا صفحهٔ شهرها)
 * روی همان صفحهٔ اصلی کار کنند.
 */
const NAV_LINKS = [
  { href: '/#services', label: 'خدمات' },
  { href: '/projects', label: 'نمونه‌کارها' },
  { href: '/#safety', label: 'پشتیبانی' },
  { href: '/#contact', label: 'تماس' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav aria-label="ناوبری اصلی" className="sticky top-0 z-50 px-[4%] pt-4 bg-transparent">
      <div className="max-w-container mx-auto relative">
        <div className="flex items-center justify-between rounded-2xl border border-line bg-ink/85 backdrop-blur-md px-5 py-3">
          <a href="/" className="flex items-center gap-2.5 font-bold text-steel text-[1.05rem]">
            <Image
              src="/tunelia-logo.png"
              alt="تونلیا"
              width={28}
              height={28}
              className="rounded-lg"
              priority
            />
            تونلیا
          </a>

          <ul className="flex items-center gap-7 list-none max-[760px]:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-steel-muted text-[0.92rem] transition-colors duration-200 hover:text-accent-bright"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/#contact" className="btn btn-primary !py-2.5 !px-5 text-[0.88rem]">
                مشاورهٔ رایگان
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'بستن منو' : 'باز کردن منو'}
            className="max-[760px]:flex hidden items-center justify-center w-10 h-10 rounded-xl border border-line text-steel transition-colors hover:border-accent-line"
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {/* منوی موبایل */}
        <div
          id="mobile-menu"
          className={`max-[760px]:visible invisible absolute inset-x-0 top-[calc(100%+8px)] origin-top transition-all duration-200 ${
            open
              ? 'max-[760px]:visible visible opacity-100 scale-y-100 pointer-events-auto'
              : 'invisible opacity-0 scale-y-95 pointer-events-none'
          }`}
        >
          <div className="rounded-2xl border border-line bg-panel/95 backdrop-blur-md p-3 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)]">
            <ul className="list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-steel-muted text-[0.95rem] transition-colors hover:bg-accent-soft hover:text-accent-bright"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-line mt-2">
                <a
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full !py-2.5 text-[0.9rem]"
                >
                  مشاورهٔ رایگان
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
