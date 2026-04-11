import {
  Project,
  Experience,
  Education,
  Achievement,
  Certification,
  SkillCategory,
} from "@/types";

export const personalInfo = {
  name: "MST. ISHRAT JAHAN RINTU",
  title: "Full Stack Developer",
  email: "ishratjahanrintu72@gmail.com",
  phone: "+880-1312289158",
  github: "Ishrat2413",
  linkedin: "ishrat-jahan-rintu-",
  location: "Dhaka, Bangladesh",
  about:
    "Full Stack Developer experienced in building scalable web applications with React, Next.js, Node.js, NestJS, and TypeScript. Proficient in end-to-end development, database design, REST APIs, and integrating AI/ML features.",
  portfolio: "#",
};

export const projects: Project[] = [
  {
    title: "Restaurant Management System",
    description:
      "A full-featured restaurant platform with separate admin and customer interfaces, advanced ordering, and real-time order tracking.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Role-based dashboards for admin and customers",
      "Advanced order management with live status updates",
      "Payment integration and end-to-end tracking",
    ],
    githubLink: "https://github.com/Ishrat2413/food-family-restaurant",
    liveLink: "https://food-family-restaurant.vercel.app/",
  },
  {
    title: "Explore Ease",
    description:
      "Intelligent travel planning system with ML-based recommendations, itinerary builder, feedback mechanism, and integrated booking flows.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Flask",
      "TensorFlow",
    ],
    highlights: [
      "ML-powered destination and itinerary suggestions",
      "User feedback and tracking system",
      "Secure booking and payment features",
    ],
    githubLink: "https://github.com/Ishrat2413/Travel-Guide-System-ML-",
    liveLink: "https://explore-ease-travel.vercel.app/",
  },
  {
    title: "The EchoSphere",
    description: "A news web application with full authentication flow.",
    technologies: ["React", "Node.js", "Firebase", "JavaScript"],
    githubLink: "https://github.com/Ishrat2413/EchoSphere",
    liveLink: "https://the-echosphere.web.app",
  },
  {
    title: "Book Vibe",
    description:
      "A React Router based library project where users can browse books, read details, and leave reviews.",
    technologies: ["React", "React Router", "CSS"],
    githubLink: "https://github.com/yourusername/book-vibe",
    liveLink: "https://moonlit-llama-366fed.netlify.app/",
  },
  {
    title: "Ratatery Real State",
    description:
      "A React Router and Firebase project showcasing real estate properties with login and registration.",
    technologies: ["React", "Firebase", "React Router", "CSS"],
    liveLink: "https://keen-sunflower-c1159d.netlify.app/",
  },
  {
    title: "Craftopia",
    description:
      "A full MERN stack project showcasing JavaScript and modern frontend libraries.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    githubLink: "https://github.com/Ishrat2413/Craftopia-MERN-Stack",
  },
  {
    title: "Destination Dairy",
    description:
      "A MERN stack application with authentication, itinerary flow, feedback, and ML-powered suggestions.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Machine Learning",
    ],
    githubLink: "https://github.com/PHANT0M24/Travel-Guide-System",
  },
  {
    title: "Farrior Homes",
    description:
      "A complex property selling platform with real-time communication and premium workflow features.",
    technologies: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Socket.IO",
      "RabbitMQ",
      "Stripe",
    ],
    highlights: [
      "Real-time chat system between platform users",
      "Subscription-enabled feature access",
      "Event-driven backend workflows with RabbitMQ",
      "Secure payment integration using Stripe",
    ],
    liveLink: "http://farriorhomes.com/",
  },
  {
    title: "OCMP",
    description:
      "A complete foreign operations management system connecting driver lifecycle, vehicle lifecycle, operational documents, and role-based workflows in one scalable platform.",
    technologies: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Postman",
      "Role-Based Access Control",
      "Subscription System",
    ],
    highlights: [
      "Managed deeply connected entities: drivers, vehicles, maintenance, repairs, tools, certifications, and operations",
      "Designed multi-role permissions for super admin, transport manager, and standalone users",
      "Built custom role-based subscription model with 7-day free trial and dependency logic",
      "Led architecture planning, API development, scenario-based backend testing, and frontend optimization",
    ],
    liveLink: "https://ocmp.co.uk/",
  },
  {
    title: "Zilky Wipes",
    description:
      "A wipes selling platform with a full CRM-style management experience where admin controls the complete business workflow from a centralized dashboard.",
    technologies: ["Next.js", "NestJS", "MongoDB", "CRM Dashboard", "Stripe"],
    highlights: [
      "End-to-end admin control across operations",
      "Centralized dashboard for business monitoring",
      "Structured product and customer workflow handling",
    ],
    liveLink: "http://zilky-wipes.vercel.app/",
  },
  {
    title: "Prepcart",
    description:
      "A meal-focused platform with AI meal generation and intelligent recommendation capabilities integrated into the user flow.",
    technologies: ["Next.js", "NestJS", "MongoDB", "AI Integration", "OpenAI"],
    highlights: [
      "AI-powered meal generation",
      "Integrated intelligent recommendation flow",
      "Production-ready backend and frontend integration",
    ],
    liveLink: "http://prepcart.ca/",
  },
  {
    title: "Renewably Energy",
    description:
      "An insurance-type platform with custom subscription handling and scalable service workflows for energy-related operations.",
    technologies: [
      "Next.js",
      "NestJS",
      "MongoDB",
      "Custom Subscription",
      "Workflow Automation",
    ],
    highlights: [
      "Custom subscription architecture",
      "Business workflow support for insurance-style use cases",
      "Full system expansion in progress",
    ],
    liveLink: "http://renewably.energy/",
  },
];

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "FB International BD",
    period: "December 2025 – Present",
    description: [
      "Developed and maintained multiple full-stack applications using React/Next.js and Node.js/NestJS with REST APIs.",
      "Designed robust database architecture for SQL (MySQL/PostgreSQL) and NoSQL (MongoDB) workflows.",
      "Integrated AI-powered features and custom machine learning models into production systems.",
      "Delivered key client projects including Farrior Homes, Zilky Wipes, Prepcart, OCMP, and Renewably Energy.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "BRAC University",
    period: "2021 – 2025",
    location: "Dhaka, Bangladesh",
    cgpa: "3.48 / 4.00",
    thesis:
      "Developing a Programmable Advanced Machine Vision System for Industrial Product Quality Assurance",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Machine Learning",
      "Image Processing",
      "Database Systems",
      "System Analysis and Design",
      "Microprocessor",
      "Computer Architecture",
    ],
  },
  {
    degree: "Higher Secondary School Certificate",
    institution: "BIAM Model School and College",
    period: "2018 – 2020",
    location: "Bogura, Bangladesh",
  },
  {
    degree: "Secondary School Certificate",
    institution: "BIAM Model School and College",
    period: "2016 – 2018",
    location: "Bogura, Bangladesh",
  },
];

export const achievements: Achievement[] = [
  {
    title: "NDAC 2025 - Data Visionary Award",
    description:
      "Received national-level recognition in NDAC 2025 for data analytics and innovation impact.",
  },
  {
    title: "Inter-University Programming Contest Participant",
    description:
      "Participated in competitive programming contests across universities to strengthen algorithmic problem-solving.",
  },
];

export const certifications: Certification[] = [
  {
    title: "MERN Stack Certification",
    issuer: "Programming Hero",
    year: "2024",
  },
  {
    title: "NDAC 2025: Data Visionary Award",
    issuer: "National Level",
    year: "2025",
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Angular", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    name: "Database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    name: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "U-Net"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "Postman", "Jira", "Coolify", "Moon Modeler"],
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Bangla", level: "Fluent" },
  { name: "Hindi", level: "Intermediate" },
];
