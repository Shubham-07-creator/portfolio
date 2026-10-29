import React from 'react';

const defaultKickerMap = {
  projects: '/projects',
  featured: '/projects',
  engineering: '/engineering',
  about: '/about',
  skills: '/skills',
  experience: '/experience',
  education: '/education',
  contact: '/contact',
  touch: '/contact',
};

export default function SectionHeading({
  title,
  intro,
  number,
  kicker,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  // Compute a clean lowercase slash kicker (13px, font-mono, text-muted)
  const firstWord = (title || '').toLowerCase().split(' ')[0].replace(/[^a-z0-9]/g, '');
  const displayKicker = kicker || defaultKickerMap[firstWord] || `/${firstWord}`;

  return (
    <div className={`mb-8 sm:mb-12 ${alignment} ${className}`}>
      {/* Tiny mono kicker in --text-muted lowercase with slash prefix (13px) */}
      <div className="font-mono text-[13px] text-muted lowercase tracking-normal mb-1">
        {displayKicker}
      </div>

      <div className="flex items-center gap-3 mb-2 flex-wrap">
        {number && (
          <span className="font-mono text-xs sm:text-sm text-accent font-semibold tracking-wider uppercase py-0.5 px-2.5 rounded-md bg-surface-2 border border-border select-none shadow-xs">
            {number}
          </span>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-serif font-normal text-text tracking-[-0.015em] leading-[1.08]">
          {title}
        </h2>
      </div>
      {intro && (
        <p className="mt-2 text-sm sm:text-base text-muted max-w-[65ch] leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
