import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  if (isAdmin) {
    return <AdminDashboard setIsAdmin={setIsAdmin} />;
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
        setIsAdmin={setIsAdmin}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact setIsAdmin={setIsAdmin} />
      <Footer />
    </div>
  );
}