"use client";

import { skills, languages } from "@/data";
import { motion } from "framer-motion";

const Skills = () => {
  const levelToWidth = (level: string) => {
    if (level === "Fluent") return "100%";
    if (level === "Intermediate") return "72%";
    return "45%";
  };

  return (
    <section id='skills' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            Skills & Languages
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            Technologies I work with and languages I speak
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className='section-shell rounded-3xl p-6'>
            <h3 className='text-2xl font-semibold mb-6 text-center md:text-left'>
              Technical Skills
            </h3>
            <div className='space-y-6'>
              {skills.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}>
                  <h4 className='text-lg font-medium mb-3 text-[color:var(--muted)]'>
                    {category.name}
                  </h4>
                  <div className='flex flex-wrap gap-3'>
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className='px-4 py-2 bg-white/60 dark:bg-black/25 rounded-full text-sm font-medium border border-emerald-900/10 hover:border-emerald-500/50'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
            className='section-shell rounded-3xl p-6'>
            <h3 className='text-2xl font-semibold mb-6 text-center md:text-left'>
              Languages
            </h3>
            <div className='space-y-6'>
              {languages.map((language, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: index * 0.1 }}>
                  <div className='flex justify-between items-center mb-2'>
                    <span className='font-medium'>{language.name}</span>
                    <span className='text-sm text-[color:var(--primary)]'>
                      {language.level}
                    </span>
                  </div>
                  <div className='w-full bg-white/50 dark:bg-black/30 rounded-full h-2.5 overflow-hidden'>
                    <motion.div
                      className='h-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-orange-400'
                      initial={{ width: 0 }}
                      whileInView={{ width: levelToWidth(language.level) }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.12 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
