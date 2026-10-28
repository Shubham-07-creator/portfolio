import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, FileText, ArrowRight, Copy, Check, Terminal, Code2, Zap } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export default function Hero({ onOpenRecruiter }) {
  const { identity } = portfolioData;
  const [activeTab, setActiveTab] = useState('js');
  const [copied, setCopied] = useState(false);

  const codeLines = [
    { num: 1, text: <><span className="text-accent font-medium">const</span> <span className="text-text font-medium">shubham</span> <span className="text-muted">=</span> <span className="text-muted">{'{'}</span></> },
    { num: 2, text: <>  <span className="text-muted">role:</span> <span className="text-[var(--code-string)]">"{identity.codeCard.role}"</span><span className="text-muted">,</span></> },
    { num: 3, text: <>  <span className="text-muted">stack:</span> <span className="text-muted">[</span><span className="text-[var(--code-string)]">"React"</span><span className="text-muted">, </span><span className="text-[var(--code-string)]">"Node.js"</span><span className="text-muted">,</span></> },
    { num: 4, text: <>           <span className="text-[var(--code-string)]">"Express"</span><span className="text-muted">, </span><span className="text-[var(--code-string)]">"MongoDB"</span><span className="text-muted">],</span></> },
    { num: 5, text: <>  <span className="text-muted">availability:</span> <span className="text-[var(--code-string)]">"{identity.codeCard.status}"</span><span className="text-muted">,</span></> },
    { num: 6, text: <>  <span className="text-muted">location:</span> <span className="text-[var(--code-string)]">"{identity.location}"</span><span className="text-muted">,</span></> },
    { num: 7, text: <>  <span className="text-muted">email:</span> <span className="text-[var(--code-string)]">"{identity.email}"</span></> },
    { num: 8, text: <><span className="text-muted">{'};'}</span></> },
  ];

  const cliOutput = [
    { text: '$ node check-availability.js', color: 'text-muted' },
    { text: `✔ Role: ${identity.codeCard.role}`, color: 'text-text' },
    { text: `✔ Stack: ${identity.codeCard.stack.join(', ')}`, color: 'text-text' },
    { text: `✔ Availability: ${identity.status}`, color: 'text-accent' },
    { text: `✔ Location: ${identity.location}`, color: 'text-text' },
    { text: `✔ Email: ${identity.email}`, color: 'text-accent' },
  ];

  const handleCopy = () => {
    const rawJs = `const shubham = {\n  role: "${identity.codeCard.role}",\n  stack: ["React", "Node.js", "Express", "MongoDB"],\n  availability: "${identity.codeCard.status}",\n  location: "${identity.location}",\n  email: "${identity.email}"\n};`;
    const rawCli = `$ node check-availability.js\n✔ Role: ${identity.codeCard.role}\n✔ Stack: ${identity.codeCard.stack.join(', ')}\n✔ Availability: ${identity.status}\n✔ Location: ${identity.location}\n✔ Email: ${identity.email}`;

    if (navigator?.clipboard) {
      navigator.clipboard.writeText(activeTab === 'js' ? rawJs : rawCli);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-64px)] max-[719px]:min-h-[calc(100svh-96px)] flex flex-col justify-center py-6 sm:py-8 lg:py-12 overflow-hidden"
    >
      {/* Subtle Dot Grid fading down and soft top-left glow */}
      <div className="hero-dot-grid" aria-hidden="true" />
      <div className="hero-glow-topleft" aria-hidden="true" />

      {/* Architectural Corner Registration Marks (+) */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 w-full relative z-10">
        <span className="absolute -top-3 left-4 sm:left-6 font-mono text-xs text-border select-none pointer-events-none" aria-hidden="true">+</span>
        <span className="absolute -top-3 right-4 sm:right-6 font-mono text-xs text-border select-none pointer-events-none" aria-hidden="true">+</span>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] gap-8 lg:gap-12 items-center w-full">
          {/* Left Column (minmax(0, 1.25fr)) */}
          <motion.div
            className="flex flex-col items-start min-w-0 w-full"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
          >
            {/* Status Pill & Fast-Track Recruiter Button */}
            <div className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-text shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                <span className="text-accent font-medium text-xs font-mono">{identity.status}</span>
              </div>

              {onOpenRecruiter && (
                <button
                  type="button"
                  onClick={onOpenRecruiter}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/15 border border-accent/40 text-accent hover:bg-accent hover:text-on-accent text-xs font-mono font-semibold transition-all cursor-pointer shadow-xs"
                  title="Open 30-Second Candidate Brief"
                >
                  <Zap className="w-3 h-3" />
                  <span>30s Recruiter Brief</span>
                </button>
              )}
            </div>

            {/* Hero Name: clamp(44px, 6.5vw, 96px), text-wrap: balance, wraps to 2 lines on narrower screens */}
            <h1 className="font-serif font-normal tracking-[-0.02em] leading-[0.95] mb-2 sm:mb-3 text-text [text-wrap:balance] text-[clamp(44px,6.5vw,96px)]">
              Shubham <span className="text-accent">Kumar</span>
            </h1>

            {/* Role line: sentence case, no uppercase transform, no wide letter-spacing, Inter 500 at clamp(18px, 2vw, 22px), colour --text-body */}
            <div className="font-sans font-medium text-[clamp(18px,2vw,22px)] text-body leading-snug mb-3 sm:mb-4">
              {identity.role}
            </div>

            {/* Lede (max ~65 characters, 17px, --text-muted, never below 14px) */}
            <p className="text-base sm:text-[17px] text-muted max-w-[58ch] leading-relaxed mb-5 sm:mb-6">
              {identity.lede}
            </p>

            {/* Action Buttons: Solid primary (8px radius) + Transparent secondary */}
            <div className="flex flex-wrap items-center gap-3 mb-5 sm:mb-6 w-full sm:w-auto">
              <a href="#projects" className="btn-primary group">
                <span>View projects</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.5} />
              </a>

              <a href={`mailto:${identity.email}`} className="btn-secondary">
                <Mail className="w-4 h-4 text-muted" strokeWidth={1.5} />
                <span>Email me</span>
              </a>

              {identity.resumeUrl && (
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <FileText className="w-4 h-4 text-muted" strokeWidth={1.5} />
                  <span>Resume</span>
                </a>
              )}
            </div>

            {/* Links and Location ("Muzaffarpur, Bihar, India" only) */}
            <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-3.5 border-t border-border/70 w-full sm:w-auto text-sm font-mono text-muted">
              <div className="flex items-center gap-2.5">
                <a
                  href={identity.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg border border-border bg-surface text-muted hover:border-accent hover:text-accent transition-colors"
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
                <MapPin className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                <span>{identity.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Card sits fully inside its column, stacked below on < 1024px */}
          <motion.div
            className="flex justify-center lg:justify-end w-full min-w-0 z-20"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0, 0, 1] }}
          >
            <div className="w-full max-w-[470px] editorial-card overflow-hidden relative">
              {/* Corner crosshairs inside card */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-border/60 select-none pointer-events-none" aria-hidden="true">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-border/60 select-none pointer-events-none" aria-hidden="true">+</span>

              {/* Window dots & interactive tab bar */}
              <div className="px-3 sm:px-4 py-2.5 bg-surface border-b border-border flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <div className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                </div>

                {/* Tab switchers */}
                <div className="inline-flex p-0.5 rounded-lg bg-surface-2 border border-border">
                  <button
                    type="button"
                    onClick={() => setActiveTab('js')}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === 'js'
                        ? 'bg-surface text-accent font-medium shadow-xs'
                        : 'text-muted hover:text-text'
                    }`}
                  >
                    <Code2 className="w-3 h-3" strokeWidth={1.5} />
                    <span>shubham.js</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab('cli')}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      activeTab === 'cli'
                        ? 'bg-surface text-accent font-medium shadow-xs'
                        : 'text-muted hover:text-text'
                    }`}
                  >
                    <Terminal className="w-3 h-3" strokeWidth={1.5} />
                    <span>status.sh</span>
                  </button>
                </div>

                {/* Copy button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  title="Copy snippet"
                  aria-label="Copy code snippet"
                  className="p-1.5 rounded-md text-muted hover:text-accent hover:bg-surface-2 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-success" strokeWidth={1.5} /> : <Copy className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />}
                </button>
              </div>

              {/* Tab 1: JavaScript View */}
              {activeTab === 'js' && (
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
              )}

              {/* Tab 2: Interactive CLI View */}
              {activeTab === 'cli' && (
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-text space-y-1.5 bg-surface-2/20">
                  {cliOutput.map((item, idx) => (
                    <div key={idx} className={`${item.color} leading-relaxed`}>
                      {item.text}
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 pt-1 text-accent">
                    <span>$</span>
                    <span className="w-2 h-4 bg-accent animate-pulse inline-block" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <span className="absolute -bottom-3 left-4 sm:left-6 font-mono text-xs text-border select-none pointer-events-none" aria-hidden="true">+</span>
        <span className="absolute -bottom-3 right-4 sm:right-6 font-mono text-xs text-border select-none pointer-events-none" aria-hidden="true">+</span>
      </div>
    </section>
  );
}
