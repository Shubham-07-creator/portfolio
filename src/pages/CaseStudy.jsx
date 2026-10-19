import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { portfolioData } from '../data/portfolio';

// SVG Architecture Diagram for TradeXpert
function TradeXpertArchitectureSvg() {
  return (
    <div className="w-full overflow-x-auto py-6" aria-label="TradeXpert architecture diagram">
      <svg
        viewBox="0 0 920 380"
        className="w-full min-w-[700px] h-auto font-mono text-xs select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <marker
            id="cs-arrow-accent"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-accent)" />
          </marker>
          <marker
            id="cs-arrow-spark"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--color-spark)" />
          </marker>
        </defs>

        {/* 1. Client Layer */}
        <rect x="30" y="40" width="200" height="80" rx="14" fill="var(--color-chip)" stroke="var(--color-spark)" strokeWidth="1.5" />
        <text x="130" y="75" textAnchor="middle" fill="var(--color-text)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">Landing Site</text>
        <text x="130" y="95" textAnchor="middle" fill="var(--color-muted)" fontSize="11" fontFamily="Inter, sans-serif">React · Marketing &amp; Auth</text>

        <rect x="30" y="180" width="200" height="90" rx="14" fill="var(--color-chip)" stroke="var(--color-spark)" strokeWidth="1.5" />
        <text x="130" y="215" textAnchor="middle" fill="var(--color-text)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">Trading Terminal</text>
        <text x="130" y="235" textAnchor="middle" fill="var(--color-muted)" fontSize="11" fontFamily="Inter, sans-serif">React · Chart.js · Orders</text>
        <text x="130" y="252" textAnchor="middle" fill="var(--color-accent)" fontSize="10">Socket.IO Client</text>

        {/* 2. Express API Layer (Core) */}
        <rect x="330" y="30" width="280" height="260" rx="18" fill="var(--color-surface)" stroke="var(--color-accent)" strokeWidth="2" />
        <rect x="330" y="30" width="280" height="34" rx="18" fill="var(--color-chip)" />
        <text x="470" y="52" textAnchor="middle" fill="var(--color-accent)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">Express API Server</text>
        
        {/* Middleware & Modules */}
        <rect x="350" y="80" width="240" height="32" rx="8" fill="var(--color-chip)" stroke="var(--color-border)" />
        <text x="470" y="100" textAnchor="middle" fill="var(--color-muted)" fontSize="11">Helmet · CORS · Rate Limiter</text>

        <rect x="350" y="125" width="240" height="32" rx="8" fill="var(--color-chip)" stroke="var(--color-border)" />
        <text x="470" y="145" textAnchor="middle" fill="var(--color-muted)" fontSize="11">JWT Authentication &amp; RBAC</text>

        <rect x="350" y="170" width="240" height="34" rx="8" fill="var(--color-chip)" stroke="var(--color-success)" strokeWidth="1" />
        <text x="470" y="192" textAnchor="middle" fill="var(--color-success)" fontWeight="bold" fontSize="11">Order Execution Engine</text>

        <rect x="350" y="218" width="240" height="34" rx="8" fill="var(--color-chip)" stroke="var(--color-spark)" strokeWidth="1" />
        <text x="470" y="240" textAnchor="middle" fill="var(--color-spark)" fontWeight="bold" fontSize="11">Market Engine &amp; Socket.IO</text>

        {/* 3. External & Database Layer */}
        {/* Yahoo Finance */}
        <rect x="690" y="50" width="190" height="70" rx="12" fill="var(--color-chip)" stroke="var(--color-accent)" strokeWidth="1.5" />
        <text x="785" y="80" textAnchor="middle" fill="var(--color-text)" fontWeight="bold" fontSize="12" fontFamily="Space Grotesk, sans-serif">Yahoo Finance</text>
        <text x="785" y="100" textAnchor="middle" fill="var(--color-muted)" fontSize="10">Live NSE Ticks</text>

        {/* MongoDB Atlas */}
        <rect x="690" y="180" width="190" height="85" rx="12" fill="var(--color-chip)" stroke="var(--color-success)" strokeWidth="1.5" />
        <text x="785" y="212" textAnchor="middle" fill="var(--color-text)" fontWeight="bold" fontSize="12" fontFamily="Space Grotesk, sans-serif">MongoDB Atlas</text>
        <text x="785" y="232" textAnchor="middle" fill="var(--color-muted)" fontSize="10">Users · Orders · Portfolios</text>
        <text x="785" y="248" textAnchor="middle" fill="var(--color-success)" fontSize="10">Mongoose Schemas</text>

        {/* Connectors / Arrows */}
        <path d="M 230 80 L 330 80" stroke="var(--color-accent)" strokeWidth="2" markerEnd="url(#cs-arrow-accent)" />
        <path d="M 230 215 L 330 215" stroke="var(--color-accent)" strokeWidth="2" markerEnd="url(#cs-arrow-accent)" />
        <path d="M 350 250 L 230 250" stroke="var(--color-spark)" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#cs-arrow-spark)" />
        <path d="M 690 90 L 590 225" stroke="var(--color-spark)" strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#cs-arrow-spark)" />
        <path d="M 590 190 L 690 210" stroke="var(--color-accent)" strokeWidth="2" markerEnd="url(#cs-arrow-accent)" />
      </svg>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const { projects } = portfolioData;
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project || !project.caseStudy) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-bold font-heading mb-4 text-text">Case Study Not Found</h1>
        <Link
          to="/"
          className="btn-primary"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    );
  }

  const { caseStudy } = project;
  const hasChallenges = caseStudy.challenges && caseStudy.challenges.length > 0;
  const hasLearnings = caseStudy.learnings && caseStudy.learnings.length > 0;

  return (
    <div className="min-h-screen py-16 sm:py-24">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 min-h-[44px] text-xs font-mono text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="mb-12 pb-8 border-b border-border">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chip border border-border text-xs font-mono text-accent mb-4">
            <span>Case Study</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-heading text-text tracking-tight mb-2">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg font-mono text-accent mb-4">
            {project.subtitle}
          </p>

          <p className="text-base text-muted max-w-3xl leading-relaxed mb-6">
            {project.oneLiner}
          </p>

          {/* Action links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            {project.extraButton && (
              <a
                href={project.extraButton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>{project.extraButton.label}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <SiGithub className="w-4 h-4" aria-hidden="true" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Overview & Metrics */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-14">
            <h2 className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-4">
              Key Metrics &amp; Operational Benchmarks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-6 rounded-card bg-surface border border-border shadow-card text-center">
                  <div className="text-3xl sm:text-4xl font-bold font-mono text-accent mb-1">
                    {m.value}
                  </div>
                  <div className="text-xs font-mono text-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Problem */}
          <div className="p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
            <h3 className="text-lg font-bold font-heading text-error mb-3">
              The Problem
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {caseStudy.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
            <h3 className="text-lg font-bold font-heading text-success mb-3">
              The Solution
            </h3>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              {caseStudy.solution}
            </p>
          </div>
        </div>

        {/* System Architecture Diagram */}
        <div className="mb-14 p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
            <h3 className="text-lg font-bold font-heading text-text flex items-center gap-2">
              <Layers className="w-5 h-5 text-accent" strokeWidth={1.75} />
              <span>System Architecture &amp; Data Pipeline</span>
            </h3>
            <span className="text-xs font-mono text-muted hidden sm:inline-block">
              Multi-app distributed topology
            </span>
          </div>

          <TradeXpertArchitectureSvg />
        </div>

        {/* Tech Stack Breakdown */}
        <div className="mb-14 p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
          <h3 className="text-lg font-bold font-heading text-text mb-4">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.chips?.map((chip) => (
              <span
                key={chip}
                className="px-3 py-1.5 rounded-lg font-mono text-xs bg-chip border border-border text-text"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges (Hidden completely if empty) */}
        {hasChallenges && (
          <div className="mb-14 p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
            <h3 className="text-lg font-bold font-heading text-text mb-4">
              Engineering Challenges
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              {caseStudy.challenges.map((c, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Learnings (Hidden completely if empty) */}
        {hasLearnings && (
          <div className="mb-14 p-6 sm:p-8 rounded-card bg-surface border border-border shadow-card">
            <h3 className="text-lg font-bold font-heading text-text mb-4">
              Key Learnings &amp; Retrospective
            </h3>
            <ul className="space-y-2 text-sm text-muted">
              {caseStudy.learnings.map((l, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Back Link at bottom */}
        <div className="pt-8 border-t border-border flex justify-start">
          <Link
            to="/#projects"
            className="btn-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
