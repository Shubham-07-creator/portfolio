import React from 'react';
import { FileText } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const { identity } = portfolioData;

  const navLinks = [
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Engineering', href: '#engineering', id: 'engineering' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Skip to content accessible link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-accent text-on-accent rounded-lg font-mono text-xs shadow-lg outline-none"
      >
        Skip to content
      </a>

      {/* Header: Solid bar, 1px bottom border */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border shadow-xs">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-2.5 sm:gap-3">
          {/* Top Row on mobile / Left column on desktop */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo: SK Monogram in Saffron rounded square */}
            <a
              href="#hero"
              className="inline-flex items-center gap-3 min-h-[44px] group focus-visible:outline-accent"
            >
              <div
                aria-hidden="true"
                className="w-8 h-8 rounded-lg bg-accent text-on-accent flex items-center justify-center font-mono font-bold text-sm shadow-xs transition-transform duration-200 group-hover:scale-105"
              >
                SK
              </div>
              <span className="font-serif text-xl tracking-tight text-text">
                Shubham Kumar
              </span>
            </a>

            {/* Mobile Actions: Theme toggle & Resume */}
            <div className="flex items-center gap-2 md:hidden">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3 !text-xs min-h-[44px] inline-flex items-center"
                >
                  <FileText className="w-3.5 h-3.5" strokeWidth={1.75} />
                  <span>Resume</span>
                </a>
              )}
            </div>
          </div>

          {/* Center Links (desktop) / Scrollable Row (mobile) */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 md:mx-0 md:px-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3 py-1.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-xs font-mono font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-2.5 right-2.5 h-[2px] bg-accent rounded-full transition-all"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right: Theme Toggle & Optional Resume */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {identity.resumeUrl && (
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-1.5 !px-4 !text-xs min-h-[40px] inline-flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" strokeWidth={1.75} />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
