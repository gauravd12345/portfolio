import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Experience</h3>
        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-2 border-gray-300 pl-6">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h4 className="text-xl font-semibold">{exp.title}</h4>
                <span className="text-sm text-gray-600 md:text-right">{exp.period}</span>
              </div>
              <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}