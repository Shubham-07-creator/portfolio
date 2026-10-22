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
        border: 'var(--color-border)',
        text: 'var(--color-text)',
        body: 'var(--color-body)',
        muted: 'var(--color-muted)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        secondary: 'var(--color-secondary)',
        spark: 'var(--color-accent)',
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
        card: '20px',
        btn: '9999px',
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
