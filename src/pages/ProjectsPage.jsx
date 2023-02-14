import { useContext, useEffect } from "react";
import PageContext from "../components/Navigation/PageContext";
import Projects from "../components/Experience/Projects";
import LanguageContext from "../components/base components/LanguageSwitch/LanguageContext";

//css
import "../components/Experience/Projects.css";

function ProjectsPage() {
  const { setPage } = useContext(PageContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    language === "Norwegian" ? setPage("Prosjekter") : setPage("Projects");
  }, [language]);
  return <Projects />;
}

export default ProjectsPage;
