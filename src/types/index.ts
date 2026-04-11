export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights?: string[];
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
  result?: string;
  cgpa?: string;
  thesis?: string;
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

export interface LeadershipActivity {
  role: string;
  organization: string;
  period: string;
  description: string;
}
