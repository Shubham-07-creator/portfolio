import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, toggleTheme, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg border border-border bg-surface text-text hover:border-accent transition-colors cursor-pointer flex items-center justify-center shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-muted group-hover:text-accent transition-colors" strokeWidth={1.5} />
      ) : (
        <Moon className="w-4 h-4 text-muted group-hover:text-accent transition-colors" strokeWidth={1.5} />
      )}
    </button>
  );
}
