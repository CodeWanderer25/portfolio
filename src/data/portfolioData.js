// Central configuration file for Priyanshu Goyal's Developer Portfolio
// Replace placeholder URLs, emails, and handles with your real details before publishing.

export const PERSONAL_INFO = {
  name: "Priyanshu Goyal",
  shortName: "PG",
  role: "React.js & MERN Stack Developer",
  statusBadge: "Open to Frontend & MERN Stack Opportunities",
  headline: "Building Modern Web Experiences with React & the MERN Stack.",
  heroBio:
    "I'm a Computer Engineering graduate passionate about building responsive, user-friendly web applications. I enjoy turning ideas into practical products using React, JavaScript, Tailwind CSS, and full-stack technologies.",
  
  aboutLead:
    "I'm a Computer Engineering graduate passionate about crafting clean, responsive, and performance-focused frontend web applications with the MERN stack.",
  
  // Replace these with your actual profiles:
  githubUrl: "https://github.com/CodeWanderer25", // TODO: Insert your actual GitHub profile link
  linkedinUrl: "https://www.linkedin.com/in/priyanshu-goyal-48b78722a/", // TODO: Insert your actual LinkedIn profile link
  email: "priyanshucode2025@gmail.com", // TODO: Insert your actual email address
  
  // Location & education summary
  location: "Mumbai, India",
  college: "St. John College of Engineering and Management",
  degree: "Bachelor of Engineering in Computer Engineering",
  graduationStatus: "Computer Engineering Graduate",
  
  // Path in public folder
  resumePath: "/resume.pdf", // Place your resume.pdf into the public/ directory
};

export const WHAT_I_BRING = [
  {
    title: "Problem-Solving Mindset",
    description: "Breaking complex application requirements into clean, testable logic and structured algorithmic solutions.",
    icon: "BrainCircuit",
  },
  {
    title: "Component-Based Architecture",
    description: "Engineering scalable, modular, and DRY React components with clear state boundaries and typed props.",
    icon: "Boxes",
  },
  {
    title: "Continuous Learning",
    description: "Constantly staying up to date with modern React patterns, full-stack workflows, and AI-assisted tooling.",
    icon: "GraduationCap",
  },
  {
    title: "Attention to Detail",
    description: "Obsessing over pixel-perfect layouts, responsive typography, intuitive UI states, and accessible interactions.",
    icon: "Sparkles",
  },
  {
    title: "Usable & Maintainable Applications",
    description: "Writing self-documenting code with clear separation of concerns, clean Git commits, and zero fluff.",
    icon: "CheckCheck",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    description: "Crafting interactive, high-performance user interfaces",
    skills: [
      { name: "React.js", badge: "Core" },
      { name: "JavaScript (ES6+)", badge: "Core" },
      { name: "Tailwind CSS", badge: "Styling" },
      { name: "Redux Toolkit", badge: "State" },
      { name: "React Router", badge: "Routing" },
      { name: "HTML5", badge: "Markup" },
      { name: "CSS3", badge: "Styling" },
    ],
  },
  {
    category: "Backend",
    description: "Developing robust APIs and server-side services",
    skills: [
      { name: "Node.js", badge: "Runtime" },
      { name: "Express.js", badge: "Framework" },
      { name: "REST APIs", badge: "Architecture" },
    ],
  },
  {
    category: "Database",
    description: "Managing structured and unstructured application data",
    skills: [
      { name: "MongoDB", badge: "NoSQL" },
      { name: "MongoDB Atlas", badge: "Cloud DB" },
    ],
  },
  {
    category: "AI & Integration",
    description: "Integrating intelligent LLM capabilities into modern applications",
    skills: [
      { name: "OpenAI API", badge: "LLM" },
      { name: "Generative AI Integration", badge: "AI Features" },
    ],
  },
  {
    category: "Tools & Concepts",
    description: "Modern development workflows and architectural principles",
    skills: [
      { name: "Git", badge: "VCS" },
      { name: "GitHub", badge: "Collaboration" },
      { name: "Vite", badge: "Build Tool" },
      { name: "Responsive Design", badge: "UI/UX" },
      { name: "Component-Based Architecture", badge: "Design" },
      { name: "API Integration", badge: "Networking" },
    ],
  },
];

