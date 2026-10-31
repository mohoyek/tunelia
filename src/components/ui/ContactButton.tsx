import type { ReactNode } from 'react';

interface ContactButtonProps {
  href: string;
  variant?: 'default' | 'primary';
  external?: boolean;
  children: ReactNode;
  icon: ReactNode;
}

export default function ContactButton({
  href,
  variant = 'default',
  external = false,
  children,
  icon,
}: ContactButtonProps) {
  const baseClasses =
    'inline-flex items-center gap-2.5 bg-ink border border-line text-steel px-6 py-3 text-[0.95rem] font-medium transition-all duration-200 hover:border-accent-line hover:bg-accent-soft hover:-translate-y-0.5';
  const variantClasses = variant === 'primary' ? 'border-accent-line bg-accent-soft text-accent' : '';

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <span className="w-[18px] h-[18px] text-accent">{icon}</span>
      {children}
    </a>
  );
}
