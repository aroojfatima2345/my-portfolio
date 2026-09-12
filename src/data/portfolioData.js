
import breefa from "../assets/breefa.png";
import realEstate from "../assets/realEstate.png";
import travel from "../assets/travel.png";
import wadi from "../assets/wadi.png";
import feane from "../assets/feane.png";
import zonatime from "../assets/zonatime.png";

/* =========================================================
   PROFILE
========================================================= */

export const profile = {
  name: "Arooj Fatima",
  role: "React Frontend Developer",
  email: "arooj.fatima.1925@gmail.com",
  phone: "+92 322 5810024",
  location: "Multan, Pakistan",

  linkedin:
    "https://www.linkedin.com/in/arooj-fatima-559581347",

  github:
    "https://github.com/",

  cvPath: "/Arooj-Fatima-CV.pdf",
};


/* =========================================================
   STATS
========================================================= */

export const stats = [
  {
    value: "2+",
    label: "Years Experience",
  },
  {
    value: "6",
    label: "Featured Builds",
  },
  {
    value: "React.js",
    label: "Primary Focus",
  },
  {
    value: "API",
    label: "Integration",
  },
  {
    value: "Responsive",
    label: "Web Development",
  },
];


/* =========================================================
   SERVICES
========================================================= */

export const services = [
  {
    icon: "react",
    title: "React Frontend Development",
    text:
      "Modern, component-based interfaces built with React.js and a strong focus on maintainability.",
  },

  {
    icon: "responsive",
    title: "Responsive Web Development",
    text:
      "Interfaces designed to feel intentional across desktop, tablet and mobile—not simply scaled down.",
  },

  {
    icon: "api",
    title: "API Integration",
    text:
      "Connecting React applications with REST APIs, authentication flows and real application data.",
  },

  {
    icon: "landing",
    title: "Landing Pages",
    text:
      "Polished landing pages that communicate a product or service clearly and guide visitors toward action.",
  },

  {
    icon: "ui",
    title: "UI Development",
    text:
      "Turning designs, references and ideas into clean interactive interfaces with thoughtful details.",
  },

  {
    icon: "fix",
    title: "Improvements & Bug Fixing",
    text:
      "Refining existing websites, resolving frontend issues and improving usability without unnecessary rewrites.",
  },
];


/* =========================================================
   SKILL GROUPS
========================================================= */

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design",
    ],
  },

  {
    title: "State & UI",
    items: [
      "Redux",
      "React-Bootstrap",
      "Framer Motion",
      "Reusable Components",
    ],
  },

  {
    title: "API & Integration",
    items: [
      "REST APIs",
      "API Integration",
      "Authentication",
      "JSON",
      "Axios",
    ],
  },

  {
    title: "Supporting Tools",
    items: [
      "Git",
      "GitHub",
      "Vite",
      "MySQL",
      "PHP",
      "WordPress",
    ],
  },
];


/* =========================================================
   TECH STACK
========================================================= */

export const stack = [
  ["React.js", "react"],
  ["JavaScript", "js"],
  ["HTML5", "html"],
  ["CSS3", "css"],
  ["Bootstrap", "bootstrap"],
  ["Redux", "redux"],
  ["Framer Motion", "motion"],
  ["Axios", "api"],
  ["REST APIs", "api"],
  ["Vite", "vite"],
  ["Git", "git"],
  ["GitHub", "github"],
  ["MySQL", "database"],
  ["PHP", "php"],
  ["WordPress", "wordpress"],
];


/* =========================================================
   AI-ASSISTED DEVELOPMENT
========================================================= */

