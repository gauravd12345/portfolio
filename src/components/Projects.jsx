import React from 'react';
import { Github, FolderKanban } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section className="min-h-[calc(100vh-5rem)] px-6 py-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
              <FolderKanban className="text-white" size={20} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Projects
            </h2>
          </div>
          <div className="w-20 h-0.5 bg-gray-900 rounded-full"></div>
          <p className="text-gray-600 mt-3 text-base">
            A collection of my work in embedded systems, firmware development, and software engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-gray-900 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FolderKanban className="text-white" size={24} />
                  </div>
                  {project.ongoing && (
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                      Ongoing
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4 flex-grow text-sm">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span 
                    key={techIdx} 
                    className="text-xs px-2.5 py-1 bg-gray-50 border border-gray-300 rounded-full font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
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