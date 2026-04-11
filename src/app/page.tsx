import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Achievements from "./components/Achievememts";
import Leadership from "./components/Leadership";
import CursorAura from "./components/CursorAura";
import AnimatedBackdrop from "./components/AnimatedBackdrop";
import InteractivePlayground from "./components/InteractivePlayground";

export default function Home() {
  return (
    <main className='min-h-screen transition-colors duration-300'>
      <AnimatedBackdrop />
      <CursorAura />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <Leadership />
      <Contact />
      <InteractivePlayground />
    </main>
  );
}
