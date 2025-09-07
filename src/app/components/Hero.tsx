import { personalInfo } from '@/data';
import { Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import Image from 'next/image';
import rintu from "../../../public/ishrat.png"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Circular Profile Image */}
        <div className="relative w-40 h-40 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-75"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
            {/* Replace with your actual image path */}
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              IJ
            </div>
            {/* Uncomment below and add your image to public/images folder */}
            <Image
              src={rintu}
              alt="Ishrat Jahan Rintu"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {personalInfo.about}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Mail size={20} />
            Contact Me
          </a>
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/IshratJahanRintuCV.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Phone size={20} />
            <span>{personalInfo.phone}</span>
          </a>
          <a
            href={`https://github.com/${personalInfo.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href={`https://linkedin.com/in/${personalInfo.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;