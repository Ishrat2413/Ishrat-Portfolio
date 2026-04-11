import {
  Project,
  Experience,
  Education,
  Achievement,
  Certification,
  SkillCategory,
  LeadershipActivity,
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
  {
    title: "Job Portal",
    description:
      "A role-based job platform where job seekers apply, employers post openings, and admins oversee system operations.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    highlights: [
      "Role-based dashboards for seekers, employers, and admins",
      "Job application lifecycle tracking",
      "Secure authentication and authorization",
    ],
    githubLink: "https://github.com/Ishrat2413/job-portal",
  },
  {
    title: "Car Doctor",
    description:
      "An automotive service platform with booking workflows, service tracking, and payment processing.",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Stripe",
      "Tailwind CSS",
    ],
    highlights: [
      "Service booking and order management",
      "Service history and status tracking",
      "Integrated online payment flow",
    ],
    liveLink: "https://car-doctor-blond.vercel.app/",
  },
  {
    title: "Tetris Game",
    description:
      "A classic Tetris implementation with smooth controls, score tracking, and progressive levels.",
    technologies: ["Python", "Pygame", "Game Loop", "Collision Handling"],
    highlights: [
      "Responsive keyboard controls and gameplay loop",
      "Score tracking with level progression",
      "Piece rotation and grid collision logic",
    ],
    githubLink: "https://github.com/Ishrat2413/Tetris-PyGame",
  },
  {
    title: "Brain MRI Segmentation",
    description:
      "Medical image analysis project using U-Net architecture for accurate brain MRI segmentation and evaluation.",
    technologies: [
      "Python",
      "TensorFlow",
      "U-Net",
      "OpenCV",
      "Medical Imaging",
    ],
    highlights: [
      "U-Net based segmentation pipeline",
      "Image preprocessing and mask generation",
      "Model evaluation for clinical-style accuracy metrics",
    ],
    githubLink:
      "https://github.com/Ishrat2413/Brain-MRI-Segmentation-ML-Python-TensorFlow-U-Net-",
  },
  {
    title: "Smart Agro-Care Robot",
    description:
      "A precision agriculture robot with soil monitoring, automated irrigation decisions, and remote control.",
    technologies: [
      "Arduino",
      "Sensors",
      "Embedded Systems",
      "Bluetooth",
      "IoT",
    ],
    highlights: [
      "Sensor-driven soil and field monitoring",
      "Automated irrigation behavior",
      "Remote operation through Bluetooth control",
    ],
    liveLink: "https://youtu.be/blr05r-b2kI?si=DhaXwAq79BLahADR",
  },
  {
    title: "Plant Disease Segmentation",
    description:
      "U-Net-based segmentation project to isolate infected regions from plant images for agricultural diagnostics.",
    technologies: [
      "Python",
      "TensorFlow",
      "U-Net",
      "Image Segmentation",
      "Deep Learning",
    ],
    highlights: [
      "Accurate infected-region extraction",
      "Segmentation mask generation pipeline",
      "Supports precision agriculture diagnostics",
    ],
    githubLink:
      "https://github.com/Ishrat2413/Advanced-U-Net-Model-for-Plant-Disease-Segmentation",
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
    result: "GPA: 5.00 (Science)",
  },
  {
    degree: "Secondary School Certificate",
    institution: "BIAM Model School and College",
    period: "2016 – 2018",
    location: "Bogura, Bangladesh",
    result: "GPA: 5.00 (Science)",
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
  {
    title: "Chemistry Olympiad - National Qualifier",
    description:
      "Qualified at the national level through strong performance in regional and national chemistry olympiad evaluations.",
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
  {
    title: "CSS & JavaScript Certification",
    issuer: "Udemy",
    year: "2024",
  },
  {
    title: "Digital Marketer Certification",
    issuer: "SR DreamIT",
    year: "2024",
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
    skills: [
      "Git",
      "Docker",
      "Postman",
      "Jira",
      "Selenium",
      "Coolify",
      "Moon Modeler",
    ],
  },
  {
    name: "Soft Skills",
    skills: ["Problem Solving", "Teamwork", "Critical Thinking"],
  },
];

export const languages = [
  { name: "English", level: "Fluent" },
  { name: "Bangla", level: "Fluent" },
  { name: "Hindi", level: "Intermediate" },
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    role: "Senior Executive - IT",
    organization: "BUEDF, BRAC University",
    period: "2021 – 2025",
    description:
      "Led technical initiatives and supported IT operations for university entrepreneurship events and programs.",
  },
  {
    role: "Rover Scout Member",
    organization: "Bangladesh Scouts",
    period: "2017 – 2020",
    description:
      "Participated in volunteer events, flood relief activities, and community service programs.",
  },
];
