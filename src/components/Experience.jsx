import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Briefcase, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <SectionHeading
          number="05"
          title="Work experience"
          intro="Professional and structured frontend web development internships and team contributions."
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-border space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative group"
            >
              {/* Timeline Dot Marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-accent border-4 border-bg group-hover:scale-125 transition-transform">
                <span className="absolute -inset-1 rounded-full bg-accent/40 animate-ping opacity-60" />
              </div>

              {/* Single Experience Card */}
              <div className="p-5 sm:p-8 rounded-[20px] editorial-card relative group">
                {/* Architectural registration marks */}
                <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
                <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-border">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-chip border border-border text-[11px] font-mono text-accent mb-2">
                      <Briefcase className="w-3 h-3" />
                      <span>Internship</span>
                    </div>
                    <h3 className="text-xl font-bold font-heading text-text">
                      {experience.role}
                    </h3>
                    <div className="text-sm font-mono text-accent font-medium mt-0.5">
                      {experience.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
                      {experience.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-spark" strokeWidth={1.75} />
                      {experience.type}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {experience.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" strokeWidth={1.75} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {experience.credentialUrl && (
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-mono text-muted">
                      Verified credential available
                    </span>
                    <a
                      href={experience.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
