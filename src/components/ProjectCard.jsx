import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ArrowRight,
  Radio,
  Zap,
  Shield,
  LineChart,
  MapPin,
  CreditCard,
  CalendarCheck,
  Database,
  Layers,
  Clock,
  ChevronDown,
  Play,
  X,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useReducedMotion } from '../hooks/useReducedMotion';

function MetricBox({ value, label, countUp }) {
  const reducedMotion = useReducedMotion();
  const numericMatch = typeof value === 'string' ? value.match(/^(\d+)(.*)$/) : null;
  const isNumeric = typeof value === 'number' || (numericMatch && countUp);
  const targetNumber = typeof value === 'number' ? value : numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';

  const [displayNum, setDisplayNum] = useState(() => (!countUp || reducedMotion || !isNumeric ? targetNumber : 0));
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!countUp || reducedMotion || !isNumeric || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          const duration = 900;
          const steps = 25;
          const stepTime = duration / steps;
          const increment = targetNumber / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= targetNumber) {
              setDisplayNum(targetNumber);
              clearInterval(timer);
            } else {
              setDisplayNum(Math.floor(current));
            }
          }, stepTime);

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [countUp, reducedMotion, isNumeric, targetNumber, hasAnimated]);

  return (
    <div
      ref={ref}
      className="p-3 rounded-xl bg-chip/60 border border-border text-center flex flex-col justify-center"
    >
      <div className="font-mono text-xl sm:text-2xl font-bold text-accent">
        {countUp && isNumeric ? `${displayNum}${suffix}` : value}
      </div>
      <div className="text-[11px] font-mono text-muted truncate mt-0.5" title={label}>
        {label}
      </div>
    </div>
  );
}

