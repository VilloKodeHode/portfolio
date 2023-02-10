import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

export default function DynamicBackground() {
  const themeContext = useContext(ThemeContext);
  const body = document.getElementById("body");

  if (themeContext.selectedTheme === "Lightmode") {
    body.style.backgroundColor = "#fff";
  } else if (themeContext.selectedTheme === "Darkmode") {
    body.style.backgroundColor = "#323041";
  }

  return null;
}
