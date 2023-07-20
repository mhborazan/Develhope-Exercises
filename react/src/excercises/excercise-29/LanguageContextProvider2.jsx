import React, { createContext, useState } from "react";

const LanguageContext2 = createContext(null);

export function LanguageProvider2({ children }) {
  const [language, setLanguage] = useState("Türkçe");
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <LanguageContext2.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext2.Provider>
  );
}

export default LanguageContext2;
