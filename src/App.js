import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      <Navigation
        activeSection={activeSection}
        navigateToSection={navigateToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <main className="pt-20 pb-16">
        {activeSection === 'home' && <Home navigateToSection={navigateToSection} />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'experience' && <Experience />}
      </main>
      <Footer />
    </div>
  );
}