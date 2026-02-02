import React from 'react';
import { Github, Linkedin, Mail, Code, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <Cpu className="text-white" size={40} />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
          Embedded Software Developer
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Specializing in firmware, embedded systems, and modern web technologies. 
          Passionate about creating efficient, clean code and exceptional user experiences.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a 
            href={personalInfo.social.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={personalInfo.social.email} 
            className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 shadow-lg hover:shadow-xl"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-white border border-gray-300 rounded-full shadow-sm">
            <Code size={18} className="text-gray-900" />
            <span className="text-sm text-gray-700 font-medium">Available for opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}