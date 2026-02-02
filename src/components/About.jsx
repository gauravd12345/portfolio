import React from 'react';
import { aboutMe, skills } from '../data/portfolioData';
import { User, Code2 } from 'lucide-react';

export default function About() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
            <User className="text-gray-900" size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            {aboutMe.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-lg">
            <div className="flex items-center mb-6">
              <Code2 className="text-gray-900 mr-3" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">Technical Expertise</h3>
            </div>
            <p className="text-gray-600 mb-6">
              I work with a diverse range of technologies spanning embedded systems, 
              firmware development, and modern web applications.
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-900">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, idx) => (
              <span 
                key={idx} 
                className="px-5 py-2.5 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:border-gray-900 hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}