import React from 'react';
import { aboutMe, skills } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-8">About Me</h3>
        {aboutMe.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-lg text-gray-700 mb-6">
            {paragraph}
          </p>
        ))}
        
        <h4 className="text-xl font-semibold mb-4">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}