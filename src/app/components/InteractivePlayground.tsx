"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Hand, Sparkles, RotateCcw } from "lucide-react";

const cards = [
  {
    title: "Drag Me",
    desc: "Move cards around and make your own layout.",
    tone: "from-emerald-500 to-teal-600",
  },
  {
    title: "Tilt & Hover",
    desc: "Hover to get pop and bounce reactions.",
    tone: "from-blue-400 to-indigo-500",
  },
  {
    title: "Snap Feel",
    desc: "Release and watch spring movement settle.",
    tone: "from-cyan-500 to-blue-600",
  },
  {
    title: "Explore",
    desc: "Scroll and interact with animated sections.",
    tone: "from-violet-500 to-indigo-600",
  },
];

const InteractivePlayground = () => {
  const constraintsRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id='playground' className='py-20 px-4'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className='text-center mb-10'>
          <h2 className='font-[var(--font-display)] text-3xl md:text-4xl mb-4'>
            <span className='shimmer-text'>Interaction Playground</span>
          </h2>
          <p className='text-lg text-[color:var(--muted)] inline-flex items-center gap-2'>
            <Hand size={18} />
            Drag, hover, and play with the animated cards.
          </p>
        </motion.div>

        <div className='section-shell rounded-3xl p-4 sm:p-6'>
          <div
            ref={constraintsRef}
            className='relative min-h-[360px] sm:min-h-[420px] rounded-2xl border border-emerald-900/15 overflow-hidden bg-white/20 dark:bg-black/20'>
            <motion.div
              className='absolute top-4 right-4 text-xs text-[color:var(--muted)] inline-flex items-center gap-1 rounded-full px-3 py-1 border border-emerald-900/15 bg-white/40 dark:bg-black/25'
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.5, repeat: Infinity }}>
              <Sparkles size={13} />
              Play mode enabled
            </motion.div>

            {cards.map((card, index) => (
              <motion.article
                key={card.title}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.25}
                dragTransition={{ bounceStiffness: 180, bounceDamping: 16 }}
                whileHover={{ scale: 1.06, rotate: index % 2 === 0 ? 2 : -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className={`absolute w-[220px] sm:w-[250px] rounded-2xl p-4 text-white shadow-2xl bg-gradient-to-br ${card.tone}`}
                style={{
                  top: `${30 + (index % 2) * 130}px`,
                  left: `${20 + index * 70}px`,
                }}>
                <h3 className='font-semibold text-lg'>{card.title}</h3>
                <p className='text-sm text-white/90 mt-1'>{card.desc}</p>
              </motion.article>
            ))}

            <motion.div
              className='absolute bottom-4 right-4 text-xs text-[color:var(--muted)] inline-flex items-center gap-1 rounded-full px-3 py-1 border border-emerald-900/15 bg-white/40 dark:bg-black/25'
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}>
              <RotateCcw size={13} />
              Refresh page to reset positions
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractivePlayground;
