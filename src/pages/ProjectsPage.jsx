import { useContext, useEffect } from "react";
import PageContext from "../components/Navigation/PageContext";
import Projects from "../components/Experience/Projects";

//css
import "../components/Experience/Projects.css";

function ProjectsPage() {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage("Prosjekter");
  }, []);
  return <Projects />;
}

export default ProjectsPage;
