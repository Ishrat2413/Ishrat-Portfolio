import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Achievements from './components/Achievememts';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </main>
  );
}