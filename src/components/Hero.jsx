import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export default function Hero() {
  const { identity } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-72px)] flex flex-col justify-center pt-4 pb-8 sm:py-10 md:py-14 overflow-hidden"
    >
      {/* Slow CSS-only gradient mesh behind hero */}
      <div className="hero-gradient-mesh" aria-hidden="true" />

      <div className="max-w-[1120px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (60% on desktop) */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
          >
            {/* Status Pill with Green Dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border text-xs font-mono text-text shadow-sm mb-3 sm:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
              </span>
              <span>{identity.status}</span>
            </div>

            {/* H1 Name with gradient (accent to spark ONLY on name) */}
            <h1 className="text-3xl sm:text-5xl lg:text-[68px] font-bold font-heading tracking-tight leading-[1.08] mb-2 sm:mb-3">
              <span className="name-gradient">{identity.name}</span>
            </h1>

            {/* Role */}
            <h2 className="text-lg sm:text-2xl font-bold font-heading text-text mb-2.5 sm:mb-3.5">
              {identity.role}
            </h2>

            {/* Lede */}
            <p className="text-sm sm:text-[17px] text-muted max-w-[58ch] leading-relaxed mb-5 sm:mb-7">
              {identity.lede}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-7 w-full sm:w-auto">
              <a href="#projects" className="btn-primary">
                <span>View projects</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.75} />
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
            <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4 border-t border-border/80 w-full sm:w-auto text-xs font-mono text-muted">
              <div className="flex items-center gap-2.5">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors"
                >
                  <SiGithub className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={identity.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border border-border bg-surface text-text hover:border-accent hover:text-accent transition-colors"
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

          {/* Right Column: Terminal-style code card (40% on desktop) */}
          <motion.div
            className="lg:col-span-5 flex justify-center w-full"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="w-full max-w-[480px] rounded-2xl bg-surface border border-border shadow-card overflow-hidden">
              {/* Window dots */}
              <div className="px-4 py-2.5 bg-chip/60 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
                </div>
                <span className="font-mono text-xs text-muted font-medium">shubham.js</span>
              </div>

              {/* Code block with syntax coloring */}
              <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-text">
                <span className="text-accent font-semibold">const</span>{' '}
                <span className="text-accent font-medium">shubham</span> = {'{'}{'\n'}
                {'  '}<span className="text-muted">role:</span>{' '}
                <span className="text-success">"Full Stack Developer"</span>,{'\n'}
                {'  '}<span className="text-muted">stack:</span> [{'\n'}
                {'    '}<span className="text-success">"React"</span>,{' '}
                <span className="text-success">"Node.js"</span>,{'\n'}
                {'    '}<span className="text-success">"Express"</span>,{' '}
                <span className="text-success">"MongoDB"</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="text-muted">also:</span> [
                <span className="text-success">"Java"</span>,{' '}
                <span className="text-success">"DSA"</span>],{'\n'}
                {'  '}<span className="text-muted">status:</span>{' '}
                <span className="text-success">"open to internships"</span>{'\n'}
                {'}'};
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
