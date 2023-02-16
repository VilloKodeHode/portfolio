import ThemeContext from "../base components/ThemeSwitch/ThemeContext.js";
import LanguageContext from "../base components/LanguageSwitch/LanguageContext.js";
import { useState, useContext } from "react";
import SkewedButton from "../base components/Buttons/Button.jsx";

//images:
import XMasCalendar from "./assets/Christmas calendar.png";
import JobSimulator from "./assets/Job Simulator.png";
import PokeAPI from "./assets/PokeAPI.png";
import STYRKETRENINGSTIPS from "./assets/strength training tips.png";
import ValhallaBeards from "./assets/Valhalla beards.png";
import ROCKPAPERSCISSORS from "./assets/RPS.png";
import ADVICEGENERATOR from "./assets/Advice generator.png";
import MULTIPAGEFORM from "./assets/Multi page form.png";

function Projects() {
  const { language } = useContext(LanguageContext);
  const { selectedTheme } = useContext(ThemeContext);
  return (
    <>
      <section
        className="flex animate-Appear z-50 flex-row my-12 flex-wrap justify-center content-center gap-12"
        id="projects"
      >
        <h2
          className={`${
            selectedTheme === "Lightmode" ? "text-fairy-300" : "text-water-100"
          } xl:mt-12 m-4 lg:text-xl leading-8 z-40 bg-opacity-90`}
        >
          {language === "Norwegian"
            ? "Her er noen av mine varierte prosjekter som har utvidet min ekspertise innen ulike bransjer og fagområder. De utfordret meg til å lære nye ferdigheter og takle interessante problemer, fra å utvikle brukergrensesnitt til å integrere tredjeparts-API-er."
            : "Here are some of my diverse projects that have broadened my expertise in different industries and disciplines. They challenged me to learn new skills and tackle interesting problems, from developing user interfaces to integrating third-party APIs."}
        </h2>
        <div className="flex justify-center m-auto content-center flex-wrap gap-12">
          <ProjectCard
            href="https://villokodehode.github.io/Rock--Paper--Scissors--Lizard--Spock-game/#/"
            projectName={
              language === "Norwegian"
                ? "Stein, saks papir spill"
                : "Rock, Paper, Scissors"
            }
            src={ROCKPAPERSCISSORS}
            description={
              language === "Norwegian"
                ? "Stein, saks papir spill med 2 utvidede versjoner"
                : "Rock, paper scissors game with 2 extended versions"
            }
            hrefCode="https://github.com/VilloKodeHode/Rock--Paper--Scissors--Lizard--Spock-game"
          />
          <ProjectCard
            href="https://villokodehode.github.io/multi-step-form/"
            projectName={
              language === "Norwegian" ? "Flersteg skjema" : "Multi step form"
            }
            src={MULTIPAGEFORM}
            description={
              language === "Norwegian"
                ? "Bestillingsskjema med flere steg"
                : "Order form with mutliple steps"
            }
            hrefCode="https://github.com/VilloKodeHode/multi-step-form"
          />
          <ProjectCard
            href="https://villokodehode.github.io/advice-generator/"
            projectName={
              language === "Norwegian" ? "Råd generator" : "Advice generator"
            }
            src={ADVICEGENERATOR}
            description={
              language === "Norwegian"
                ? "App for gode råd"
                : "App for good advice"
            }
            hrefCode="https://github.com/VilloKodeHode/advice-generator"
          />
          <ProjectCard
            href="https://villokodehode.github.io/PokeAPI/"
            projectName="PokeAPI"
            src={PokeAPI}
            description={
              language === "Norwegian"
                ? "Min første API. Generasjon 1-3 Pokemon vises"
                : "My first API. Generation 1-3 pokemon is shown"
            }
            hrefCode="https://github.com/VilloKodeHode/PokeAPI"
          />
          <ProjectCard
            href="https://villokodehode.github.io/Job-simulator/"
            projectName={
              language === "Norwegian" ? "Jobb simulator" : "Job simulator"
            }
            src={JobSimulator}
            description={
              language === "Norwegian"
                ? "Mitt første JS prosjekt"
                : "My first JS project"
            }
            hrefCode="https://villokodehode.github.io/Job-simulator/"
          />

          <ProjectCard
            href="https://villokodehode.github.io/Christmas-Calender/"
            projectName={
              language === "Norwegian" ? "Julekalender" : "Christmas Calendar"
            }
            src={XMasCalendar}
            description={
              language === "Norwegian"
                ? "Et samarbeidsprosjekt hvor jeg har laget min egen variant"
                : "Teamproject where I made my own variant"
            }
            hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
          />

          <ProjectCard
            href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
            projectName="Valhalla Beards"
            src={ValhallaBeards}
            description={
              language === "Norwegian"
                ? "Figma prosjekt for en imaginær barbershop"
                : "Figma project for a imaginary barbershop"
            }
          />

          <ProjectCard
            href="https://villokodehode.github.io/strength-training-tips-app/"
            projectName={
              language === "Norwegian"
                ? "Styrke-trenings tips"
                : "Strength training tips"
            }
            src={STYRKETRENINGSTIPS}
            description={
              language === "Norwegian"
                ? "Mitt første forsøk på tailwind med noe av min kunnskap om trening"
                : "My first try at tailwind with some of my knowledge about training"
            }
            hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
          />
        </div>
      </section>
    </>
  );
}

