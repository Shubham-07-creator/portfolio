import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light' || saved === 'dark') return saved;
      } catch {
        // localStorage unavailable
      }
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: light)').matches
      ) {
        return 'light';
      }
    }
    return 'dark'; // Dark mode default
  });

  useEffect(() => {
    const root = document.documentElement;
    const meta = document.getElementById('theme-color-meta');
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      root.classList.remove('dark');
      if (meta) meta.setAttribute('content', '#F8FAFC');
    } else {
      root.removeAttribute('data-theme');
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark');
      if (meta) meta.setAttribute('content', '#0B1220');
    }

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // localStorage error handling inside try/catch
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return {
    theme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}
