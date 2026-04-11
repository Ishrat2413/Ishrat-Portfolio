"use client";

import { useEffect, useState } from "react";
import { MoonStar, SunMedium } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
      //   console.log('Applied dark theme');
    } else {
      //   console.log('Applied light theme');
    }
  }, []);

  const toggleTheme = () => {
    // console.log('Toggle clicked');
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      //   console.log('Switched to dark theme');
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      //   console.log('Switched to light theme');
    }
  };

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.92 }}
      className='p-2 rounded-full border border-emerald-900/15 bg-white/60 dark:bg-black/20 hover:soft-ring'
      aria-label='Toggle theme'>
      {isDark ? <SunMedium size={18} /> : <MoonStar size={18} />}
    </motion.button>
  );
};

export default ThemeToggle;
