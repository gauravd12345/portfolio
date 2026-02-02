import React from 'react';
import { experiences } from '../data/portfolioData';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-3">
            <Briefcase className="text-gray-900" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Experience
          </h2>
          <div className="w-20 h-0.5 bg-gray-900 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-3 h-3 bg-white border-2 border-gray-900 rounded-full hidden md:block shadow-md"></div>
                
                <div className="ml-0 md:ml-16">
                  <div className="bg-white rounded-xl p-5 md:p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 hover:border-gray-300">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <p className="text-base text-gray-700 font-semibold mb-2">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full w-fit">
                        <Calendar size={14} className="mr-1.5" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-base">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}