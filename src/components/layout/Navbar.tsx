'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 721);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeMenu();
  };

  const navLinks = [
    { href: '#services', label: 'خدمات' },
    { href: '#safety', label: 'پشتیبانی' },
    { href: '#contact', label: 'تماس' },
  ];

  return (
    <nav
      aria-label="ناوبری اصلی"
      className="sticky top-0 z-50 flex items-center justify-between px-[6%] py-4 border-b border-line bg-ink/[0.86] backdrop-blur-md"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-2.5 font-bold text-steel text-[1.05rem]">
        <Image
          src="/tunelia-logo.png"
          alt="تونلیا"
          width={26}
          height={26}
          className="rounded-sm"
          priority
        />
        تونلیا
      </div>

      {/* Mobile hamburger button */}
      {isMobile && (
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 rounded-[2px] bg-panel border border-line text-steel hover:bg-panel-2 transition-colors"
          aria-expanded={isOpen}
          aria-label={isOpen ? 'بستن منو' : 'باز کردن منو'}
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      )}

      {/* Desktop navigation */}
      <ul className="flex gap-8 list-none hidden min-[721px]:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-steel-muted text-[0.92rem] transition-colors duration-200 hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile drawer */}
      {isMobile && isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-modal="true"
          aria-label="منوی موبایل"
        >
          <ul className="flex flex-col items-center gap-6 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-steel text-[1.25rem] font-medium hover:text-accent transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="absolute top-4 left-4 w-10 h-10 flex items-center justify-center rounded-[2px] bg-panel border border-line text-steel hover:bg-panel-2 transition-colors"
            onClick={closeMenu}
            aria-label="بستن منو"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
}
