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
    <div className={`mb-10 sm:mb-14 ${alignment} ${className}`}>
      <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-serif font-normal text-text tracking-tight flex items-baseline gap-3">
        {number && (
          <span className="font-mono text-base sm:text-lg text-accent font-medium select-none">
            {number}
          </span>
        )}
        <span>{title}</span>
      </h2>
      {intro && (
        <p className="mt-2.5 text-base text-muted max-w-[65ch] leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
