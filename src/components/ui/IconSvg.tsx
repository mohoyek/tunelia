interface IconSvgProps {
  name: string;
  className?: string;
  width?: number | string;
  height?: number | string;
}

const PATHS: Record<string, JSX.Element> = {
  network: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="6" cy="6" r="2.5" fill="currentColor" />
      <circle cx="18" cy="6" r="2.5" fill="currentColor" />
      <circle cx="12" cy="18" r="2.5" fill="currentColor" />
      <path d="M7.5 7.5l4 8M16.5 7.5l-4 8M8.5 6h7" />
    </g>
  ),
  accounting: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="4" y="12" width="3" height="8" fill="currentColor" />
      <rect x="10" y="8" width="3" height="12" fill="currentColor" />
      <rect x="16" y="4" width="3" height="16" fill="currentColor" />
      <path d="M4 20h16" />
    </g>
  ),
  server: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </g>
  ),
  security: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </g>
  ),
  backup: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" />
    </g>
  ),
  support: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 13a8 8 0 0116 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" fill="currentColor" />
      <path d="M19 19v1a3 3 0 01-3 3h-3" />
    </g>
  ),
  sharing: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="6" cy="12" r="3" fill="currentColor" />
      <circle cx="18" cy="6" r="3" fill="currentColor" />
      <circle cx="18" cy="18" r="3" fill="currentColor" />
      <path d="M8.6 10.5l6.8-3M8.6 13.5l6.8 3" />
    </g>
  ),
  maintenance: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="1" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M9 15l2 2 4-4" />
    </g>
  ),
  office: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </g>
  ),
  store: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M5 9v11h14V9" />
      <path d="M3 9c0 1.7 1.3 3 3 3s3-1.3 3-3M9 9c0 1.7 1.3 3 3 3s3-1.3 3-3M15 9c0 1.7 1.3 3 3 3s3-1.3 3-3" />
    </g>
  ),
  factory: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l5 3V10l5 3V8l8 4v9z" />
      <rect x="7" y="17" width="2" height="4" fill="currentColor" />
      <rect x="14" y="15" width="2" height="6" fill="currentColor" />
    </g>
  ),
  clinic: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </g>
  ),
  clock: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </g>
  ),
  shield: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" />
    </g>
  ),
  tools: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a4 4 0 015 5L9 22l-7-7 9.3-9.3a4 4 0 013.4-1z" />
      <circle cx="16" cy="8" r="1.5" fill="currentColor" />
    </g>
  ),
  certificate: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="1" />
      <path d="M8 21l4-2 4 2v-4" />
      <circle cx="12" cy="10" r="2.5" />
    </g>
  ),
};

export default function IconSvg({ name, className, width, height }: IconSvgProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      width={width}
      height={height}
    >
      {PATHS[name] ?? null}
    </svg>
  );
}
