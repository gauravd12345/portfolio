import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-3">{project.title}</h4>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.link} className="flex items-center text-sm hover:text-gray-600">
                  <ExternalLink size={16} className="mr-1" />
                  Demo
                </a>
                <a href={project.github} className="flex items-center text-sm hover:text-gray-600">
                  <Github size={16} className="mr-1" />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}