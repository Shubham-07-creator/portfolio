/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="light"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
        text: 'var(--color-text)',
        'text-heading': 'var(--color-text-heading)',
        'text-body': 'var(--color-text-body)',
        'text-muted': 'var(--color-text-muted)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        'on-accent': 'var(--color-on-accent)',
        chip: 'var(--color-chip)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
      },
      fontFamily: {
        heading: ['"Instrument Serif"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1120px',
      },
      borderRadius: {
        card: '14px',
        btn: '8px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'btn-glow': 'var(--shadow-btn-glow)',
      },
    },
  },
  plugins: [],
}
