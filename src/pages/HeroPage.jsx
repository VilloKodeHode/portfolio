import { useContext, useEffect } from "react";
import ThemeContext from "../components/base components/ThemeSwitch/ThemeContext";
import PageContext from "../components/Navigation/PageContext";
import LanguageContext from "../components/base components/LanguageSwitch/LanguageContext";

import Cv from "../components/Cv/Cv";

//images:

import SHORTEDCV from "./assets/Norwegian resume shorted.pdf";
import SHORTEDCVIMG from "./assets/Norwegian resume shorted.png";
import STANDARDCV from "./assets/Norwegian resume plain.pdf";
import STANDARDCVIMG from "./assets/Norwegian resume plain pic.png";
import HERO from "./assets/Villo.png";

//styles:
import "../components/Cv/Cv.css";
import "../components/Pitch/pitch.css";
import PitchWindow, { AboutWindow } from "../components/Pitch/pitch";

export default function HeroPage() {
  const { selectedTheme } = useContext(ThemeContext);
  const { setPage } = useContext(PageContext);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    language === "Norwegian" ? setPage("Om meg") : setPage("About me");
  }, [language]);
  return (
    <>
      <main className="animate-Appear px-8 grid md:gap-0 md:my-0 my-8 gap-12 sm:grid-rows-2 grid-cols-1 sm:mt-0 sm:grid-cols-2 xl:mx-24 md:mx-12 sm:mx-4">
        <article className="m-auto z-40">
          <h1 className="my-4" id="home">
            <span
              className={`font-Roboto  md:text-7xl ${
                selectedTheme === "Lightmode"
                  ? " text-fairy-200"
                  : " text-water-100"
              }`}
            >
              Joakim Villo
            </span>
          </h1>

          <p
            className={`mx-auto ${
              selectedTheme === "Lightmode"
                ? " text-fairy-200"
                : " text-water-200"
            }`}
          >
            {language === "Norwegian"
              ? "Jeg nærmer meg slutte på et Front-End-Development kurs og har brukt mange timer utenom kurset på å lære så mye jeg kan om koding og design. Hvert eneste sekund har vært lærerikt og jeg har hele tiden jobbet med å lære meg så mye som mulig"
              : "I am nearing the end of a Front End developer course and have used a lot of time outside of the cours to learn as much as possible about coding and desing. Every second has been educational and i have throughout the course worked towards learning as much as possible"}
          </p>
        </article>
        <div className="mx-auto">
          <img
            className={`md:h-80 h-64 border-b-2  ${
              selectedTheme === "Lightmode"
                ? "border-earth-400 rounded-full"
                : "border-water-100 mask mask-parallelogram-2 p-6"
            }`}
            src={HERO}
          />
        </div>
        <div className="wrapper cv-wrapper">
          <Cv href={STANDARDCV} src={STANDARDCVIMG} className="cv standard" />
          <Cv href={SHORTEDCV} src={SHORTEDCVIMG} className="cv fancy" />
        </div>
        <div className="md:w-2/3 flex gap-12 justify-center m-auto">
          <AboutWindow />
          <PitchWindow />
        </div>
      </main>
    </>
  );
}
