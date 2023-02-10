import { useContext } from "react";
import ThemeSwitch from "../base components/ThemeSwitch/ThemeSwitch";
import HamburgerBar from "./HamburgerBar";
import PageContext from "./PageContext";

import PageTitle from "./PageTitle.jsx";

function NavBar() {
  const { page } = useContext(PageContext);
  return (
    <header className="absolute w-screen top-2 left-0 z-50">
      <div className="flex md:mx-12 mx-4 mt-8 justify-between items-center">
        <PageTitle title={page} />
        <div className="flex">
          <ThemeSwitch />
          <HamburgerBar />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
