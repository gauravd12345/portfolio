import React, { useMemo, useState } from 'react';
import { Github, Star } from 'lucide-react';
import { projects, projectTabs } from '../data/portfolioData';

function matchesTab(project, tabId) {
  if (tabId === 'all') return true;
  if (tabId === 'featured') return Boolean(project.featured);
  return project.categories?.includes(tabId) ?? false;
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState('all');

  const visibleProjects = useMemo(
    () => projects.filter((p) => matchesTab(p, activeTab)),
    [activeTab]
  );

  return (
    <section id="projects" className="min-h-[calc(100vh-5rem)] px-6 py-14">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-2.5 h-2.5 bg-blue-600 rounded-full" />
            <div className="font-mono text-xs uppercase tracking-widest text-blue-700">
              Projects
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Selected Work</h2>
          <p className="text-slate-600 mt-3 text-base max-w-2xl leading-relaxed">
            Click the GitHub icon next to a project to open the repository. Featured projects have a gold star.
          </p>
        </div>

        <div
          className="flex flex-wrap gap-2 mb-8"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {projectTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                id={`project-tab-${tab.id}`}
                aria-controls="project-panel"
                onClick={() => setActiveTab(tab.id)}
                className={[
                  'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                  isActive
                    ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:bg-slate-50 hover:text-blue-800'
                ].join(' ')}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          id="project-panel"
          role="tabpanel"
          aria-labelledby={`project-tab-${activeTab}`}
          className="space-y-4"
        >
          {visibleProjects.length === 0 ? (
            <p className="text-slate-600 text-sm py-8 text-center border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              No projects in this category yet.
            </p>
          ) : (
            visibleProjects.map((project, idx) => (
            <div
              key={`${project.id}-${idx}`}
              className="px-6 py-6 rounded-2xl border border-gray-200 bg-white"
            >
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
                        className="text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200 rounded-full px-3 py-1"
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
                    className="flex items-center justify-center p-2 rounded-xl border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-colors flex-shrink-0"
                    aria-label={`GitHub for ${project.title}`}
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
              </div>
            </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}