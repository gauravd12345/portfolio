import React from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navigation({ activeSection, navigateToSection, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/60 backdrop-blur border-b border-gray-200/80 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => navigateToSection('home')}
            className="text-base md:text-lg font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            {personalInfo.name}
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span
                  className={`inline-block pb-0.5 border-b-2 ${
                    activeSection === item.id ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className={`text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeSection === item.id ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}