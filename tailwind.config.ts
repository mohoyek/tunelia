import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0c0e',
        panel: '#12161a',
        'panel-2': '#181d22',
        line: '#262d34',
        'line-soft': '#1c2228',
        steel: '#e8eaec',
        'steel-muted': '#8b949c',
        'steel-dim': '#565f68',
        accent: '#d1802c',
        'accent-soft': '#3a2a18',
        'accent-line': '#5c3f1f',
      },
      fontFamily: {
        vazirmatn: ['var(--font-vazirmatn)', 'Tahoma', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      borderRadius: {
        sm: '2px',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
        'net-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'wifi-fade': {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        pulse: 'pulse 2.4s ease-in-out infinite',
        'net-pulse': 'net-pulse 2.6s ease-in-out infinite',
        'wifi-fade': 'wifi-fade 2.4s ease-in-out infinite',
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
};

export default config;
