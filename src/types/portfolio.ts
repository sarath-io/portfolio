export interface NavLink {
  label: string;
  href: string;
}

export interface ActionItem {
  label: string;
  href: string;
  icon: string;
  variant?: "contained" | "outlined";
  disabled?: boolean;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  contributions: string[];
  github?: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  dateRange: string;
  detail: string;
  badge?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
}
