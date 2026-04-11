"use client";

import { leadershipActivities } from "@/data";
import { motion } from "framer-motion";
import { ShieldCheck, Users } from "lucide-react";

const Leadership = () => {
  return (
    <section id='leadership' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-16'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            <span className='shimmer-text'>Leadership & Extracurricular</span>
          </h2>
          <p className='text-lg text-[color:var(--muted)]'>
            Roles where I practiced teamwork, ownership, and real-world impact.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {leadershipActivities.map((activity, index) => (
            <motion.article
              key={activity.role}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className='section-shell play-card rounded-3xl p-6'>
              <div className='inline-flex p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 mb-4'>
                {index % 2 === 0 ? (
                  <ShieldCheck
                    size={18}
                    className='text-[color:var(--primary)]'
                  />
                ) : (
                  <Users size={18} className='text-[color:var(--primary)]' />
                )}
              </div>
              <h3 className='text-xl font-semibold mb-2'>{activity.role}</h3>
              <p className='text-[color:var(--primary)] font-medium mb-1'>
                {activity.organization}
              </p>
              <p className='text-sm text-[color:var(--muted)] mb-3'>
                {activity.period}
              </p>
              <p className='text-[color:var(--muted)] leading-relaxed'>
                {activity.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
