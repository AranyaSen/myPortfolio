import { 
  Monitor, 
  Server, 
  Cpu, 
  Code2, 
  Terminal, 
  Layers 
} from "lucide-react";
import { Project, Section, SkillCategory } from "../types/LandingPage/LandingPage.types";

export const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
];

export const projects: Project[] = [
  {
    title: "Chat app",
    description:
      "A real-time chat application built with React and Node.js (Express) that makes it easy for users to connect through the app and initiate conversations.",
    link: "https://github.com/AranyaSen/Minimalist-chat-app",
  },
];

export const TITLE: string = "Software Engineer";

export const ABOUT_ME = `Software Engineer with 2.5 years of experience building scalable,
          high-performance web applications. I specialize in creating elegant
          user interfaces and robust full-stack solutions using the modern web
          ecosystem.`;

export const FRONTEND_SKILLS: SkillCategory = {
  title: "Frontend",
  icon: Monitor,
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "Zustand",
    "Redux",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],
};

export const BACKEND_SKILLS: SkillCategory = {
  title: "Backend",
  icon: Server,
  skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "JWT"],
};

export const TOOLS_SKILLS: SkillCategory = {
  title: "Tools",
  icon: Terminal,
  skills: ["Git", "Postman"],
};

export const SKILLS = [FRONTEND_SKILLS, BACKEND_SKILLS, TOOLS_SKILLS];