export const PROJECTS = [
  {
    id: "invoice-ai",
    title: "Invoice AI",
    tagline: "AI-Powered Smart Invoice Management & Financial Analysis",
    description:
      "An AI-powered invoice management application designed to organize invoices, track payment statuses, and provide AI-assisted invoice analysis.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "OpenAI API"],
    features: [
      "End-to-end invoice creation and document management workflow",
      "Real-time payment status tracking (Pending, Paid, Overdue)",
      "Secure backend REST API integration for CRUD transactions",
      "AI-assisted financial analysis and automated summary insights",
    ],
    // Replace with your real live demo and repo URLs when available:
    liveUrl: "https://invoiceai-lzko.onrender.com", // TODO: Add live deployment link
    githubUrl: "https://github.com/CodeWanderer25/InvoiceAI", // TODO: Add GitHub repo link
    accentColor: "from-sky-500/20 to-blue-600/10",
    // badge: "Full Stack + AI",
    // highlight: "Primary Project",
  },
  {
    id: "budget-trip-plan",
    title: "BudgetTripPlan",
    tagline: "Intelligent Budget-Driven Travel Planner",
    description:
      "An AI-assisted travel planning application designed to help users explore trip ideas and create itineraries based on their travel budget.",
    tags: ["React.js", "Tailwind CSS", "Generative AI", "API Integration"],
    features: [
      "Budget-oriented trip planning tailored to custom financial constraints",
      "AI-assisted automated itinerary generation with day-by-day breakdowns",
      "Clean, structured travel information presentation with activity cards",
      "Fully responsive interface engineered for seamless mobile trip reference",
    ],
    liveUrl: "https://budget-wise-plan.vercel.app/", // TODO: Add live deployment link
    githubUrl: "https://github.com/CodeWanderer25/BudgetTripPlaner", // TODO: Add GitHub repo link
    accentColor: "from-cyan-500/20 to-teal-600/10",
    // badge: "React + GenAI",
  },
  {
    id: "play-prime",
    title: "PlayPrime",
    tagline: "Fluid Movie Discovery & Media Exploration Platform",
    description:
      "A movie discovery application that helps users browse and explore movie information through search and filtering functionality.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "API Integration"],
    features: [
      "Instant multi-query movie search with debounced input",
      "Comprehensive filtering by genre, rating, and release timeline",
      "Dynamic movie browsing experience with rich metadata previews",
      "Modular, reusable UI components built for maintainability",
    ],
    liveUrl: "https://play-prime-ten.vercel.app", // TODO: Add live deployment link
    githubUrl: "https://github.com/CodeWanderer25/PlayPrime", // TODO: Add GitHub repo link
    accentColor: "from-indigo-500/20 to-purple-600/10",
    // badge: "Frontend App",
  },
];

export const EXPERIENCE_ITEMS = [
  {
    role: "Front-End Development Intern",
    company: "CodSoft",
    period: "June 2023 – August 2023",
    type: "Internship",
    location: "Virtual",
    description: [
      "Developed web interfaces using HTML, CSS, and modern JavaScript.",
      "Worked on responsive layouts and clean frontend implementation across multiple screen breakpoints.",
      "Practiced translating design requirements into functional, accessible user interfaces.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Implementation"],
  },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering in Computer Engineering",
  institution: "St. John College of Engineering and Management",
  status: "Computer Engineering Graduate",
  focus: [
    "Software Engineering & Web Development",
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Object-Oriented Programming",
  ],
};

export const DEVELOPMENT_APPROACH = [
  {
    step: "01",
    title: "Understand",
    subtitle: "Problem Definition & Requirements",
    description:
      "Identify the core problem, user expectations, constraints, and data flows before touching a line of code.",
    icon: "Target",
  },
  {
    step: "02",
    title: "Design",
    subtitle: "UI/UX & Architecture Planning",
    description:
      "Plan a clean, intuitive, and responsive interface while designing modular component trees and state architecture.",
    icon: "LayoutTemplate",
  },
  {
    step: "03",
    title: "Develop",
    subtitle: "Component-Driven Implementation",
    description:
      "Build reusable React components with clean Tailwind styling, performant state management, and reliable API integrations.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Refine",
    subtitle: "Testing & User Experience",
    description:
      "Test functionality, audit accessibility and responsiveness, fix edge cases, and polish interactions for a seamless experience.",
    icon: "CheckCircle2",
  },
];
