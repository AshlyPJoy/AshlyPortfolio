# Ashly P Joy – Premium Full Stack Developer Portfolio

A modern, high-performance developer portfolio engineered for **Ashly P Joy**, an experienced Full Stack Developer with 4+ years of professional software engineering experience.

Designed with a sophisticated dark visual aesthetic (deep navy, electric blue, and subtle violet accents) to appeal to international hiring teams, CTOs, and engineering leaders—especially in **Qatar, Saudi Arabia, the United Arab Emirates, and global remote markets**.

---

## 🚀 Live Demo & Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server & Client Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type-safety)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Custom deep navy & neon accent palette)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Deployment Target:** [Vercel](https://vercel.com/) / Docker

---

## 🌟 Key Architecture & Features

### 1. Distinctive Personal Branding (No Generic Templates)
- **Hero Section:** High-impact typographic layout featuring Ashly's exact title, 4+ years experience, and core stack (React, Next.js, Angular, Node.js).
- **Interactive Technical Visual:** Replaces standard photos with an interactive **System Architecture & Live Terminal Simulator**, allowing recruiters to inspect 3-tier full-stack flows (Frontend &rarr; API &rarr; Database & ORM) with live latency, type safety, and real-time operational status.
- **International Availability Pill:** Highlighted openness to GCC relocation (Qatar, UAE, Saudi Arabia) and international remote roles.

### 2. About Me & Engineering Highlights
- Includes exact professional summary, narrative bio, and core engineering principles: Reusable Component Systems, Complex Forms & Validation, Interactive Dashboards, and Resilient API Integration.
- 3 primary highlight metrics reflecting authentic professional delivery.

### 3. Authentic Technical Skills Matrix
- Categorized into 6 core domains:
  1. **Frontend Development** (React.js, Next.js, Angular, TypeScript, ES6+, HTML5, CSS3)
  2. **UI Frameworks & Styling** (Tailwind CSS, Bootstrap, Material UI, Chakra UI, PrimeNG)
  3. **State Management & Forms** (Redux, Redux Toolkit, Redux Saga, React Hooks, React Hook Form, Context API)
  4. **Backend Development** (Node.js, NestJS, REST API Development, API Integration)
  5. **Databases & ORM** (PostgreSQL, MongoDB, Prisma ORM)
  6. **Developer Tools** (Git, GitHub, VS Code, Postman, Docker)
- Additional Architectural Knowledge cards detailing modern Angular Standalone components, new control flow (`@if`, `@for`), lazy loading, and Core Web Vitals optimization.
- **No fake percentage bars**; presents balanced, authentic professional competencies.

### 4. Featured Projects with High-Fidelity Mockups
1. **AssetNexus – Asset Management System:** Enterprise lifecycle & master data platform (React, TypeScript, NestJS, PostgreSQL, Prisma ORM).
2. **MotionForge AI – AI Video Generation Platform:** Programmatic video creation engine (Next.js, React, TypeScript, Node.js, Remotion) — **clearly labeled "In Development"**.
3. **Dashboard and Analytics Application:** Real-time data visualization suite (React, TypeScript, Redux Toolkit, REST APIs, Tailwind CSS).
- Interactive **Project Detail Modal** for deep architectural inspection, deliverables review, and tech stack exploration.
- Honest placeholders for enterprise / NDA codebases.

### 5. Professional Journey (ULTS)
- Attractive vertical timeline showcasing 4+ years as **Developer Analyst at ULTS**.
- Complete responsibilities and applied technologies mapped out cleanly.

### 6. Education
- Clean academic card with editable placeholders for B.Tech / B.E. in Information Technology / Computer Science.

### 7. Functional Contact System
- Direct contact cards (Email with one-click copy toast, LinkedIn, GitHub).
- Fully validated `/api/contact` API endpoint.
- Transparent feedback when email credentials are not configured, providing a direct, pre-filled `mailto:` fallback.

### 8. Downloadable Resume
- Working resume download button linking directly to `/resume.pdf` in the `public/` directory.

---

## 🛠️ Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm** or **pnpm**

### Installation

```bash
# 1. Clone repository or navigate to project directory
cd d:/Portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Customizing Personal Data & Links

All personal information, project descriptions, skills, social profiles, and contact details are centralized in a single configuration file:

📁 **[`src/data/portfolio-data.ts`](file:///d:/Portfolio/src/data/portfolio-data.ts)**

To update your email, LinkedIn URL, GitHub profile, or education details:
```typescript
contact: {
  email: "your.name@gmail.com",
  linkedin: "https://linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
  location: "India (Open to UAE, KSA, Qatar & Global Relocation)",
  resumeUrl: "/resume.pdf",
}
```

To update or replace your PDF resume, simply replace the file at:
📁 **[`public/resume.pdf`](file:///d:/Portfolio/public/resume.pdf)**

---

## 🚢 Production Build & Deployment

### Build Locally
```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of Ashly P Joy portfolio"
   git remote add origin https://github.com/ashlypjoy/portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/).
3. Vercel automatically detects Next.js:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. Click **Deploy**. Your portfolio will be live globally on Vercel's Edge Network with optimal Core Web Vitals.

---

## 📄 License

Created for **Ashly P Joy**. All rights reserved.
