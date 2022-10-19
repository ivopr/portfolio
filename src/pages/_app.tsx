import "../styles/globals.css";

import dynamic from "next/dynamic";
import { appWithTranslation } from "next-i18next";
import { Suspense } from "react";

import nextI18nConfig from "../../next-i18next.config";
import { Loading } from "../components/Loading";

const NowPlaying = dynamic(() => import("../components/NowPlaying"), {
  suspense: true,
});

const Navbar = dynamic(() => import("../components/Navbar"), {
  suspense: true,
});

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <div className="mx-auto mt-6 w-full">
          <NowPlaying />
        </div>

        <main className="flex flex-1 px-5 md:px-10 lg:px-20">
          <Component {...pageProps} />
        </main>
      </Suspense>
    </div>
  );
}

export default appWithTranslation(MyApp, nextI18nConfig);
