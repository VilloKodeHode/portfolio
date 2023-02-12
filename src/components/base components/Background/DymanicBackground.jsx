import { useContext } from "react";
import ThemeContext from "../ThemeSwitch/ThemeContext";

export default function DynamicBackground() {
  const themeContext = useContext(ThemeContext);
  const html = document.getElementById("html");
  const root = document.getElementById("root");

  if (themeContext.selectedTheme === "Lightmode") {
    html.style.backgroundColor = "#fff";
    // root.style.backgroundColor = "#f2f3ff";
  } else if (themeContext.selectedTheme === "Darkmode") {
    html.style.backgroundColor = "#323041";
    // root.style.backgroundColor = "#3230308C";
  }

  return null;
}
