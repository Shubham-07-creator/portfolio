import React from 'react';

export default function SectionHeading({
  title,
  intro,
  align = 'left',
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 sm:mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold font-heading text-text tracking-tight">
        {title}
      </h2>
      {intro && (
        <p className="mt-2.5 text-base sm:text-lg text-muted max-w-[65ch] leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}
