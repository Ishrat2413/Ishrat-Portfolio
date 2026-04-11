"use client";

import { motion } from "framer-motion";

const blobs = [
  { id: 1, className: "top-[8%] left-[6%] w-44 h-44 bg-emerald-400/20" },
  { id: 2, className: "top-[20%] right-[8%] w-56 h-56 bg-cyan-400/20" },
  { id: 3, className: "top-[48%] left-[12%] w-48 h-48 bg-blue-300/20" },
  { id: 4, className: "bottom-[14%] right-[14%] w-52 h-52 bg-teal-400/20" },
  { id: 5, className: "bottom-[8%] left-[45%] w-44 h-44 bg-rose-300/15" },
];

const AnimatedBackdrop = () => {
  return (
    <div className='fixed inset-0 pointer-events-none -z-10 overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(14,124,102,0.1),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,120,71,0.1),transparent_30%)]' />

      {blobs.map((blob, index) => (
        <motion.div
          key={blob.id}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{
            x: [0, 8, -6, 0],
            y: [0, -6, 8, 0],
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 120 + index * 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className='absolute inset-0 opacity-30 dark:opacity-20'
        animate={{ backgroundPosition: ["0px 0px", "120px 80px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,87,72,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(57,87,72,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
};

export default AnimatedBackdrop;
