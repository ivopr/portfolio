import { FC } from "react";
import { useTranslation } from "react-i18next";
import { changePageTitle } from "../../utils/changePageTitle";
import { badgeData } from "./badgeData";

export const Home: FC = () => {
  const { t } = useTranslation(["common", "home", "navigation"]);

  changePageTitle(t("navigation:about-me"), t("common:app-name"));

  return (
    <>
      {/* Introduction */}
      <section className="mx-auto flex flex-col items-center gap-6 md:flex-row md:w-3/5">
        <div className="m-auto w-52 h-52 rounded-full shadow-md shadow-primary-500 overflow-hidden">
          <img 
            className="w-full h-full"
            src="https://github.com/ivopr.png"
            alt="Ivo Vieira"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="text-center mt-2.5 text-3xl text-primary-200 md:text-left md:mt-0">Ivo Vieira</h2>
          <span className="text-md">
            {t("home:about.description")}
          </span>
          <h5 className="mt-5 text-sm">{t("home:about.using")}</h5>
          <div className="flex flex-wrap gap-1 mt-2">
            {badgeData.map(badgeUrl => (
              <img
                key={badgeUrl}
                src={badgeUrl}
                alt="My Stack Item"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}