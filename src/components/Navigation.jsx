import React from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navigation({ mobileMenuOpen, setMobileMenuOpen, scrollToSection, setIsAdmin }) {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{personalInfo.name}</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-gray-600">About</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-gray-600">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-gray-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-gray-600">Contact</button>
            <button onClick={() => setIsAdmin(true)} className="text-gray-400 hover:text-gray-600 text-sm">Admin</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('about')} className="text-left hover:text-gray-600">About</button>
            <button onClick={() => scrollToSection('experience')} className="text-left hover:text-gray-600">Experience</button>
            <button onClick={() => scrollToSection('projects')} className="text-left hover:text-gray-600">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="text-left hover:text-gray-600">Contact</button>
          </div>
        )}
      </div>
    </nav>
  );
}