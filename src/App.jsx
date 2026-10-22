import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import CommandPalette from './components/CommandPalette';

import Home from './pages/Home';

const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

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
      <div className="min-h-screen bg-bg text-text font-sans selection:bg-accent/25 selection:text-text relative">
        <Navbar
          activeSection={activeSection}
          theme={theme}
          toggleTheme={toggleTheme}
          onOpenCommand={() => setIsCommandOpen(true)}
        />

        <CommandPalette
          isOpen={isCommandOpen}
          setIsOpen={setIsCommandOpen}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <Suspense fallback={<div className="min-h-screen bg-bg" aria-hidden="true" />}>
          <Routes>
            <Route path="/" element={<Home />} />
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
