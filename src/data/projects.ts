import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    name: "SuperTodo",
    imgSrc: "/projects/supertodo.png",
    description:
      "A full-featured todo app with priorities, due dates, subtasks, and date-grouped views. Animated with Framer Motion and styled with shadcn/ui for a polished experience.",
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.motion,
      projectTech.shadcnui,
    ],
    liveLink: "https://supertodo-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/supertodo",
  },
  {
    name: "Markdown Editor",
    imgSrc: "/projects/markdowneditor.png",
    description:
      "A Monaco-powered markdown editor with live GitHub-style preview, PDF export via Print.js, theme toggle, and optional sync scroll to keep both panes aligned.",
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.vite,
      projectTech.monaco,
    ],
    liveLink: "https://markdown-editor-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/markdown-editor",
  },
];
