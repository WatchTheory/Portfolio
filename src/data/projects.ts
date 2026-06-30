import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  // liveLink: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "Salary Prediction Report",
    imgSrc: "/projects/data_salaries_shot.png",
    description:
      "A machine learning project that explores what drives salary differences across data analyst roles",
    about:
      "Using XGBoost, a gradient boosting algorithm, to predict salary based on various factors.",
    features: [
      "Data wrangling — multi-format cleaning across 8 columns, regex, custom functions, cross-column contamination handling",
      "Feature engineering — ordinal encoding, geographic cost-of-living index, IQR outlier thresholding",
      "ML pipeline design — sklearn Pipeline with imputer + scaler + model, fit isolation to training data only",
      "Model comparison — parallel training and evaluation of 4 regressors, train/test R² with overfit gap analysis",
      "Analytical communication — documented limitations, root cause analysis, and next-step roadmap",
    ],
    techStack: [
      projectTech.python,
      projectTech.pandas,
      projectTech.numpy,
      projectTech.sciktlearn,
      projectTech.excel,
      projectTech.MySQL,
      projectTech.streamlit,
    ],
    // liveLink: "",
    githubLink: "https://github.com/WatchTheory/salary-prediction",
  },
  {
    name: "Department of Defense (D.O.D.) National Defense Education Program (NDEP)",
    imgSrc: "/projects/markdowneditor.png",
    description:
      "Department of Defense (D.O.D.) National Defense Education Program (NDEP).",
    about:
      "Work focused on building foundational AI/ML competencies through guided projects, data exploration, and model evaluation using TensorFlow, Scikit-learn, Python and Feed-Forward Nerual Network (FFNN).",
    features: [
      "Acquire practical experience in AI/ML workflows within a defense-education context.",
      "Build, train, and evaluate neural network models using TensorFlow/Scikit-learn.",
      "Perform data preprocessing, normalization, and analysis in Jupyter environments.",
      "Learn new techniques and tools for AI/ML development.",
      "Communicate technical findings through professional presentations.",
    ],
    techStack: [
      projectTech.python,
      projectTech.pandas,
      projectTech.numpy,
      projectTech.sciktlearn,
      projectTech.jupyter,
      projectTech.TensorFlow,
    ],
    // liveLink: "https://markdown-editor-v1.netlify.app/",
    githubLink: "https://github.com/WatchTheory/D.O.D-Nerual-Network",
  },
  {
    name: "Alumni Analysis",
    imgSrc: "/projects/shadcn-scaffold.png",
    description:
      "Analyze the alumni dataset using Pandas, Jupyter Notebook, Python to extract insights, perform data cleaning, and generate summary statistics.",
    about:
      "Exploratory data analysis on a high school alumni dataset using Python and Pandas — data cleaning, visualization, and a comparative benchmark of five scikit-learn models for outcome prediction.",
    features: [
      "Interactive terminal UI built with React Ink for dynamic package selection",
      "Zero-config integration of Tailwind CSS v4 and shadcn/ui base components",
      "Injects fully functional Theme Providers and custom Mode Toggles",
      "Dynamically patches tsconfig.json and Vite settings to fix path aliasing bugs",
      "Orchestrates child processes (Execa) for reliable dependency resolution",
      "Published globally to NPM for instant execution via npx or bunx",
    ],
    techStack: [
      projectTech.python,
      projectTech.jupyter,
      projectTech.pandas,
      projectTech.numpy,
      projectTech.Plotly,
    ],
    // liveLink: "https://www.npmjs.com/package/shadcn-scaffold",
    githubLink: "https://github.com/WatchTheory/Alumni-Analysis",
  },
  {
    name: "Crude Oil Report",
    imgSrc: "/projects/supertodo.png",
    description:
      "Power BI Dashboard descripting oil production in the U.S for the Gulf Coast Field(PADD 3) targeting Texas role in the Oil Supply",
    about:
      "This was my first project in Power BI. I used it to explore how the U.S. petroleum trade looked in fiscal year 2022 — pulling data from the U.S. Energy Information Administration to build a one-page dashboard with KPI cards, export breakdowns by destination country, and a look at how much of the country's crude oil production came out of Texas specifically. The goal was less 'perfect dashboard' and more learning how Power BI handles DAX-driven visuals, multi-series charts, and KPI cards from scratc",
    features: [
      "Visualizes oil production data from Power BI",
      "Filters by All, Pending, and Completed — sort by status, priority, or date",
      "Learned Power BI from the groud up ",
    ],
    techStack: [projectTech.excel, projectTech.powerbi],
    // liveLink: "https://supertodo-v1.netlify.app/",
    githubLink: "https://github.com/WatchTheory/Crude-Oil-Report",
  },
];

// End of projects data
