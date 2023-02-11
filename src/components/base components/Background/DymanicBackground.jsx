import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

export default function DynamicBackground() {
  const themeContext = useContext(ThemeContext);
  const html = document.getElementById("html");

  if (themeContext.selectedTheme === "Lightmode") {
    html.style.backgroundColor = "#fff";
  } else if (themeContext.selectedTheme === "Darkmode") {
    html.style.backgroundColor = "#323041";
  }

  return null;
}
