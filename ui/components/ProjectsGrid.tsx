import { ProjectProps } from "types";

import { ProjectCard } from "./ProjectCard";

interface ProjectsGridProps {
  projects: ProjectProps[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="mx-auto max-w-2xl px-2">
      <h2 className="leading-tighter mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-tighter md:text-5xl">
        Projetos
      </h2>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-2 sm:grid-cols-2">
        {projects.map((p: ProjectProps) => (
          <ProjectCard
            key={p.title}
            {...p}
          />
        ))}
      </div>
    </div>
  );
}
