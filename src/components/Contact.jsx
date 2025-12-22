import React, { useState } from 'react';
import { storage } from '../utils/storage';
import { adminConfig } from '../data/portfolioData';

export default function Contact({ setIsAdmin }) {
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    const messageData = {
      id: Date.now().toString(),
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message,
      timestamp: Date.now(),
      read: false
    };

    const success = storage.set(`message:${messageData.id}`, messageData);

    if (success) {
      setSubmitStatus('success');
      setContactForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } else {
      setSubmitStatus('error');
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === adminConfig.defaultPassword) {
      setIsAdmin(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Get In Touch</h3>
        <p className="text-lg text-gray-600 mb-8 text-center">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <form onSubmit={handleContactSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              required
              value={contactForm.name}
              onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              value={contactForm.email}
              onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              required
              rows="5"
              value={contactForm.message}
              onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'sending'}
            className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400"
          >
            {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <p className="text-green-600 text-center">Message sent successfully!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
          )}
        </form>

        {/* Admin Login */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center mb-4">Admin Access</p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 text-sm"
            />
            <button
              onClick={handleAdminLogin}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm"
            >
              Login
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-2">Default password: {adminConfig.defaultPassword}</p>
        </div>
      </div>
    </section>
  );
}