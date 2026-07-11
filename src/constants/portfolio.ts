import type {
  ActionItem,
  ContactLink,
  EducationItem,
  NavLink,
  Project,
  SkillGroup,
} from "@/types/portfolio";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroTags = ["Java", "Spring Boot", "React", "Next.js", "AWS"];

export const heroActions: ActionItem[] = [
  {
    label: "Download Resume",
    href: "/Sarath_Chandra_Bokkela_Full_Stack_Developer.pdf",
    icon: "download",
    variant: "contained",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sarathchandrabokkela",
    icon: "linkedin",
    variant: "outlined",
  },
  {
    label: "GitHub",
    href: "#",
    icon: "github",
    variant: "outlined",
    disabled: true,
  },
];

export const experienceHighlights: string[] = [
  "Designing and evolving production-grade backend services in Java and Spring Boot for reliable, high-availability platforms.",
  "Building responsive React and Next.js interfaces that connect distributed services with thoughtful, accessible experiences.",
  "Integrating AI capabilities into product workflows for transcription, summarization, and data discovery use cases.",
  "Collaborating with cross-functional teams to improve system reliability, performance, and delivery quality.",
];

export const projects: Project[] = [
  {
    name: "AI Voice Intelligence Platform",
    description:
      "High-volume speech analytics and transcription workflows that turn spoken conversations into structured insights for business teams.",
    technologies: ["Java", "Spring Boot", "Hibernate/JPA", "AWS S3", "AWS Transcribe", "React"],
    contributions: [
      "Designed scalable backend services for transcription and analysis pipelines.",
      "Improved throughput with asynchronous workflows and optimized persistence layers.",
      "Integrated secure REST APIs with authentication and AI-powered summarization.",
    ],
    github: null,
  },
  {
    name: "KPI Mapping and Data Discovery Platform",
    description:
      "A data and analytics platform that helps teams define, map, and monitor KPIs across product funnels.",
    technologies: ["Java", "Spring MVC", "Spring Boot", "MySQL", "Google Gemini"],
    contributions: [
      "Delivered REST APIs for KPI tracking, analytics, and alerting workflows.",
      "Connected business requirements to intelligent KPI recommendations with GenAI.",
      "Automated engineering workflows through API integrations and relational data modeling.",
    ],
    github: null,
  },
  {
    name: "Digital Learning Platform",
    description:
      "A responsive learning experience platform built to support accessible, device-friendly course delivery.",
    technologies: ["Next.js", "Material UI", "NestJS", "PostgreSQL", "Jest"],
    contributions: [
      "Built cross-device UI modules with accessibility and dark mode support.",
      "Connected the frontend to NestJS APIs and PostgreSQL-backed services.",
      "Improved stability by resolving defects and strengthening regression coverage.",
    ],
    github: null,
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", items: ["Java", "JavaScript", "Go", "SQL"] },
  {
    label: "Backend",
    items: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate/JPA", "Spring AI"],
  },
  { label: "APIs & Security", items: ["REST APIs", "JWT Authentication", "API Gateway"] },
  {
    label: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Material UI", "Bootstrap"],
  },
  { label: "Databases", items: ["PostgreSQL", "MySQL", "Oracle"] },
  { label: "Cloud (AWS)", items: ["EC2", "S3", "IAM", "RDS", "AWS Transcribe"] },
  { label: "Testing", items: ["JUnit", "Mockito", "Jest"] },
  { label: "Tools", items: ["Git", "GitHub", "Postman"] },
  { label: "IDEs", items: ["Eclipse", "VS Code", "Cursor"] },
  { label: "AI Developer Tools", items: ["GitHub Copilot", "Claude"] },
];

export const educationItems: EducationItem[] = [
  {
    title: "B.Tech, Electrical & Electronics Engineering",
    institution: "GMR Institute of Technology",
    dateRange: "2019 – 2023",
    detail: "CGPA 8.59 / 10.0",
    badge: "Education",
  },
  {
    title: "1st Prize — BLITZ 2025 Tech Accelerator",
    institution: "AI Analytics Platform",
    dateRange: "2025",
    detail: "Designed and presented an AI-powered analytics platform, selected as the top team among 50+ competing entries.",
    badge: "Achievement",
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "sarathchandra.bokkela@gmail.com",
    href: "mailto:sarathchandra.bokkela@gmail.com",
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sarathchandrabokkela",
    href: "https://linkedin.com/in/sarathchandrabokkela",
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "Public projects coming soon",
    href: "#",
    icon: "github",
  },
];

export const metadata = {
  title: "Sarath Chandra Bokkela | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Java, Spring Boot, React, Next.js, AWS, and AI integrations. Production-ready portfolio architecture built with Next.js and Material UI.",
  url: "https://sarathchandrabokkela.vercel.app",
};
