import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { projectsData } from "./data";

export const Projects: FC = () => {
  const { t } = useTranslation(["projects"]);

  return (
    <div className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-primary-300">{t("projects:title")}</h2>

      <div className="flex flex-wrap gap-2 my-6 w-full">
        {projectsData.map((project) => (
          <Link
            className="w-full md:w-56 lg:w-72 bg-primary-800 rounded-lg shadow shadow-primary-600 px-4 py-5 transition-all hover:shadow-primary-500 hover:bg-primary-700"
            to={`/projects/${project.name}`}
          >
            <h2 className="text-lg text-medium">{t(`projects:${project.name}.title`)}</h2>
            <p className="line-clamp-2 w-full">{t(`projects:${project.name}.description`)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}