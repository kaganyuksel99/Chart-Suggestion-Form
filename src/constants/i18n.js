import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationTR from "./tr/tr.ts";
import translationEN from "./en/en.ts";

// Dil paketleri
const resources = {
  tr: { translation: translationTR },
  en: { translation: translationEN },
};
i18n.use(initReactI18next).init({
  resources,
  lng: "tr",
  keySeparator: false, // messages.title gibi tanımlama yapmadığımız için false.
  interpolation: {
    escapeValue: false, //XSS koruması için gerekli.
  },
});
export default i18n;
