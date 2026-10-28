import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';
import RecruiterDrawer from './components/RecruiterDrawer';

import Home from './pages/Home';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Apple-style specular card sheen: tracks mouse relative to hovered editorial-card
  useEffect(() => {
    const handlePointerMove = (e) => {
      const card = e.target.closest('.editorial-card');
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const activeSection = useActiveSection([
    'hero',
    'projects',
    'engineering',
    'about',
    'skills',
    'experience',
    'education',
    'contact',
  ]);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/30 selection:text-text relative">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenCommand={() => setIsCommandOpen(true)}
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
        />

        <CommandPalette
          isOpen={isCommandOpen}
          setIsOpen={setIsCommandOpen}
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenRecruiter={() => setIsRecruiterOpen(true)}
        />

        <RecruiterDrawer
          isOpen={isRecruiterOpen}
          onClose={() => setIsRecruiterOpen(false)}
        />

        <Suspense fallback={<div className="min-h-screen bg-bg" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home onOpenRecruiter={() => setIsRecruiterOpen(true)} />} />
            <Route path="/projects/:slug" element={<CaseStudy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
        <BackToTop />
        {typeof window !== 'undefined' &&
          !window.location.hostname.includes('localhost') &&
          !window.location.hostname.includes('127.0.0.1') && (
            <Analytics />
          )}
      </div>
    </BrowserRouter>
  );
}
