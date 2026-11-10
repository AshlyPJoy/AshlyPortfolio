export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "E-Governance" | "Enterprise Security" | "Healthcare Tech" | "Enterprise Systems";
  status: "Production" | "Completed" | "Active" | "In Development";
  featured: boolean;
  description: string;
  fullOverview: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights?: string[];
  role: string;
  clientOrOrg?: string;
  liveUrl?: string;
  githubUrl?: string;
  mockupType: "ksmart" | "uisp" | "hims" | "klm" | "hrms";
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
      "Full Stack Developer with 4+ years of professional experience specializing in React, Next.js, Angular, Node.js, and NestJS. Experienced in building high-scale e-governance solutions, identity security platforms, and enterprise healthcare systems.",
    aboutBio: [
      "I am a Full Stack Developer with over 4 years of experience building dynamic, responsive, and scalable web applications. My professional background spans modern frontend frameworks (React.js, Next.js, Angular 8/15+) and backend API integration using Node.js, NestJS, and RESTful architectures.",
      "At UL Technology Solutions (ULTS), I have engineered mission-critical enterprise systems including K-SMART (a flagship data-centric e-governance platform for local self-government institutions in Kerala), the Unified Identity Security Platform (UISP), and the Hospital Information Management System (HIMS).",
      "I hold an M.Tech in Communication Systems from TKM College of Engineering (CGPA: 8.76) and a B.Tech in Electronics and Communication from College of Engineering Kottarakkara (CGPA: 7.57). I focus on clean architecture, state management with Redux and NgRx, performance optimization, and building maintainable software.",
    ],
    availability: {
      status: "Actively Exploring Opportunities",
      relocation: "Ready for Onsite / Relocation to UAE, Saudi Arabia, Qatar & International Remote",
      badgeText: "Open to Relocation in Qatar, KSA, UAE & Remote",
    },
    contact: {
      email: "ashlypj@outlook.com",
      secondaryEmail: "ashlypramkunnil@gmail.com",
      phone: "+919562022861",
      whatsappUrl: "https://wa.me/919562022861",
      linkedin: "https://www.linkedin.com/in/ashlyjoy812",
      github: "https://github.com/ashlypjoy",
      location: "Kerala, India (Open to Qatar, KSA, UAE & Global Relocation)",
      resumeUrl: "/resume.pdf",
    },
  },

  skills: [
    {
      title: "Frontend Development",
      description: "Crafting performant, accessible, and reactive user interfaces",
      skills: [
        { name: "React.js", level: "Core Expert", tag: "Primary" },
        { name: "Next.js", level: "Core Expert", tag: "App Router" },
        { name: "Angular", level: "Core Expert", tag: "Angular 8-15+" },
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
        { name: "Express", level: "Core Expert", tag: "Framework" },
        { name: "RESTful APIs", level: "Core Expert", tag: "Design & Specs" },
        { name: "API Integration", level: "Core Expert", tag: "Third-party & Microservices" },
      ],
    },
    {
      title: "UI Frameworks & Styling",
      description: "Building responsive, cohesive design systems and reusable UI component libraries",
      skills: [
        { name: "Tailwind CSS", level: "Core Expert", tag: "Utility-First" },
        { name: "Chakra UI", level: "Core Expert", tag: "Component Library" },
        { name: "PrimeNG", level: "Core Expert", tag: "Angular UI" },
        { name: "Material UI", level: "Proficient", tag: "Design System" },
        { name: "Bootstrap", level: "Proficient", tag: "Responsive" },
      ],
    },
    {
      title: "State Management & Architecture",
      description: "Managing predictable global state and resilient form validation workflows",
      skills: [
        { name: "Redux", level: "Core Expert", tag: "State Arch" },
        { name: "Redux Toolkit", level: "Core Expert", tag: "RTK & Query" },
        { name: "Redux Saga", level: "Core Expert", tag: "Side Effects" },
        { name: "NgRx", level: "Proficient", tag: "Angular State" },
        { name: "RxJS", level: "Proficient", tag: "Reactive Streams" },
      ],
    },
    {
      title: "Databases & ORM",
      description: "Structuring relational and document data with type-safe database queries",
      skills: [
        { name: "PostgreSQL", level: "Proficient", tag: "Relational" },
        { name: "Prisma ORM", level: "Proficient", tag: "Type-Safe ORM" },
        { name: "SQL", level: "Proficient", tag: "Queries & Optimization" },
      ],
    },
    {
      title: "Developer Tools & Testing",
      description: "Modern workflows, automated testing, containerization, and version control",
      skills: [
        { name: "Git", level: "Core Expert", tag: "VCS" },
        { name: "Jira", level: "Core Expert", tag: "Agile / Scrum" },
        { name: "Vitest", level: "Proficient", tag: "Unit & Component Testing" },
        { name: "Docker", level: "Proficient", tag: "Compose & Containers" },
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
      id: "ksmart",
      title: "K-SMART – Smart E-Governance Platform",
      tagline: "Data-Centric E-Governance Platform for Local Self-Government Institutions",
      category: "E-Governance",
      status: "Production",
      featured: true,
      description:
        "A major data-centric e-governance platform for LSGIs in Kerala, engineered to deliver digital public governance and seamless online public services for citizens and local bodies.",
      fullOverview:
        "K-SMART (Kerala Solutions for Managing Administrative Reformation and Transformation) is a pioneering statewide digital governance initiative designed to automate and standardize citizen-facing services across local self-government institutions. Developed with cutting-edge frontend architecture, it provides unified access to municipal permits, licenses, civil registrations, and grievances.",
      technologies: ["React.js", "Redux Saga", "Tailwind CSS", "Chakra UI", "Java", "RESTful APIs"],
      keyFeatures: [
        "Data-centric digital architecture for municipal e-governance.",
        "Asynchronous workflow orchestration managed with Redux Saga.",
        "Responsive, accessible design system built with Tailwind CSS and Chakra UI.",
        "Integrated services for citizens, government employees, and administrative bodies.",
        "High-performance REST API integration with enterprise Java backend services.",
        "Strict input validation and dynamic multi-step public application forms.",
      ],
      role: "Frontend Engineer (Component architecture, Redux Saga state flows, Chakra UI design system, REST integration)",
      clientOrOrg: "UL Technology Solutions (ULTS) for Government of Kerala",
      mockupType: "ksmart",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "uisp",
      title: "Unified Identity Security Platform (UISP)",
      tagline: "Centralized Enterprise Identity Governance & Security Platform",
      category: "Enterprise Security",
      status: "Production",
      featured: true,
      description:
        "A comprehensive enterprise platform designed to centralize and enhance identity security, user authentication, and access governance across organizational systems.",
      fullOverview:
        "The Unified Identity Security Platform (UISP) centralizes multiple identity management and security functions into a single unified console. Designed to streamline enterprise authentication, multi-factor verification, and identity governance, UISP establishes strict security controls while delivering intuitive user experiences and operational efficiency.",
      technologies: ["Next.js", "React.js", "Java", "TypeScript", "RESTful APIs", "Docker"],
      keyFeatures: [
        "Centralized enterprise identity management and access governance.",
        "Streamlined user authentication with token-based access controls.",
        "High-performance Next.js frontend with server-side rendering and route security.",
        "Role-based access control (RBAC) and identity lifecycle management.",
        "Robust REST API integration with enterprise security backends.",
        "Operational dashboards for real-time security auditing and access logs.",
      ],
      role: "Full Stack / Frontend Developer (Next.js architecture, identity flows, API integration)",
      clientOrOrg: "UL Technology Solutions (ULTS)",
      mockupType: "uisp",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "hims",
      title: "Hospital Information Management System (HIMS)",
      tagline: "Integrated Clinical & Healthcare Management Solution",
      category: "Healthcare Tech",
      status: "Production",
      featured: true,
      description:
        "A comprehensive clinical healthcare platform engineered to oversee patient lifecycles, electronic medical records, consultations, pharmacy, and admissions.",
      fullOverview:
        "HIMS is an enterprise healthcare management system designed to coordinate clinical and administrative hospital data. Built with Angular 15 and PrimeNG, it handles electronic patient record processing, doctor consultations, pharmacy inventory, patient admissions, appointment scheduling, and historical health trend tracking.",
      technologies: ["Angular 15", "PrimeNG", "Python", "TypeScript", "RxJS", "RESTful APIs"],
      keyFeatures: [
        "Comprehensive patient data management and electronic medical records (EMR).",
        "Clinical consultation, pharmacy, laboratory, and admission workflows.",
        "Intuitive clinical UI built with Angular 15 Standalone components and PrimeNG.",
        "Reactive state management and event-driven data streaming via RxJS.",
        "Doctor appointment scheduling and calendar management.",
        "Secure health status monitoring and historical patient analytics.",
      ],
      role: "Frontend Developer (Angular 15 component design, PrimeNG UI integration, patient data workflows)",
      clientOrOrg: "UL Technology Solutions (ULTS)",
      mockupType: "hims",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "klm",
      title: "KLM – File Management System",
      tagline: "Enterprise Document Flow & Multi-Module Workflow Engine",
      category: "Enterprise Systems",
      status: "Completed",
      featured: false,
      description:
        "An integrated web-based document routing application that coordinates document flow, role approvals, and status tracking across multiple micro-projects.",
      fullOverview:
        "The KLM File Management System is a centralized document workflow engine that connects multiple independent Angular micro-applications. It manages role-based file forwarding, multi-tier administrative approvals, and complete audit histories for document processing across departments.",
      technologies: ["Angular 8", "HTML5", "CSS3", "Bootstrap", "Java", "RESTful APIs"],
      keyFeatures: [
        "Integrated file routing and multi-tier role-based approval flows.",
        "Cross-module communication across independent Angular projects.",
        "Real-time file movement tracking and document status audits.",
        "Responsive, accessible interface styled with Bootstrap and clean CSS.",
      ],
      role: "Angular Developer (UI components, approval workflows, cross-project routing)",
      clientOrOrg: "UL Technology Solutions (ULTS)",
      mockupType: "klm",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "ulccs-hrms",
      title: "ULCCS – HRMS (Human Resource Management)",
      tagline: "Staff Administration & Service Workflow Automation Suite",
      category: "Enterprise Systems",
      status: "Completed",
      featured: false,
      description:
        "An enterprise Human Resource Management System automating recruitment, probation confirmation, promotions, leave, overtime, and staff service activities.",
      fullOverview:
        "ULCCS-HRMS administers the complete workforce lifecycle for corporate and operational personnel. It digitizes staff onboarding, attendance, leave management, overtime calculations, performance appraisals, and service-related requests into a unified employee portal.",
      technologies: ["Angular 8", "HTML5", "SCSS", "Bootstrap", "Java", "RESTful APIs"],
      keyFeatures: [
        "Automated employee lifecycle management from recruitment to relieving.",
        "Leave application, overtime tracking, and probation confirmation workflows.",
        "Role-based dashboards for HR service administrators and employees.",
        "Secure integration with enterprise Java ERP services.",
      ],
      role: "Associate Developer (Angular UI development, employee forms, HR workflows)",
      clientOrOrg: "UL Technology Solutions (ULTS)",
      mockupType: "hrms",
      liveUrl: undefined,
      githubUrl: undefined,
    },
  ] as Project[],

  experience: [
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Developer Analyst",
      period: "08/2022 – Present",
      experienceYears: "4+ Years Total Experience",
      location: "Kerala, India",
      description:
        "Developing scalable enterprise web applications, data-intensive interfaces, and RESTful API integrations across React.js, Next.js, and Angular. Engineering mission-critical platforms including K-SMART, Unified Identity Security Platform (UISP), and Hospital Information Management System (HIMS).",
      responsibilities: [
        "Develop and maintain responsive user interfaces using React.js, Next.js, Angular, HTML, CSS, Bootstrap, and Material-UI, building reusable and scalable UI components.",
        "Design and implement responsive user interfaces to ensure optimal performance across devices, screen sizes, and modern web browsers.",
        "Translate wireframes and design mockups into interactive, visually appealing, and user-friendly web applications.",
        "Integrate frontend applications with RESTful APIs and web services, handling asynchronous requests efficiently with modern JavaScript/TypeScript.",
        "Implement state management and application logic using Redux, Redux Saga, and NgRx while ensuring clean architecture and maintainability.",
        "Optimize frontend performance by minimizing load times, reducing resource usage, and improving rendering efficiency.",
        "Write and maintain unit and component tests using Vitest to ensure application reliability and code quality.",
        "Use Jira for task management, sprint planning, and tracking development progress in an Agile environment.",
        "Utilize Git for version control, code reviews, and team collaboration.",
        "Collaborate closely with designers, product managers, and backend teams to deliver high-quality digital solutions.",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "NestJS",
        "Redux Saga",
        "Redux Toolkit",
        "NgRx",
        "Tailwind CSS",
        "PrimeNG",
        "Vitest",
        "Docker",
        "Git",
      ],
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
        "Postgraduate degree with distinction in Communication Systems, Signal Processing, and Algorithmic Computational Modeling.",
      highlights: [
        "Graduated with High Academic Distinction (CGPA: 8.76 / 10)",
        "Advanced Communication Systems & Distributed Signal Architectures",
        "Algorithmic Data Processing & System Engineering",
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
        "Undergraduate degree focusing on Microprocessor Architectures, Computer Networks, and Object-Oriented Software Principles.",
      highlights: [
        "First Class Engineering Degree (CGPA: 7.57 / 10)",
        "Computer Systems, Data Networks & Digital Architectures",
        "Foundational Programming, Algorithms & System Design",
      ],
    },
  ] as EducationItem[],
};
