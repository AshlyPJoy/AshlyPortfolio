import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090e",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ashly P Joy | Full Stack Developer | React, Next.js, Angular & Node.js",
  description:
    "Ashly P Joy is a Full Stack Developer with 4+ years of experience in React.js, Next.js, Angular, TypeScript, Node.js, NestJS and PostgreSQL. Explore projects, technical expertise and professional experience.",
  keywords: [
    "Ashly P Joy",
    "Full Stack Developer",
    "React Developer",
    "Angular Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Software Engineer",
    "NestJS",
    "PostgreSQL",
    "Prisma ORM",
    "Web Developer Qatar",
    "Software Engineer Dubai UAE",
    "Full Stack Developer Saudi Arabia",
  ],
  authors: [{ name: "Ashly P Joy" }],
  creator: "Ashly P Joy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ashlypjoy.dev",
    title: "Ashly P Joy | Full Stack Developer | React, Next.js, Angular & Node.js",
    description:
      "Full Stack Developer with 4+ years of experience specializing in React, Next.js, Angular, TypeScript, Node.js, and NestJS. Scalable web applications & modern digital experiences.",
    siteName: "Ashly P Joy Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashly P Joy | Full Stack Developer",
    description:
      "Full Stack Developer with 4+ years of experience building modern web applications with React, Next.js, Angular, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ashly P Joy",
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "ULTS",
    },
    description:
      "Full Stack Developer with 4+ years of experience building responsive, scalable and user-friendly web applications using React.js, Next.js, Angular, Node.js, and NestJS.",
    knowsAbout: [
      "React.js",
      "Next.js",
      "Angular",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Redux Toolkit",
      "Tailwind CSS",
      "REST API Development",
    ],
    sameAs: [
      PORTFOLIO_DATA.personal.contact.linkedin,
      PORTFOLIO_DATA.personal.contact.github,
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-slate-100 min-h-screen selection:bg-sky-500/20 selection:text-sky-300`}
      >
        {children}
      </body>
    </html>
  );
}
