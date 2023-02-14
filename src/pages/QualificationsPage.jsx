import { useContext, useEffect } from "react";
import LanguageContext from "../components/base components/LanguageSwitch/LanguageContext";
import {
  KnowledgeContent,
  SkillsContent,
} from "../components/Experience/skillsicon";
import PageContext from "../components/Navigation/PageContext";

//images:

function QualificationsPage() {
  const { setPage } = useContext(PageContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    language === "Norwegian"
      ? setPage("Kvalifikasjoner")
      : setPage("Qualifications");
  }, [language]);
  return (
    <>
      <KnowledgeContent />
      <SkillsContent />
    </>
  );
}

export default QualificationsPage;
