import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  FileText,
  ExternalLink,
  Copy,
  Check,
  Sun,
  Moon,
  Layers,
  Code,
  Wrench,
  Mail,
  X,
  Zap,
} from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export default function CommandPalette({ isOpen, setIsOpen, theme, toggleTheme, onOpenRecruiter }) {
  const { identity, projects } = portfolioData;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);

  const tradexpert = projects.find((p) => p.slug === 'tradexpert');
  const stayhub = projects.find((p) => p.slug === 'stayhub');

  const copyEmail = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(identity.email);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 1200);
    }
  };

  const scrollTo = (hash) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const actions = [
    {
      id: 'recruiter',
      label: 'Open 30-second candidate brief',
      shortcut: 'BRIEF',
      category: 'Recruiter',
      icon: <Zap className="w-4 h-4 text-accent" strokeWidth={1.5} />,
      perform: () => {
        setIsOpen(false);
        onOpenRecruiter?.();
      },
    },
    ...(identity.resumeUrl
      ? [
          {
            id: 'resume',
            label: 'View Resume (PDF)',
            shortcut: 'PDF',
            category: 'Credentials',
            icon: <FileText className="w-4 h-4 text-muted" strokeWidth={1.5} />,
            perform: () => {
              setIsOpen(false);
              window.open(identity.resumeUrl, '_blank');
            },
          },
        ]
      : []),
    {
      id: 'tradexpert',
      label: 'Launch TradeXpert Demo',
      shortcut: 'LIVE',
      category: 'Featured Project',
      icon: <ExternalLink className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => {
        setIsOpen(false);
        window.open(tradexpert?.links?.live || 'https://tradexpert-vq6s.onrender.com', '_blank');
      },
    },
    {
      id: 'stayhub',
      label: 'Launch StayHub Demo',
      shortcut: 'LIVE',
      category: 'Featured Project',
      icon: <ExternalLink className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => {
        setIsOpen(false);
        window.open(stayhub?.links?.live || 'https://stayhub-kxme.onrender.com/listings', '_blank');
      },
    },
    {
      id: 'copy-email',
      label: copied ? 'Email Copied!' : `Copy Email (${identity.email})`,
      shortcut: 'COPY',
      category: 'Contact',
      icon: copied ? <Check className="w-4 h-4 text-success" strokeWidth={1.5} /> : <Copy className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: copyEmail,
    },
    {
      id: 'theme',
      label: `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
      shortcut: 'THEME',
      category: 'Preferences',
      icon: theme === 'dark' ? <Sun className="w-4 h-4 text-muted" strokeWidth={1.5} /> : <Moon className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => {
        toggleTheme();
        setIsOpen(false);
      },
    },
    {
      id: 'nav-projects',
      label: 'Go to Featured Projects',
      shortcut: '01',
      category: 'Navigation',
      icon: <Layers className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => scrollTo('#projects'),
    },
    {
      id: 'nav-engineering',
      label: 'Go to Engineering Notes',
      shortcut: '02',
      category: 'Navigation',
      icon: <Code className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => scrollTo('#engineering'),
    },
    {
      id: 'nav-skills',
      label: 'Go to Skills & Technologies',
      shortcut: '04',
      category: 'Navigation',
      icon: <Wrench className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => scrollTo('#skills'),
    },
    {
      id: 'nav-contact',
      label: 'Go to Direct Contact Form',
      shortcut: '07',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-muted" strokeWidth={1.5} />,
      perform: () => scrollTo('#contact'),
    },
  ];

  const filteredActions = actions.filter((action) => {
    const term = searchTerm.toLowerCase();
    return (
      action.label.toLowerCase().includes(term) ||
      action.category.toLowerCase().includes(term)
    );
  });

  // Focus input and reset search when opening
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      setSearchTerm('');
      setSelectedIndex(0);
      inputRef.current?.focus();
    }, 20);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredActions.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % (filteredActions.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex, setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-xl editorial-card overflow-hidden shadow-2xl bg-surface border border-border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3.5 border-b border-border bg-surface-2/30">
          <Search className="w-4 h-4 text-muted shrink-0" strokeWidth={1.5} />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or jump to section..."
            className="w-full bg-transparent text-sm sm:text-base font-sans text-text placeholder:text-muted/60 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close command palette"
            className="p-1 rounded-md text-muted hover:text-text hover:bg-surface-2 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-muted">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={action.id}
                  type="button"
                  onClick={action.perform}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-surface-2 text-text border border-border/80'
                      : 'text-body hover:bg-surface-2/50 border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={`shrink-0 ${isSelected ? 'text-accent' : 'text-muted'}`}>{action.icon}</span>
                    <span className="truncate font-medium">{action.label}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-mono text-muted/70 uppercase">
                      {action.category}
                    </span>
                    {action.shortcut && (
                      <span className="px-1.5 py-0.5 rounded-md bg-surface border border-border text-[10px] font-mono text-accent font-medium">
                        {action.shortcut}
                      </span>
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="px-4 py-2.5 bg-surface-2/40 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-[10px]">↑</kbd>{' '}
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-[10px]">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-[10px]">↵</kbd> select
            </span>
          </div>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-surface border border-border text-[10px]">esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}
