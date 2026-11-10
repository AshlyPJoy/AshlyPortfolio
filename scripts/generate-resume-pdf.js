// Script to generate a valid, clean PDF resume for Ashly P Joy
const fs = require('fs');
const path = require('path');

function createResumePDF() {
  const content = `%PDF-1.4
%âãÏÓ
1 0 obj
<<
  /Type /Catalog
  /Pages 2 0 R
>>
endobj

2 0 obj
<<
  /Type /Pages
  /Kids [3 0 R]
  /Count 1
>>
endobj

3 0 obj
<<
  /Type /Page
  /Parent 2 0 R
  /MediaBox [0 0 595 842]
  /Contents 4 0 R
  /Resources <<
    /Font <<
      /F1 5 0 R
      /F2 6 0 R
      /F3 7 0 R
    >>
  >>
>>
endobj

5 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Bold
>>
endobj

6 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica
>>
endobj

7 0 obj
<<
  /Type /Font
  /Subtype /Type1
  /BaseFont /Helvetica-Oblique
>>
endobj

4 0 obj
<<
  /Length 1950
>>
stream
BT
/F1 22 Tf
50 790 Td
(ASHLY P JOY) Tj

/F1 12 Tf
0 -20 Td
(FULL STACK DEVELOPER | 4+ YEARS EXPERIENCE) Tj

/F2 9 Tf
0 -15 Td
(Email: ashlypjoy.dev@gmail.com | Location: Open to Relocation in Qatar, KSA, UAE & Remote) Tj
0 -12 Td
(LinkedIn: linkedin.com/in/ashly-p-joy | GitHub: github.com/ashlypjoy) Tj

0 -15 Td
(____________________________________________________________________________________________) Tj

/F1 11 Tf
0 -20 Td
(PROFESSIONAL SUMMARY) Tj

/F2 9.5 Tf
0 -15 Td
(Full Stack Developer with over 4 years of experience building responsive, scalable and user-friendly) Tj
0 -13 Td
(web applications. Specialized in modern frontend development using React.js, Next.js and Angular,) Tj
0 -13 Td
(with strong expertise in JavaScript, TypeScript, Redux and REST API integration. Solid backend) Tj
0 -13 Td
(development experience with Node.js, NestJS, PostgreSQL and Prisma ORM.) Tj

0 -12 Td
(____________________________________________________________________________________________) Tj

/F1 11 Tf
0 -20 Td
(PROFESSIONAL EXPERIENCE) Tj

/F1 10 Tf
0 -15 Td
(ULTS - Developer Analyst) Tj

/F3 9 Tf
0 -13 Td
(4+ Years in Software Development) Tj

/F2 9 Tf
0 -14 Td
(- Developing reusable and scalable frontend components using React.js, Angular, and TypeScript.) Tj
0 -12 Td
(- Building responsive web applications with modular architecture and clean code principles.) Tj
0 -12 Td
(- Developing complex forms with robust schema validation workflows and responsive user feedback.) Tj
0 -12 Td
(- Implementing interactive dashboards, data tables, and high-performance filtering systems.) Tj
0 -12 Td
(- Integrating REST APIs, handling asynchronous data flows, and optimizing state management.) Tj
0 -12 Td
(- Contributing to both frontend and backend functionality across full lifecycle delivery.) Tj
0 -12 Td
(- Improving application performance, Core Web Vitals, and maintainability across releases.) Tj

0 -12 Td
(____________________________________________________________________________________________) Tj

/F1 11 Tf
0 -20 Td
(TECHNICAL SKILLS) Tj

/F2 9 Tf
0 -14 Td
(Frontend: React.js, Next.js, Angular, TypeScript, JavaScript (ES6+), HTML5, CSS3) Tj
0 -12 Td
(UI Frameworks: Tailwind CSS, Bootstrap, Material UI, Chakra UI, PrimeNG) Tj
0 -12 Td
(State & Forms: Redux, Redux Toolkit, Redux Saga, React Hooks, React Hook Form, Context API) Tj
0 -12 Td
(Backend: Node.js, NestJS, REST API Development, API Integration) Tj
0 -12 Td
(Databases: PostgreSQL, MongoDB, Prisma ORM) Tj
0 -12 Td
(Tools: Git, GitHub, VS Code, Postman, Docker) Tj

0 -12 Td
(____________________________________________________________________________________________) Tj

/F1 11 Tf
0 -20 Td
(KEY PROJECTS) Tj

/F1 9.5 Tf
0 -14 Td
(AssetNexus - Asset Management System) Tj
/F2 8.5 Tf
0 -12 Td
(React.js, TypeScript, NestJS, PostgreSQL, Prisma ORM | Master data & complete asset lifecycle platform.) Tj

/F1 9.5 Tf
0 -14 Td
(MotionForge AI - AI Video Generation Platform (In Development)) Tj
/F2 8.5 Tf
0 -12 Td
(Next.js, React, TypeScript, Node.js, Remotion | Storyboard creation, AI video workflow & motion graphics.) Tj

/F1 9.5 Tf
0 -14 Td
(Dashboard and Analytics Application) Tj
/F2 8.5 Tf
0 -12 Td
(React.js, TypeScript, Redux Toolkit, REST APIs, Tailwind CSS | Real-time analytics & responsive data tables.) Tj

0 -12 Td
(____________________________________________________________________________________________) Tj

/F1 11 Tf
0 -20 Td
(EDUCATION) Tj

/F1 9.5 Tf
0 -14 Td
(B.Tech / B.E. in Information Technology / Computer Science) Tj
/F2 8.5 Tf
0 -12 Td
(Accredited Engineering University | Foundational coursework in Systems, Data Structures & Software Engineering) Tj

ET
endstream
endobj

xref
0 8
0000000000 65535 f 
0000000015 00000 n 
0000000068 00000 n 
0000000125 00000 n 
0000000350 00000 n 
0000000252 00000 n 
0000000285 00000 n 
0000000318 00000 n 
trailer
<<
  /Size 8
  /Root 1 0 R
>>
startxref
2350
%%EOF
`;

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const dest = path.join(publicDir, 'resume.pdf');
  fs.writeFileSync(dest, content.trim());
  console.log('Successfully generated public/resume.pdf');
}

createResumePDF();