export const aiTools = [
  {
    name: "ChatGPT",
    category: "AI Development Assistant",
    text:
      "Used for problem solving, debugging, technical exploration and development assistance.",
  },

  {
    name: "Claude",
    category: "AI Coding Assistant",
    text:
      "Helpful for understanding complex code, refactoring and working through larger development tasks.",
  },

  {
    name: "GitHub Copilot",
    category: "AI Pair Programmer",
    text:
      "Used for code suggestions, autocomplete and speeding up repetitive development work.",
  },

  {
    name: "Cursor",
    category: "AI Code Editor",
    text:
      "Used for AI-assisted coding, project exploration, refactoring and development workflows.",
  },

  {
    name: "Google Gemini",
    category: "AI Assistant",
    text:
      "Used for research, brainstorming, technical exploration and development support.",
  },

  {
    name: "v0",
    category: "UI Prototyping",
    text:
      "Used to explore interface ideas and accelerate early UI concepts and prototypes.",
  },
];


/* =========================================================
   EXPERIENCE
========================================================= */

export const experience = [
  {
    period: "Current",
    role: "Web Trainer",
    company: "Ace Connect",
    text:
      "Training learners in practical web development concepts and helping them build a stronger foundation in frontend development.",
  },

  {
    period: "Previous",
    role: "Frontend Team Lead",
    company: "Maxcore Technologies — Multan",
    text:
      "Worked on frontend development and project delivery, with a focus on React interfaces, responsive UI and integrating application APIs.",
  },

  {
    period: "Earlier",
    role: "Web Development Intern",
    company: "Maxcore Technologies",
    text:
      "Gained practical software-house experience through web development work and hands-on project exposure.",
  },
];


/* =========================================================
   PROJECTS
========================================================= */

export const projects = [
  {
    title: "Landdost",
    category: "Real Estate Platform",
    image: realEstate,

    description:
      "A real estate platform designed to present property listings through a clean, responsive and user-friendly interface.",

    contribution:
      "Developed the React frontend, implemented responsive property interfaces and integrated frontend flows with application APIs.",

    challenge:
      "Creating a clear property browsing experience where users can explore listings and move through important real estate flows easily.",

    solution:
      "Built reusable React components, responsive layouts and API-connected frontend flows with a focus on usability and clear presentation.",

    features: [
      "Property listings",
      "Property search",
      "Property details",
      "User authentication",
      "Responsive interface",
      "API integration",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
      "Axios",
    ],

    live: "https://landdost.com",
    github: "",
  },

  {
    title: "Uflye",
    category: "Travel & Visa Platform",
    image: travel,

    description:
      "A travel and visa platform focused on presenting travel information and visa categories through a modern responsive interface.",

    contribution:
      "Developed the React frontend, created responsive layouts and implemented interactive navigation and content sections.",

    challenge:
      "Organizing travel and visa-related information in a way that feels simple to navigate while maintaining a professional visual experience.",

    solution:
      "Created reusable React sections with structured content, responsive layouts and clear navigation patterns across the application.",

    features: [
      "Visa categories",
      "Travel information",
      "Responsive pages",
      "Interactive navigation",
      "Structured content",
      "Mobile-friendly UI",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "CSS3",
    ],

    live: "https://ufly-three.vercel.app/",
    github: "",
  },

  {
    title: "Breefa",
    category: "Business / Trading Platform",
    image: breefa,

    description:
      "A business-oriented web interface developed to present structured information through a clean and responsive application experience.",

    contribution:
      "Worked on frontend implementation, reusable UI sections, responsive layouts and integration of application data.",

    challenge:
      "Presenting business-focused information in a structured interface while keeping the overall experience simple and easy to navigate.",

    solution:
      "Used reusable React components, Bootstrap-based layouts and consistent UI patterns to create a professional and responsive experience.",

    features: [
      "Business-focused interface",
      "Structured content",
      "Responsive layouts",
      "Reusable components",
      "Interactive UI",
      "API integration",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "REST APIs",
    ],

    live: "https://topbrakers.vercel.app/",
    github: "",
  },

  {
    title: "Wadi Al Dhaid",
    category: "Web Application",
    image: wadi,

    description:
      "A modern web application developed with React, focusing on structured content, responsive presentation and a polished user experience.",

    contribution:
      "Developed the frontend interface, built reusable React components and implemented responsive layouts across the application.",

    challenge:
      "Maintaining a consistent visual experience across multiple sections while keeping the interface responsive and easy to use.",

    solution:
      "Structured the application using reusable components and responsive Bootstrap layouts with a clear visual hierarchy.",

    features: [
      "Responsive web interface",
      "Reusable React components",
      "Structured content sections",
      "Interactive navigation",
      "Mobile-friendly layouts",
      "Consistent UI system",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "CSS3",
    ],

    live: "https://wadi-al-dhaid.vercel.app/",
    github: "",
  },

  {
    title: "Feane",
    category: "Restaurant Website",
    image: feane,

    description:
      "A modern restaurant website designed to present food, restaurant information and customer-facing content through an engaging responsive interface.",

    contribution:
      "Developed the frontend interface, implemented responsive sections and created reusable UI components for the website.",

    challenge:
      "Creating a visually engaging restaurant experience while keeping the content, navigation and calls to action easy to understand.",

    solution:
      "Built the interface with reusable React components, responsive Bootstrap layouts and structured content sections.",

    features: [
      "Restaurant landing page",
      "Food menu sections",
      "Responsive design",
      "Reusable components",
      "Interactive navigation",
      "Mobile-friendly UI",
    ],

    tech: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "React-Bootstrap",
    ],

    live: "",
    github: "",
  },

