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
    <Link href={`/projects/${name}`}>
      <a className="group block rounded-xl bg-primary-800/20 transition-all hover:bg-primary-800/30">
        <img
          alt="Lava"
          src={banner}
          className="h-56 w-full rounded-xl object-cover shadow-xl"
        />

        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-200 group-hover:text-gray-50">
            {t(`projects:${name}.title`)}
          </h3>

          <p className="mt-2 text-gray-400 line-clamp-2">
            {t(`projects:${name}.description`)}
          </p>
        </div>
      </a>

      {/* <a className="w-full rounded-lg bg-primary-800 px-4 py-5 shadow shadow-primary-600 transition-all hover:bg-primary-700 hover:shadow-primary-500 md:w-56 lg:w-72">
        <h2 className="text-lg">{t(`projects:${name}.title`)}</h2>
        <p className="w-full line-clamp-2">
          {t(`projects:${name}.description`)}
        </p>
      </a> */}
    </Link>
  );
};

export default ProjectCard;
