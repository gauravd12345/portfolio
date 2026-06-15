import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, aboutMe } from '../data/portfolioData';

export default function Home({ navigateToSection }) {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          {/* Left: intro */}
          <div className="flex-1 min-w-0">
            <div className="mb-4">
              <h1 className="font-mono text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="font-mono text-sm md:text-base text-gray-600 mt-1">
                B.S. in Computer Engineering @ San Jose State
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-4">
              {aboutMe.paragraphs.map((p, idx) => (
                <p key={idx} className="text-gray-700 text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => navigateToSection('projects')}
                className="font-mono text-sm px-4 py-2 rounded-lg border border-blue-200 bg-blue-50/60 text-blue-700 hover:bg-blue-100/70 hover:border-blue-300 transition-colors"
              >
                Projects →
              </button>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm px-4 py-2 rounded-lg border border-blue-200 bg-blue-50/60 text-blue-700 hover:bg-blue-100/70 hover:border-blue-300 transition-colors"
              >
                Resume →
              </a>
            </div>
          </div>

          {/* Right: contact */}
          <div className="w-full lg:w-72">
            <div className="border border-gray-200 rounded-2xl bg-white p-5">
              <div className="font-mono text-xs uppercase tracking-widest text-gray-600 mb-4">
                Contact
              </div>
              <div className="space-y-3">
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-gray-900 hover:text-blue-700 transition-colors border-b border-gray-100 pb-3"
                >
                  <span className="font-mono text-sm">GitHub</span>
                  <Github size={18} />
                </a>
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 text-gray-900 hover:text-blue-700 transition-colors border-b border-gray-100 pb-3"
                >
                  <span className="font-mono text-sm">LinkedIn</span>
                  <Linkedin size={18} aria-hidden />
                </a>
                <a
                  href={personalInfo.social.email}
                  className="flex items-center justify-between gap-3 text-gray-900 hover:text-blue-700 transition-colors border-b-0 pb-0"
                >
                  <span className="font-mono text-sm">Email</span>
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
