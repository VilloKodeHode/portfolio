import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

function SkewedButton(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { text, className, onClick } = props;
  return (
    <button
      className={`-skew-x-12 w-fit p-2 border-2 hover:scale-110 transition-all duration-500 hover:animate-ButtonHover shadow-sm ${className}  ${
        selectedTheme === "Lightmode"
          ? " bg-fairy-300 border-fairy-300 shadow-fairy-300 text-water-100 rounded-md"
          : " bg-water-100 border-water-100 shadow-water-100 text-fairy-300 rounded-[0px]"
      }`}
      onClick={onClick}
    >
      <div className="skew-x-12">{text}</div>
    </button>
  );
}

export default SkewedButton;
