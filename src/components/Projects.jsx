import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolio';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          title="Projects"
          intro="Full-stack web applications and real-time platforms engineered with emphasis on clean architecture and security."
        />

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
