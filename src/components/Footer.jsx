import React from 'react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
  const { identity } = portfolioData;

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Engineering', href: '#engineering' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-surface/60 text-muted text-sm py-12">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border">
          {/* Logo & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <a
              href="#hero"
              className="inline-flex items-center gap-2.5 min-h-[44px] group"
            >
              <div
                aria-hidden="true"
                className="w-8 h-8 rounded-lg bg-chip border border-border flex items-center justify-center font-heading font-bold text-sm text-accent group-hover:border-accent transition-colors"
              >
                SK
              </div>
              <span className="font-heading font-bold text-base text-text">
                {identity.name}
              </span>
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <span className="text-xs font-mono text-muted">
              {identity.role}
            </span>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border bg-chip text-text hover:text-accent hover:border-accent transition-colors"
            >
              <SiGithub className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border bg-chip text-text hover:text-accent hover:border-accent transition-colors"
            >
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs font-mono text-muted">
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-text transition-colors py-2 px-1 min-h-[44px] inline-flex items-center"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <p>© 2026 {identity.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
