import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../layouts/components/Button";
import { changePageTitle } from "../../utils/changePageTitle";

export const NotFound: FC = () => {
  const { t } = useTranslation(["common"]);

  changePageTitle(t("common:404.title"), t("common:app-name"));

  return (
    <main className="h-full w-full flex flex-col justify-center items-center bg-primary-900">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-primary-500 px-2 text-sm rounded rotate-12 absolute">
        {t("common:404.title")}
      </div>
      <Link to="/" className="relative mt-5 inline-block text-sm font-medium text-primary-500 group active:text-primary-500 focus:outline-none focus:ring">
        <Button>
          {t("common:404.go-home")}
        </Button>
      </Link>
    </main>
  )
}