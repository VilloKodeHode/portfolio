import { useContext, useEffect } from "react";
import {
  KnowledgeContent,
  SkillsContent,
} from "../components/Experience/skillsicon";
import PageContext from "../components/Navigation/PageContext";

//images:

function QualificationsPage() {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage("Kvalifikasjoner");
  }, []);
  return (
    <>
      <KnowledgeContent />
      <SkillsContent />
    </>
  );
}

export default QualificationsPage;
