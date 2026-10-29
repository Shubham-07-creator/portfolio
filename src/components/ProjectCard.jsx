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
  Lock,
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
      className="px-3 py-1.5 first:pl-0 text-left"
    >
      <div className="font-mono text-lg sm:text-xl font-bold text-accent">
        {countUp && isNumeric ? `${displayNum}${suffix}` : value}
      </div>
      <div className="text-[11px] font-mono text-muted truncate mt-0.5" title={label}>
        {label}
      </div>
    </div>
  );
}

function TradeXpertMockup() {
  return (
    <div className="w-full h-full p-3 sm:p-4 bg-surface text-text font-sans flex flex-col justify-between select-none overflow-hidden relative">
      {/* Top Header / Live Ticker Bar */}
      <div className="flex items-center justify-between border-b border-border/80 pb-2 mb-1.5 text-[10px] sm:text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="font-bold text-text">NIFTY 50</span>
          <span className="text-accent font-semibold">24,180.50</span>
          <span className="text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold">
            +142.30 (+0.59%)
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-[10px] text-muted hidden sm:inline">2.5s Stream</span>
        </div>
      </div>

      {/* Main Candlestick Chart Area (SVG) */}
      <div className="relative flex-1 w-full min-h-0 flex items-center justify-center my-1">
        <svg viewBox="0 0 400 130" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          {/* Subtle horizontal grid lines */}
          <line x1="0" y1="20" x2="400" y2="20" stroke="var(--border)" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="0" y1="55" x2="400" y2="55" stroke="var(--border)" strokeDasharray="3 3" strokeWidth="0.8" />
          <line x1="0" y1="90" x2="400" y2="90" stroke="var(--border)" strokeDasharray="3 3" strokeWidth="0.8" />

          {/* Price labels on right */}
          <text x="395" y="24" textAnchor="end" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono, monospace">24,220</text>
          <text x="395" y="59" textAnchor="end" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono, monospace">24,180</text>
          <text x="395" y="94" textAnchor="end" fill="var(--text-muted)" fontSize="8" fontFamily="JetBrains Mono, monospace">24,140</text>

          {/* Trendline (EMA 9) */}
          <path
            d="M 15 80 Q 75 70, 135 60 T 255 45 T 375 32"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.2"
            strokeDasharray="4 2"
            opacity="0.7"
          />

          {/* 13 Candlesticks */}
          {/* Candle 1 (Green) */}
          <line x1="25" y1="65" x2="25" y2="90" stroke="#4ADE80" strokeWidth="1" />
          <rect x="20" y="70" width="10" height="15" rx="1" fill="#4ADE80" />

          {/* Candle 2 (Green) */}
          <line x1="50" y1="55" x2="50" y2="82" stroke="#4ADE80" strokeWidth="1" />
          <rect x="45" y="60" width="10" height="18" rx="1" fill="#4ADE80" />

          {/* Candle 3 (Red) */}
          <line x1="75" y1="58" x2="75" y2="85" stroke="#F87171" strokeWidth="1" />
          <rect x="70" y="62" width="10" height="14" rx="1" fill="#F87171" />

          {/* Candle 4 (Green) */}
          <line x1="100" y1="48" x2="100" y2="76" stroke="#4ADE80" strokeWidth="1" />
          <rect x="95" y="52" width="10" height="20" rx="1" fill="#4ADE80" />

          {/* Candle 5 (Red) */}
          <line x1="125" y1="50" x2="125" y2="72" stroke="#F87171" strokeWidth="1" />
          <rect x="120" y="54" width="10" height="12" rx="1" fill="#F87171" />

          {/* Candle 6 (Green) */}
          <line x1="150" y1="40" x2="150" y2="68" stroke="#4ADE80" strokeWidth="1" />
          <rect x="145" y="44" width="10" height="18" rx="1" fill="#4ADE80" />

          {/* Candle 7 (Green) */}
          <line x1="175" y1="36" x2="175" y2="62" stroke="#4ADE80" strokeWidth="1" />
          <rect x="170" y="40" width="10" height="16" rx="1" fill="#4ADE80" />

          {/* Candle 8 (Red) */}
          <line x1="200" y1="38" x2="200" y2="64" stroke="#F87171" strokeWidth="1" />
          <rect x="195" y="42" width="10" height="15" rx="1" fill="#F87171" />

          {/* Candle 9 (Green) */}
          <line x1="225" y1="32" x2="225" y2="58" stroke="#4ADE80" strokeWidth="1" />
          <rect x="220" y="36" width="10" height="16" rx="1" fill="#4ADE80" />

          {/* Candle 10 (Green) */}
          <line x1="250" y1="28" x2="250" y2="52" stroke="#4ADE80" strokeWidth="1" />
          <rect x="245" y="32" width="10" height="16" rx="1" fill="#4ADE80" />

          {/* Candle 11 (Red) */}
          <line x1="275" y1="30" x2="275" y2="56" stroke="#F87171" strokeWidth="1" />
          <rect x="270" y="34" width="10" height="14" rx="1" fill="#F87171" />

          {/* Candle 12 (Green) */}
          <line x1="300" y1="22" x2="300" y2="48" stroke="#4ADE80" strokeWidth="1" />
          <rect x="295" y="26" width="10" height="16" rx="1" fill="#4ADE80" />

          {/* Candle 13 (Green - Latest Active Tick with Pulse) */}
          <line x1="325" y1="18" x2="325" y2="44" stroke="#4ADE80" strokeWidth="1.5" />
          <rect x="320" y="22" width="10" height="18" rx="1" fill="#4ADE80" />
          <circle cx="325" cy="22" r="3" fill="var(--accent)" />

          {/* Volume histogram bars at bottom */}
          <rect x="20" y="105" width="10" height="14" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="45" y="101" width="10" height="18" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="70" y="108" width="10" height="11" rx="0.5" fill="#F87171" opacity="0.3" />
          <rect x="95" y="99" width="10" height="20" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="120" y="107" width="10" height="12" rx="0.5" fill="#F87171" opacity="0.3" />
          <rect x="145" y="103" width="10" height="16" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="170" y="102" width="10" height="17" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="195" y="109" width="10" height="10" rx="0.5" fill="#F87171" opacity="0.3" />
          <rect x="220" y="100" width="10" height="19" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="245" y="98" width="10" height="21" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="270" y="106" width="10" height="13" rx="0.5" fill="#F87171" opacity="0.3" />
          <rect x="295" y="97" width="10" height="22" rx="0.5" fill="#4ADE80" opacity="0.3" />
          <rect x="320" y="94" width="10" height="25" rx="0.5" fill="var(--accent)" opacity="0.5" />
        </svg>
      </div>

      {/* Bottom Bar: Mini Order Ticket / Margin Status */}
      <div className="pt-2 border-t border-border/80 flex items-center justify-between text-[9px] sm:text-[11px] font-mono text-muted">
        <div className="flex items-center gap-1.5 truncate">
          <span className="px-1.5 py-0.5 rounded bg-surface-2 text-accent border border-border font-semibold">
            LIMIT ORDER
          </span>
          <span className="truncate">Margin Locked · Open in DB</span>
        </div>
        <span className="text-emerald-500 shrink-0 font-medium">Socket.IO Stream</span>
      </div>
    </div>
  );
}

