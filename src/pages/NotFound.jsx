import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <div className="p-4 rounded-2xl bg-chip border border-border mb-6 text-accent">
        <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '8s' }} strokeWidth={1.5} />
      </div>

      <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">
        404 / NOT FOUND
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold font-heading text-text mb-3">
        Page Not Found
      </h1>

      <p className="text-sm sm:text-base text-muted max-w-md mb-8">
        The route you navigated to does not exist or may have been moved.
      </p>

      <Link
        to="/"
        className="btn-primary"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
