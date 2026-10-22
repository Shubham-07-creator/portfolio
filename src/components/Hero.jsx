import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { identity } = portfolioData;

  const codeLines = [
    { num: 1, text: <><span className="text-accent font-medium">const</span> <span className="text-text font-medium">shubham</span> = {'{'}</> },
    { num: 2, text: <>  <span className="text-muted">role:</span> <span className="text-secondary">"Full Stack Developer"</span>,</> },
    { num: 3, text: <>  <span className="text-muted">stack:</span> [<span className="text-secondary">"React"</span>, <span className="text-secondary">"Node.js"</span>,</> },
    { num: 4, text: <>           <span className="text-secondary">"Express"</span>, <span className="text-secondary">"MongoDB"</span>],</> },
    { num: 5, text: <>  <span className="text-muted">foundations:</span> [<span className="text-secondary">"Java"</span>, <span className="text-secondary">"DSA"</span>],</> },
    { num: 6, text: <>  <span className="text-muted">status:</span> <span className="text-secondary">"open to internships"</span>,</> },
    { num: 7, text: <>  <span className="text-muted">location:</span> <span className="text-secondary">"India"</span></> },
    { num: 8, text: <>{'}'};</> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-68px)] md:min-h-[calc(100svh-72px)] flex flex-col justify-center pt-6 pb-10 sm:py-12 md:py-20 overflow-hidden"
    >
      {/* Subtle Dot Grid and Grain */}
      <div className="hero-dot-grid" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <div className="hero-ambient-glow hidden lg:block" aria-hidden="true" />

      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (Asymmetric: 7 cols on desktop) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text shadow-xs mb-3.5 sm:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>{identity.status}</span>
            </div>

            {/* Hero Name: Instrument Serif, "Shubham" straight, "Kumar" italic saffron */}
            <h1 className="text-5xl xs:text-6xl sm:text-7xl lg:text-[108px] font-serif font-normal tracking-[-0.02em] leading-[0.95] mb-3 sm:mb-4 text-text">
              Shubham <span className="italic text-accent">Kumar</span>
            </h1>

            {/* Role line */}
            <div className="font-mono text-xs sm:text-sm text-accent uppercase tracking-wider mb-3 sm:mb-4 font-medium">
              {identity.role}
            </div>

            {/* Lede (max ~65 characters, 17px) */}
            <p className="text-base sm:text-[17px] text-body max-w-[58ch] leading-relaxed mb-6 sm:mb-8">
              {identity.lede}
            </p>

            {/* Action Buttons: Saffron pill primary, Ghost secondary */}
            <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 w-full sm:w-auto">
              <a href="#projects" className="btn-primary group">
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.75} />
              </a>

              <a href={`mailto:${identity.email}`} className="btn-secondary">
                <Mail className="w-4 h-4" strokeWidth={1.75} />
                <span>Email me</span>
              </a>

              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FileText className="w-4 h-4" strokeWidth={1.75} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Links and Location */}
            <div className="flex flex-wrap items-center gap-4 pt-3.5 sm:pt-4 border-t border-border/70 w-full sm:w-auto text-xs font-mono text-muted">
              <div className="flex items-center gap-2.5">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <SiGithub className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-muted">
                <MapPin className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                <span>{identity.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Code Card with Line Numbers (5 cols on desktop) */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full lg:-ml-4 z-20"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="w-full max-w-[470px] editorial-card overflow-hidden">
              {/* Window dots & tabs */}
              <div className="px-4 py-3 bg-surface border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span className="font-mono text-xs text-muted font-medium">shubham.js</span>
                </div>
                <span className="text-[10px] font-mono text-muted/60">Node.js</span>
              </div>

              {/* Code block with real line numbers and syntax coloring */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-text">
                <div className="flex flex-col gap-0.5">
                  {codeLines.map((line) => (
                    <div key={line.num} className="flex items-start gap-3">
                      <span className="text-[11px] font-mono text-muted/50 select-none w-4 text-right shrink-0">
                        {line.num}
                      </span>
                      <span className="truncate">{line.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
