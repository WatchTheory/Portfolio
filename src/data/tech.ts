import { BiLogoDjango } from "react-icons/bi";

export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const skills: TechItem[] = [
  { name: "Python", icon: "/tech/Python.svg" },
  { name: "Power BI", icon: "/tech/powerbi.svg" },
  { name: "Scikit-learn", icon: "/tech/scikit-learn.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  { name: "Excel", icon: "/tech/excel.svg" },
  { name: "R", icon: "/tech/R.svg" },
  { name: "Tableau", icon: "/tech/tableau.svg" },
  { name: "Streamlit", icon: "/tech/streamlit.svg" },
  { name: "Linux Temerial", icon: "/tech/ghostty.svg" },
];

export const frontendSkills: TechItem[] = [
  // { name: "React", icon: "/tech/react.svg" },
  // { name: "TypeScript", icon: "/tech/typescript.svg" },
  // { name: "JavaScript", icon: "/tech/js.svg" },
  // { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  // {
  //   name: "shadcn/ui",
  //   icon: "/tech/shadcn-ui-light.svg",
  //   darkIcon: "/tech/shadcn-ui-dark.svg",
  // },
  { name: "Jupyter Notebook", icon: "/tech/Jupyter.svg" },
  { name: "Python", icon: "/tech/Python.svg" },
  { name: "Scikit-learn", icon: "/tech/scikit-learn.svg" },
  { name: "Matplotlib", icon: "/tech/Matplotlib.svg" },
  { name: "Seaborn", icon: "/tech/seaborn.svg" },
  { name: "Pandas", icon: "/tech/Pandas.svg" },
  { name: "Numpy", icon: "/tech/Numpy.svg" },
  { name: "Plotly", icon: "/tech/Plotly.svg" },
  { name: "TensorFlow", icon: "/tech/TensorFlow.svg" },

  { name: "R", icon: "/tech/R.svg" },
  { name: "RStudio", icon: "/tech/RStudio.svg" },

  { name: "Tableau", icon: "/tech/tableau.svg" },
  { name: "Power BI", icon: "/tech/powerbi.svg" },

  { name: "Excel", icon: "/tech/excel.svg" },

  { name: "Streamlit", icon: "/tech/streamlit.svg" },
  { name: "PowerShell", icon: "/tech/Powershell.svg" },
  { name: "HTML5", icon: "/tech/html5.svg" },

  { name: "Temerial", icon: "/tech/ghostty.svg" },
  { name: "Bash", icon: "/tech/Bash.svg" },

  // {
  //   name: "CSS",
  //   icon: "/tech/css3.svg",
  //   darkIcon: "/tech/css3-dark.svg",
  // },
];

export const backendSkills: TechItem[] = [
  // { name: "Java", icon: "/tech/java.svg" },
  // { name: "Spring Boot", icon: "/tech/springboot.svg" },
  { name: "MySQL", icon: "/tech/mysql.svg" },
  // { name: "Supabase", icon: "/tech/supabase.svg" },
  { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  { name: "Bootstrap", icon: "/tech/Bootstrap.svg" },
  { name: "Flask", icon: "/tech/flask.svg" },
  { name: "Django", icon: "/tech/django.svg" },
  { name: "FastApi", icon: "/tech/Fastapi.svg" },

  { name: "MongoDB", icon: "/tech/mongodb.svg" },
  { name: "DBeaver", icon: "/tech/DBeaver.svg" },

  // { name: "Redis", icon: "/tech/redis.svg" },
];

export const toolsSkills: TechItem[] = [
  { name: "Git", icon: "/tech/git.svg" },
  {
    name: "GitHub",
    icon: "/social/github.svg",
    darkIcon: "/social/github-dark.svg",
  },
  // { name: "Maven", icon: "/tech/apachemaven.svg" },
  // { name: "Gradle", icon: "/tech/gradle.svg" },
  // {
  //   name: "Vercel",
  //   icon: "/tech/vercel-light.svg",
  //   darkIcon: "/tech/vercel-dark.svg",
  // },
  // { name: "Netlify", icon: "/tech/netlify.svg" },
  { name: "Windows", icon: "/tech/Windows 11.svg" },
  { name: "Ubuntu", icon: "/tech/ubuntu.svg" },
  // {
  //   name: "Bun",
  //   icon: "/tech/bun.svg",
  //   darkIcon: "/tech/bun-dark.svg",
  // },
  { name: "Docker", icon: "/tech/docker.svg" },
  // { name: "NPM", icon: "/tech/npm.svg" },
];

export const skillRows: {
  direction: "left" | "right";
  category: string;
  items: TechItem[];
}[] = [
  {
    direction: "left",
    category: "Frontend",
    items: frontendSkills,
  },
  {
    direction: "right",
    category: "Backend",
    items: backendSkills,
  },
  {
    direction: "left",
    category: "Tools & DevOps",
    items: toolsSkills,
  },
];

export const projectTech = {
  jupyter: { name: "Jupyter Notebook", icon: "/tech/Jupyter.svg" },
  python: { name: "Python", icon: "/tech/Python.svg" },
  excel: { name: "Excel", icon: "/tech/excel.svg" },
  sciktlearn: { name: "Scikit-learn", icon: "/tech/scikit-learn.svg" },
  pandas: { name: "Pandas", icon: "/tech/Pandas.svg" },
  numpy: { name: "Numpy", icon: "/tech/Numpy.svg" },
  mathplot: { name: "Matplotlib", icon: "/tech/Matplotlib.svg" },
  seaborn: { name: "Seaborn", icon: "/tech/seaborn.svg" },
  streamlit: { name: "Streamlit", icon: "/tech/streamlit.svg" },
  TensorFlow: { name: "TensorFlow", icon: "/tech/TensorFlow.svg" },
  Plotly: { name: "Plotly", icon: "/tech/Plotly.svg" },
  powerbi: { name: "Power BI", icon: "/tech/powerbi.svg" },

  R: { name: "R", icon: "/tech/R.svg" },
  DAX: { name: "DAX", icon: "/tech/DAX.svg" },
  Flask: { name: "Flask", icon: "/tech/flask.svg" },
  FastAPI: { name: "FastAPI", icon: "/tech/fastapi.svg" },
  SQL: { name: "SQL", icon: "/tech/sql.svg" },
  PostgreSQL: { name: "PostgreSQL", icon: "/tech/postgresql.svg" },
  MySQL: { name: "MySQL", icon: "/tech/mysql.svg" },
  MongoDB: { name: "MongoDB", icon: "/tech/mongodb.svg" },
  Django: { name: "Django", icon: "/tech/django.svg" },
  Bootstrap: { name: "Bootstrap", icon: "/tech/bootstrap.svg" },

  LinuxTemerial: { name: "Temerial", icon: "/tech/ghostty.svg" },
  PowerShell: { name: "PowerShell", icon: "/tech/Powershell.svg" },
  Bash: { name: "Bash", icon: "/tech/bash.svg" },

  react: { name: "React", icon: "/tech/react.svg" },
  javascript: { name: "JavaScript", icon: "/tech/js.svg" },
  typescript: { name: "TypeScript", icon: "/tech/typescript.svg" },
  tailwindcss: { name: "Tailwind CSS", icon: "/tech/tailwindcss.svg" },
  vite: { name: "Vite", icon: "/tech/vite.svg" },
  motion: { name: "Framer Motion", icon: "/tech/motion.svg" },
  springboot: { name: "Spring Boot", icon: "/tech/springboot.svg" },
  radixui: {
    name: "Radix UI",
    icon: "/tech/radixui.svg",
    darkIcon: "/tech/radixui-dark.svg",
  },
  shadcnui: {
    name: "shadcn/ui",
    icon: "/tech/shadcn-ui-light.svg",
    darkIcon: "/tech/shadcn-ui-dark.svg",
  },
  supabase: { name: "Supabase", icon: "/tech/supabase.svg" },
  postgresql: { name: "PostgreSQL", icon: "/tech/postgre.svg" },
  redis: { name: "Redis", icon: "/tech/redis.svg" },
  jwt: {
    name: "JWT",
    icon: "/tech/jwt-light.svg",
    darkIcon: "/tech/jwt-dark.svg",
  },
  monaco: { name: "Monaco Editor", icon: "/tech/monaco.svg" },
  nodejs: {
    name: "Node.js",
    icon: "/tech/nodejs-light.svg",
    darkIcon: "/tech/nodejs-dark.svg",
  },
  ink: {
    name: "Ink",
    icon: "/tech/ink-light.svg",
    darkIcon: "/tech/ink-dark.svg",
  },
  commander: {
    name: "Commander.js",
    icon: "/tech/commander-light.svg",
    darkIcon: "/tech/commander-dark.svg",
  },
  execa: {
    name: "Execa",
    icon: "/tech/execa-light.svg",
    darkIcon: "/tech/execa-dark.svg",
  },
  docker: { name: "Docker", icon: "/tech/docker.svg" },
} as const;
