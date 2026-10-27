import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds = [
  'hero',
  'projects',
  'engineering',
  'about',
  'skills',
  'experience',
  'education',
  'contact',
]) {
  const [activeSection, setActiveSection] = useState(null);
  const sectionKey = Array.isArray(sectionIds) ? sectionIds.join(',') : '';

  // Clear any stale hash on page load when scrollY is 0
  useEffect(() => {
    const handleInitialHash = () => {
      if (window.scrollY === 0 && window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };
    handleInitialHash();
    const timer = setTimeout(handleInitialHash, 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split(',').filter(Boolean) : [];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    // Track intersection state of each section
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleSections.set(entry.target.id, entry.isIntersecting);
        });

        // While hero is on screen or scroll position is near the top, keep NO link active
        const isHeroVisible = visibleSections.get('hero');
        if (isHeroVisible || window.scrollY < 80) {
          setActiveSection(null);
          return;
        }

        // Find the topmost intersecting section (excluding hero)
        for (const id of ids) {
          if (id === 'hero') continue;
          if (visibleSections.get(id)) {
            setActiveSection(id);
            break;
          }
        }
      },
      {
        // rootMargin offsets sticky header height (64px) and middle viewport detection
        rootMargin: '-70px 0px -50% 0px',
        threshold: [0, 0.1, 0.3],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback scroll listener for top-of-page and bottom-of-page boundary conditions
    const handleScroll = () => {
      if (window.scrollY < 80) {
        setActiveSection(null);
        return;
      }

      // Check if user has scrolled to the bottom of the page (to highlight 'contact')
      const docHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      if (window.scrollY + windowHeight >= docHeight - 40) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionKey]);

  return activeSection;
}
