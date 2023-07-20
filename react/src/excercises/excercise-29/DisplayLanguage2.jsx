import React, { useContext } from "react";
import LanguageContext2 from "./LanguageContextProvider2";

export default function DisplayLanguage2() {
  const { language, changeLanguage } = useContext(LanguageContext2);
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
