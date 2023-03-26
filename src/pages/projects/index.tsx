import { allProjects } from "contentlayer/generated";

import { PageTitle } from "@app/components/PageTitle";
import { ProjectCard } from "@app/components/ProjectCard";

export default function Home() {
  return (
    <>
      <PageTitle title="Projetos" />
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-x-2 gap-y-4 sm:grid-cols-2">
        {allProjects
          .filter((p) => p.status === "published")
          .map((p: ProjectProps) => (
            <ProjectCard
              key={p.title}
              {...p}
            />
          ))}
      </div>
    </>
  );
}
