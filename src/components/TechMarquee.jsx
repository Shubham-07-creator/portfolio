import React from 'react';
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiJavascript,
  SiTailwindcss,
  SiGit,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';
import { useReducedMotion } from '../hooks/useReducedMotion';

export default function TechMarquee() {
  const { marquee } = portfolioData;
  const reducedMotion = useReducedMotion();

  const getLogo = (iconName) => {
    switch (iconName) {
      case 'SiReact':
        return <SiReact className="w-4 h-4 text-[#61DAFB]" aria-hidden="true" />;
      case 'SiNodedotjs':
        return <SiNodedotjs className="w-4 h-4 text-[#5FA04E]" aria-hidden="true" />;
      case 'SiExpress':
        return <SiExpress className="w-4 h-4 text-text" aria-hidden="true" />;
      case 'SiMongodb':
        return <SiMongodb className="w-4 h-4 text-[#47A248]" aria-hidden="true" />;
      case 'SiSocketdotio':
        return <SiSocketdotio className="w-4 h-4 text-text" aria-hidden="true" />;
      case 'FaJava':
        return <FaJava className="w-4 h-4 text-[#ED8B00]" aria-hidden="true" />;
      case 'SiJavascript':
        return <SiJavascript className="w-4 h-4 text-[#F7DF1E]" aria-hidden="true" />;
      case 'SiTailwindcss':
        return <SiTailwindcss className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />;
      case 'SiGit':
        return <SiGit className="w-4 h-4 text-[#F05032]" aria-hidden="true" />;
      default:
        return null;
    }
  };

  const marqueeItems = [...marquee, ...marquee];

  return (
    <section className="py-6 border-y border-border bg-surface/50 relative overflow-hidden">
      {reducedMotion ? (
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap gap-3 justify-center">
          {marquee.map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-chip border border-border text-xs font-mono text-text"
            >
              {getLogo(item.icon)}
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div
          className="relative w-full overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-marquee flex items-center gap-6 py-1">
            {marqueeItems.map((item, idx) => (
              <div
                key={idx}
                className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-chip border border-border text-xs font-mono text-muted hover:text-text hover:border-accent transition-colors shrink-0 cursor-default"
              >
                <span className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  {getLogo(item.icon)}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
