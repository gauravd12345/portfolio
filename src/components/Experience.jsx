import React from 'react';
import { experiences } from '../data/portfolioData';
import { getLogoDevImageUrl } from '../utils/logoDev';

export default function Experience() {
  const logoToken = process.env.REACT_APP_LOGO_DEV_TOKEN;

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
          <div className="absolute left-3 md:left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-6">
            {experiences.map((exp) => {
              const logoSrc = getLogoDevImageUrl(exp.logoDomain, logoToken);
              return (
                <div key={exp.id} className="relative pl-8 md:pl-16">
                  <div className="absolute left-3 md:left-6 -translate-x-1/2 top-4 w-3 h-3 rounded-full bg-gray-700 shadow-sm" />

                  <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-5 hover:border-gray-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start gap-3">
                          {logoSrc ? (
                            <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center p-1.5">
                              <img
                                src={logoSrc}
                                alt={`${exp.company} logo`}
                                width={48}
                                height={48}
                                className="h-full w-full object-contain"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ) : null}
                          <div className="min-w-0 flex-1 flex flex-col justify-center leading-tight">
                            <p className="text-gray-900 font-semibold text-base md:text-lg">
                              {exp.company}
                            </p>
                            <h3 className="text-gray-700 font-medium text-sm md:text-base mt-1">
                              {exp.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="font-mono text-xs text-gray-600 whitespace-nowrap md:mt-1 shrink-0 md:text-right">
                        {exp.period}
                      </div>
                    </div>

                    {exp.description ? (
                      <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        {exp.description}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
