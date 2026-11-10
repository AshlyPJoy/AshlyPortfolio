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
      "Full Stack Developer with 4+ years of experience specializing in React, Next.js, Angular and Node.js. Passionate about building modern, scalable and user-focused web applications.",
    aboutBio: [
      "I'm a passionate Full Stack Developer with over 4 years of experience in building modern web applications. My expertise spans frontend technologies such as React.js, Next.js and Angular, along with backend development using Node.js and NestJS.",
      "I enjoy creating reusable components, developing complex forms, integrating APIs and building interactive dashboards. I focus on writing clean, maintainable code and delivering responsive applications with excellent user experiences.",
      "I'm continuously expanding my technical knowledge and exploring modern development practices to build better software solutions.",
    ],
    availability: {
      status: "Actively Exploring Opportunities",
      relocation: "Ready for Onsite / Relocation to UAE, Saudi Arabia, Qatar & International Remote",
      badgeText: "Open to International Opportunities (GCC & Global)",
    },
    contact: {
      email: "ashlypjoy.dev@gmail.com", // Editable placeholder
      linkedin: "https://www.linkedin.com/in/ashly-p-joy", // Editable placeholder
      github: "https://github.com/ashlypjoy", // Editable placeholder
      location: "India (Open to UAE, KSA, Qatar & Global Relocation)",
      resumeUrl: "/resume.pdf",
    },
    highlights: [
      {
        value: "4+ Years",
        label: "Professional Experience",
        description: "Designing and developing robust enterprise web applications at scale",
      },
      {
        value: "Full Stack",
        label: "Frontend & Backend",
        description: "Seamlessly connecting reactive UI design systems with structured API microservices",
      },
      {
        value: "Modern Stack",
        label: "React · Next.js · Angular · Node",
        description: "Enterprise component architecture, high-performance state, and resilient backends",
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
        { name: "CSS3", level: "Core Expert", tag: "Modern Layouts" },
      ],
    },
    {
      title: "Backend Development",
      description: "Developing scalable REST APIs, microservices, and server-side logic",
      skills: [
        { name: "Node.js", level: "Core Expert", tag: "Runtime" },
        { name: "NestJS", level: "Proficient", tag: "Architecture" },
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
        { name: "React Hooks", level: "Core Expert", tag: "Custom Hooks" },
        { name: "React Hook Form", level: "Core Expert", tag: "Validation" },
        { name: "Context API", level: "Core Expert", tag: "Scoped State" },
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
      title: "Developer Tools & DevOps",
      description: "Modern workflows, automated testing, containerization, and version control",
      skills: [
        { name: "Git", level: "Core Expert", tag: "VCS" },
        { name: "GitHub", level: "Core Expert", tag: "CI/CD & Review" },
        { name: "VS Code", level: "Core Expert", tag: "IDE" },
        { name: "Postman", level: "Core Expert", tag: "API Testing" },
        { name: "Docker", level: "Working Knowledge", tag: "Containers" },
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
      technologies: ["React.js", "TypeScript", "NestJS", "PostgreSQL", "Prisma ORM", "REST API"],
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
      // URLs set to undefined to trigger interactive project detail modal & clear placeholder indicator rather than broken external links
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
      technologies: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Tailwind CSS", "Recharts"],
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
        "Virtual scroll optimization for large data tables (10,000+ records)",
        "Responsive grid layout adapting effortlessly across desktop, tablet, and mobile",
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
      company: "ULTS",
      role: "Developer Analyst",
      period: "4+ Years Professional Experience",
      experienceYears: "4+ Years",
      location: "India (Global Projects Delivery)",
      description:
        "Contributing to the development of modern web applications with a focus on reusable UI architecture, frontend engineering, backend integration and scalable application development.",
      responsibilities: [
        "Developing frontend applications using React.js, Angular and TypeScript.",
        "Building reusable, scalable UI components adhering to design system principles.",
        "Creating complex forms with robust schema validation workflows.",
        "Developing dashboards and interactive data tables with real-time filtering.",
        "Integrating REST APIs and architecting resilient client-server data synchronization.",
        "Managing predictable application state across enterprise-scale frontend workflows.",
        "Contributing to full-stack application development across both frontend and backend layers.",
        "Working with modern development tools, Git version control, and containerized environments.",
        "Improving application performance, accessibility, and long-term code maintainability.",
        "Collaborating with cross-functional teams, developers, designers, and project stakeholders.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript (ES6+)",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "Redux Toolkit",
        "Tailwind CSS",
        "Docker",
      ],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech / B.E.)",
      field: "Information Technology / Computer Science",
      institution: "Accredited University / Engineering Institute", // Editable placeholder
      period: "Graduate Degree", // Editable placeholder
      status: "Completed",
      location: "India",
      description:
        "Core foundational coursework in Software Engineering, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented System Design.",
      highlights: [
        "Strong foundation in Computer Science principles and Algorithms",
        "Advanced Database Management & Distributed System fundamentals",
        "Software Engineering lifecycle, testing, and modern Web Development",
      ],
    },
  ] as EducationItem[],
};
