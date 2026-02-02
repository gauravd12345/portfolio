import React from 'react';
import { Github, Linkedin, Mail, Cpu } from 'lucide-react';
import { personalInfo, aboutMe } from '../data/portfolioData';

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <Cpu className="text-white" size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {personalInfo.name}
            </h1>
            <p className="text-lg text-gray-600 mt-1">
              Embedded Software Developer
            </p>
          </div>
        </div>
        <p className="text-gray-700 mb-8 max-w-3xl text-lg leading-relaxed">
          {aboutMe.paragraphs[0]}
        </p>
        {aboutMe.paragraphs[1] && (
          <p className="text-gray-700 mb-8 max-w-3xl text-lg leading-relaxed">
            {aboutMe.paragraphs[1]}
          </p>
        )}
        <div className="flex space-x-4">
          <a 
            href={personalInfo.social.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={personalInfo.social.linkedin} 
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href={personalInfo.social.email} 
            className="p-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all shadow-md"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
