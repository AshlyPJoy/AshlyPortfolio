export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "E-Governance" | "Enterprise Security" | "Healthcare Tech" | "Enterprise Systems" | "Asset Management";
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
  mockupType: "ksmart" | "uisp" | "hims" | "klm" | "hrms" | "asset-nexus";
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
      "Full Stack Developer with 4+ years of professional experience specializing in React, Next.js, Angular, Node.js, NestJS, and PostgreSQL. Experienced in building high-scale e-governance solutions, full-stack enterprise asset lifecycle platforms, identity security systems, and healthcare tech.",
    aboutBio: [
      "I am a Full Stack Developer with over 4 years of professional experience engineering dynamic, responsive, and high-performance web applications. My technical core centers on modern frontend architectures (React.js, Next.js, Angular) paired with scalable backend services using Node.js, Nest.js, Express, and PostgreSQL with Prisma ORM.",
      "I specialize in translating complex business logic into intuitive user interfaces and reliable systems. My engineering approach emphasizes clean, maintainable code, predictable state management (Redux, NgRx, RxJS), modular component libraries, and optimized API data flows that perform consistently under heavy loads.",
      "Beyond writing code, I actively engage across the entire software lifecycle—from system design and relational database schema modeling to Docker containerization, automated testing with Vitest, and Agile sprint execution. I focus on building maintainable software that delivers tangible business value.",
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
        { name: "Angular", level: "Core Expert", tag: "Angular 8–15+" },
        { name: "TypeScript", level: "Core Expert", tag: "Type-Safe" },
        { name: "JavaScript", level: "Core Expert", tag: "ES6+" },
        { name: "HTML5", level: "Core Expert", tag: "Semantic" },
        { name: "CSS3", level: "Core Expert", tag: "Responsive" },
      ],
    },
    {
      title: "Backend Development",
      description: "Developing scalable REST APIs, microservices, and server-side logic",
      skills: [
        { name: "Node.js", level: "Core Expert", tag: "Runtime" },
        { name: "Nest.js", level: "Core Expert", tag: "Architecture" },
        { name: "Express", level: "Core Expert", tag: "Framework" },
        { name: "RESTful APIs", level: "Core Expert", tag: "Design & Specs" },
        { name: "API Integration", level: "Core Expert", tag: "Microservices" },
      ],
    },
    {
      title: "Databases & ORM",
      description: "Structuring relational and document data with type-safe database queries",
      skills: [
        { name: "PostgreSQL", level: "Core Expert", tag: "Relational" },
        { name: "Prisma ORM", level: "Core Expert", tag: "Type-Safe ORM" },
        { name: "MongoDB", level: "Proficient", tag: "NoSQL Document" },
        { name: "SQL", level: "Core Expert", tag: "Queries & Optimization" },
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
      title: "UI Frameworks & Styling",
      description: "Building responsive, cohesive design systems and reusable UI component libraries",
      skills: [
        { name: "Tailwind CSS", level: "Core Expert", tag: "Utility-First" },
        { name: "Bootstrap", level: "Core Expert", tag: "Responsive" },
        { name: "Material-UI", level: "Proficient", tag: "Design System" },
        { name: "Chakra UI", level: "Core Expert", tag: "Component Library" },
        { name: "PrimeNG", level: "Core Expert", tag: "Angular UI" },
      ],
    },
    {
      title: "Tools, DevOps & Testing",
      description: "Modern workflows, automated testing, containerization, and version control",
      skills: [
        { name: "Docker", level: "Core Expert", tag: "Compose & Containers" },
        { name: "Vitest", level: "Proficient", tag: "Unit & Component Tests" },
        { name: "Git", level: "Core Expert", tag: "VCS & GitFlow" },
        { name: "Jira", level: "Core Expert", tag: "Agile / Scrum" },
        { name: "VS Code", level: "Core Expert", tag: "IDE" },
      ],
    },
    {
      title: "AI Tools & Accelerators",
      description: "Modern generative AI tools and pair-programming assistants for engineering velocity",
      skills: [
        { name: "Antigravity", level: "Core Expert", tag: "Agentic IDE" },
        { name: "Claude", level: "Proficient", tag: "AI Assistant" },
        { name: "GitHub Copilot", level: "Core Expert", tag: "Code Assistant" },
        { name: "ChatGPT", level: "Core Expert", tag: "Architecture & Code" },
        { name: "Gemini", level: "Proficient", tag: "Analysis" },
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
        "A flagship data-centric e-governance platform for Local Self-Government Institutions (LSGIs) in Kerala, transforming public service delivery across municipal corporations, municipalities, and grama panchayats.",
      fullOverview:
        "K-SMART (Kerala Solutions for Managing Administrative Reformation and Transformation) is a pioneering statewide digital governance initiative designed to automate and standardize citizen-facing services across local self-government institutions. Engineered scalable frontend modules for public grievance redressal, civil registrations (birth/death/marriage), trade licensing, and building permits. Architected complex, multi-step public application workflows and asynchronous side-effects using Redux Saga to handle peak citizen filing volumes.",
      technologies: ["React.js", "Redux Saga", "Tailwind CSS", "Chakra UI", "Java", "RESTful APIs"],
      keyFeatures: [
        "Scalable frontend modules for public grievance redressal, civil registrations, and trade licensing.",
        "Asynchronous workflow orchestration and high-traffic side-effects managed with Redux Saga.",
        "Responsive, bilingual design system with Tailwind CSS and Chakra UI ensuring WCAG compliance.",
        "High-performance REST API integration with enterprise Java microservices.",
        "Strict client/server schema validation, file uploads, and real-time application status tracking.",
      ],
      role: "Frontend Engineer (Component architecture, Redux Saga state flows, Chakra UI design system, REST integration)",
      clientOrOrg: "UL Technology Solutions (ULTS) for Govt. of Kerala / LSGI",
      mockupType: "ksmart",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "asset-nexus",
      title: "Asset Nexus – Enterprise Asset Lifecycle Platform",
      tagline: "Full-Stack Enterprise Asset Management & Maintenance Suite",
      category: "Asset Management",
      status: "Production",
      featured: true,
      description:
        "An enterprise-grade full-stack Asset Lifecycle Management platform built with React, Next.js, Nest.js, TypeScript, and PostgreSQL to streamline end-to-end tracking of IT hardware, equipment, and facilities.",
      fullOverview:
        "Asset Nexus is an enterprise-grade full-stack Asset Lifecycle Management platform built with Next.js, React, Nest.js, TypeScript, and PostgreSQL. It streamlines end-to-end tracking of IT hardware, physical equipment, and properties across procurement, QR-based field verification, preventive maintenance workflows, and financial depreciation. The system is containerized with Docker and features multi-provider OAuth2 (Google/Microsoft) and granular RBAC.",
      technologies: ["Next.js", "Nest.js", "Node.js", "TypeScript", "PostgreSQL", "Prisma ORM", "Tailwind CSS", "Docker"],
      keyFeatures: [
        "End-to-end tracking of IT hardware, physical equipment, and corporate facilities.",
        "Automated preventive maintenance workflows, service tickets, and warranty alerts.",
        "Financial depreciation calculation models and QR-based field audit verification.",
        "Multi-provider OAuth2 authentication (Google/Microsoft) and granular role-based access control (RBAC).",
        "High-performance REST APIs and database schema migrations using PostgreSQL and Prisma ORM.",
        "Full containerization of frontend, backend, and database services with Docker Compose.",
      ],
      role: "Full Stack Developer (Next.js UI, Nest.js backend services, Prisma schemas, Docker Compose containerization)",
      clientOrOrg: "Enterprise Asset Solutions",
      mockupType: "asset-nexus",
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
        "A centralized enterprise identity governance and security platform designed to streamline multi-factor authentication, user identity governance, and access authorization across organizational systems.",
      fullOverview:
        "The Unified Identity Security Platform (UISP) centralizes multiple identity management and security functions into a single unified console. Built an intuitive administrative console implementing Role-Based Access Control (RBAC) and user identity lifecycle management. Leveraged Next.js for server-side rendering (SSR), route-level authentication guards, and secure HttpOnly cookie handling. Developed real-time security dashboards for monitoring active sessions, access anomaly flags, and compliance audit histories.",
      technologies: ["Next.js", "React.js", "Java", "TypeScript", "RESTful APIs", "Docker"],
      keyFeatures: [
        "Centralized enterprise identity governance and user authentication console.",
        "Role-Based Access Control (RBAC) and identity lifecycle management workflows.",
        "Next.js server-side rendering (SSR), route-level authentication guards, and secure HttpOnly cookies.",
        "Real-time security dashboards for monitoring active sessions and anomaly flags.",
        "Audit compliance tracking and historical permission access logs.",
      ],
      role: "Full Stack / Frontend Developer (Next.js architecture, identity flows, API integration, RBAC)",
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
        "A comprehensive clinical healthcare management solution overseeing patient lifecycles, electronic medical records (EMR), doctor consultations, pharmacy inventory, and hospital admissions.",
      fullOverview:
        "HIMS is an enterprise healthcare management system designed to coordinate clinical and administrative hospital data. Developed modules for inpatient/outpatient registration, clinical consultation notes, laboratory diagnostics, and electronic health record retrieval. Built high-performance clinical tables and scheduling views with Angular 15 Standalone components, PrimeNG, and RxJS data streams. Implemented real-time doctor availability calendars, automated appointment booking, and pharmacy dispensation tracking.",
      technologies: ["Angular 15", "PrimeNG", "TypeScript", "RxJS", "RESTful APIs"],
      keyFeatures: [
        "Inpatient/outpatient registration, clinical consultation notes, and laboratory diagnostics.",
        "High-performance clinical tables and scheduling views with Angular 15 Standalone components and PrimeNG.",
        "Reactive state management and event-driven clinical data streaming via RxJS.",
        "Real-time doctor availability calendars and automated appointment scheduling.",
        "Pharmacy inventory tracking, medicine dispensation records, and health analytics.",
      ],
      role: "Frontend Developer (Angular 15 component design, PrimeNG UI integration, patient data workflows)",
      clientOrOrg: "UL Technology Solutions (ULTS)",
      mockupType: "hims",
      liveUrl: undefined,
      githubUrl: undefined,
    },
    {
      id: "klm",
      title: "KLM – Enterprise ERP & File Approvals Platform",
      tagline: "Enterprise ERP Workflow Engine & Land Governance System",
      category: "Enterprise Systems",
      status: "Completed",
      featured: false,
      description:
        "An enterprise-grade ERP and digital workflow platform engineered to automate multi-departmental administrative operations, land record governance, and official file approval lifecycles.",
      fullOverview:
        "KLM is a centralized enterprise ERP and digital workflow platform that connects administrative operations across departments. Designed modular Angular interfaces allowing administrative users to forward, approve, reject, and annotate official documents with complete digital audit trails. Built dynamic forms with strict field validation, land records management, and role-based permissions.",
      technologies: ["Angular 12", "Java", "TypeScript", "RESTful APIs", "Bootstrap"],
      keyFeatures: [
        "Enterprise ERP file dispatch workflows for forwarding, approving, rejecting, and annotating files.",
        "Land record governance, administrative dispatch tracking, and departmental audits.",
        "Granular Role-Based Access Control (RBAC) ensuring data compliance across tiers.",
        "Resilient REST API integration with enterprise Java backend microservices.",
      ],
      role: "Angular Developer (UI components, approval workflows, ERP routing, form validation)",
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
      period: "12/2024 – Present",
      experienceYears: "Current Role",
      location: "Kerala, India",
      description:
        "Leading full-stack engineering of scalable RESTful APIs, relational database schemas, and data-intensive interfaces across Node.js, Nest.js, Express, Next.js, and PostgreSQL. Engineering enterprise asset management workflows, Docker Compose containerization, and backend performance optimization.",
      responsibilities: [
        "Developed scalable RESTful APIs and backend services using Node.js, Nest.js, and Express, with PostgreSQL and Prisma for efficient data management.",
        "Designed and managed relational database schemas, migrations, and data operations using PostgreSQL and Prisma ORM.",
        "Integrated frontend and backend services through RESTful APIs, implementing validation, error handling, and business logic.",
        "Containerized frontend, backend, and database services using Docker Compose, maintaining consistent local and staging development environments.",
        "Optimized backend data processing and Node.js stream handling to improve application performance and stability.",
        "Developed responsive, data-intensive interfaces using React.js and Next.js, with Redux for application state management.",
        "Implemented dependent data flows, forms, dashboards, tables, filters, and reusable UI components for asset management workflows.",
        "Developed unit and component tests using Vitest to improve application reliability and maintain code quality.",
        "Collaborated with frontend, backend, QA, and product teams to troubleshoot technical issues and translate business requirements into maintainable solutions.",
      ],
      techStack: [
        "Node.js",
        "Nest.js",
        "Express",
        "Next.js",
        "React.js",
        "TypeScript",
        "PostgreSQL",
        "Prisma ORM",
        "Docker",
        "Vitest",
        "Redux",
      ],
    },
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Associate Developer",
      period: "12/2022 – 11/2024",
      experienceYears: "2 Years",
      location: "Kerala, India",
      description:
        "Engineered and maintained responsive enterprise web applications using React.js and Angular. Delivered mission-critical e-governance systems (K-SMART), healthcare platforms (HIMS), and workflow tools with Redux/NgRx state management.",
      responsibilities: [
        "Developed and maintained responsive web applications using React.js, Angular, HTML, CSS, Bootstrap, and Material-UI.",
        "Built reusable and scalable UI components following maintainable coding practices.",
        "Translated wireframes and design mockups into interactive, high-performance web applications.",
        "Integrated frontend applications with RESTful APIs and web services.",
        "Implemented application state management using Redux and NgRx.",
        "Optimized frontend performance by improving rendering efficiency and reducing load times.",
        "Wrote and maintained unit and component tests using Vitest.",
        "Troubleshot complex technical issues and collaborated with designers, product managers, QA, and backend teams.",
      ],
      techStack: [
        "React.js",
        "Angular",
        "TypeScript",
        "Redux",
        "NgRx",
        "RxJS",
        "Tailwind CSS",
        "PrimeNG",
        "Bootstrap",
        "Material-UI",
        "Vitest",
      ],
    },
    {
      company: "UL Technology Solutions (ULTS)",
      role: "Software Development Intern",
      period: "08/2022 – 11/2022",
      experienceYears: "4 Months",
      location: "Kerala, India",
      description:
        "Assisted in developing and maintaining responsive web applications using HTML, CSS, JavaScript, and Angular. Built reusable components, integrated RESTful APIs, and learned Agile development workflows.",
      responsibilities: [
        "Assisted in developing and maintaining responsive web applications using HTML, CSS, JavaScript, and Angular.",
        "Built reusable UI components and implemented responsive layouts based on design requirements.",
        "Converted UX/UI designs into responsive and accessible interfaces.",
        "Integrated frontend screens with RESTful APIs and handled API responses and basic error handling.",
        "Worked with JavaScript and TypeScript to implement application features and improve code maintainability.",
        "Participated in debugging, troubleshooting, code reviews, and testing under the guidance of senior developers.",
        "Gained hands-on experience in software development lifecycle, code reviews, testing, and team-based development.",
      ],
      techStack: [
        "Angular",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "RESTful APIs",
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
