import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Compass,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

// Architecture Diagram for TradeXpert
function TradeXpertDiagram() {
  return (
    <div
      className="overflow-x-auto pb-4 pt-2 -mx-2 px-2 no-scrollbar"
      role="img"
      aria-label="TradeXpert architecture diagram: Landing site (React) and Trading terminal (React, Chart.js) connect to Express API with Socket.IO, order engine, and security layer, backed by MongoDB Atlas and Yahoo Finance feed."
      tabIndex={0}
    >
      <svg
        viewBox="0 0 940 380"
        className="w-full min-w-[760px] h-auto font-mono text-xs select-none"
        style={{ maxHeight: '420px' }}
      >
        <defs>
          <marker
            id="tx-arrow-accent"
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
            id="tx-arrow-spark"
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

        {/* 1. Client Applications (Left Top) */}
        <g transform="translate(30, 35)">
          <rect
            width="220"
            height="135"
            rx="12"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text x="16" y="28" fill="var(--color-accent)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            Client Applications
          </text>
          <text x="16" y="54" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Landing site (React)
          </text>
          <text x="16" y="76" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Trading terminal (React, Chart.js)
          </text>
          <text x="16" y="98" fill="var(--color-muted)" fontSize="11" fontFamily="Inter, sans-serif">
            • Admin command center (RBAC)
          </text>
          <text x="16" y="118" fill="var(--color-spark)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Socket.IO client listener
          </text>
        </g>

        {/* 2. Yahoo Finance Feed (Left Bottom) */}
        <g transform="translate(30, 225)">
          <rect
            width="220"
            height="115"
            rx="12"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text x="16" y="30" fill="var(--color-spark)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            Yahoo Finance Feed
          </text>
          <text x="16" y="56" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • 100 NSE stock quotes
          </text>
          <text x="16" y="78" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • NIFTY 50 &amp; SENSEX indices
          </text>
          <text x="16" y="98" fill="var(--color-muted)" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
            2.5s tick cycle engine
          </text>
        </g>

        {/* Flow Connectors: Clients -> Express API */}
        <path
          d="M 250 95 L 350 95"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          markerEnd="url(#tx-arrow-accent)"
        />
        <rect x="264" y="66" width="72" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="270" y="80" fill="var(--color-accent)" fontSize="9" fontWeight="600">
          REST auth
        </text>

        {/* WebSocket Stream back to Terminal */}
        <path
          d="M 350 125 L 250 125"
          fill="none"
          stroke="var(--color-spark)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          markerEnd="url(#tx-arrow-spark)"
        />
        <rect x="254" y="132" width="92" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="258" y="146" fill="var(--color-spark)" fontSize="8.5" fontWeight="600">
          REST + WebSocket
        </text>

        {/* Yahoo Finance -> Express API */}
        <path
          d="M 250 280 L 350 280"
          fill="none"
          stroke="var(--color-spark)"
          strokeWidth="1.75"
          markerEnd="url(#tx-arrow-spark)"
        />
        <rect x="262" y="252" width="76" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="268" y="266" fill="var(--color-spark)" fontSize="9" fontWeight="600">
          Live Ticks
        </text>

        {/* 3. Express API Server (Center Key Node) */}
        <g transform="translate(355, 25)">
          {/* Key node with chip fill and accent stroke */}
          <rect
            width="280"
            height="325"
            rx="14"
            fill="var(--color-chip)"
            stroke="var(--color-accent)"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="0"
            width="280"
            height="38"
            rx="14"
            fill="var(--color-surface)"
            stroke="var(--color-accent)"
            strokeWidth="1"
          />
          <text x="18" y="24" fill="var(--color-accent)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            Express API Server
          </text>

          {/* Module 1: Security Layer */}
          <g transform="translate(14, 48)">
            <rect width="252" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Security Layer
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Helmet · Rate limit · JWT + RBAC
            </text>
          </g>

          {/* Module 2: Market Engine */}
          <g transform="translate(14, 102)">
            <rect width="252" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Market Engine
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Live quotes &lt;-&gt; Mean-reverting sim
            </text>
          </g>

          {/* Module 3: Order Engine */}
          <g transform="translate(14, 156)">
            <rect width="252" height="48" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Order Engine (Limit, GTT)
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Margin lock · Tick match · Auto-exec
            </text>
          </g>

          {/* Module 4: Socket.IO Server */}
          <g transform="translate(14, 212)">
            <rect width="252" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Socket.IO Server
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              3-6 stocks update delta stream
            </text>
          </g>

          {/* Module 5: Wallet & Balances */}
          <g transform="translate(14, 266)">
            <rect width="252" height="46" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Wallet &amp; Margin Ledger
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Atomic locks · Cancellation refunds
            </text>
          </g>
        </g>

        {/* Connectors: Express API -> MongoDB Atlas */}
        <path
          d="M 635 180 L 715 180"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          markerEnd="url(#tx-arrow-accent)"
        />
        <path
          d="M 715 200 L 635 200"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          markerEnd="url(#tx-arrow-accent)"
        />
        <rect x="646" y="148" width="60" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="651" y="162" fill="var(--color-accent)" fontSize="8.5" fontWeight="600">
          Mongoose
        </text>

        {/* 4. MongoDB Atlas (Right) */}
        <g transform="translate(720, 95)">
          <rect
            width="190"
            height="185"
            rx="12"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text x="16" y="32" fill="var(--color-success)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            MongoDB Atlas
          </text>
          <text x="16" y="62" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Users &amp; Auth (bcrypt)
          </text>
          <text x="16" y="88" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Open Limit &amp; GTT orders
          </text>
          <text x="16" y="114" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Holdings &amp; Positions
          </text>
          <text x="16" y="140" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Wallets &amp; Transactions
          </text>
          <text x="16" y="164" fill="var(--color-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Indexed by userId &amp; status
          </text>
        </g>
      </svg>
    </div>
  );
}

// Architecture Diagram for StayHub
function StayHubDiagram() {
  return (
    <div
      className="overflow-x-auto pb-4 pt-2 -mx-2 px-2 no-scrollbar"
      role="img"
      aria-label="StayHub architecture diagram: Browser with EJS, Bootstrap, and Mapbox GL JS connects to Express app with Passport auth, Joi validation, and MongoDB Atlas, integrated with Razorpay, Mapbox, Cloudinary, and Nodemailer."
      tabIndex={0}
    >
      <svg
        viewBox="0 0 940 400"
        className="w-full min-w-[760px] h-auto font-mono text-xs select-none"
        style={{ maxHeight: '440px' }}
      >
        <defs>
          <marker
            id="sh-arrow-accent"
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
            id="sh-arrow-spark"
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

        {/* External Satellite: Razorpay (Top Left) */}
        <g transform="translate(40, 20)">
          <rect width="180" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="14" y="26" fill="var(--color-spark)" fontWeight="bold" fontSize="11" fontFamily="Space Grotesk, sans-serif">
            Razorpay (test mode)
          </text>
          <text x="14" y="46" fill="var(--color-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            SHA256 HMAC verification
          </text>
        </g>

        {/* External Satellite: Mapbox (Top Right) */}
        <g transform="translate(720, 20)">
          <rect width="180" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="14" y="26" fill="var(--color-spark)" fontWeight="bold" fontSize="11" fontFamily="Space Grotesk, sans-serif">
            Mapbox Geocoding
          </text>
          <text x="14" y="46" fill="var(--color-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            Forward geocoding &amp; maps
          </text>
        </g>

        {/* 1. Browser Client (Left Center) */}
        <g transform="translate(30, 130)">
          <rect
            width="220"
            height="150"
            rx="12"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text x="16" y="30" fill="var(--color-accent)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            Browser Client
          </text>
          <text x="16" y="58" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • EJS server-rendered views
          </text>
          <text x="16" y="80" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Bootstrap 5 responsive UI
          </text>
          <text x="16" y="102" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Mapbox GL JS interactive map
          </text>
          <text x="16" y="126" fill="var(--color-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            AJAX wishlist &amp; tariffs
          </text>
        </g>

        {/* External Satellite: Cloudinary (Bottom Left) */}
        <g transform="translate(40, 315)">
          <rect width="180" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="14" y="26" fill="var(--color-spark)" fontWeight="bold" fontSize="11" fontFamily="Space Grotesk, sans-serif">
            Cloudinary CDN
          </text>
          <text x="14" y="46" fill="var(--color-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            Listing image uploads &amp; transform
          </text>
        </g>

        {/* External Satellite: Brevo / Nodemailer (Bottom Right) */}
        <g transform="translate(720, 315)">
          <rect width="180" height="65" rx="10" fill="var(--color-surface)" stroke="var(--color-border)" strokeWidth="1.5" />
          <text x="14" y="26" fill="var(--color-spark)" fontWeight="bold" fontSize="11" fontFamily="Space Grotesk, sans-serif">
            Brevo &amp; Nodemailer
          </text>
          <text x="14" y="46" fill="var(--color-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            Email OTP authentication
          </text>
        </g>

        {/* Connectors: Browser <-> Express */}
        <path
          d="M 250 195 L 350 195"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          markerEnd="url(#sh-arrow-accent)"
        />
        <path
          d="M 350 215 L 250 215"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          markerEnd="url(#sh-arrow-accent)"
        />
        <rect x="264" y="170" width="72" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="270" y="184" fill="var(--color-accent)" fontSize="9" fontWeight="600">
          HTTPS req
        </text>

        {/* 2. Express App Server (Center Key Node) */}
        <g transform="translate(355, 30)">
          {/* Key node with chip fill and accent stroke */}
          <rect
            width="280"
            height="340"
            rx="14"
            fill="var(--color-chip)"
            stroke="var(--color-accent)"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="0"
            width="280"
            height="38"
            rx="14"
            fill="var(--color-surface)"
            stroke="var(--color-accent)"
            strokeWidth="1"
          />
          <text x="18" y="24" fill="var(--color-accent)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            Express.js App Server
          </text>

          {/* Module 1: Auth */}
          <g transform="translate(14, 48)">
            <rect width="252" height="48" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Passport (local + Google OAuth)
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Rate limit · Email OTP · RBAC
            </text>
          </g>

          {/* Module 2: Validation */}
          <g transform="translate(14, 104)">
            <rect width="252" height="48" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Joi Schema Validation
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Sanitization · Date overlap checks
            </text>
          </g>

          {/* Module 3: Controllers & GST */}
          <g transform="translate(14, 160)">
            <rect width="252" height="52" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Listing &amp; Booking Controllers
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              GST billing (12%/18%) · 5% fee
            </text>
            <text x="12" y="46" fill="var(--color-spark)" fontSize="8.5">
              SH-INV-YYYYMMDD-XXXX invoice generator
            </text>
          </g>

          {/* Module 4: Payment Controller */}
          <g transform="translate(14, 220)">
            <rect width="252" height="48" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              Payment Controller
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Razorpay order init · HMAC verify
            </text>
          </g>

          {/* Module 5: Session Store */}
          <g transform="translate(14, 276)">
            <rect width="252" height="48" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
            <text x="12" y="19" fill="var(--color-text)" fontWeight="600" fontSize="10.5">
              MongoStore Sessions
            </text>
            <text x="12" y="34" fill="var(--color-muted)" fontSize="9">
              Persistent guest &amp; host sessions
            </text>
          </g>
        </g>

        {/* Satellite Connectors */}
        {/* Razorpay <-> Express */}
        <path d="M 220 52 L 355 70" fill="none" stroke="var(--color-spark)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sh-arrow-spark)" />
        {/* Mapbox <-> Express */}
        <path d="M 720 52 L 635 80" fill="none" stroke="var(--color-spark)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sh-arrow-spark)" />
        {/* Cloudinary <-> Express */}
        <path d="M 220 348 L 355 310" fill="none" stroke="var(--color-spark)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sh-arrow-spark)" />
        {/* Brevo <-> Express */}
        <path d="M 720 348 L 635 310" fill="none" stroke="var(--color-spark)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sh-arrow-spark)" />

        {/* Connectors: Express -> MongoDB */}
        <path
          d="M 635 195 L 715 195"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          markerEnd="url(#sh-arrow-accent)"
        />
        <path
          d="M 715 215 L 635 215"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.75"
          strokeDasharray="4 3"
          markerEnd="url(#sh-arrow-accent)"
        />
        <rect x="646" y="165" width="60" height="20" rx="4" fill="var(--color-chip)" stroke="var(--color-border)" strokeWidth="1" />
        <text x="651" y="179" fill="var(--color-accent)" fontSize="8.5" fontWeight="600">
          Mongoose
        </text>

        {/* 3. MongoDB Atlas (Right Center) */}
        <g transform="translate(720, 115)">
          <rect
            width="190"
            height="175"
            rx="12"
            fill="var(--color-surface)"
            stroke="var(--color-border)"
            strokeWidth="1.5"
          />
          <text x="16" y="30" fill="var(--color-success)" fontWeight="bold" fontSize="13" fontFamily="Space Grotesk, sans-serif">
            MongoDB Atlas
          </text>
          <text x="16" y="58" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Listings (GeoJSON points)
          </text>
          <text x="16" y="82" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Bookings &amp; Invoices
          </text>
          <text x="16" y="106" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Users (guest, host, admin)
          </text>
          <text x="16" y="130" fill="var(--color-text)" fontSize="11" fontFamily="Inter, sans-serif">
            • Reviews with star ratings
          </text>
          <text x="16" y="154" fill="var(--color-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Sessions &amp; Wishlists
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function EngineeringNotes() {
  const engineeringData = portfolioData.engineering || portfolioData.engineeringNotes;
  const projectTabs = engineeringData.projectTabs || [];

  const [activeTabSlug, setActiveTabSlug] = useState(() =>
    projectTabs.length > 0 ? projectTabs[0].slug : 'tradexpert'
  );

  // Accordion state: first item open by default (index 0)
  const [openDecisionIndex, setOpenDecisionIndex] = useState(0);

  const activeTab =
    projectTabs.find((tab) => tab.slug === activeTabSlug) || projectTabs[0];

  const tabListRef = useRef(null);

  // Accessible keyboard navigation for tabs (ArrowLeft, ArrowRight, Home, End)
  const handleTabKeyDown = (e, index) => {
    if (projectTabs.length <= 1) return;
    let newIndex = index;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      newIndex = (index + 1) % projectTabs.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      newIndex = (index - 1 + projectTabs.length) % projectTabs.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = projectTabs.length - 1;
    } else {
      return;
    }

    setActiveTabSlug(projectTabs[newIndex].slug);
    setOpenDecisionIndex(0); // Reset accordion to first item open for new tab

    // Focus the new tab button
    if (tabListRef.current) {
      const buttons = tabListRef.current.querySelectorAll('[role="tab"]');
      if (buttons[newIndex]) {
        buttons[newIndex].focus();
      }
    }
  };

  const handleAccordionKeyDown = (e, dIdx) => {
    if (!activeTab || !activeTab.decisions) return;
    const total = activeTab.decisions.length;
    let nextIdx = -1;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      nextIdx = (dIdx + 1) % total;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      nextIdx = (dIdx - 1 + total) % total;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIdx = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIdx = total - 1;
    }
    if (nextIdx !== -1) {
      const btn = document.getElementById(`decision-btn-${activeTab.slug}-${nextIdx}`);
      if (btn) btn.focus();
    }
  };

  const handleTabClick = (slug) => {
    setActiveTabSlug(slug);
    setOpenDecisionIndex(0); // Reset accordion to first item open for new tab
  };

  return (
    <section id="engineering" className="py-20 md:py-28 bg-surface/40 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-6">
        <SectionHeading
          title={engineeringData.heading || 'Engineering notes'}
          intro={
            engineeringData.intro ||
            'How each project is put together: architecture, data flow and the decisions behind it.'
          }
        />

        {/* Project Tabs (Pill tablist, accessible, arrow keys, hash-free) */}
        {projectTabs.length > 0 && (
          <div className="flex justify-center sm:justify-start mb-8">
            <div
              ref={tabListRef}
              role="tablist"
              aria-label="Engineering notes project selection"
              className="inline-flex p-1 rounded-full bg-chip border border-border gap-1"
            >
              {projectTabs.map((tab, idx) => {
                const isActive = tab.slug === activeTabSlug;
                return (
                  <button
                    key={tab.slug}
                    role="tab"
                    id={`tab-${tab.slug}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.slug}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => handleTabClick(tab.slug)}
                    onKeyDown={(e) => handleTabKeyDown(e, idx)}
                    className={`min-h-[44px] inline-flex items-center justify-center px-5 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer focus-visible:outline-accent ${
                      isActive
                        ? 'bg-accent text-on-accent shadow-sm'
                        : 'text-muted hover:text-text hover:bg-surface/50'
                    }`}
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab Panel Content */}
        {activeTab && (
          <div
            role="tabpanel"
            id={`panel-${activeTab.slug}`}
            aria-labelledby={`tab-${activeTab.slug}`}
            className="space-y-12"
          >
            {/* 1. Architecture diagram: inline SVG on a surface card */}
            <div className="rounded-2xl bg-surface border border-border shadow-card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="text-lg font-bold font-heading text-text">
                    {activeTab.title} System Architecture
                  </h3>
                  <p className="text-xs font-mono text-muted mt-0.5">
                    Component distribution, service boundaries and data flow pipeline
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chip border border-border text-[11px] font-mono text-accent font-medium self-start sm:self-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-spark" />
                  Live topology
                </span>
              </div>

              {/* Horizontally scrollable diagram with role="img" */}
              {activeTab.slug === 'tradexpert' ? (
                <TradeXpertDiagram />
              ) : (
                <StayHubDiagram />
              )}
            </div>

            {/* 2. "How it works" flow: 4 numbered steps (Horizontal on desktop, vertical on mobile) */}
            {activeTab.flow && activeTab.flow.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-text mb-4">
                  How it works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {activeTab.flow.map((stepItem, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-xl bg-surface border border-border shadow-card hover:border-accent/60 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-chip border border-border font-mono text-xs font-bold text-accent mb-3">
                          0{stepItem.step || sIdx + 1}
                        </div>
                        <h4 className="text-sm font-bold font-heading text-text mb-1.5">
                          {stepItem.title}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed">
                          {stepItem.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Key decisions: accordion (first item open by default) */}
            {activeTab.decisions && activeTab.decisions.length > 0 && (
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-text mb-4">
                  Key architectural decisions
                </h3>
                <div className="space-y-3">
                  {activeTab.decisions.map((decision, dIdx) => {
                    const isOpen = openDecisionIndex === dIdx;
                    return (
                      <div
                        key={decision.title}
                        className="rounded-xl bg-surface border border-border shadow-sm overflow-hidden transition-colors"
                      >
                        <button
                          type="button"
                          id={`decision-btn-${activeTab.slug}-${dIdx}`}
                          aria-expanded={isOpen}
                          aria-controls={`decision-content-${activeTab.slug}-${dIdx}`}
                          onClick={() =>
                            setOpenDecisionIndex(isOpen ? null : dIdx)
                          }
                          onKeyDown={(e) => handleAccordionKeyDown(e, dIdx)}
                          className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-chip/40 transition-colors focus-visible:outline-accent"
                        >
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-accent font-semibold shrink-0">
                              0{dIdx + 1}
                            </span>
                            <span className="font-heading font-bold text-sm sm:text-base text-text">
                              {decision.title}
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 text-muted shrink-0 transition-transform duration-200 ${
                              isOpen ? 'rotate-180 text-accent' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              id={`decision-content-${activeTab.slug}-${dIdx}`}
                              role="region"
                              aria-labelledby={`decision-btn-${activeTab.slug}-${dIdx}`}
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40">
                                {decision.text}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 4. Challenges, Learnings, Future work: Render ONLY when arrays are non-empty */}
            {activeTab.challenges && activeTab.challenges.length > 0 && (
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold font-heading text-text mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-spark" />
                  <span>Engineering Challenges</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  {activeTab.challenges.map((c, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab.learnings && activeTab.learnings.length > 0 && (
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold font-heading text-text mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  <span>Key Learnings</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  {activeTab.learnings.map((l, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab.futureWork && activeTab.futureWork.length > 0 && (
              <div className="p-6 rounded-xl bg-surface border border-border">
                <h4 className="text-base font-bold font-heading text-text mb-3 flex items-center gap-2">
                  <Compass className="w-4 h-4 text-success" />
                  <span>Future Work</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted">
                  {activeTab.futureWork.map((fw, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {fw}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 5. Source link: Read the full README on GitHub */}
            {activeTab.sourceUrl && (
              <div className="pt-2 flex justify-start">
                <a
                  href={activeTab.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group"
                >
                  <SiGithub className="w-4 h-4 text-text group-hover:text-accent transition-colors" aria-hidden="true" />
                  <span>Read the full README on GitHub</span>
                  <ArrowRight
                    className="w-4 h-4 text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all"
                    strokeWidth={1.75}
                  />
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
