import React from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation({ activeSection, navigateToSection, mobileMenuOpen, setMobileMenuOpen }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/85 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-6 md:w-10" aria-hidden="true" />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-blue-700'
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                <span
                  className={`inline-block pb-0.5 border-b-2 ${
                    activeSection === item.id ? 'border-blue-600' : 'border-transparent'
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
                  activeSection === item.id ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-50'
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