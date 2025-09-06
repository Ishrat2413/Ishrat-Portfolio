"use client"

import { projects } from '@/data';
import { ExternalLink, Github, ArrowRight, Star, Code2 } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image/Placeholder with gradient based on index */}
              <div className={`h-48 relative overflow-hidden ${
                index % 4 === 0 ? 'bg-gradient-to-r from-blue-500 to-purple-600' :
                index % 4 === 1 ? 'bg-gradient-to-r from-green-500 to-teal-600' :
                index % 4 === 2 ? 'bg-gradient-to-r from-orange-500 to-red-600' :
                'bg-gradient-to-r from-purple-500 to-pink-600'
              }`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Featured badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Star size={14} className="inline mr-1" />
                  Featured
                </div>
                
                {/* Hover overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 transition-opacity duration-300 ${
                  hoveredProject === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
                        title="View Source Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <Code2 size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full border border-blue-200 dark:border-blue-700/50 transition-all group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 group-hover:border-blue-300 dark:group-hover:border-blue-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/github"
                    >
                      <Github size={18} />
                      <span>Code</span>
                      <ArrowRight size={16} className="transform group-hover/github:translate-x-1 transition-transform" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/live"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                      <ArrowRight size={16} className="transform group-hover/live:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-blue-500/20 transition-colors"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/Ishrat2413"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group/cta"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ArrowRight size={20} className="transform group-hover/cta:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;