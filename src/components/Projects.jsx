import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Code, Sparkles, Layers, X, CheckCircle, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-900/30 dark:bg-slate-950/30 light:bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 dark:text-indigo-300 light:text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 size={14} />
            <span>Practical Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Showcasing practical applications in AI, web development, and digital productivity workflows.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between group hover:border-brand-500/50 relative overflow-hidden transition-all duration-300"
            >
              {/* Top Row: Category Pill & GitHub link */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 dark:text-brand-300 light:text-brand-600 border border-brand-500/30">
                    {project.category}
                  </span>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-700/60 light:border-slate-300 transition-colors"
                    aria-label={`GitHub Repository for ${project.title}`}
                  >
                    <Github size={16} />
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white light:text-slate-900 group-hover:text-brand-400 transition-colors mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed font-normal mb-6">
                  {project.shortDescription}
                </p>
              </div>

              {/* Technologies Used & View Project Button */}
              <div className="space-y-6 pt-4 border-t border-slate-800/80 dark:border-slate-800 light:border-slate-200">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800/60 dark:bg-slate-900/60 light:bg-slate-100 text-slate-300 light:text-slate-700 border border-slate-700/50 light:border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm text-white bg-slate-800 hover:bg-brand-600 dark:bg-slate-800 dark:hover:bg-brand-600 light:bg-slate-900 light:hover:bg-brand-600 border border-slate-700 light:border-slate-800 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-brand-500/20"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={16} className="text-brand-400 group-hover:text-white transition-colors" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl bg-slate-900 dark:bg-slate-900 light:bg-white border border-slate-700 dark:border-slate-700 light:border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 dark:bg-slate-800 light:bg-slate-100 text-slate-400 hover:text-white dark:hover:text-white light:hover:text-slate-900 border border-slate-700 light:border-slate-300 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-brand-500/15 text-brand-400 dark:text-brand-300 light:text-brand-600 border border-brand-500/30">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
                  {selectedProject.title}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                  Overview & Key Implementation
                </h4>
                <p className="text-slate-300 light:text-slate-700 text-base leading-relaxed">
                  {selectedProject.detailedDescription}
                </p>

                <div className="pt-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500 mb-2">
                    Technologies & Tools:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-500/10 text-brand-400 dark:text-brand-300 light:text-brand-700 border border-brand-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800 dark:border-slate-800 light:border-slate-200">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 light:bg-slate-200 light:text-slate-900 light:hover:bg-slate-300 transition-colors"
                >
                  <Github size={18} />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
