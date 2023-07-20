import React, { useContext } from "react";
import LanguageContext from "./LanguageContextProvider";

export default function DisplayLanguage() {
  const { language, changeLanguage } = useContext(LanguageContext);
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
    </>
  );
}
