"use client";

import { experiences } from "@/data";
import { Calendar, BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id='experience' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            Work Experience
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            My professional journey and contributions
          </p>
        </motion.div>

        <div className='space-y-10'>
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className='relative pl-10 section-shell rounded-3xl p-6 sm:p-8'>
              <div className='absolute left-4 top-8 h-[80%] w-[2px] bg-gradient-to-b from-emerald-500 to-orange-400' />
              <div className='absolute left-2.5 top-8 w-5 h-5 bg-[color:var(--primary)] rounded-full flex items-center justify-center'>
                <BriefcaseBusiness size={12} className='text-white' />
              </div>

              <div className='mb-4'>
                <h3 className='text-2xl font-[var(--font-display)]'>
                  {exp.role}
                </h3>
                <p className='text-lg text-[color:var(--primary)] mb-2'>
                  {exp.company}
                </p>
                <div className='inline-flex items-center gap-2 rounded-full border border-emerald-900/15 px-3 py-1 text-sm text-[color:var(--muted)]'>
                  <Calendar size={16} className='mr-2' />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className='space-y-2'>
                {exp.description.map((item, i) => (
                  <li key={i} className='text-[color:var(--muted)] flex'>
                    <span className='mr-2 text-[color:var(--secondary)]'>
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
