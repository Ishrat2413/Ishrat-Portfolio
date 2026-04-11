"use client";

import { personalInfo } from "@/data";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Download,
  Sparkles,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import rintu from "../../../public/ishrat.png";

const stats = [
  { label: "Current Role", value: "Full Stack Developer" },
  { label: "Experience Focus", value: "Scalable Web + AI" },
  { label: "Location", value: "Dhaka, Bangladesh" },
];

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-4 py-20'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='section-shell rounded-[2rem] p-6 sm:p-10 lg:p-12 relative overflow-hidden'>
          <div className='absolute inset-0 -z-10'>
            <div className='absolute -top-14 -right-14 h-52 w-52 rounded-full bg-emerald-400/20 blur-3xl' />
            <div className='absolute -bottom-20 left-10 h-60 w-60 rounded-full bg-orange-300/20 blur-3xl' />
          </div>

          <div className='grid lg:grid-cols-[300px_1fr] gap-10 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55 }}
              className='mx-auto'>
              <div className='relative w-56 h-56 sm:w-64 sm:h-64'>
                <div className='absolute inset-0 rounded-[2rem] bg-gradient-to-br from-emerald-400/50 via-teal-400/20 to-orange-300/45 soft-ring' />
                <div className='absolute inset-2 rounded-[1.6rem] overflow-hidden border border-white/60 dark:border-white/15'>
                  <Image
                    src={rintu}
                    alt='Ishrat Jahan Rintu'
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}>
              <div
                id='about'
                className='inline-flex items-center gap-2 rounded-full border border-emerald-900/15 px-3 py-1 text-sm text-[color:var(--muted)] mb-5'>
                <Sparkles size={14} />
                Building modern web products with AI-ready architecture
              </div>

              <h1 className='font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4'>
                {personalInfo.name}
              </h1>
              <h2 className='text-xl sm:text-2xl text-[color:var(--primary)] font-semibold mb-4'>
                {personalInfo.title}
              </h2>
              <p className='text-base sm:text-lg text-[color:var(--muted)] max-w-2xl leading-relaxed mb-7'>
                {personalInfo.about}
              </p>

              <div className='grid sm:grid-cols-3 gap-3 mb-7'>
                {stats.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.2 + idx * 0.08 }}
                    className='rounded-2xl border border-emerald-900/10 bg-white/45 dark:bg-black/20 p-3'>
                    <p className='text-xs uppercase tracking-wide text-[color:var(--muted)]'>
                      {item.label}
                    </p>
                    <p className='font-semibold mt-1'>{item.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className='flex flex-wrap items-center gap-3 mb-6'>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className='inline-flex items-center gap-2 rounded-full bg-[color:var(--primary)] text-white px-5 py-3 hover:scale-[1.02]'>
                  <Mail size={18} />
                  Contact Me
                </a>
                <a
                  href='#projects'
                  className='inline-flex items-center gap-2 rounded-full border border-emerald-900/15 px-5 py-3 hover:bg-white/40 dark:hover:bg-black/20'>
                  <BriefcaseBusiness size={18} />
                  View Projects
                </a>
                <a
                  href='/MstIshratJahanRintu_Resume.pdf'
                  download='MstIshratJahanRintu_Resume.pdf'
                  className='inline-flex items-center gap-2 rounded-full border border-orange-500/30 px-5 py-3 text-[color:var(--secondary)] hover:bg-orange-300/10'>
                  <Download size={18} />
                  Download Resume
                </a>
              </div>

              <div className='flex flex-wrap gap-5 text-sm text-[color:var(--muted)]'>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className='inline-flex items-center gap-2 hover:text-[color:var(--primary)]'>
                  <Phone size={16} />
                  {personalInfo.phone}
                </a>
                <span className='inline-flex items-center gap-2'>
                  <MapPin size={16} />
                  {personalInfo.location}
                </span>
                <a
                  href={`https://github.com/${personalInfo.github}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 hover:text-[color:var(--primary)]'>
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 hover:text-[color:var(--primary)]'>
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
