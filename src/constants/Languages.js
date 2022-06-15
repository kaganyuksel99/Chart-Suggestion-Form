import React, { useEffect } from "react";
import { withNamespaces } from "react-i18next";

const LanguageChanger = ({ t, i18n }) => {
  //() => window.location.reload()
  const [lang, setLang] = useState("tr");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  // console.log("lang1:", lang);
  // useEffect(() => {
  //   if (lang) {
  //     changeLanguage(lang);
  //     console.log("useeffect", lang);
  //   }
  // }, [lang]);

  const languages = [
    { name: "TR", code: "tr" },
    { name: "EN", code: "en" },
  ];
  const selectedLanguage = i18n.language;
  return (
    <div className="LanguageChanger">
      {languages.map((language) => {
        return (
          <button
            key={language.code}
            className={selectedLanguage === language.code ? "active" : ""}
            onClick={() => changeLanguage(language.code)}
          >
            {language.name}
          </button>
        );
      })}
    </div>
  );
};
export default withNamespaces(LanguageChanger);
