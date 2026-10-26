import React, { useState, useEffect } from 'react';

const sectionIndexMap = {
  hero: { num: '01', name: 'HERO' },
  projects: { num: '02', name: 'PROJECTS' },
  engineering: { num: '03', name: 'SYSTEMS' },
  about: { num: '04', name: 'ABOUT' },
  skills: { num: '05', name: 'SKILLS' },
  experience: { num: '06', name: 'EXPERIENCE' },
  education: { num: '07', name: 'EDUCATION' },
  contact: { num: '08', name: 'CONTACT' },
};

export default function ScrollRuler({ activeSection }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const scrolled = (window.scrollY / docHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, scrolled)));
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

  const current = sectionIndexMap[activeSection] || sectionIndexMap.hero;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* 1. Architectural Calibration Ticks (Background Scale) */}
      <div className="w-full h-1.5 opacity-30 bg-repeat-x flex items-end overflow-hidden"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to right, var(--border) 0px, var(--border) 1px, transparent 1px, transparent 16px)',
        }}
      />

      {/* 2. Precision Accent Progress Hairline */}
      <div className="relative w-full h-[2px] bg-border/40">
        <div
          className="h-full bg-accent relative transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing cursor bead at tip */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)] -mr-1"
          />
        </div>
      </div>

      {/* 3. Floating Architectural Telemetry Badge (Desktop & Tablet) */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 relative">
        <div className="absolute right-4 sm:right-6 top-3 hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-md bg-surface/90 border border-border/80 backdrop-blur-md shadow-xs font-mono text-[10px] text-muted tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="text-text font-semibold">{current.num}/08</span>
          <span className="text-border">·</span>
          <span className="text-accent">{current.name}</span>
          <span className="text-border">·</span>
          <span>{Math.round(scrollProgress)}%</span>
        </div>
      </div>
    </div>
  );
}
