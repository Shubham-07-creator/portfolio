import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  BookMarked,
  Binary,
  Layers,
  Terminal,
  Boxes,
  Network,
} from 'lucide-react';
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVscodium,
  SiPostman,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

export default function Skills() {
  const { skills } = portfolioData;

  const categoryIcons = {
    Languages: <Code2 className="w-5 h-5 text-accent" strokeWidth={1.75} />,
    Frontend: <Layout className="w-5 h-5 text-spark" strokeWidth={1.75} />,
    Backend: <Server className="w-5 h-5 text-accent" strokeWidth={1.75} />,
    Databases: <Database className="w-5 h-5 text-success" strokeWidth={1.75} />,
    Tools: <Wrench className="w-5 h-5 text-spark" strokeWidth={1.75} />,
    'Core CS': <BookMarked className="w-5 h-5 text-accent" strokeWidth={1.75} />,
  };

  const getSkillIcon = (skill) => {
    switch (skill) {
      // Languages
      case 'Java (Core Java)':
        return <FaJava className="w-4 h-4 text-[#ED8B00]" aria-hidden="true" />;
      case 'JavaScript':
        return <SiJavascript className="w-4 h-4 text-[#F7DF1E]" aria-hidden="true" />;
      case 'SQL':
        return <Database className="w-4 h-4 text-spark" strokeWidth={1.75} aria-hidden="true" />;

      // Frontend
      case 'React.js':
        return <SiReact className="w-4 h-4 text-[#61DAFB]" aria-hidden="true" />;
      case 'HTML5':
        return <SiHtml5 className="w-4 h-4 text-[#E34F26]" aria-hidden="true" />;
      case 'CSS3':
        return <SiCss className="w-4 h-4 text-[#1572B6]" aria-hidden="true" />;
      case 'Tailwind CSS':
        return <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" aria-hidden="true" />;
      case 'Bootstrap':
        return <SiBootstrap className="w-4 h-4 text-[#7952B3]" aria-hidden="true" />;
      case 'Material UI':
        return <SiMui className="w-4 h-4 text-[#007FFF]" aria-hidden="true" />;

      // Backend
      case 'Node.js':
        return <SiNodedotjs className="w-4 h-4 text-[#5FA04E]" aria-hidden="true" />;
      case 'Express.js':
        return <SiExpress className="w-4 h-4 text-text" aria-hidden="true" />;
      case 'REST APIs':
        return <Server className="w-4 h-4 text-accent" strokeWidth={1.75} aria-hidden="true" />;
      case 'Middleware':
        return <Layers className="w-4 h-4 text-spark" strokeWidth={1.75} aria-hidden="true" />;
      case 'JWT Authentication':
        return <SiJsonwebtokens className="w-4 h-4 text-accent" aria-hidden="true" />;

      // Databases
      case 'MongoDB':
        return <SiMongodb className="w-4 h-4 text-[#47A248]" aria-hidden="true" />;
      case 'MySQL':
        return <SiMysql className="w-4 h-4 text-[#4479A1]" aria-hidden="true" />;

      // Tools
      case 'Git':
        return <SiGit className="w-4 h-4 text-[#F05032]" aria-hidden="true" />;
      case 'GitHub':
        return <SiGithub className="w-4 h-4 text-text" aria-hidden="true" />;
      case 'VS Code':
        return <SiVscodium className="w-4 h-4 text-[#007ACC]" aria-hidden="true" />;
      case 'Postman':
        return <SiPostman className="w-4 h-4 text-[#FF6C37]" aria-hidden="true" />;

      // Core CS
      case 'Data Structures':
        return <Binary className="w-4 h-4 text-accent" strokeWidth={1.75} aria-hidden="true" />;
      case 'DBMS':
        return <Database className="w-4 h-4 text-spark" strokeWidth={1.75} aria-hidden="true" />;
      case 'Operating Systems':
        return <Terminal className="w-4 h-4 text-success" strokeWidth={1.75} aria-hidden="true" />;
      case 'OOP':
        return <Boxes className="w-4 h-4 text-accent" strokeWidth={1.75} aria-hidden="true" />;
      case 'Computer Networks':
        return <Network className="w-4 h-4 text-spark" strokeWidth={1.75} aria-hidden="true" />;

      default:
        return <Code2 className="w-4 h-4 text-accent" strokeWidth={1.75} aria-hidden="true" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-surface/40 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          number="04"
          title="Skills & technologies"
          intro="Technologies, frameworks, and foundational computer science principles applied in project architectures."
        />

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-[20px] editorial-card flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border">
                  <div className="p-2 rounded-lg bg-chip border border-border">
                    {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-accent" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-text">
                      {cat.category}
                    </h3>
                    <span className="text-[11px] font-mono text-muted">
                      {cat.skills.length} skills
                    </span>
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skillName) => (
                    <div
                      key={skillName}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-chip border border-border text-xs font-mono text-text transition-colors hover:border-accent"
                    >
                      {getSkillIcon(skillName)}
                      <span>{skillName}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
