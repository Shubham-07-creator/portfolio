import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  FileText,
  Copy,
  Check,
  ExternalLink,
  MapPin,
  Sparkles,
  Zap,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolio';

export default function RecruiterDrawer({ isOpen, onClose }) {
  const { identity, projects } = portfolioData;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end" role="dialog" aria-modal="true" aria-label="30-Second Recruiter Executive Summary">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            aria-hidden="true"
          />

          {/* Slide-over Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-xl h-full bg-surface border-l border-border shadow-2xl flex flex-col z-10 overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-border bg-surface-2/40 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent text-on-accent flex items-center justify-center font-mono font-bold text-sm shrink-0 shadow-xs">
                  SK
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-serif font-normal text-text">
                      Candidate Brief
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-mono text-[10px] font-semibold">
                      <Zap className="w-3 h-3" />
                      30s Fast-Track
                    </span>
                  </div>
                  <p className="text-xs font-mono text-muted">
                    Engineered for Engineering Managers &amp; Technical Recruiters
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-lg border border-border bg-surface text-muted hover:text-text hover:border-accent flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close drawer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Profile Card */}
              <div className="p-5 rounded-2xl bg-surface-2/60 border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-serif font-normal text-text">
                      Shubham Kumar
                    </h3>
                    <p className="text-xs font-mono text-accent font-medium mt-0.5">
                      Full Stack Developer · MERN + Core Java
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono text-text self-start sm:self-auto shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>{identity.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-muted">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" strokeWidth={1.5} />
                  <span>{identity.location}</span>
                </div>
              </div>

              {/* 30-Second Executive Pitch */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Why Consider Shubham for Your Team</span>
                </h4>
                <div className="space-y-2.5">
                  <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-xs sm:text-sm text-text leading-relaxed">
                      <strong className="text-text font-semibold">Real-Time Systems &amp; Concurrency:</strong> Engineered TradeXpert with 2.5s live NSE tick cycles, sub-30ms Socket.IO broadcasts, and atomic MongoDB margin locks that eliminate double-spend race conditions.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-xs sm:text-sm text-text leading-relaxed">
                      <strong className="text-text font-semibold">Production Security &amp; Gateways:</strong> Shipped StayHub with Razorpay SHA-256 HMAC cryptographic webhook verification, Mapbox GL geospatial clusters, and OWASP Top 10 security standards (Helmet CSP, JWT, RBAC).
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-xs sm:text-sm text-text leading-relaxed">
                      <strong className="text-text font-semibold">Computer Science &amp; DSA Foundations:</strong> Rigorous Java background with object-oriented system design and continuous DSA problem solving (Trees, Graphs, DP, Two Pointers).
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Systems at a Glance */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted font-semibold mb-3 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-accent" />
                  <span>Production Architectures Ready to Inspect</span>
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {projects.map((proj) => (
                    <div key={proj.slug} className="p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors flex flex-col justify-between">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h5 className="font-serif text-base font-normal text-text">
                              {proj.title}
                            </h5>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-surface-2 border border-border text-muted">
                              {proj.badge}
                            </span>
                          </div>
                          <p className="text-xs text-muted mt-1 leading-relaxed">
                            {proj.oneLiner}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-2 pt-2.5 border-t border-border/60">
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent text-on-accent text-xs font-mono font-semibold transition-transform hover:scale-[1.02]"
                        >
                          <span>Live App</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-surface-2 border border-border text-text text-xs font-mono hover:border-accent transition-colors"
                        >
                          <SiGithub className="w-3 h-3" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Standards */}
              <div className="p-4 rounded-xl bg-surface-2/40 border border-border text-xs font-mono text-muted space-y-1.5">
                <div className="flex items-center justify-between">
                  <span>Code Quality:</span>
                  <span className="text-text font-semibold">Oxlint 0 Errors · 0 Warnings</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Accessibility:</span>
                  <span className="text-text font-semibold">WCAG AAA / AA Contrast Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Responsive Support:</span>
                  <span className="text-text font-semibold">Verified 375px to 1920px (CLS 0.00)</span>
                </div>
              </div>
            </div>

            {/* Fixed Drawer Footer with High-Priority 1-Click Actions */}
            <div className="p-5 border-t border-border bg-surface shrink-0 space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={identity.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center py-2.5 text-xs font-mono font-semibold justify-center shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Resume PDF</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-secondary w-full py-2.5 text-xs font-mono font-semibold justify-center cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-success" />
                      <span className="text-success">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-muted">
                <a
                  href={`mailto:${identity.email}?subject=Interview%20Inquiry%20-%20Shubham%20Kumar`}
                  className="hover:text-accent underline transition-colors"
                >
                  Direct Email: {identity.email}
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href={identity.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-1.5 rounded-md hover:bg-surface-2 hover:text-accent transition-colors"
                  >
                    <FaLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={identity.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-1.5 rounded-md hover:bg-surface-2 hover:text-accent transition-colors"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
