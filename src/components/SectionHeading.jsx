import React from 'react';

export default function SectionHeading({
  title,
  intro,
  number,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-8 sm:mb-12 ${alignment} ${className}`}>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        {number && (
          <span className="font-mono text-xs sm:text-sm text-accent font-semibold tracking-wider uppercase py-0.5 px-2.5 rounded-md bg-chip border border-border select-none">
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
