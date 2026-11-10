export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Enterprise Full-Stack" | "AI & Media Tech" | "Analytics & UI";
  status: "Completed" | "In Development" | "Production";
  featured: boolean;
  description: string;
  fullOverview: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  role: string;
  metricsOrScope: string;
  liveUrl?: string;
  githubUrl?: string;
  mockupType: "assetnexus" | "motionforge" | "dashboard";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: "Core Expert" | "Proficient" | "Working Knowledge";
    tag?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  experienceYears: string;
  location: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: string;
  location: string;
  grade?: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ashly P Joy",
    title: "Full Stack Developer",
    headline: "Building Scalable Web Applications & Exceptional Digital Experiences.",
    experienceYears: "4+ Years",
    tagline:
      "Full Stack Developer with 4+ years of experience specializing in React, Next.js, Angular, Node.js, and NestJS. Passionate about building modern, scalable, and user-focused web applications.",
    aboutBio: [
      "I am a Full Stack Developer with over 4 years of experience building responsive, scalable and user-friendly web applications. I specialize in modern frontend development using React.js, Next.js and Angular, with strong expertise in JavaScript, TypeScript, Redux and REST API integration.",
      "I also have solid backend development experience with Node.js, NestJS, Express, PostgreSQL and Prisma ORM. My professional journey includes developing reusable UI components, complex forms with validation, interactive dashboards, API-driven applications, and data management systems.",
      "I hold an M.Tech in Communication Systems from TKM College of Engineering (CGPA: 8.76) and a B.Tech in Electronics and Communication from College of Engineering Kottarakkara (CGPA: 7.57). I enjoy solving technical challenges, writing maintainable code, and collaborating with cross-functional teams.",
    ],
    availability: {
      status: "Actively Exploring Opportunities",
      relocation: "Ready for Onsite / Relocation to UAE, Saudi Arabia, Qatar & International Remote",
      badgeText: "Open to Relocation in Qatar, KSA, UAE & Remote",
    },
    contact: {
      email: "ashlypj@outlook.com",
      secondaryEmail: "ashlypjoy94@gmail.com",
      phone: "+919562022861",
      whatsappUrl: "https://wa.me/919562022861",
      linkedin: "https://www.linkedin.com/in/ashlyjoy812",
      github: "https://github.com/ashlypjoy",
      location: "Kerala, India (Open to Qatar, KSA, UAE & Global Relocation)",
      resumeUrl: "/resume.pdf",
    },
    highlights: [
      {
        value: "4+ Years",
        label: "Professional Experience",
        description: "Hands-on software development at UL Technology Solutions (ULTS)",
      },
      {
        value: "Full Stack",
        label: "Frontend & Backend",
        description: "End-to-end delivery: React, Next.js, Angular, Node.js, NestJS, PostgreSQL & Prisma",
      },
      {
        value: "Postgraduate",
        label: "M.Tech & B.Tech",
        description: "M.Tech from TKM College of Engineering (8.76 CGPA) & B.Tech from CE Kottarakkara",
      },
    ],
  },

  skills: [
    {
      title: "Frontend Development",
      description: "Crafting performant, accessible, and reactive user interfaces",
      skills: [
        { name: "React.js", level: "Core Expert", tag: "Primary" },
        { name: "Next.js", level: "Core Expert", tag: "App Router" },
        { name: "Angular", level: "Proficient", tag: "Enterprise" },
        { name: "TypeScript", level: "Core Expert", tag: "Type-Safe" },
        { name: "JavaScript (ES6+)", level: "Core Expert", tag: "Modern JS" },
        { name: "HTML5", level: "Core Expert", tag: "Semantic" },
        { name: "CSS3", level: "Core Expert", tag: "Responsive" },
      ],
    },
    {
      title: "Backend Development",
      description: "Developing scalable REST APIs, microservices, and server-side logic",
      skills: [
        { name: "Node.js", level: "Core Expert", tag: "Runtime" },
        { name: "NestJS", level: "Proficient", tag: "Architecture" },
        { name: "Express", level: "Core Expert", tag: "Backend Framework" },
        { name: "REST API Development", level: "Core Expert", tag: "Design & Specs" },
        { name: "API Integration", level: "Core Expert", tag: "Third-party & Internal" },
      ],
    },
    {
      title: "UI Frameworks & Styling",
      description: "Building responsive, cohesive design systems and reusable UI component libraries",
      skills: [
        { name: "Tailwind CSS", level: "Core Expert", tag: "Utility-First" },
        { name: "Bootstrap", level: "Proficient", tag: "Responsive" },
        { name: "Material UI", level: "Proficient", tag: "Design System" },
        { name: "Chakra UI", level: "Proficient", tag: "Accessible" },
        { name: "PrimeNG", level: "Working Knowledge", tag: "Angular UI" },
      ],
    },
    {
      title: "State Management & Forms",
      description: "Managing predictable global state and resilient form validation workflows",
      skills: [
        { name: "Redux", level: "Core Expert", tag: "State Arch" },
        { name: "Redux Toolkit", level: "Core Expert", tag: "RTK & Query" },
        { name: "Redux Saga", level: "Proficient", tag: "Side Effects" },
        { name: "NgRx", level: "Proficient", tag: "Angular State" },
        { name: "RxJS", level: "Proficient", tag: "Reactive Streams" },
        { name: "React Hook Form", level: "Core Expert", tag: "Validation" },
      ],
    },
    {
      title: "Databases & ORM",
      description: "Structuring relational and document data with type-safe database queries",
      skills: [
        { name: "PostgreSQL", level: "Proficient", tag: "Relational" },
        { name: "MongoDB", level: "Proficient", tag: "NoSQL" },
        { name: "Prisma ORM", level: "Proficient", tag: "Type-Safe ORM" },
      ],
    },
    {
      title: "Developer Tools & Testing",
      description: "Modern workflows, automated testing, containerization, and version control",
      skills: [
        { name: "Git", level: "Core Expert", tag: "VCS" },
        { name: "GitHub", level: "Core Expert", tag: "CI/CD & Review" },
        { name: "Docker", level: "Proficient", tag: "Compose & Containers" },
        { name: "Vitest", level: "Proficient", tag: "Unit & Component Test" },
        { name: "Postman", level: "Core Expert", tag: "API Testing" },
        { name: "VS Code", level: "Core Expert", tag: "IDE" },
      ],
    },
  ] as SkillCategory[],

  additionalArchitecturalKnowledge: [
    { title: "Responsive Web Design", description: "Mobile-first, cross-device interfaces with zero layout shift" },
    { title: "Component-Based Architecture", description: "Atomic, reusable, modular UI components with clean separation of concerns" },
    { title: "Lazy Loading & Code Splitting", description: "Optimizing bundle sizes and Core Web Vitals for high-speed delivery" },
    { title: "Angular Standalone Components", description: "Modern Angular module-less architecture for clean dependency trees" },
    { title: "Angular Control Flow", description: "Modern declarative syntax (@if, @for, @switch) for optimal rendering" },
    { title: "Form Validation & Sanitization", description: "Enterprise schema-driven validation with seamless user feedback" },
    { title: "API Integration & Interceptors", description: "Resilient HTTP pipelines with token refresh, caching, and error boundaries" },
    { title: "Performance Optimization", description: "Memoization, virtualization, asset optimization, and minimal re-renders" },
    { title: "Modular Application Architecture", description: "Scalable codebase structuring tailored for enterprise maintainability" },
  ],

  projects: [
    {
      id: "assetnexus",
      title: "ASSETNEXUS – Asset Management System",
      tagline: "Enterprise Asset Lifecycle & Master Data Platform",
      category: "Enterprise Full-Stack",
      status: "Production",
      featured: true,
      description:
        "An asset lifecycle management application designed to manage assets, product information and master data efficiently.",
      fullOverview:
        "AssetNexus is a comprehensive enterprise asset management system engineered to oversee the complete lifecycle of corporate assets, equipment, and digital products. Designed with a clean multi-tier architecture, it provides structured hierarchies for manufacturers, brands, sub-brands, and models, coupled with robust audit trails and master data management.",
      technologies: ["React.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "Docker"],
      keyFeatures: [
        "Asset lifecycle management from acquisition to retirement.",
        "Master data management ensuring enterprise-wide data consistency.",
        "Product and manufacturer management with nested categorization.",
        "Hierarchical brand, sub-brand, and model configuration.",
        "Robust REST API integration with token-based authentication.",
        "Structured backend architecture built with NestJS modular controllers and services.",
      ],
      architectureHighlights: [
        "Multi-tenant data isolation with PostgreSQL schemas",
        "Prisma ORM migrations and type-safe query generation",
        "Modular NestJS architecture with dependency injection",
        "Complex multi-step reactive forms with schema validation",
      ],
      role: "Full Stack Engineer (Frontend architecture, API contracts, NestJS backend services & Prisma schema design)",
      metricsOrScope: "Enterprise Grade Master Data Management System",
      mockupType: "assetnexus",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "motionforge-ai",
      title: "MOTIONFORGE AI – AI Video Generation Platform",
      tagline: "AI-Powered Video Creation Platform for Educators & Creators",
      category: "AI & Media Tech",
      status: "In Development",
      featured: true,
      description:
        "An AI-powered video creation platform designed to help educators and businesses transform ideas and stories into engaging video content.",
      fullOverview:
        "MotionForge AI is an innovative creative platform under active development that harnesses programmatic video rendering and AI-assisted asset synthesis. By integrating Next.js with Remotion and generative media APIs, it enables users to script, storyboard, and generate customized motion graphics directly in the browser.",
      technologies: ["Next.js", "React", "TypeScript", "Node.js", "Remotion", "Tailwind CSS"],
      keyFeatures: [
        "Interactive storyboard creation and timeline sequencing.",
        "AI-assisted video and script generation workflow.",
        "Multiple visual styles and customized typography presets.",
        "Dynamic programmatic motion graphics rendered with Remotion.",
        "Real-time video preview with frame-by-frame editing workflow.",
        "Optimized video export presets for social media and educational delivery.",
      ],
      architectureHighlights: [
        "Next.js App Router with server-side generation",
        "Programmatic video canvas rendering via Remotion React engine",
        "Asynchronous video rendering pipeline via Node.js workers",
        "Modular prompt engineering and asset pipeline",
      ],
      role: "Lead Full Stack Developer (UI/UX design, Next.js application workflow, Remotion integration)",
      metricsOrScope: "Currently In Active Development (Private Beta Pipeline)",
      mockupType: "motionforge",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "analytics-dashboard",
      title: "Dashboard & Analytics Application",
      tagline: "Responsive Enterprise Data Visualization & Analytics Engine",
      category: "Analytics & UI",
      status: "Completed",
      featured: true,
      description:
        "A responsive dashboard application featuring interactive data visualization and efficient data management.",
      fullOverview:
        "An enterprise-level operational dashboard designed to ingest and visualize complex business metrics in real time. Features reactive data filtering, multi-column sortable data tables with pagination, statistical summaries, and dynamic charts engineered for optimal rendering performance across devices.",
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
      keyFeatures: [
        "Interactive dashboards with customizable analytics widgets.",
        "High-performance data tables with multi-column sorting and filtering.",
        "Optimized global state management with Redux Toolkit & RTK Query.",
        "Component-based architecture built with reusable, accessible UI blocks.",
        "Complex form validation with dynamic field dependencies.",
        "API-driven data management with resilient caching and debouncing.",
      ],
      architectureHighlights: [
        "Normalized Redux state slice for high-throughput data streams",
        "Virtual scroll optimization for large data tables",
        "Responsive grid layout adapting effortlessly across devices",
        "Comprehensive REST API error handling and retry mechanism",
      ],
      role: "Frontend Engineer (Component architecture, Redux store design, API integration, performance tuning)",
      metricsOrScope: "Enterprise Grade Dashboard System",
      mockupType: "dashboard",
      liveUrl: undefined,
      githubUrl: undefined,
    },
  ] as Project[],

  experience: [
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Developer Analyst",
      period: "12/2024 – Present",
      experienceYears: "Present (4+ Years Total)",
      location: "Kerala, India",
      description:
        "Developing scalable RESTful APIs, backend services with Node.js, Nest.js, Express, PostgreSQL, and Prisma ORM, containerized with Docker. Engineering responsive, data-intensive interfaces using React.js and Next.js with Redux.",
      responsibilities: [
        "Developed scalable RESTful APIs and backend services using Node.js, Nest.js, and Express, with PostgreSQL and Prisma for efficient data management.",
        "Designed and managed relational database schemas, migrations, and data operations using PostgreSQL and Prisma ORM.",
        "Integrated frontend and backend services through RESTful APIs, implementing validation, error handling, and business logic.",
        "Containerized frontend, backend, and database services using Docker Compose, maintaining consistent local and staging development environments.",
        "Optimized backend data processing and Node.js stream handling to improve application performance and stability.",
        "Developed responsive, data-intensive interfaces using React.js and Next.js, with Redux for application state management.",
        "Implemented dependent data flows, forms, dashboards, tables, filters, and reusable UI components for asset management workflows.",
        "Developed unit and component tests using Vitest to improve application reliability and maintain code quality.",
        "Used Git for version control and collaboration and Jira for task management and Agile sprint planning.",
      ],
      techStack: [
        "Node.js",
        "NestJS",
        "Express",
        "React.js",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Docker Compose",
        "Redux",
        "Vitest",
        "Git",
      ],
    },
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Associate Developer",
      period: "12/2022 – 11/2024",
      experienceYears: "2 Years",
      location: "Kerala, India",
      description:
        "Developed and maintained responsive web applications using React.js, Angular, HTML, CSS, Bootstrap, and Material-UI. Implemented state management using Redux and NgRx.",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js, Angular, HTML, CSS, Bootstrap, and Material-UI.",
        "Built reusable and scalable UI components following maintainable coding practices.",
        "Translated wireframes and design mockups into interactive web applications.",
        "Integrated frontend applications with RESTful APIs and web services.",
        "Implemented application state management using Redux and NgRx.",
        "Optimized frontend performance by improving rendering efficiency and reducing load times.",
        "Wrote and maintained unit and component tests using Vitest.",
      ],
      techStack: [
        "React.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Redux",
        "NgRx",
        "Bootstrap",
        "Material-UI",
        "REST APIs",
      ],
    },
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Software Development Intern",
      period: "08/2022 – 11/2022",
      experienceYears: "4 Months",
      location: "Kerala, India",
      description:
        "Assisted in developing responsive web applications using HTML, CSS, JavaScript, and Angular. Converted UX/UI designs into accessible, responsive interfaces.",
      responsibilities: [
        "Assisted in developing and maintaining responsive web applications using HTML, CSS, JavaScript, and Angular.",
        "Built reusable UI components and implemented responsive layouts based on design requirements.",
        "Integrated frontend screens with RESTful APIs and handled API responses and basic error handling.",
        "Worked with JavaScript and TypeScript to implement application features and improve code maintainability.",
      ],
      techStack: ["Angular", "JavaScript", "TypeScript", "HTML5", "CSS3", "Git"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "M.Tech in Communication Systems",
      field: "Electronics & Communication Engineering",
      institution: "TKM College of Engineering, Kollam",
      period: "08/2017 – 06/2019",
      grade: "CGPA: 8.76 / 10",
      status: "Completed",
      location: "Kerala, India",
      description:
        "Advanced postgraduate degree with deep specialization in Communication Systems, Signal Processing, and Computational Algorithms.",
      highlights: [
        "Graduated with High Academic Distinction (CGPA: 8.76)",
        "Advanced Signal Processing & Distributed Communication Systems",
        "System Architecture, Digital Communications & Algorithmic Analysis",
      ],
    },
    {
      degree: "B.Tech in Electronics and Communication",
      field: "Electronics & Communication Engineering",
      institution: "College of Engineering, Kottarakkara",
      period: "08/2012 – 04/2016",
      grade: "CGPA: 7.57 / 10",
      status: "Completed",
      location: "Kerala, India",
      description:
        "Undergraduate degree focusing on core Computer Science, Microprocessor Architectures, Data Networks, and Digital Systems.",
      highlights: [
        "First Class Engineering Degree (CGPA: 7.57)",
        "Microprocessors, Computer Architecture & Digital Circuits",
        "Object-Oriented Programming, Data Networks & Embedded Software",
      ],
    },
  ] as EducationItem[],
};
