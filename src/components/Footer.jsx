import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-gray-200 bg-transparent">
      <div className="max-w-5xl mx-auto flex items-start justify-between gap-6 flex-col md:flex-row">
        <p className="text-gray-600 text-sm font-mono">
          &copy; 2025 {personalInfo.name}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-gray-700 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-900 transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-gray-700 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.social.email}
            className="font-mono text-sm text-gray-700 hover:text-gray-900 underline decoration-transparent hover:decoration-gray-900 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}