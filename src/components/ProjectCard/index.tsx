import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FC } from "react";

type ProjectCardProps = {
  name: string;
  banner: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ banner, name }) => {
  const { t } = useTranslation(["projects"]);

  return (
    <Link
      className="group block rounded-xl bg-primary-800/20 transition-all hover:bg-primary-800/30"
      href={`/projects/${name}`}
    >
      <Image
        alt="Project Banner"
        src={banner}
        className="h-56 w-full rounded-xl object-cover shadow-xl"
        width={1240}
        height={224}
      />

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-200 group-hover:text-gray-50">
          {t(`projects:${name}.title`)}
        </h3>

        <p className="mt-2 text-gray-400 line-clamp-2">
          {t(`projects:${name}.description`)}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