function StayHubMockup() {
  return (
    <div className="w-full h-full p-3 sm:p-4 bg-surface text-text font-sans flex flex-col justify-between select-none overflow-hidden relative">
      {/* Top Search / Header Pill */}
      <div className="flex items-center justify-between border-b border-border/80 pb-2 mb-1.5 text-[10px] sm:text-xs font-mono">
        <div className="flex items-center gap-1.5 text-text truncate">
          <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
          <span className="font-semibold text-text">Manali Sanctuary Villa</span>
          <span className="text-muted hidden sm:inline">· GeoJSON Point</span>
        </div>
        <span className="px-1.5 py-0.5 rounded bg-surface-2 border border-border text-accent text-[9px] sm:text-[10px] font-semibold">
          ★ 4.96 (84 reviews)
        </span>
      </div>

      {/* Middle Grid: Mini Architectural Villa Illustration + Live Tariff Breakdown */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-1 min-h-0 items-center my-1">
        {/* Left: Minimalist Vector Architectural Alpine Cabin */}
        <div className="h-full rounded-lg bg-surface-2/60 border border-border overflow-hidden relative flex items-center justify-center p-2">
          <svg viewBox="0 0 160 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Background Mountains */}
            <polygon points="10,85 55,25 95,85" fill="var(--border)" opacity="0.4" />
            <polygon points="65,85 110,15 155,85" fill="var(--border)" opacity="0.6" />
            <polygon points="110,15 118,28 102,28" fill="var(--surface)" />

            {/* Cabin House Body */}
            <rect x="35" y="48" width="85" height="37" fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1" />
            {/* Triangular Roof with Accent overhang */}
            <polygon points="25,48 77,18 130,48" fill="var(--surface-2)" stroke="var(--accent)" strokeWidth="1.2" />
            {/* Glass windows */}
            <rect x="45" y="55" width="22" height="22" rx="2" fill="var(--accent)" opacity="0.15" stroke="var(--border)" strokeWidth="0.8" />
            <line x1="56" y1="55" x2="56" y2="77" stroke="var(--border)" strokeWidth="0.8" />
            <line x1="45" y1="66" x2="67" y2="66" stroke="var(--border)" strokeWidth="0.8" />
            {/* Door */}
            <rect x="75" y="58" width="14" height="27" rx="1" fill="var(--surface-2)" stroke="var(--border)" strokeWidth="0.8" />
            {/* Deck / Pool line */}
            <line x1="15" y1="85" x2="145" y2="85" stroke="var(--border-strong)" strokeWidth="1.5" />
            {/* Pine Trees */}
            <polygon points="135,85 142,65 149,85" fill="#4ADE80" opacity="0.4" />
            <polygon points="144,85 150,70 156,85" fill="#4ADE80" opacity="0.3" />
          </svg>
          <div className="absolute bottom-1.5 left-2 text-[8px] sm:text-[9px] font-mono text-muted">
            Mapbox Geocoded
          </div>
        </div>

        {/* Right: Tariff & Booking breakdown */}
        <div className="p-2 sm:p-2.5 rounded-lg bg-surface-2/60 border border-border flex flex-col justify-between h-full text-[10px] sm:text-xs">
          <div className="space-y-1 font-mono">
            <div className="flex justify-between text-muted text-[10px]">
              <span>Tariff (2 nights):</span>
              <span className="text-text font-medium">₹13,000</span>
            </div>
            <div className="flex justify-between text-muted text-[10px]">
              <span>GST (12% slab):</span>
              <span className="text-text font-medium">₹1,560</span>
            </div>
            <div className="flex justify-between text-muted text-[10px]">
              <span>Platform fee (5%):</span>
              <span className="text-text font-medium">₹650</span>
            </div>
            <div className="flex justify-between pt-1 border-t border-border font-bold text-accent text-[11px]">
              <span>Total Payable:</span>
              <span>₹15,210</span>
            </div>
          </div>
          <div className="mt-1.5 pt-1.5 border-t border-border/60 flex items-center justify-between text-[9px] font-mono">
            <span className="text-emerald-500 font-semibold">✔ No date overlap</span>
            <span className="text-muted">SHA256 HMAC</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Serialized Invoice & Status */}
      <div className="pt-2 border-t border-border/80 flex items-center justify-between text-[9px] sm:text-[10px] font-mono text-muted">
        <span className="truncate">Invoice: SH-INV-20261029-4821</span>
        <span className="text-accent font-semibold shrink-0">Razorpay Test Mode</span>
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
        return <Radio className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'LineChart':
        return <LineChart className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'MapPin':
        return <MapPin className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'CreditCard':
        return <CreditCard className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      case 'Database':
        return <Database className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
      default:
        return <Layers className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />;
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

  const dataFlowSteps = project.slug === 'tradexpert'
    ? ['NSE Feed', 'Socket.IO 2.5s Engine', 'Margin Lock & Match', 'Client Terminal']
    : project.slug === 'stayhub'
    ? ['Mapbox GeoJSON', 'Overlap Validation', 'Razorpay SHA256 HMAC', 'GST Invoice']
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.2, 0, 0, 1] }}
      className="relative p-5 sm:p-8 lg:p-10 rounded-[20px] editorial-card transition-all duration-200 group"
    >
      {/* Architectural Corner Registration Marks */}
      <span className="absolute top-2 left-2 font-mono text-[10px] text-border/60 select-none pointer-events-none" aria-hidden="true">+</span>
      <span className="absolute bottom-2 left-2 font-mono text-[10px] text-border/60 select-none pointer-events-none" aria-hidden="true">+</span>
      <span className="absolute bottom-2 right-2 font-mono text-[10px] text-border/60 select-none pointer-events-none" aria-hidden="true">+</span>

      {/* Corner Outlined Serif Number */}
      <span
        className="absolute top-4 right-5 sm:top-5 sm:right-7 font-serif text-4xl sm:text-6xl text-border select-none pointer-events-none font-normal"
        aria-hidden="true"
      >
        0{index + 1}
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Screenshot area: Browser frame (5 cols on lg) */}
        <div
          className={`w-full lg:col-span-5 flex flex-col ${
            isImageRight ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="w-full rounded-xl bg-surface border border-border shadow-xs overflow-hidden flex flex-col">
            {/* Browser Window Header (muted dots & SSL lock) */}
            <div className="px-3.5 py-2.5 bg-surface border-b border-border flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-border" />
              </div>
              <div className="px-2.5 py-0.5 rounded-md bg-surface-2/60 border border-border/70 text-[11px] font-mono text-muted flex items-center gap-1.5 truncate max-w-[220px]">
                <Lock className="w-2.5 h-2.5 text-accent shrink-0" />
                <span className="truncate">{displayHost}</span>
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
              ) : project.slug === 'tradexpert' ? (
                <TradeXpertMockup />
              ) : project.slug === 'stayhub' ? (
                <StayHubMockup />
              ) : (
                /* Clean browser-frame placeholder with project name and chips (never stock/AI art) */
                <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-surface-2/30">
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
                </div>
              )}
            </div>

            {/* Tabbed Gallery Pills (rendered with 2+ gallery items, accessible tablist) */}
            {galleryImages.length > 1 && (
              <div
                role="tablist"
                aria-label={`${project.title} gallery views`}
                className="px-3 py-2 bg-surface-2/60 border-t border-border flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar"
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
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-normal text-text tracking-tight">
                {project.title}
              </h3>
              {project.soloBadge && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-surface-2 text-accent border border-border">
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

            {/* Metrics Row (mono numbers with thin divider lines instead of heavy boxes) */}
            {project.metrics && project.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-border border-y border-border/80 py-2.5 sm:py-3 mb-6 bg-surface-2/20">
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

            {/* Architectural Data Pipeline Ribbon */}
            {dataFlowSteps.length > 0 && (
              <div className="mb-6 p-3 sm:p-3.5 rounded-xl bg-surface-2/40 border border-border/80">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    System Data Pipeline
                  </span>
                  <span className="text-[10px] font-mono text-muted/60">Verified Architecture</span>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-[11px] font-mono text-muted py-0.5">
                  {dataFlowSteps.map((step, sIdx) => (
                    <React.Fragment key={sIdx}>
                      <span className="px-2 py-1 rounded-md bg-surface border border-border text-text whitespace-nowrap font-medium shadow-2xs">
                        {step}
                      </span>
                      {sIdx < dataFlowSteps.length - 1 && (
                        <span className="text-accent shrink-0 select-none">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
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
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              )}

              {extraButton && extraButton.url && (
                <a
                  href={extraButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>{extraButton.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-muted" strokeWidth={1.5} />
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
                  <Play className="w-3.5 h-3.5 text-muted fill-muted" strokeWidth={1.5} />
                  <span>Demo video</span>
                </button>
              )}

              {/* Case study link rendered ONLY when caseStudy has content */}
              {hasCaseStudy && (
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-mono font-medium text-accent hover:text-accent-hover underline underline-offset-[3px] ml-auto transition-colors"
                >
                  <span>Case study</span>
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              )}
            </div>

            {/* Cold start hint with Clock icon (rendered ONLY when non-empty, never below 14px) */}
            {coldStartHint && (
              <p className="text-sm font-mono text-muted flex items-center gap-1.5 mt-3">
                <Clock className="w-3.5 h-3.5 text-muted shrink-0" strokeWidth={1.5} />
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
            <div className="flex items-center justify-between p-4 border-b border-border bg-surface-2/60">
              <span className="font-heading font-bold text-sm text-text">
                {project.title} — Demo Video
              </span>
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(false)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-surface-2 text-muted hover:text-text cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
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
