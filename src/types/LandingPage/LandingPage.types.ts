import { LucideIcon } from "lucide-react";

export interface Section {
  id: string;
  label: string;
  icon?: LucideIcon;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  link: string;
}
