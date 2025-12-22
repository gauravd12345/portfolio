import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm {personalInfo.name}
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 mb-8">
          {personalInfo.tagline}
        </p>
        <div className="flex space-x-4">
          <a href={personalInfo.social.github} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Github size={24} />
          </a>
          <a href={personalInfo.social.linkedin} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Linkedin size={24} />
          </a>
          <a href={personalInfo.social.email} className="p-2 hover:bg-gray-100 rounded-lg transition">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}