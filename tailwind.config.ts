import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0b0e12',
        panel: '#12171d',
        'panel-2': '#171d24',
        line: '#232b34',
        'line-soft': '#181e25',
        steel: '#e9ebee',
        'steel-muted': '#97a0a8',
        'steel-dim': '#5d666f',
        accent: '#d1802c',
        'accent-bright': '#f0993f',
        'accent-soft': 'rgba(209, 128, 44, 0.10)',
        'accent-line': 'rgba(209, 128, 44, 0.32)',
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
