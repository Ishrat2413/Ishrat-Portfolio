"use client";

import { achievements, certifications } from "@/data";
import { Award, AwardIcon } from "lucide-react";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section id='achievements' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            <span className='shimmer-text'>Achievements & Certifications</span>
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            My accomplishments and professional certifications
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}>
            <h3 className='text-2xl font-semibold mb-6 flex items-center'>
              <Award className='mr-3 text-[color:var(--primary)]' />
              Achievements
            </h3>
            <div className='space-y-6'>
              {achievements.map((achievement, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className='section-shell play-card p-6 rounded-2xl'>
                  <h4 className='text-lg font-medium mb-2'>
                    {achievement.title}
                  </h4>
                  <p className='text-[color:var(--muted)]'>
                    {achievement.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}>
            <h3 className='text-2xl font-semibold mb-6 flex items-center'>
              <AwardIcon className='mr-3 text-[color:var(--secondary)]' />
              Certifications
            </h3>
            <div className='space-y-6'>
              {certifications.map((cert, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className='section-shell play-card p-6 rounded-2xl'>
                  <h4 className='text-lg font-medium mb-2'>{cert.title}</h4>
                  <p className='text-[color:var(--primary)] mb-2'>
                    {cert.issuer}
                  </p>
                  <p className='text-[color:var(--muted)]'>{cert.year}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
