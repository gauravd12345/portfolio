import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center text-gray-600">
        <p>&copy; 2024 {personalInfo.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}