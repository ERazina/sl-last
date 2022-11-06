import en from "./translation/en.json";
import ru from "./translation/ru.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lang: JSON.parse(localStorage.getItem("language")),
  fallbackLng: "ru",
});

export default i18n;
