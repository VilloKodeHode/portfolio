import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";
import LanguageContext from "../base components/LanguageSwitch/LanguageContext";

export default function HamburgerBar() {
  const { selectedTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <div className="">
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={`shadow-inner  border-none -skew-x-[20deg] ${
            selectedTheme === "Lightmode"
              ? "btn bg-fairy-400 shadow-earth-400 hover:bg-fairy-300 rounded-l-none"
              : "btn bg-water-200 shadow-fairy-400 hover:bg-water-100  rounded-none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 skew-x-[20deg]"
            fill="none"
            viewBox="0 0 24 24"
            stroke={selectedTheme === "Lightmode" ? "#87BDC2" : "#207E78"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className={`menu menu-normal dropdown-content ${
            selectedTheme === "Lightmode"
              ? "bg-fairy-300 text-water-100 rounded-tl-none"
              : "bg-water-100 text-fairy-300 rounded-none"
          } mt-0 p-2 rounded-box z-50 -translate-x-[104px]`}
        >
          <li>
            <Link className="px-4 " to="/">
              {language === "Norwegian" ? "Hjem" : "Home"}
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/About">
              {language === "Norwegian" ? "Om" : "About"}
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/qualifications">
              {language === "Norwegian" ? "Kvalifikasjoner" : "Qualifications"}
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/projects">
              {language === "Norwegian" ? "Prosjekter" : "Projects"}
            </Link>
          </li>
          <li>
            <Link className="px-4" to="/contact">
              {language === "Norwegian" ? "Kontakt" : "Contact"}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
