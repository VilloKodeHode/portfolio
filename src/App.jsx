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

function App() {
  const [selectedTheme, setSelectedTheme] = useState("Darkmode");
  const [page, setPage] = useState("Home");

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme }}>
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
          </Routes>
        </Router>
      </PageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
