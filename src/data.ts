import { Project, Experience, Education, Achievement, Certification, SkillCategory } from '@/types';

export const personalInfo = {
  name: "MST. ISHRAT JAHAN RINTU",
  title: "Computer Science and Engineering Student",
  email: "ishratjahanrintu72@gmail.com",
  phone: "+880-1312289158",
  github: "Ishrat2413",
  linkedin: "ishrat-jahan-rintu-",
  location: "Dhaka, Bangladesh",
  about: "A passionate Computer Science and Engineering student with expertise in full-stack development using the MERN stack, React, and Next.js. Experienced in building responsive web applications with modern technologies."
};

export const projects: Project[] = [
  {
    title: "Food Family Restaurant",
    description: "A well build MERN Stack Restaurant project for both Admin & Customer with Advance Features.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Firebase"],
    githubLink: "https://github.com/Ishrat2413/food-family-res",
    liveLink: "https://food-family-restaurant.vercel.app/"
  },
  {
    title: "Book Vibe",
    description: "A React-Router based library project where users can view books, read them, and leave reviews.",
    technologies: ["React", "React Router", "CSS"],
    githubLink: "https://github.com/yourusername/book-vibe",
    liveLink: "https://moonlit-llama-366fed.netlify.app/"
  },
  {
    title: "Ratatery Real State",
    description: "A React-Router and Firebase project showcasing real estate properties with login/registration functionality using Firebase authentication.",
    technologies: ["React", "Firebase", "React Router", "CSS"],
    liveLink: "https://keen-sunflower-c1159d.netlify.app/"
  },
  {
    title: "Craftopia",
    description: "A full MERN STACK project showcasing JavaScript skills and various JS libraries.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Ishrat2413/Craftopia-MERN-Stack",
  },
  {
    title: "Destination Dairy",
    description: "A MERN Stack application with login/registration, landing page, itinerary system, feedback system and interactive ML for suggestions.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Machine Learning"],
    githubLink: "https://github.com/PHANT0M24/Travel-Guide-System",
  }
];

export const experiences: Experience[] = [
  {
    role: "Jr. ReactJS Developer",
    company: "Innobiz Consultancy Service",
    period: "March 2025 – May 2025",
    description: [
      "Developed and tested web applications using NextJS, ReactJS, TypeScript.",
      "Collaborated with senior developers to implement new features and worked in API generation."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "BRAC University",
    period: "2021 – 2025",
    location: "Dhaka, Bangladesh",
    coursework: [
      "Data Structures", "Algorithms", "Machine Learning", 
      "Image Processing", "Database Systems", "System Analysis and Design", 
      "Microprocessor", "Computer Architecture"
    ]
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "BIAM Model School and College",
    period: "2018 – 2020",
    location: "Bogura, Bangladesh"
  },
  {
    degree: "Secondary School Certificate",
    institution: "BIAM Model School and College",
    period: "2016 – 2018",
    location: "Bogura, Bangladesh"
  }
];

export const achievements: Achievement[] = [
  {
    title: "Senior Executive in IT branch",
    description: "Promoted as a senior executive of BRAC University Entrepreneurship Development Forum's IT branch based on communication and editing skills."
  },
  {
    title: "Qualified for National Chemistry Olympiad",
    description: "Qualified through regional qualification to participate in the Nationals."
  }
];

export const certifications: Certification[] = [
  {
    title: "Certified MERN Stack Developer",
    issuer: "Programming Hero",
    year: "2024"
  },
  {
    title: "NDAC 2025: National Data Analytics Competition",
    issuer: "National Level",
    year: "2025"
  },
  {
    title: "Certified in CSS and JS",
    issuer: "Udemy",
    year: "2024"
  },
  {
    title: "Certified Digital Marketer",
    issuer: "SR DreamIT",
    year: "2024"
  }
];

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript"]
  },
  {
    name: "Frontend",
    skills: ["HTML/CSS", "React", "NextJS", "Redux", "Zustand"]
  },
  {
    name: "Backend",
    skills: ["NodeJS", "Express"]
  },
  {
    name: "Database",
    skills: ["NoSQL", "SQL"]
  },
  {
    name: "Mobile & Others",
    skills: ["React Native", "WebSocket", "Machine Learning"]
  }
];

export const languages = [
  { name: "Bangla", level: "Fluent" },
  { name: "Hindi", level: "Intermediate" },
  { name: "English", level: "Intermediate" }
];