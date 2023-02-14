import { useContext } from "react";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";
import PageContext from "./PageContext";

const PageTitle = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const { page } = useContext(PageContext);
  return (
    <div
      className={`sm:text-3xl shadow-inner text-xl font-Roboto p-2 w-fit h-12 skew-x-12 ${
        selectedTheme === "Lightmode"
          ? " bg-fairy-400 text-water-100 shadow-earth-400 rounded-md"
          : " bg-water-200 text-fairy-300 shadow-fairy-300 rounded-none"
      } `}
    >
      <h2 className={`-skew-x-12`}>{page}</h2>
    </div>
  );
};

export default PageTitle;
