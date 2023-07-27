import React, { useContext } from "react";
import LanguageContext3 from "./LanguageContextProvider3";

export default function DisplayLanguageFC() {
  const { language, changeLanguage } = useContext(LanguageContext3);
  return (
    <>
      <label htmlFor="languages">Select Laguage:</label>

      <select
        id="langages"
        name="languages"
        onChange={(e) => changeLanguage(e.target.value)}
        value={language}
      >
        <option value="English">English</option>
        <option value="español">español</option>
        <option value="Türkçe">Türkçe</option>
        <option value="العربية">العربية</option>
      </select>
      <h1>Your selected language is {language}</h1>
    </>
  );
}
