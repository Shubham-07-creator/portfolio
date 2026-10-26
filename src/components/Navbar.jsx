import React, { useState, useEffect } from 'react';
import { FileText, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { portfolioData } from '../data/portfolio';

export default function Navbar({ activeSection, theme, toggleTheme, onOpenCommand }) {
  const { identity } = portfolioData;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = window.scrollY / docHeight;
        setScrollProgress(Math.min(1, Math.max(0, scrolled)));
      } else {
        setScrollProgress(0);
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-accent text-on-accent rounded-lg font-mono text-xs shadow-lg outline-none"
      >
        Skip to content
      </a>

      {/* Header: Solid background, z-50 above all content, 1px bottom border */}
      <header className="sticky top-0 z-50 bg-surface border-b border-border shadow-xs w-full max-w-full overflow-hidden select-none">
        {/* DESKTOP & TABLET SINGLE ROW (>= 720px): Height 64px (h-16), never wrapping */}
        <div className="hidden min-[720px]:flex items-center justify-between h-16 max-w-[1120px] mx-auto px-4 sm:px-6 w-full max-w-full min-w-0">
          {/* 1. Left Brand Block: SK Monogram + "Shubham Kumar" only (no clock, no city) */}
          <a
            href="#hero"
            className="inline-flex items-center gap-2 min-[1100px]:gap-2.5 h-16 py-2 shrink-0 overflow-visible whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md group"
          >
            <div
              aria-hidden="true"
              className="w-7 h-7 min-[1100px]:w-8 min-[1100px]:h-8 rounded-lg bg-accent text-on-accent flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none transition-transform duration-150 group-hover:scale-105"
            >
              SK
            </div>
            <span className="font-serif text-lg min-[1100px]:text-xl tracking-tight text-text leading-[1.2] py-1 overflow-visible whitespace-nowrap select-none">
              Shubham Kumar
            </span>
          </a>

          {/* 2. Links: equal gaps (24px at >=1100px, 16px at 720-1099px), same size & weight, 2px accent underline */}
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-center min-[1100px]:gap-6 gap-4 shrink-0 whitespace-nowrap py-1"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-xs font-sans font-medium whitespace-nowrap transition-colors rounded-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* 3. Right Side Controls */}
          <div className="flex items-center gap-2 min-[1100px]:gap-2.5 shrink-0 whitespace-nowrap">
            {/* Quick Actions: compact 36px icon button, shown from 1100px and up, hidden below 1100px */}
            <button
              type="button"
              onClick={onOpenCommand}
              aria-label="Open quick actions"
              title="Quick actions, Ctrl K"
              className="hidden min-[1100px]:inline-flex w-9 h-9 min-w-[36px] min-h-[36px] rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-accent items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <Search className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />
            </button>

            {/* Theme Toggle (36px square) */}
            <ThemeToggle
              theme={theme}
              toggleTheme={toggleTheme}
            />

            {/* Resume Button: directly following Theme Toggle */}
            {identity.resumeUrl && (
              <a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 px-2.5 min-[1100px]:px-3 rounded-lg border border-border-strong bg-transparent text-text hover:border-accent text-xs font-sans font-medium whitespace-nowrap inline-flex items-center gap-1.5 shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <FileText className="w-3.5 h-3.5 text-muted shrink-0" strokeWidth={1.5} />
                <span>Resume</span>
              </a>
            )}
          </div>
        </div>

        {/* MOBILE LAYOUT (< 720px): Two rows, never hidden, never overflowing horizontally */}
        <div className="flex min-[720px]:hidden flex-col w-full max-w-full min-w-0">
          {/* Row 1: Brand block and Right controls (Toggle + Resume) */}
          <div className="flex items-center justify-between h-14 px-3 sm:px-4 w-full max-w-full min-w-0">
            <a
              href="#hero"
              className="inline-flex items-center gap-2 h-14 py-2 shrink-0 overflow-visible whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded-md group"
            >
              <div
                aria-hidden="true"
                className="w-7 h-7 rounded-lg bg-accent text-on-accent flex items-center justify-center font-mono font-bold text-xs shrink-0 select-none"
              >
                SK
              </div>
              <span className="font-serif text-lg tracking-tight text-text leading-[1.2] py-1 overflow-visible whitespace-nowrap select-none">
                Shubham Kumar
              </span>
            </a>

            <div className="flex items-center gap-2 shrink-0">
              <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
              />
              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 px-2.5 rounded-lg border border-border-strong bg-transparent text-text hover:border-accent text-xs font-sans font-medium whitespace-nowrap inline-flex items-center gap-1 shrink-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <FileText className="w-3.5 h-3.5 text-muted shrink-0" strokeWidth={1.5} />
                  <span>Resume</span>
                </a>
              )}
            </div>
          </div>

          {/* Row 2: Horizontally scrollable row of nav links, never hidden */}
          <nav
            aria-label="Mobile Navigation"
            className="flex items-center gap-4 overflow-x-auto no-scrollbar px-3 sm:px-4 h-10 border-t border-border/40 whitespace-nowrap select-none w-full max-w-full min-w-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative py-1 text-xs font-sans font-medium whitespace-nowrap transition-colors rounded-sm shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? 'text-accent font-semibold'
                      : 'text-muted hover:text-text'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        {/* 2px Scroll Progress Line at very bottom edge of header (accent colour, scaleX, no text, disabled under reduced-motion) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left pointer-events-none motion-reduce:hidden"
          style={{
            transform: `scaleX(${scrollProgress})`,
            transition: 'transform 75ms ease-out',
          }}
          aria-hidden="true"
        />
      </header>
    </>
  );
}
