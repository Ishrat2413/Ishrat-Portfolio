"use client";

import { education } from "@/data";
import {
  Calendar,
  MapPin,
  BookOpen,
  GraduationCap,
  Microscope,
} from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id='education' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            Education
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            My academic background and achievements
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {education.map((edu, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className='section-shell rounded-3xl p-6'>
              <div className='inline-flex p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4'>
                <GraduationCap
                  size={18}
                  className='text-[color:var(--primary)]'
                />
              </div>
              <h3 className='text-xl font-semibold mb-2'>{edu.degree}</h3>
              <p className='text-[color:var(--primary)] mb-4 font-medium'>
                {edu.institution}
              </p>

              <div className='flex items-center text-[color:var(--muted)] mb-2'>
                <Calendar size={16} className='mr-2' />
                <span>{edu.period}</span>
              </div>

              <div className='flex items-center text-[color:var(--muted)] mb-4'>
                <MapPin size={16} className='mr-2' />
                <span>{edu.location}</span>
              </div>

              {edu.cgpa && (
                <p className='text-sm mb-3'>
                  <span className='font-semibold'>CGPA:</span> {edu.cgpa}
                </p>
              )}

              {edu.result && (
                <p className='text-sm mb-3'>
                  <span className='font-semibold'>Result:</span> {edu.result}
                </p>
              )}

              {edu.thesis && (
                <div className='mb-4 rounded-xl bg-white/45 dark:bg-black/20 p-3 border border-emerald-900/10'>
                  <p className='text-sm font-semibold mb-1 inline-flex items-center gap-2'>
                    <Microscope size={14} /> Thesis
                  </p>
                  <p className='text-sm text-[color:var(--muted)] leading-relaxed'>
                    {edu.thesis}
                  </p>
                </div>
              )}

              {edu.coursework && (
                <div className='mt-4'>
                  <div className='flex items-center mb-2'>
                    <BookOpen size={16} className='mr-2' />
                    <span className='font-medium'>Relevant Coursework</span>
                  </div>
                  <div className='flex flex-wrap gap-2'>
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className='px-3 py-1 bg-white/60 dark:bg-black/20 text-sm rounded-full border border-emerald-900/10'>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
