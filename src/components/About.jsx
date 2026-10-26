import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Code,
  Radio,
  ShieldCheck,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function About() {
  const { about, identity } = portfolioData;

  const cardIcons = [
    <Layers key="0" className="w-5 h-5 text-muted shrink-0" strokeWidth={1.5} />,
    <Code key="1" className="w-5 h-5 text-muted shrink-0" strokeWidth={1.5} />,
    <Radio key="2" className="w-5 h-5 text-muted shrink-0" strokeWidth={1.5} />,
    <ShieldCheck key="3" className="w-5 h-5 text-muted shrink-0" strokeWidth={1.5} />,
  ];

  const factIcons = [
    <MapPin key="0" className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />,
    <GraduationCap key="1" className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />,
    <Briefcase key="2" className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />,
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <SectionHeading
          number="03"
          title="About me"
          intro="Background, engineering foundations, and focus areas across full-stack development and system reliability."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          {/* 1. Wide Narrative Card (8 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="md:col-span-7 lg:col-span-8 p-5 sm:p-8 rounded-[20px] editorial-card flex flex-col justify-between relative group"
          >
            {/* Architectural registration marks */}
            <span className="absolute top-2.5 left-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
            <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
            <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
            <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-2 border border-border text-xs font-mono text-muted mb-4 sm:mb-5">
                <Sparkles className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
                <span>Engineering Philosophy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-text mb-4 font-normal">
                Building reliable software with clean architecture
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-muted leading-relaxed">
                <p>{about.p1}</p>
                <p>{about.p2}</p>
                <p>{about.p3}</p>
              </div>
            </div>
          </motion.div>

          {/* 2. Profile / Monogram Tile (4 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="md:col-span-5 lg:col-span-4 p-6 sm:p-8 rounded-[20px] editorial-card flex flex-col items-center justify-center text-center relative overflow-hidden group"
          >
            {/* Architectural registration marks */}
            <span className="absolute top-2.5 left-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
            <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
            {identity.profileImage ? (
              <img
                src={identity.profileImage}
                alt={identity.name}
                className="w-32 h-32 rounded-full object-cover border-2 border-accent mb-4 shadow-md"
              />
            ) : (
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-surface-2 border border-border flex flex-col items-center justify-center mb-5 relative group">
                <span className="font-heading font-bold text-4xl sm:text-5xl text-accent tracking-tight">
                  SK
                </span>
                <span className="text-[10px] font-mono text-muted font-semibold mt-1 uppercase tracking-wider">
                  Developer
                </span>
              </div>
            )}

            <h4 className="text-lg font-bold font-heading text-text">
              {identity.name}
            </h4>
            <p className="text-xs font-mono text-muted mt-0.5">
              {identity.role}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted mt-2">
              <MapPin className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
              <span>{identity.location}</span>
            </div>

            <div className="mt-5 pt-4 border-t border-border w-full flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs font-mono text-muted">
                Available for internships
              </span>
            </div>
          </motion.div>

          {/* 3. 4 Focus Area Cards (3 cols each on lg) */}
          {about.cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + idx * 0.05 }}
              className="md:col-span-6 lg:col-span-3 p-5 sm:p-6 rounded-[20px] editorial-card hover:border-accent transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="p-2.5 rounded-xl bg-surface-2 border border-border inline-flex items-center justify-center mb-3.5">
                  {cardIcons[idx]}
                </div>
                <h4 className="text-base font-bold font-heading text-text mb-1.5">
                  {card.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 4. Currently Learning Card (6 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="md:col-span-6 p-6 rounded-[20px] editorial-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <BookOpen className="w-5 h-5 text-muted" strokeWidth={1.5} />
                <h4 className="text-base font-bold font-heading text-text">
                  Currently learning
                </h4>
              </div>
              <p className="text-xs text-muted mb-4">
                Deepening object-oriented design and algorithm optimization foundations:
              </p>
              <div className="flex flex-wrap gap-2">
                {about.currentlyLearning.map((topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg bg-surface-2 border border-border text-xs font-mono text-muted font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 5. Facts Card (6 cols on md/lg) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="md:col-span-6 p-6 rounded-[20px] editorial-card flex flex-col justify-between"
          >
            <div>
              <h4 className="text-base font-bold font-heading text-text mb-3.5">
                Quick Facts
              </h4>
              <ul className="space-y-3">
                {about.facts.map((fact, idx) => (
                  <li key={fact} className="flex items-center gap-3 text-xs sm:text-sm text-muted">
                    <div className="p-1.5 rounded-md bg-surface-2 border border-border">
                      {factIcons[idx] || <Sparkles className="w-4 h-4 text-muted" strokeWidth={1.5} />}
                    </div>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
