"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Playground", href: "#playground" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Achievements", href: "#achievements" },
    { name: "Leadership", href: "#leadership" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className='fixed top-0 z-50 w-full border-b border-emerald-900/10 bg-[color:var(--surface)] backdrop-blur-xl'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <a
            href='#home'
            className='font-[var(--font-display)] text-xl sm:text-2xl tracking-tight'>
            Ishrat Rintu
          </a>

          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-medium text-[color:var(--muted)] hover:text-[color:var(--primary)]'>
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className='md:hidden flex items-center'>
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='p-2 ml-2 rounded-lg border border-emerald-900/15'
              aria-label='Toggle navigation menu'>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className='md:hidden mb-3 rounded-2xl section-shell'>
              <div className='px-2 py-3 space-y-1'>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='block px-3 py-2 rounded-lg text-[color:var(--muted)] hover:bg-white/40 dark:hover:bg-black/25 hover:text-[color:var(--primary)]'
                    onClick={() => setIsOpen(false)}>
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
