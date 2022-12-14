import { ExternalLink } from "lucide-react";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { FC } from "react";
import "react-alice-carousel/lib/alice-carousel.css";

import me from "../assets/me.jpeg";
import Badges from "../components/Badges";

const Button = dynamic(() => import("../components/Button"), {
  suspense: true,
});

const Home: FC = () => {
  const { t } = useTranslation(["common", "home", "navigation"]);

  return (
    <main className="mx-auto w-full md:w-4/5 lg:w-4/6">
      <Head>
        <title>{t("navigation:about-me") + " - " + t("common:app-name")}</title>
      </Head>
      {/* Introduction */}
      <section className="flex flex-col gap-6 md:flex-row">
        <div className="mx-auto h-52 w-52 overflow-hidden rounded-full shadow-md shadow-primary-500">
          <Image className="pointer-events-none" src={me} alt="Ivo Vieira" />
        </div>
        <div className="flex flex-1 flex-col">
          <h2 className="mt-2.5 text-center text-3xl text-primary-200 md:mt-0 md:text-left">
            Ivo Vieira
          </h2>
          <span className="prose text-justify text-base font-medium">
            {t("home:about.description")}
          </span>
          <h5 className="mt-5 text-sm">{t("home:cv.title")}</h5>
          <div className="mt-2 flex flex-wrap gap-2">
            <a href="http://lattes.cnpq.br/5130583751808996">
              <Button className="flex items-center justify-center gap-2">
                {t("home:cv.lattes")}
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <Badges />
      </section>

      <section className="mt-4 flex flex-col gap-3">
        <h2 className="mt-2.5 text-center text-3xl text-primary-200 md:mt-0 md:text-left">
          {t("home:about.long-description.title")}
        </h2>
        <p className="prose text-justify text-base font-medium">
          {t("home:about.long-description.text")}
        </p>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "navigation",
      ])),
    },
  };
};

export default Home;
