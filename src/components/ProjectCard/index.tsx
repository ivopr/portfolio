import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FC } from "react";

type ProjectCardProps = {
  name: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ name }) => {
  const { t } = useTranslation(["projects"]);

  return (
    <Link href={`/projects/${name}`}>
      <a className="w-full rounded-lg bg-primary-800 px-4 py-5 shadow shadow-primary-600 transition-all hover:bg-primary-700 hover:shadow-primary-500 md:w-56 lg:w-72">
        <h2 className="text-lg">{t(`projects:${name}.title`)}</h2>
        <p className="w-full line-clamp-2">
          {t(`projects:${name}.description`)}
        </p>
      </a>
    </Link>
  );
};

export default ProjectCard;
