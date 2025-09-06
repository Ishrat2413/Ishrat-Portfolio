export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  coursework?: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}