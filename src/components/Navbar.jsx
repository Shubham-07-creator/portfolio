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

      {/* Header: sticky, solid background with subtle blur and 1px bottom border */}
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="max-w-[1120px] mx-auto px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Top Row on mobile / Main bar on desktop */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 min-h-[44px] group focus-visible:outline-accent"
            >
              <div
                aria-hidden="true"
                className="w-8 h-8 rounded-lg bg-chip border border-border flex items-center justify-center font-heading font-bold text-sm text-accent group-hover:border-accent transition-colors"
              >
                SK
              </div>
              <span className="font-heading font-bold text-base tracking-tight text-text">
                Shubham Kumar
              </span>
            </a>

            {/* Mobile Actions: Theme toggle & Resume (if set) */}
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

          {/* Links: Under 720px becomes horizontally scrollable row under the logo, never hidden */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 -mx-2 px-2 md:mx-0 md:px-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-3.5 min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-xs font-mono font-medium whitespace-nowrap transition-colors rounded-md ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-text hover:bg-chip/50'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-1 left-2 right-2 h-[2px] bg-accent rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            {identity.resumeUrl && (
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !py-2 !px-4 !text-xs font-mono min-h-[44px] inline-flex items-center"
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
