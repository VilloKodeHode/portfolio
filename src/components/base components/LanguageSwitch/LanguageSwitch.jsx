import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";
import LanguageContext from "./LanguageContext";

//images:
import NORWEGIAN from "./assets/norwegian.png";
import ENGLISH from "./assets/english.png";

const LanguageSwitch = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <div className="w-20 -skew-x-[20deg]">
      <div className="absolute left-1">
        {language === "Norwegian" ? (
          <img src={NORWEGIAN} className="w-12 h-12" />
        ) : (
          <img src={ENGLISH} className="w-12 h-12" />
        )}
      </div>

      <select
        className={`select select-bordered shadow-inner border-none w-full   ${
          selectedTheme === "Lightmode"
            ? " bg-fairy-400 shadow-earth-400 text-water-100 focus-within:bg-fairy-300 rounded-r-none"
            : "bg-water-200 shadow-fairy-300 text-fairy-300 focus-within:bg-bg-water-100 rounded-none"
        } `}
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          console.log(language);
        }}
      >
        <option>Norwegian</option>
        <option>English</option>
      </select>
    </div>
  );
};

export default LanguageSwitch;
