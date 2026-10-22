import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    <footer className="border-t border-border bg-surface text-muted text-sm pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        {/* Large Editorial CTA Header: "Let's talk." */}
        <div className="pb-14 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-accent block mb-3 font-medium">
              Start a conversation
            </span>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-normal text-text tracking-tight mb-4">
              Let’s talk.
            </h2>
            <a
              href={`mailto:${identity.email}`}
              className="inline-flex items-center gap-2 font-mono text-lg sm:text-xl text-accent hover:text-accent-hover underline underline-offset-8 transition-colors group"
            >
              <span>{identity.email}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={identity.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border bg-chip text-text hover:text-accent hover:border-accent transition-colors"
            >
              <SiGithub className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={identity.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border bg-chip text-text hover:text-accent hover:border-accent transition-colors"
            >
              <FaLinkedin className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Lower Row: Logo, Links & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs font-mono text-muted">
          <div className="flex items-center gap-3">
            <div
              aria-hidden="true"
              className="w-7 h-7 rounded-lg bg-accent text-on-accent flex items-center justify-center font-mono font-bold text-xs"
            >
              SK
            </div>
            <span className="font-serif text-base text-text">
              {identity.name}
            </span>
            <span className="text-border">|</span>
            <span>{identity.role}</span>
          </div>

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