export function ProjectCard(props) {
  const { href, projectName, src, description, hrefCode } = props;
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="m-4 [&>*]:hover:scale-105 z-10">
        <div className="duration-500 ease-out">
          <img
            className={` h-56 w-56 ${
              selectedTheme === "Lightmode" ? " rounded-xl" : " "
            } `}
            src={src}
          />
          <SkewedButton
            className={` xl:text-xs text-[10px] w-56 hover:animate-ButtonHover btn p-2 shadow-sm -translate-x-[5px]`}
            onClick={() => setToggle(true)}
            text={projectName}
          ></SkewedButton>
        </div>
      </div>

      {toggle && (
        <>
          <div className="z-20 fixed -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-screen bg-earth-200 bg-opacity-70 backdrop-blur-sm rounded-3xl [&>*]:animate-ModalSlideIn">
            <div
              className={`p-4 h-screen  ${
                selectedTheme === "Lightmode"
                  ? " tooltip-secondary bg-water-100 text-fairy-300"
                  : " tooltip-accent bg-fairy-300 text-water-100"
              }  bg-opacity-90`}
            >
              <div className="flex flex-col w-fit items-center justify-center h-full m-auto">
                <SkewedButton
                  text="Close"
                  onClick={() => {
                    setToggle(false);
                  }}
                  className="text-base font-semibold w-[287px] -translate-x-3 m-2"
                />

                <div>
                  <a
                    className="[&>*]:hover:shadow-2xl [&>*]:hover:scale-105"
                    href={href}
                    target="_blank"
                  >
                    <figure
                      className={` skew-x-6 ${
                        selectedTheme === "Lightmode"
                          ? " tooltip-secondary bg-water-200 text-fairy-400 rounded-3xl"
                          : " tooltip-accent bg-superDry-secondary text-superDry-primary"
                      }   duration-500 ease-out flex flex-col justify-start mx-2 w-72 h-80`}
                    >
                      <div className="">
                        <h3 className="text-2xl py-6">{projectName}</h3>
                        <img
                          className={`hover:scale-125 transition-all hover:animate-pulse duration-500 h-36 w-36 mx-auto ${
                            selectedTheme === "Lightmode" ? "rounded-lg" : ""
                          } mb-3`}
                          src={src}
                        />
                        <div className="flex justify-center m-auto">
                          <p className="p-2 text-sm">{description}</p>
                        </div>
                      </div>
                    </figure>
                  </a>
                </div>
                <div>
                  <a href={hrefCode} target="_blank">
                    <SkewedButton
                      text="Kode"
                      className="text-base font-semibold m-0 w-[287px] translate-y-2 translate-x-3"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Projects;
