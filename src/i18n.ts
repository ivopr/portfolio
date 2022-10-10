import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

if (import.meta.hot) {
  import.meta.hot.on("locales-update", () => {
    i18n.reloadResources().then(() => {
      i18n.changeLanguage(i18n.language);
    });
  });
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    lng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;