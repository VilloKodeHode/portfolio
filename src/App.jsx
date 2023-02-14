import "./App.css";

import React, { useContext, useState } from "react";

//Libraries
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import ThemeContext from "./components/base components/ThemeSwitch/ThemeContext";
import NavBar from "./components/Navigation/NavBar";
import RenderParticles from "./components/Particles/Particles";
import DynamicBackground from "./components/base components/Background/DymanicBackground";
import LandingPage from "./pages/LandingPage";
import HeroPage from "./pages/HeroPage";
import QualificationsPage from "./pages/QualificationsPage";
import PageContext from "./components/Navigation/PageContext";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import LanguageContext from "./components/base components/LanguageSwitch/LanguageContext";

function App() {
  const [selectedTheme, setSelectedTheme] = useState("Darkmode");
  const [page, setPage] = useState("Home");
  const [language, setLanguage] = useState("Norwegian");

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <PageContext.Provider value={{ page, setPage }}>
          <Router>
            <NavBar />
            <RenderParticles />
            <DynamicBackground />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/about" element={<HeroPage />} />
              <Route path="/qualifications" element={<QualificationsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Router>
        </PageContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
