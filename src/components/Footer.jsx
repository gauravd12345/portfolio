import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer id="contact" className="py-10 px-6 border-t border-gray-200 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-600 text-sm font-mono">
          &copy; 2026 {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}