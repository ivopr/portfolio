import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";
import { Suspense } from "react";

import nextI18nConfig from "../../next-i18next.config";
import { Loading } from "../components/Loading";
import Navbar from "../components/Navbar";
import NowPlaying from "../components/NowPlaying";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen w-screen flex-1 flex-col">
      <Suspense fallback={<Loading />}>
        <Navbar />

        <div className="mx-auto mt-6">
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
