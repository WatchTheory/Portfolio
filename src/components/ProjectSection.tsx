import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

const ProjectSection = () => {
  return (
    <section id="projects" className="w-full space-y-6">
      <div className="flex gap-3">
        <span className="text-3xl font-bold">|</span>
        <p className="text-3xl font-semibold">Projects</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
