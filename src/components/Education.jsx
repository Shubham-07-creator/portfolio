import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, ExternalLink, School } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function Education() {
  const { education } = portfolioData;
  const { bca, classXII, classX, certification } = education;

  return (
    <section id="education" className="py-16 md:py-24 bg-surface/30 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <SectionHeading
          number="06"
          title="Education & certification"
          intro="Academic degree in computer applications, foundational schooling, and certified full-stack engineering training."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 cols): BCA Degree & Schooling */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Large BCA Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-8 rounded-[20px] editorial-card relative group"
            >
              {/* Architectural registration marks */}
              <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-3 border-b border-border">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-chip border border-border">
                    <GraduationCap className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-accent uppercase tracking-wider block">
                      Undergraduate Degree
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-text">
                      {bca.degree}
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-muted">
                  <Calendar className="w-3.5 h-3.5 text-spark" strokeWidth={1.75} />
                  <span>{bca.period}</span>
                </div>
              </div>

              <p className="text-sm text-muted font-medium mb-5">
                {bca.institution}
              </p>

              <div>
                <span className="text-xs font-mono text-text block mb-2 font-semibold">
                  Key Academic Coursework:
                </span>
                <div className="flex flex-wrap gap-2">
                  {bca.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 rounded-lg bg-chip border border-border text-xs font-mono text-muted"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 2. Compact One-Line Cards for Class XII and Class X */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3 text-xs sm:text-sm text-muted">
                <School className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />
                <span>{classXII.text}</span>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border flex items-center gap-3 text-xs sm:text-sm text-muted">
                <School className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />
                <span>{classX.text}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Certification Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-5 sm:p-8 rounded-[20px] editorial-card flex flex-col justify-between relative group"
            >
              {/* Architectural registration marks */}
              <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-chip border border-border">
                      <Award className="w-5 h-5 text-spark" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider block">
                        Professional Certification
                      </span>
                      <h3 className="text-lg font-bold font-heading text-text">
                        {certification.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-muted">
                    {certification.year}
                  </span>
                </div>

                <div className="text-xs font-mono text-accent mb-3 font-semibold">
                  Issued by {certification.issuer}
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {certification.description}
                </p>
              </div>

              {certification.credentialUrl && (
                <div className="pt-4 border-t border-border">
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
