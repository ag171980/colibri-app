import { useState } from "react";
import Globe from "../../assets/icons/globe.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";


const Language = () => {
    const [languageActual, setLanguageActual] = useState("ESP");
    const [stateModalLanguage, setStateModalLanguage] = useState(false);
  const showModalLanguage = () => {
    setStateModalLanguage(!stateModalLanguage);
  };

  const selectLanguage = (language) => {
    setLanguageActual(language);
    showModalLanguage();
  };
  return (
    <div className="language">
      <img src={Globe} alt="" />
      <p>{languageActual}</p>
      <img onClick={() => showModalLanguage()} src={ArrowDown} alt="" />
      {stateModalLanguage && (
        <div className="dialog-language">
          <ul>
            <li onClick={() => selectLanguage("ESP")}>ESP</li>
            <li onClick={() => selectLanguage("ENG")}>ENG</li>
            <li onClick={() => selectLanguage("PT")}>PT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Language;
