import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  Compass,
  Play,
  Pause,
  RotateCcw,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data/portfolio';

// Architecture Diagram for TradeXpert
function TradeXpertDiagram({ activeStep = 0 }) {
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
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
          <marker
            id="tx-arrow-muted"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-muted)" />
          </marker>
        </defs>

        {/* 1. Client Applications (Left Top) */}
        <g transform="translate(30, 35)">
          <rect
            width="220"
            height="135"
            rx="12"
            fill="var(--surface)"
            stroke={activeStep === 1 || activeStep === 5 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 1 || activeStep === 5 ? '2.5' : '1.5'}
          />
          <text x="16" y="28" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            Client Applications
          </text>
          <text x="16" y="54" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Landing site (React)
          </text>
          <text x="16" y="76" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-body)'} fontWeight={activeStep === 5 ? 'bold' : 'normal'} fontSize="11" fontFamily="Inter, sans-serif">
            • Trading terminal (React, Chart.js) {activeStep === 5 && '●'}
          </text>
          <text x="16" y="98" fill="var(--text-muted)" fontSize="11" fontFamily="Inter, sans-serif">
            • Admin command center (RBAC)
          </text>
          <text x="16" y="118" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="10" fontFamily="JetBrains Mono, monospace">
            Socket.IO client listener {activeStep === 5 && '⚡ [delta stream]'}
          </text>
        </g>

        {/* 2. Yahoo Finance Feed (Left Bottom) */}
        <g transform="translate(30, 225)">
          <rect
            width="220"
            height="115"
            rx="12"
            fill="var(--surface)"
            stroke={activeStep === 4 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 4 ? '2.5' : '1.5'}
          />
          <text x="16" y="30" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            Yahoo Finance Feed
          </text>
          <text x="16" y="56" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • 100 NSE stock quotes
          </text>
          <text x="16" y="78" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • NIFTY 50 &amp; SENSEX indices
          </text>
          <text x="16" y="98" fill={activeStep === 4 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="10.5" fontFamily="JetBrains Mono, monospace">
            2.5s tick cycle engine {activeStep === 4 && '⚡ [active tick]'}
          </text>
        </g>

        {/* Flow Connectors: Clients -> Express API */}
        <path
          d="M 250 95 L 350 95"
          fill="none"
          stroke={activeStep === 2 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 2 ? '2.5' : '1.5'}
          markerEnd={activeStep === 2 ? 'url(#tx-arrow-accent)' : 'url(#tx-arrow-muted)'}
        />
        <rect x="264" y="66" width="72" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 2 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="270" y="80" fill={activeStep === 2 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="9" fontWeight="600">
          REST auth
        </text>

        {/* WebSocket Stream back to Terminal */}
        <path
          d="M 350 125 L 250 125"
          fill="none"
          stroke={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 5 ? '2.5' : '1.5'}
          strokeDasharray={activeStep === 5 ? 'none' : '4 3'}
          markerEnd={activeStep === 5 ? 'url(#tx-arrow-accent)' : 'url(#tx-arrow-muted)'}
        />
        <rect x="254" y="132" width="92" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="258" y="146" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="8.5" fontWeight="600">
          REST + WebSocket
        </text>

        {/* Yahoo Finance -> Express API */}
        <path
          d="M 250 280 L 350 280"
          fill="none"
          stroke={activeStep === 4 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 4 ? '2.5' : '1.5'}
          markerEnd={activeStep === 4 ? 'url(#tx-arrow-accent)' : 'url(#tx-arrow-muted)'}
        />
        <rect x="262" y="252" width="76" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 4 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="268" y="266" fill={activeStep === 4 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="9" fontWeight="600">
          Live Ticks
        </text>

        {/* 3. Express API Server (Center Key Node) */}
        <g transform="translate(355, 25)">
          {/* Key node with surface-2 fill and accent stroke */}
          <rect
            width="280"
            height="325"
            rx="14"
            fill="var(--surface-2)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="0"
            width="280"
            height="38"
            rx="14"
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <text x="18" y="24" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            Express API Server
          </text>

          {/* Module 1: Security Layer */}
          <g transform="translate(14, 48)">
            <rect
              width="252"
              height="46"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 2 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 2 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 2 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Security Layer {activeStep === 2 && '⚡ [Rate Limit & Joi Validated]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Helmet · Rate limit · JWT + RBAC
            </text>
          </g>

          {/* Module 2: Market Engine */}
          <g transform="translate(14, 102)">
            <rect
              width="252"
              height="46"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 4 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 4 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 4 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Market Engine {activeStep === 4 && '⚡ [2.5s Match Cycle]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Live quotes &lt;-&gt; Mean-reverting sim
            </text>
          </g>

          {/* Module 3: Order Engine */}
          <g transform="translate(14, 156)">
            <rect
              width="252"
              height="48"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 4 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 4 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 4 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Order Engine (Limit, GTT) {activeStep === 4 && '✔ [Order FILLED]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Margin lock · Tick match · Auto-exec
            </text>
          </g>

          {/* Module 4: Socket.IO Server */}
          <g transform="translate(14, 212)">
            <rect
              width="252"
              height="46"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 5 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Socket.IO Server {activeStep === 5 && '⚡ [Delta Emitted <30ms]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              3-6 stocks update delta stream
            </text>
          </g>

          {/* Module 5: Wallet & Balances */}
          <g transform="translate(14, 266)">
            <rect
              width="252"
              height="46"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 3 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 3 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 3 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Wallet &amp; Margin Ledger {activeStep === 3 && '🔒 [Atomic $inc Locked]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Atomic locks · Cancellation refunds
            </text>
          </g>
        </g>

        {/* Connectors: Express API -> MongoDB Atlas */}
        <path
          d="M 635 180 L 715 180"
          fill="none"
          stroke={activeStep === 3 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 3 ? '2.5' : '1.5'}
          markerEnd={activeStep === 3 ? 'url(#tx-arrow-accent)' : 'url(#tx-arrow-muted)'}
        />
        <path
          d="M 715 200 L 635 200"
          fill="none"
          stroke={activeStep === 3 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 3 ? '2.5' : '1.5'}
          strokeDasharray={activeStep === 3 ? 'none' : '4 3'}
          markerEnd={activeStep === 3 ? 'url(#tx-arrow-accent)' : 'url(#tx-arrow-muted)'}
        />
        <rect x="646" y="148" width="60" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 3 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="651" y="162" fill={activeStep === 3 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="8.5" fontWeight="600">
          Mongoose
        </text>

        {/* 4. MongoDB Atlas (Right) */}
        <g transform="translate(720, 95)">
          <rect
            width="190"
            height="185"
            rx="12"
            fill="var(--surface)"
            stroke={activeStep === 3 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 3 ? '2.5' : '1.5'}
          />
          <text x="16" y="32" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            MongoDB Atlas {activeStep === 3 && '🔒'}
          </text>
          <text x="16" y="62" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Users &amp; Auth (bcrypt)
          </text>
          <text x="16" y="88" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Open Limit &amp; GTT orders
          </text>
          <text x="16" y="114" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Holdings &amp; Positions
          </text>
          <text x="16" y="140" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Wallets &amp; Transactions
          </text>
          <text x="16" y="164" fill="var(--text-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Indexed by userId &amp; status
          </text>
        </g>
      </svg>
    </div>
  );
}

// Architecture Diagram for StayHub
function StayHubDiagram({ activeStep = 0 }) {
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
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--accent)" />
          </marker>
          <marker
            id="sh-arrow-muted"
            viewBox="0 0 10 10"
            refX="6"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--text-muted)" />
          </marker>
        </defs>

        {/* External Satellite: Razorpay (Top Left) */}
        <g transform="translate(40, 20)">
          <rect
            width="180"
            height="65"
            rx="10"
            fill="var(--surface)"
            stroke={activeStep === 3 || activeStep === 4 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 3 || activeStep === 4 ? '2' : '1.5'}
          />
          <text x="14" y="26" fill="var(--text-heading)" fontWeight="bold" fontSize="11" fontFamily="Instrument Serif, Georgia, serif">
            Razorpay (test mode) {activeStep === 3 ? '⚡' : ''}
          </text>
          <text x="14" y="46" fill={activeStep === 4 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="9.5" fontFamily="Inter, sans-serif">
            {activeStep === 4 ? '✔ SHA256 HMAC Verified' : 'SHA256 HMAC verification'}
          </text>
        </g>

        {/* External Satellite: Mapbox (Top Right) */}
        <g transform="translate(720, 20)">
          <rect
            width="180"
            height="65"
            rx="10"
            fill="var(--surface)"
            stroke={activeStep === 1 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 1 ? '2' : '1.5'}
          />
          <text x="14" y="26" fill="var(--text-heading)" fontWeight="bold" fontSize="11" fontFamily="Instrument Serif, Georgia, serif">
            Mapbox Geocoding {activeStep === 1 ? '⚡' : ''}
          </text>
          <text x="14" y="46" fill="var(--text-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            Forward geocoding &amp; maps
          </text>
        </g>

        {/* 1. Browser Client (Left Center) */}
        <g transform="translate(30, 130)">
          <rect
            width="220"
            height="150"
            rx="12"
            fill="var(--surface)"
            stroke={activeStep === 1 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 1 ? '2.5' : '1.5'}
          />
          <text x="16" y="30" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            Browser Client
          </text>
          <text x="16" y="58" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • EJS server-rendered views
          </text>
          <text x="16" y="80" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Bootstrap 5 responsive UI
          </text>
          <text x="16" y="102" fill={activeStep === 1 ? 'var(--accent)' : 'var(--text-body)'} fontSize="11" fontFamily="Inter, sans-serif">
            • Mapbox GL JS interactive map {activeStep === 1 ? '●' : ''}
          </text>
          <text x="16" y="126" fill={activeStep === 1 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="10" fontFamily="JetBrains Mono, monospace">
            AJAX wishlist &amp; tariffs {activeStep === 1 && '⚡ [Query Active]'}
          </text>
        </g>

        {/* External Satellite: Cloudinary (Bottom Left) */}
        <g transform="translate(40, 315)">
          <rect width="180" height="65" rx="10" fill="var(--surface)" stroke="var(--border)" strokeWidth="1.5" />
          <text x="14" y="26" fill="var(--text-heading)" fontWeight="bold" fontSize="11" fontFamily="Instrument Serif, Georgia, serif">
            Cloudinary CDN
          </text>
          <text x="14" y="46" fill="var(--text-muted)" fontSize="9.5" fontFamily="Inter, sans-serif">
            Listing image uploads &amp; transform
          </text>
        </g>

        {/* External Satellite: Brevo / Nodemailer (Bottom Right) */}
        <g transform="translate(720, 315)">
          <rect
            width="180"
            height="65"
            rx="10"
            fill="var(--surface)"
            stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 5 ? '2' : '1.5'}
          />
          <text x="14" y="26" fill="var(--text-heading)" fontWeight="bold" fontSize="11" fontFamily="Instrument Serif, Georgia, serif">
            Brevo &amp; Nodemailer {activeStep === 5 ? '✉️' : ''}
          </text>
          <text x="14" y="46" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="9.5" fontFamily="Inter, sans-serif">
            {activeStep === 5 ? '⚡ SH-INV PDF Dispatched' : 'Email OTP authentication'}
          </text>
        </g>

        {/* Connectors: Browser <-> Express */}
        <path
          d="M 250 195 L 350 195"
          fill="none"
          stroke={activeStep === 1 || activeStep === 2 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 1 || activeStep === 2 ? '2.5' : '1.5'}
          markerEnd={activeStep === 1 || activeStep === 2 ? 'url(#sh-arrow-accent)' : 'url(#sh-arrow-muted)'}
        />
        <path
          d="M 350 215 L 250 215"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#sh-arrow-muted)"
        />
        <rect x="264" y="170" width="72" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 1 || activeStep === 2 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="270" y="184" fill={activeStep === 1 || activeStep === 2 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="9" fontWeight="600">
          HTTPS req
        </text>

        {/* 2. Express App Server (Center Key Node) */}
        <g transform="translate(355, 30)">
          {/* Key node with surface-2 fill and accent stroke */}
          <rect
            width="280"
            height="340"
            rx="14"
            fill="var(--surface-2)"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          <rect
            x="0"
            y="0"
            width="280"
            height="38"
            rx="14"
            fill="var(--surface)"
            stroke="var(--accent)"
            strokeWidth="1"
          />
          <text x="18" y="24" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            Express.js App Server
          </text>

          {/* Module 1: Auth */}
          <g transform="translate(14, 48)">
            <rect width="252" height="48" rx="8" fill="var(--surface)" stroke="var(--border)" />
            <text x="12" y="19" fill="var(--text-heading)" fontWeight="600" fontSize="10.5">
              Passport (local + Google OAuth)
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Rate limit · Email OTP · RBAC
            </text>
          </g>

          {/* Module 2: Validation */}
          <g transform="translate(14, 104)">
            <rect
              width="252"
              height="48"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 2 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 2 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 2 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Joi Schema Validation {activeStep === 2 && '⚡ [Zero Overlap Verified]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Sanitization · Date overlap checks
            </text>
          </g>

          {/* Module 3: Controllers & GST */}
          <g transform="translate(14, 160)">
            <rect
              width="252"
              height="52"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 5 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Listing &amp; Booking Controllers {activeStep === 5 && '✔ [Committed]'}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              GST billing (12%/18%) · 5% fee
            </text>
            <text x="12" y="46" fill="var(--text-muted)" fontSize="8.5">
              SH-INV-YYYYMMDD-XXXX invoice generator
            </text>
          </g>

          {/* Module 4: Payment Controller */}
          <g transform="translate(14, 220)">
            <rect
              width="252"
              height="48"
              rx="8"
              fill="var(--surface)"
              stroke={activeStep === 3 || activeStep === 4 ? 'var(--accent)' : 'var(--border)'}
              strokeWidth={activeStep === 3 || activeStep === 4 ? '2' : '1'}
            />
            <text x="12" y="19" fill={activeStep === 3 || activeStep === 4 ? 'var(--accent)' : 'var(--text-heading)'} fontWeight="600" fontSize="10.5">
              Payment Controller {activeStep === 3 ? '⚡ [Order Init]' : activeStep === 4 ? '✔ [HMAC Match]' : ''}
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Razorpay order init · HMAC verify
            </text>
          </g>

          {/* Module 5: Session Store */}
          <g transform="translate(14, 276)">
            <rect width="252" height="48" rx="8" fill="var(--surface)" stroke="var(--border)" />
            <text x="12" y="19" fill="var(--text-heading)" fontWeight="600" fontSize="10.5">
              MongoStore Sessions
            </text>
            <text x="12" y="34" fill="var(--text-muted)" fontSize="9">
              Persistent guest &amp; host sessions
            </text>
          </g>
        </g>

        {/* Satellite Connectors */}
        {/* Razorpay <-> Express */}
        <path
          d="M 220 52 L 355 70"
          fill="none"
          stroke={activeStep === 3 || activeStep === 4 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 3 || activeStep === 4 ? '2.5' : '1.5'}
          strokeDasharray={activeStep === 3 || activeStep === 4 ? 'none' : '4 3'}
          markerEnd={activeStep === 3 || activeStep === 4 ? 'url(#sh-arrow-accent)' : 'url(#sh-arrow-muted)'}
        />
        {/* Mapbox <-> Express */}
        <path
          d="M 720 52 L 635 80"
          fill="none"
          stroke={activeStep === 1 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 1 ? '2.5' : '1.5'}
          strokeDasharray={activeStep === 1 ? 'none' : '4 3'}
          markerEnd={activeStep === 1 ? 'url(#sh-arrow-accent)' : 'url(#sh-arrow-muted)'}
        />
        {/* Cloudinary <-> Express */}
        <path d="M 220 348 L 355 310" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#sh-arrow-muted)" />
        {/* Brevo <-> Express */}
        <path
          d="M 720 348 L 635 310"
          fill="none"
          stroke={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 5 ? '2.5' : '1.5'}
          strokeDasharray={activeStep === 5 ? 'none' : '4 3'}
          markerEnd={activeStep === 5 ? 'url(#sh-arrow-accent)' : 'url(#sh-arrow-muted)'}
        />

        {/* Connectors: Express -> MongoDB */}
        <path
          d="M 635 195 L 715 195"
          fill="none"
          stroke={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'}
          strokeWidth={activeStep === 5 ? '2.5' : '1.5'}
          markerEnd={activeStep === 5 ? 'url(#sh-arrow-accent)' : 'url(#sh-arrow-muted)'}
        />
        <path
          d="M 715 215 L 635 215"
          fill="none"
          stroke="var(--text-muted)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          markerEnd="url(#sh-arrow-muted)"
        />
        <rect x="646" y="165" width="60" height="20" rx="4" fill="var(--surface-2)" stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'} strokeWidth="1" />
        <text x="651" y="179" fill={activeStep === 5 ? 'var(--accent)' : 'var(--text-muted)'} fontSize="8.5" fontWeight="600">
          Mongoose
        </text>

        {/* 3. MongoDB Atlas (Right Center) */}
        <g transform="translate(720, 115)">
          <rect
            width="190"
            height="175"
            rx="12"
            fill="var(--surface)"
            stroke={activeStep === 5 ? 'var(--accent)' : 'var(--border)'}
            strokeWidth={activeStep === 5 ? '2.5' : '1.5'}
          />
          <text x="16" y="30" fill="var(--text-heading)" fontWeight="bold" fontSize="13" fontFamily="Instrument Serif, Georgia, serif">
            MongoDB Atlas {activeStep === 5 && '🔒'}
          </text>
          <text x="16" y="58" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Listings (GeoJSON points)
          </text>
          <text x="16" y="82" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Bookings &amp; Invoices
          </text>
          <text x="16" y="106" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Users (guest, host, admin)
          </text>
          <text x="16" y="130" fill="var(--text-body)" fontSize="11" fontFamily="Inter, sans-serif">
            • Reviews with star ratings
          </text>
          <text x="16" y="154" fill="var(--text-muted)" fontSize="10" fontFamily="JetBrains Mono, monospace">
            Sessions &amp; Wishlists
          </text>
        </g>
      </svg>
    </div>
  );
}

const PROJECT_TRACES = {
  tradexpert: {
    systemName: 'TradeXpert Execution Pipeline',
    steps: [
      {
        step: 1,
        title: 'Client Order Dispatch',
        component: 'Trading Terminal (React) -> Express Gateway',
        protocol: 'POST /api/v1/orders/limit',
        latency: 'p95: 4ms',
        status: '201 CREATED',
        packet: `{
  "action": "ORDER_DISPATCH",
  "symbol": "RELIANCE.NS",
  "side": "BUY",
  "quantity": 25,
  "limitPrice": 2840.50,
  "triggerType": "GTT_STOP_LOSS"
}`,
        safeguard: 'Client interceptors assert JWT auth tokens, numerical finiteness, and sanitization before dispatching down HTTP channel.',
      },
      {
        step: 2,
        title: 'Ingestion & Security Gateway',
        component: 'Express API -> Security Layer',
        protocol: 'Express Middleware Chain',
        latency: 'p95: 2ms',
        status: 'AUTHENTICATED',
        packet: `{
  "authStatus": "VERIFIED",
  "userId": "usr_68f8b91c0e",
  "role": "TRADER",
  "rateLimitRemaining": 9,
  "securityHeaders": ["Helmet", "CORS_RESTRICT"]
}`,
        safeguard: 'Rate limiter throttles auth abuse (10 req/15 min); user-scoped query constraints prevent IDOR vulnerabilities.',
      },
      {
        step: 3,
        title: 'Atomic Margin Lock & Ledger',
        component: 'Wallet & Ledger -> MongoDB Atlas',
        protocol: 'MongoDB Atomic $inc Op',
        latency: 'p95: 14ms',
        status: 'MARGIN_LOCKED',
        packet: `{
  "ledgerOp": "HOLD_MARGIN",
  "marginRequired": 71012.50,
  "walletAvailable": 128987.50,
  "orderState": "OPEN",
  "txId": "tx_margin_hold_0019"
}`,
        safeguard: 'Atomic single-operation balance deduction locks funds instantaneously; eliminates double-allocation of margin.',
      },
      {
        step: 4,
        title: '2.5s Market Match & Execution',
        component: 'Market Simulator -> Order Match Engine',
        protocol: 'In-Memory Tick Cycle Match',
        latency: 'p95: 6ms',
        status: 'ORDER_MATCHED',
        packet: `{
  "marketTick": { "sym": "RELIANCE.NS", "price": 2840.00 },
  "matchedOrder": "ord_9182a",
  "executionPrice": 2840.00,
  "pnlRealized": 0.00,
  "orderState": "EXECUTED"
}`,
        safeguard: 'Independent cycle prevents synchronous price spikes; offline mean-reverting math keeps simulation tethered to official close.',
      },
      {
        step: 5,
        title: 'Sub-30ms WebSocket Fanout',
        component: 'Socket.IO Server -> Connected Terminals',
        protocol: 'WebSocket Binary/JSON Delta Frame',
        latency: 'p95: 18ms',
        status: 'STREAM_DISPATCHED',
        packet: `{
  "event": "PORTFOLIO_DELTA",
  "data": {
    "executedId": "ord_9182a",
    "updatedHoldings": { "RELIANCE.NS": 25 },
    "broadcastDeltaMs": 18
  }
}`,
        safeguard: 'Only modified ticker diffs are emitted across the WebSocket stream, keeping client DOM re-renders minimal and smooth.',
      },
    ],
  },
  stayhub: {
    systemName: 'StayHub Booking & Payment Lifecycle',
    steps: [
      {
        step: 1,
        title: 'Search & Forward Geocoding',
        component: 'Browser UI -> Mapbox API',
        protocol: 'HTTPS REST /geocoding/v5',
        latency: 'p95: 35ms',
        status: 'GEOCODED',
        packet: `{
  "locationQuery": "Goa Beachfront",
  "coordinates": [73.74, 15.54],
  "geometry": "Point",
  "cached": true
}`,
        safeguard: 'Coordinates stored as standard GeoJSON points in MongoDB for high-performance $near geospatial spatial querying.',
      },
      {
        step: 2,
        title: 'Date Overlap & Tariff Guard',
        component: 'Express -> Joi Schema Validator',
        protocol: 'Express Middleware Guard',
        latency: 'p95: 8ms',
        status: 'NO_OVERLAP_VALIDATED',
        packet: `{
  "listingId": "stay_77180a",
  "checkIn": "2026-11-01",
  "checkOut": "2026-11-05",
  "overlapConflict": false,
  "nights": 4
}`,
        safeguard: 'Compound date range query ensures two concurrent reservation requests cannot overlap for the same property.',
      },
      {
        step: 3,
        title: 'Server-Side Razorpay Order Init',
        component: 'Express Server -> Razorpay REST API',
        protocol: 'POST https://api.razorpay.com/v1/orders',
        latency: 'p95: 115ms',
        status: 'ORDER_CREATED',
        packet: `{
  "razorpayOrderId": "order_Kz9182haLa",
  "baseAmount": 1500000,
  "gstAmount": 270000,
  "platformFee": 75000,
  "totalPayablePaisa": 1845000
}`,
        safeguard: 'Dynamic GST (12% if tariff <= 7500, 18% if > 7500) computed purely on backend; zero client tampering vector.',
      },
      {
        step: 4,
        title: 'SHA-256 HMAC Signature Verification',
        component: 'Razorpay Callback -> Crypto Controller',
        protocol: 'Node.js Crypto HMAC SHA256',
        latency: 'p95: 3ms',
        status: 'SIGNATURE_VERIFIED',
        packet: `{
  "payload": "order_Kz9182haLa|pay_Lz8811",
  "expectedSignature": "4f73ae09... ",
  "receivedSignature": "4f73ae09... ",
  "signatureMatch": true
}`,
        safeguard: 'Constant-time string comparison on cryptographic digests guarantees payment legitimacy before fulfilling reservation.',
      },
      {
        step: 5,
        title: 'Invoice Generation & Dispatch',
        component: 'Booking Controller -> MongoDB + Brevo',
        protocol: 'Mongoose + Nodemailer SMTP',
        latency: 'p95: 42ms',
        status: 'BOOKING_CONFIRMED',
        packet: `{
  "bookingId": "bk_980123",
  "invoiceNumber": "SH-INV-20261101-0842",
  "status": "CONFIRMED",
  "emailOtpVerified": true,
  "guestNotified": true
}`,
        safeguard: 'Strict sequential invoice nomenclature generated and stored alongside immutable guest booking ledger.',
      },
    ],
  },
};

const ADR_METADATA = {
  tradexpert: [
    {
      id: 'ADR-01',
      category: 'Feed Architecture',
      status: 'ACCEPTED',
      problem: 'NSE market closes at 15:30 IST; paper trading must support continuous off-market testing.',
      invariant: 'Max simulated drift clamped to ±1.8% of official closing price.',
      tradeoff: 'Simulated ticks vs direct historical replay. Mean-reverting math preserves realistic bid-ask spread without heavy storage.',
    },
    {
      id: 'ADR-02',
      category: 'Concurrency & Throttle',
      status: 'ACCEPTED',
      problem: 'Broadcasting 100 tickers simultaneously every cycle saturates client web workers and causes jank.',
      invariant: 'Zero simultaneous mass-broadcast bursts.',
      tradeoff: 'Staggered ticking: updates 3-6 stocks per 2.5s cycle with 10-25s rest, achieving 92% lower client CPU usage.',
    },
    {
      id: 'ADR-03',
      category: 'Financial Consistency',
      status: 'ACCEPTED',
      problem: 'Concurrent limit order placements could lead to double-spending of wallet balance.',
      invariant: 'walletAvailable = walletTotal - SUM(openOrdersMargin) strictly >= 0.',
      tradeoff: 'Immediate atomic margin hold via MongoDB $inc operation eliminates race conditions under high concurrent volume.',
    },
    {
      id: 'ADR-04',
      category: 'Execution Engine',
      status: 'ACCEPTED',
      problem: 'Client-side trigger execution is vulnerable to tampering and dropped browser sessions.',
      invariant: 'Tick evaluation latency < 6ms per cycle.',
      tradeoff: 'Server-side evaluation loop guarantees trigger execution for GTT stops even when the trader is offline.',
    },
    {
      id: 'ADR-05',
      category: 'Defense in Depth',
      status: 'ACCEPTED',
      problem: 'Financial applications require mitigation against IDOR, brute force, and parameter injection.',
      invariant: 'Every financial mutation asserts strict authenticated user context ownership.',
      tradeoff: 'Slight middleware latency overhead (~2ms) for comprehensive OWASP Top 10 hardening and parameter finiteness checks.',
    },
  ],
  stayhub: [
    {
      id: 'ADR-01',
      category: 'Booking Concurrency',
      status: 'ACCEPTED',
      problem: 'Two users submitting booking requests for the same listing and overlapping dates at the exact same moment.',
      invariant: 'Intersection of [existing.checkIn, existing.checkOut] and [new.checkIn, new.checkOut] = null.',
      tradeoff: 'Server-enforced date range collision query prior to creating payment intents prevents double-booking disputes.',
    },
    {
      id: 'ADR-02',
      category: 'Payment Security',
      status: 'ACCEPTED',
      problem: 'Tampering of payment amounts or spoofing success webhooks from client browsers.',
      invariant: 'Zero booking state transition to CONFIRMED without valid HMAC digest match.',
      tradeoff: 'Server-side order token generation and constant-time HMAC-SHA256 signature verification guarantees non-repudiation.',
    },
    {
      id: 'ADR-03',
      category: 'Fiscal Compliance',
      status: 'ACCEPTED',
      problem: 'Indian GST regulations mandate tiered slabs (12% vs 18%) based on per-day room tariff.',
      invariant: 'Daily tariff <= Rs 7,500 applies 12%; > Rs 7,500 applies 18%.',
      tradeoff: 'Dynamic computation with CGST/SGST breakdown ensures fiscal compliance over static lookup tables.',
    },
    {
      id: 'ADR-04',
      category: 'Identity & RBAC',
      status: 'ACCEPTED',
      problem: 'Guest, host, and admin privilege separation with email verification.',
      invariant: 'Host actions strictly require validated host or admin role flag.',
      tradeoff: 'Passport session strategy with MongoStore and email OTP enables immediate token revocation from the admin console.',
    },
    {
      id: 'ADR-05',
      category: 'Geospatial Indexing',
      status: 'ACCEPTED',
      problem: 'Proximity searching across global listings without slow full-table scans.',
      invariant: 'All coordinates persisted as GeoJSON [longitude, latitude] Point format.',
      tradeoff: 'Mapbox forward geocoding paired with MongoDB 2dsphere spatial indexing achieves sub-5ms distance queries.',
    },
  ],
};

export default function EngineeringNotes() {
  const engineeringData = portfolioData.engineering || portfolioData.engineeringNotes;
  const projectTabs = engineeringData.projectTabs || [];

  const [activeTabSlug, setActiveTabSlug] = useState(() =>
    projectTabs.length > 0 ? projectTabs[0].slug : 'tradexpert'
  );

  // Trace execution state (Step 1 to 5)
  const [activeTraceStep, setActiveTraceStep] = useState(1);
  const [isPlayingTrace, setIsPlayingTrace] = useState(false);

  // Accordion state: first item open by default (index 0)
  const [openDecisionIndex, setOpenDecisionIndex] = useState(0);

  const activeTab =
    projectTabs.find((tab) => tab.slug === activeTabSlug) || projectTabs[0];

  const currentTrace = PROJECT_TRACES[activeTabSlug] || PROJECT_TRACES.tradexpert;
  const currentStepData = currentTrace.steps.find((s) => s.step === activeTraceStep) || currentTrace.steps[0];

  // Auto-advance execution trace when playing
  useEffect(() => {
    if (!isPlayingTrace) return;
    const timer = setInterval(() => {
      setActiveTraceStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 2400);
    return () => clearInterval(timer);
  }, [isPlayingTrace]);

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
    setActiveTraceStep(1);
    setIsPlayingTrace(false);

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
    setActiveTraceStep(1);
    setIsPlayingTrace(false);
  };

  return (
    <section id="engineering" className="py-16 md:py-24 bg-surface/30 border-y border-border">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <SectionHeading
          number="02"
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
              className="inline-flex p-1 rounded-full bg-surface-2 border border-border gap-1"
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
            {/* 1. Architecture diagram: inline SVG on a surface card with Telemetry HUD */}
            <div className="rounded-[20px] bg-surface border border-border editorial-card p-6 sm:p-8 relative group">
              {/* Architectural registration marks */}
              <span className="absolute top-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <span className="absolute bottom-2.5 right-2.5 font-mono text-[10px] text-border/60 group-hover:text-accent/60 select-none pointer-events-none transition-colors" aria-hidden="true">+</span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-border">
                <div>
                  <h3 className="text-lg font-bold font-heading text-text">
                    {activeTab.title} System Architecture
                  </h3>
                  <p className="text-xs font-mono text-muted mt-0.5">
                    Component distribution, service boundaries and live telemetry trace
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-2 border border-border text-[11px] font-mono text-muted font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Step 0{activeTraceStep} Active
                  </span>
                </div>
              </div>

              {/* Horizontally scrollable diagram with activeStep highlighting */}
              {activeTab.slug === 'tradexpert' ? (
                <TradeXpertDiagram activeStep={activeTraceStep} />
              ) : (
                <StayHubDiagram activeStep={activeTraceStep} />
              )}

              {/* Interactive System Trace & Telemetry HUD */}
              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-accent animate-pulse" />
                    <span className="font-mono text-xs font-semibold text-text uppercase tracking-wider">
                      Interactive Execution Trace
                    </span>
                    <span className="text-[11px] font-mono text-muted">
                      (Step {activeTraceStep} of 5)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setIsPlayingTrace(!isPlayingTrace)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-2 hover:bg-surface border border-border text-xs font-mono text-text hover:text-accent transition-colors cursor-pointer"
                      aria-label={isPlayingTrace ? 'Pause execution trace' : 'Auto-play execution trace'}
                    >
                      {isPlayingTrace ? (
                        <>
                          <Pause className="w-3.5 h-3.5 text-accent" />
                          <span>Pause Trace</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 text-accent" />
                          <span>Auto Trace</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setActiveTraceStep(1);
                        setIsPlayingTrace(false);
                      }}
                      className="p-1.5 rounded-lg bg-surface-2 hover:bg-surface border border-border text-muted hover:text-text transition-colors cursor-pointer"
                      aria-label="Reset trace"
                      title="Reset to Step 1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Step Selector Buttons */}
                <div className="grid grid-cols-5 gap-1.5 sm:gap-2 mb-4">
                  {currentTrace.steps.map((s) => {
                    const isCurrent = s.step === activeTraceStep;
                    return (
                      <button
                        key={s.step}
                        type="button"
                        onClick={() => {
                          setActiveTraceStep(s.step);
                          setIsPlayingTrace(false);
                        }}
                        className={`py-2 px-1 sm:px-2 rounded-lg border text-center transition-all cursor-pointer ${
                          isCurrent
                            ? 'bg-accent/15 border-accent text-accent font-semibold shadow-sm'
                            : 'bg-surface-2/60 hover:bg-surface-2 border-border text-muted hover:text-text'
                        }`}
                      >
                        <div className="font-mono text-[10px] sm:text-xs">
                          0{s.step}
                        </div>
                        <div className="text-[10px] sm:text-[11px] font-sans truncate hidden sm:block">
                          {s.title}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Telemetry Card */}
                {currentStepData && (
                  <div className="p-4 sm:p-5 rounded-xl bg-surface-2/70 border border-border">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-border/60">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-accent">
                            0{currentStepData.step} /
                          </span>
                          <span className="font-bold text-sm sm:text-base text-text">
                            {currentStepData.title}
                          </span>
                        </div>
                        <div className="font-mono text-[11px] text-muted mt-0.5">
                          Path: {currentStepData.component}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 rounded bg-surface border border-border font-mono text-[11px] text-text">
                          {currentStepData.protocol}
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-accent/10 border border-accent/30 font-mono text-[11px] text-accent font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                          {currentStepData.latency}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Packet Inspector */}
                      <div>
                        <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-1.5 flex items-center justify-between">
                          <span>Simulated Telemetry Packet</span>
                          <span className="text-accent">{currentStepData.status}</span>
                        </div>
                        <pre className="p-3 rounded-lg bg-bg border border-border text-[11px] font-mono text-text-body overflow-x-auto max-h-36 select-all no-scrollbar">
                          <code>{currentStepData.packet}</code>
                        </pre>
                      </div>

                      {/* System Safeguard */}
                      <div className="flex flex-col justify-between">
                        <div>
                          <div className="text-[10px] font-mono text-muted uppercase tracking-wider mb-1.5">
                            Production Safeguard &amp; Invariant
                          </div>
                          <p className="text-xs sm:text-[13px] text-text-body leading-relaxed bg-surface/50 p-3 rounded-lg border border-border">
                            {currentStepData.safeguard}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-muted">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                          <span>State verified across node boundaries</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
                      className="p-5 rounded-[16px] bg-surface border border-border editorial-card hover:border-accent transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-block px-2.5 py-0.5 rounded-md bg-surface-2 border border-border font-mono text-xs font-bold text-accent mb-3">
                          0{stepItem.step || sIdx + 1}
                        </div>
                        <h4 className="text-base font-bold font-serif text-text mb-1.5">
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

            {/* 3. Key architectural decisions (ADRs): accordion */}
            {activeTab.decisions && activeTab.decisions.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-text">
                    Key architectural decisions (ADRs)
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {activeTab.decisions.length} Records Documented
                  </span>
                </div>
                <div className="space-y-3">
                  {activeTab.decisions.map((decision, dIdx) => {
                    const isOpen = openDecisionIndex === dIdx;
                    const adrMeta = ADR_METADATA[activeTab.slug]?.[dIdx];

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
                          className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-surface-2/40 transition-colors focus-visible:outline-accent"
                        >
                          <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                            <span className="font-mono text-xs text-accent font-semibold px-2 py-0.5 rounded bg-surface-2 border border-border shrink-0">
                              {adrMeta?.id || `ADR-0${dIdx + 1}`}
                            </span>
                            <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 font-mono text-[10px] text-emerald-400 font-semibold shrink-0">
                              ACCEPTED
                            </span>
                            <span className="font-heading font-bold text-sm sm:text-base text-text">
                              {decision.title}
                            </span>
                            {adrMeta?.category && (
                              <span className="font-mono text-[11px] text-muted hidden md:inline">
                                · {adrMeta.category}
                              </span>
                            )}
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
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40 space-y-4">
                                <p className="text-text-body font-normal">
                                  {decision.text}
                                </p>

                                {adrMeta && (
                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                                    <div className="p-3 rounded-lg bg-surface-2/60 border border-border">
                                      <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">
                                        Problem / Context
                                      </div>
                                      <p className="text-[12px] text-text-body leading-snug">
                                        {adrMeta.problem}
                                      </p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-surface-2/60 border border-border">
                                      <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">
                                        Architectural Invariant
                                      </div>
                                      <p className="text-[12px] text-accent font-mono leading-snug">
                                        {adrMeta.invariant}
                                      </p>
                                    </div>

                                    <div className="p-3 rounded-lg bg-surface-2/60 border border-border">
                                      <div className="font-mono text-[10px] text-muted uppercase tracking-wider mb-1">
                                        Trade-Off Evaluation
                                      </div>
                                      <p className="text-[12px] text-text-body leading-snug">
                                        {adrMeta.tradeoff}
                                      </p>
                                    </div>
                                  </div>
                                )}
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
                  <AlertTriangle className="w-4 h-4 text-muted" strokeWidth={1.5} />
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
                  <Lightbulb className="w-4 h-4 text-muted" strokeWidth={1.5} />
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
                  <Compass className="w-4 h-4 text-muted" strokeWidth={1.5} />
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
                    strokeWidth={1.5}
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
