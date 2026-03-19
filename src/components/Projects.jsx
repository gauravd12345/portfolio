import React from 'react';
import { Github, Star } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-5rem)] px-6 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
            <div className="font-mono text-xs uppercase tracking-widest text-gray-600">
              Projects
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-gray-600 mt-3 text-base max-w-2xl leading-relaxed">
            Click the GitHub icon next to a project to open the repository. Featured projects have a gold star.
          </p>
        </div>

        <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {projects.map((project, idx) => (
            <div key={project.id} className="px-6 py-6">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 truncate">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star className="text-yellow-500 fill-yellow-500" size={18} aria-label="Featured" />
                    )}
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-full px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2 rounded-xl border border-gray-200 text-gray-900 hover:border-gray-900 hover:bg-gray-50 transition-colors flex-shrink-0"
                    aria-label={`GitHub for ${project.title}`}
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}