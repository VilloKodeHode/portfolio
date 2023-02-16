import { useContext } from "react";
import LanguageSwitch from "../base components/LanguageSwitch/LanguageSwitch";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";
import ThemeSwitch from "../base components/ThemeSwitch/ThemeSwitch";
import HamburgerBar from "./HamburgerBar";
import PageContext from "./PageContext";

import PageTitle from "./PageTitle.jsx";

function NavBar() {
  const { page } = useContext(PageContext);
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <header
      className={`absolute w-full top-0 left-0 z-50 animate-SlideInFromTop backdrop-blur-md pb-4  ${
        selectedTheme === "Lightmode"
          ? "bg-water-300 bg-opacity-10"
          : "bg-fairy-300 bg-opacity-10"
      }  `}
    >
      <div className="flex mt-4 justify-around ">
        <PageTitle title={page} />
        <div className="flex">
          <LanguageSwitch />
          <ThemeSwitch />
          <HamburgerBar />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
