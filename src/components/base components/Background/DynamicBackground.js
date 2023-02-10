import ThemeContext from "../ThemeSwitch/ThemeContext";

(function () {
  const body = document.getElementById("body");
  const themeContext = ThemeContext();

  if (themeContext.selectedTheme === "Lightmode") {
    body.style.backgroundColor = "#fff";
  } else if (themeContext.selectedTheme === "Darkmode") {
    body.style.backgroundColor = "#323041";
  }
})();