export default function ProjectCard({ project, index }) {
  const [imgError, setImgError] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [showAllChips, setShowAllChips] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoModalRef = useRef(null);

  // Desktop alternating: image left on odd (index 0, 2), right on even (index 1, 3); mobile image first always
  const isImageRight = index % 2 === 1;

  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'Radio':
        return <Radio className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-success shrink-0" strokeWidth={1.75} />;
      case 'LineChart':
        return <LineChart className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-4 h-4 text-success shrink-0" strokeWidth={1.75} />;
      case 'Database':
        return <Database className="w-4 h-4 text-spark shrink-0" strokeWidth={1.75} />;
      default:
        return <Layers className="w-4 h-4 text-accent shrink-0" strokeWidth={1.75} />;
    }
  };

  const chips = project.chips || [];
  const visibleChips = showAllChips ? chips : chips.slice(0, 6);
  const remainingChipsCount = chips.length - 6;

  const liveUrl = project.links?.live || project.liveUrl;
  const githubUrl = project.links?.github || project.githubUrl;
  const extraButton = project.links?.extra || project.extraButton;
  const coldStartHint = project.coldStartHint || project.hint;

  // Extract hostname for browser frame URL bar
  let displayHost = `${project.slug}.dev`;
  if (liveUrl) {
    try {
      displayHost = new URL(liveUrl).hostname;
    } catch {
      displayHost = liveUrl;
    }
  }

  const galleryImages =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.image
      ? [{ src: project.image, alt: `${project.title} screenshot`, label: 'Main' }]
      : [];

  const currentGalleryItem = galleryImages[activeGalleryIndex] || null;
  const currentImageSrc = currentGalleryItem ? currentGalleryItem.src : null;

  // Gallery keyboard navigation
  const handleGalleryKeyDown = (e, gIdx) => {
    if (galleryImages.length <= 1) return;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActiveGalleryIndex((gIdx + 1) % galleryImages.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActiveGalleryIndex((gIdx - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Video Modal Esc key handling
  useEffect(() => {
    if (!isVideoModalOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoModalOpen]);

  const hasCaseStudy = Boolean(
    project.caseStudy && (project.caseStudy.problem || project.caseStudy.solution)
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
      className="p-6 sm:p-8 lg:p-9 rounded-[16px] bg-surface border border-border shadow-card hover:border-accent hover:shadow-card-hover transition-all duration-200 group"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Screenshot area: Browser frame (5 cols on lg) */}
        <div
          className={`w-full lg:col-span-5 flex flex-col ${
            isImageRight ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="w-full rounded-xl bg-chip/40 border border-border shadow-sm overflow-hidden flex flex-col">
            {/* Browser Window Header */}
            <div className="px-3.5 py-2.5 bg-chip/80 border-b border-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-surface/90 border border-border/70 text-[11px] font-mono text-muted/90 truncate max-w-[220px]">
                {displayHost}
              </div>
              <div className="w-3 shrink-0" />
            </div>

            {/* Browser Viewport Area (Fixed 16:10 aspect ratio to eliminate layout shift) */}
            <div className="relative aspect-[16/10] w-full bg-surface/60 overflow-hidden flex items-center justify-center">
              {currentImageSrc && !imgError ? (
                <img
                  src={currentImageSrc}
                  alt={currentGalleryItem?.alt || `${project.title} screenshot`}
                  loading="lazy"
                  width="800"
                  height="500"
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  onError={() => setImgError(true)}
                />
              ) : (
                /* Clean browser-frame placeholder with project name and chips (never stock/AI art) */
                <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-chip/30">
                  <span className="font-heading font-bold text-xl sm:text-2xl text-text mb-1">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono text-accent mb-4 max-w-xs">
                    {project.subtitle}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-center max-w-sm mb-2">
                    {chips.slice(0, 4).map((c) => (
                      <span
                        key={c}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-surface border border-border text-muted"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                  {/* Shown only in development environment */}
                  {import.meta.env.DEV && (
                    <span className="text-[10px] font-mono text-muted/60 mt-1 italic">
                      Screenshots coming soon
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Tabbed Gallery Pills (rendered with 2+ gallery items, accessible tablist) */}
            {galleryImages.length > 1 && (
              <div
                role="tablist"
                aria-label={`${project.title} gallery views`}
                className="px-3 py-2 bg-chip/60 border-t border-border flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar"
              >
                {galleryImages.map((gItem, gIdx) => (
                  <button
                    key={gIdx}
                    role="tab"
                    id={`gallery-tab-${project.slug}-${gIdx}`}
                    aria-selected={activeGalleryIndex === gIdx}
                    tabIndex={activeGalleryIndex === gIdx ? 0 : -1}
                    onClick={() => setActiveGalleryIndex(gIdx)}
                    onKeyDown={(e) => handleGalleryKeyDown(e, gIdx)}
                    className={`px-3 py-2 min-h-[44px] inline-flex items-center justify-center rounded-md text-xs font-mono transition-all cursor-pointer ${
                      activeGalleryIndex === gIdx
                        ? 'bg-accent text-on-accent font-semibold shadow-sm'
                        : 'bg-surface border border-border text-muted hover:text-text'
                    }`}
                  >
                    {gItem.label || `View ${gIdx + 1}`}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content column (7 cols on lg) */}
        <div
          className={`w-full lg:col-span-7 flex flex-col justify-between ${
            isImageRight ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <div>
            {/* Header row: Title + Solo project badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-1.5">
              <h3 className="text-2xl sm:text-[30px] font-bold font-heading text-text tracking-tight">
                {project.title}
              </h3>
              {project.soloBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-chip text-accent border border-border">
                  {project.soloBadge}
                </span>
              )}
            </div>

            {/* Subtitle */}
            <p className="text-sm sm:text-base font-medium text-accent mb-3 font-sans">
              {project.subtitle}
            </p>

            {/* One-liner */}
            <p className="text-sm sm:text-[15px] text-muted leading-relaxed mb-5">
              {project.oneLiner}
            </p>

            {/* Metrics Row (countUp animates once on view; static renders immediately) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
                {project.metrics.map((m, idx) => (
                  <MetricBox
                    key={idx}
                    value={m.value}
                    label={m.label}
                    countUp={Boolean(m.countUp)}
                  />
                ))}
              </div>
            )}

            {/* Four Features with Lucide icons */}
            {project.features && project.features.length > 0 && (
              <ul className="space-y-2.5 mb-5 text-xs sm:text-[13px] text-muted">
                {project.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0">{renderIcon(f.icon)}</span>
                    <span className="leading-relaxed">{f.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Chips (Max 6 visible + expanding "+N" pill) */}
            <div className="flex flex-wrap items-center gap-1.5 mb-5">
              {visibleChips.map((chip) => (
                <span key={chip} className="chip-pill">
                  {chip}
                </span>
              ))}
              {remainingChipsCount > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAllChips(!showAllChips)}
                  aria-expanded={showAllChips}
                  className="chip-pill min-h-[44px] text-accent hover:border-accent cursor-pointer transition-colors"
                >
                  {showAllChips ? 'Show less' : `+${remainingChipsCount}`}
                </button>
              )}
            </div>

            {/* "More details" disclosure */}
            {project.moreDetails && project.moreDetails.length > 0 && (
              <div className="mb-6">
                <button
                  type="button"
                  onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                  aria-expanded={isDetailsOpen}
                  aria-controls={`details-${project.slug}`}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono font-medium text-accent hover:text-accent-hover cursor-pointer transition-colors focus-visible:outline-accent"
                >
                  <span>{isDetailsOpen ? 'Hide extra details' : 'More details'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isDetailsOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDetailsOpen && (
                    <motion.ul
                      id={`details-${project.slug}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="mt-3 space-y-2 text-xs sm:text-[13px] text-muted pl-3 border-l-2 border-border overflow-hidden"
                    >
                      {project.moreDetails.map((detail, dIdx) => (
                        <li key={dIdx} className="leading-relaxed">
                          • {detail}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Action buttons, case study link, video button & cold start hint */}
          <div className="pt-4 border-t border-border">
            <div className="flex flex-wrap items-center gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>Live demo</span>
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              )}

              {extraButton && extraButton.url && (
                <a
                  href={extraButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !border-accent/40 text-accent hover:bg-accent/5"
                >
                  <span>{extraButton.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.75} />
                </a>
              )}

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <SiGithub className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Demo video play button (only rendered if demoVideoUrl is non-empty) */}
              {project.demoVideoUrl && (
                <button
                  type="button"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="btn-secondary inline-flex items-center gap-1.5 cursor-pointer"
                  aria-label={`Play demo video for ${project.title}`}
                >
                  <Play className="w-3.5 h-3.5 text-spark fill-spark" />
                  <span>Demo video</span>
                </button>
              )}

              {/* Case study link rendered ONLY when caseStudy has content */}
              {hasCaseStudy && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono font-medium text-accent hover:text-accent-hover ml-auto transition-colors"
                >
                  <span>Case study</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.75} />
                </Link>
              )}
            </div>

            {/* Cold start hint with Clock icon (rendered ONLY when non-empty) */}
            {coldStartHint && (
              <p className="text-[13px] font-mono text-muted flex items-center gap-1.5 mt-3">
                <Clock className="w-3.5 h-3.5 text-muted shrink-0" strokeWidth={1.75} />
                <span>{coldStartHint}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Accessible Video Modal */}
      {isVideoModalOpen && project.demoVideoUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Demo video for ${project.title}`}
          ref={videoModalRef}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border bg-chip/60">
              <span className="font-heading font-bold text-sm text-text">
                {project.title} — Demo Video
              </span>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-chip text-muted hover:text-text cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                src={project.demoVideoUrl}
                title={`${project.title} Demo`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
