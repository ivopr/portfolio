import { FC } from "react";
import { useTranslation } from "react-i18next";
import { changePageTitle } from "../../utils/changePageTitle";
import { badgeData } from "./badgeData";
import me from "../../assets/me.jpeg";
import { Button } from "../../layouts/components/Button";
import { BiLinkExternal } from "react-icons/bi";


const Home: FC = () => {
  const { t } = useTranslation(["common", "home", "navigation"]);

  changePageTitle(t("navigation:about-me"), t("common:app-name"));

  return (
    <main className="mx-auto md:w-4/5 lg:w-4/6">
      {/* Introduction */}
      <section className="flex flex-col items-center gap-6 md:flex-row">
        <div className="m-auto w-52 h-52 rounded-full shadow-md shadow-primary-500 overflow-hidden">
          <img 
            className="w-full h-full"
            src={me}
            loading="lazy"
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
          <h5 className="mt-5 text-sm">{t("home:cv.title")}</h5>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="http://lattes.cnpq.br/5130583751808996">
              <Button className="flex justify-center items-center gap-2">
                {t("home:cv.lattes")}
                <BiLinkExternal className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;