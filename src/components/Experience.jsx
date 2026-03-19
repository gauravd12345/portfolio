import React from 'react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  const logoToken = process.env.REACT_APP_LOGO_DEV_TOKEN;
  const getLogoUrl = (domain) => {
    if (!domain || !logoToken) return null;
    return `https://img.logo.dev/${domain}?token=${logoToken}`;
  };

  return (
    <section id="experience" className="min-h-[calc(100vh-5rem)] px-6 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
            <div className="font-mono text-xs uppercase tracking-widest text-gray-600">
              Experience
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Background</h2>
          <p className="text-gray-600 mt-3 text-base max-w-2xl leading-relaxed">
            A short list of roles and research experience. Dates are shown in the right column.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={`${exp.id}-${idx}`} className="relative pl-8 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-3 md:left-6 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-gray-700 shadow-sm" />

                <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 hover:border-gray-300 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-3 mt-0.5 min-h-[3rem]">
                        {getLogoUrl(exp.logoDomain) && (
                          <img
                            src={getLogoUrl(exp.logoDomain)}
                            alt={`${exp.company} logo`}
                            className="w-12 h-12 object-contain flex-shrink-0"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        )}
                        <div className="flex flex-col justify-center leading-tight min-h-[3rem]">
                          <p className="text-gray-900 font-semibold text-base md:text-lg">
                            {exp.company}
                          </p>
                          <h3 className="text-gray-700 font-medium text-sm md:text-base mt-1">
                            {exp.title}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="font-mono text-xs text-gray-600 whitespace-nowrap md:mt-0 mt-1">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mt-3">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}