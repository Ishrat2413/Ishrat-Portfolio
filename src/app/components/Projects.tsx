"use client";

import { projects } from "@/data";
import {
  ExternalLink,
  Github,
  ArrowRight,
  Star,
  Code2,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;

  const visibleProjects = useMemo(
    () => (showAll ? projects : projects.slice(0, initialCount)),
    [showAll],
  );

  const hasMoreProjects = projects.length > initialCount;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.14 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section id='projects' className='py-20 px-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-14'>
          <h2 className='font-[var(--font-display)] text-4xl md:text-5xl mb-4'>
            Featured{" "}
            <span className='text-[color:var(--primary)] shimmer-text'>
              Projects
            </span>
          </h2>
          <p className='text-lg text-[color:var(--muted)] max-w-3xl mx-auto'>
            Production-focused builds across restaurant systems, travel
            intelligence, and real client products.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='show'
          key={showAll ? "all-projects" : "limited-projects"}
          className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {visibleProjects.map((project, index) => (
            <motion.article
              variants={cardVariants}
              key={`${project.title}-${index}`}
              whileHover={{ y: -6, scale: 1.01 }}
              className='group relative section-shell play-card rounded-3xl overflow-hidden'>
              <div
                className={`h-48 relative overflow-hidden ${
                  index % 3 === 0
                    ? "bg-gradient-to-r from-emerald-500 to-teal-700"
                    : index % 3 === 1
                      ? "bg-gradient-to-r from-sky-400 to-blue-600"
                      : "bg-gradient-to-r from-cyan-500 to-indigo-700"
                }`}>
                <div className='absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='text-white text-6xl font-black opacity-20'>
                    {project.title.charAt(0)}
                  </div>
                </div>

                <div className='absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium'>
                  <Star size={14} className='inline mr-1' />
                  Featured
                </div>

                <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='flex space-x-4'>
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20'
                        title='View Source Code'>
                        <Github size={20} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/20 transition-all transform hover:scale-110 border border-white/20'
                        title='Live Demo'>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className='p-8'>
                <div className='flex items-start justify-between mb-3'>
                  <h3 className='text-2xl font-[var(--font-display)] group-hover:text-[color:var(--primary)] transition-colors'>
                    {project.title}
                  </h3>
                  <Code2
                    size={20}
                    className='text-[color:var(--muted)] group-hover:text-[color:var(--primary)] transition-colors'
                  />
                </div>

                <p className='text-[color:var(--muted)] mb-5 leading-relaxed'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mb-6'>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='play-card px-3 py-1.5 bg-emerald-100/70 dark:bg-emerald-800/20 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-medium rounded-full border border-emerald-400/25'>
                      {tech}
                    </span>
                  ))}
                </div>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className='space-y-2 mb-6'>
                    {project.highlights.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className='text-sm text-[color:var(--muted)] flex items-start gap-2'>
                        <Sparkles
                          size={14}
                          className='mt-0.5 text-[color:var(--secondary)]'
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className='flex flex-wrap gap-x-5 gap-y-3 pt-4 border-t border-emerald-900/10 dark:border-emerald-100/10'>
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors group/github'>
                      <Github size={18} />
                      <span>Code</span>
                      <ArrowRight
                        size={16}
                        className='transform group-hover/github:translate-x-1 transition-transform'
                      />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 hover:text-[color:var(--primary)] transition-colors group/live'>
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                      <ArrowRight
                        size={16}
                        className='transform group-hover/live:translate-x-1 transition-transform'
                      />
                    </a>
                  )}
                </div>
              </div>

              <div className='absolute top-4 right-4 w-12 h-12 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors' />
            </motion.article>
          ))}
        </motion.div>

        <div className='text-center mt-14'>
          {hasMoreProjects && (
            <button
              type='button'
              onClick={() => setShowAll((prev) => !prev)}
              className='mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-700/30 px-6 py-2.5 hover:bg-emerald-100/50 dark:hover:bg-emerald-900/20'>
              {showAll
                ? "Show Less Projects"
                : `View More Projects (${projects.length - initialCount}+ )`}
            </button>
          )}

          <p className='text-[color:var(--muted)] mb-6 text-lg'>
            Interested in seeing more of my work?
          </p>
          <a
            href='https://github.com/Ishrat2413'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-[color:var(--primary)] hover:brightness-110 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group/cta'>
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ArrowRight
              size={20}
              className='transform group-hover/cta:translate-x-1 transition-transform'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