{
  title: "Zonatime",
  category: "Watch / E-commerce Website",
  image: zonatime,

  description:
    "A modern watch-focused website designed to showcase products through a clean, responsive and visually polished shopping experience.",

  contribution:
    "Developed the React frontend, implemented product-focused sections and created responsive layouts for a smooth browsing experience.",

  challenge:
    "Presenting watch products in a premium and visually appealing way while keeping product information and navigation easy to explore.",

  solution:
    "Built reusable React components with structured product sections, responsive layouts and a clean visual hierarchy suited to a watch-focused brand.",

  features: [
    "Watch product showcase",
    "Product-focused sections",
    "Responsive design",
    "Reusable React components",
    "Interactive navigation",
    "Mobile-friendly UI",
  ],

  tech: [
    "React.js",
    "JavaScript",
    "Bootstrap",
    "CSS3",
  ],

  live: "https://zonatime.vercel.app/",
  github: "",
},

];



/* =========================================================
   DEVELOPMENT PROCESS
========================================================= */

export const process = [
  [
    "01",
    "Understand",
    "Clarify the business, requirements, users and the experience the website needs to deliver.",
  ],

  [
    "02",
    "Plan",
    "Break the experience into pages, reusable components, states and functionality before building.",
  ],

  [
    "03",
    "Build",
    "Develop the frontend with React.js, responsive UI patterns and maintainable component structure.",
  ],

  [
    "04",
    "Integrate",
    "Connect APIs, authentication and application data while keeping the frontend experience clear.",
  ],

  [
    "05",
    "Refine",
    "Test layouts, polish interactions, check responsiveness and fix the details that make a product feel finished.",
  ],
];


/* =========================================================
   FAQ
========================================================= */

export const faqs = [
  [
    "Do you build React websites from scratch?",
    "Yes. I build responsive React.js interfaces from a design, reference, business requirement or existing concept.",
  ],

  [
    "Can you integrate APIs?",
    "Yes. API integration is one of my core frontend strengths, including connecting React interfaces to REST APIs and application data.",
  ],

  [
    "Do you build responsive websites?",
    "Yes. Responsive behavior is considered throughout the UI so the experience works across desktop, tablet and mobile.",
  ],

  [
    "Can you work on an existing website?",
    "Yes. I can work on existing React/frontend projects for UI improvements, bug fixing, new sections and functionality enhancements.",
  ],

  [
    "What technologies do you use?",
    "My primary focus is React.js and JavaScript, supported by Bootstrap, React-Bootstrap, Framer Motion, REST APIs, Axios, Git and related frontend tools.",
  ],

  [
    "Are you available for freelance or remote projects?",
    "I am open to suitable freelance, remote and software-house opportunities where I can contribute as a React Frontend Developer.",
  ],
];

