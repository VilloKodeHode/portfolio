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
import ThemeContext from "../base components/ThemeSwitch/ThemeContext.js";

function Projects() {
  return (
    <>
      <div className="">
        <section
          className="flex animate-Appear z-50 flex-row flex-wrap justify-center content-center sm:mx-[10%] mx-[5%]"
          id="projects"
        >
          <div className="flex justify-center m-auto content-center flex-wrap">
            <ProjectCard
              href="https://villokodehode.github.io/Rock--Paper--Scissors--Lizard--Spock-game/#/"
              projectName="Rock, Paper, Scissors"
              src={ROCKPAPERSCISSORS}
              description="Stein, saks papir +++...."
              hrefCode="https://github.com/VilloKodeHode/Rock--Paper--Scissors--Lizard--Spock-game"
            />
            <ProjectCard
              href="https://villokodehode.github.io/multi-step-form/"
              projectName="Multi step form"
              src={MULTIPAGEFORM}
              description="Bestillingsskjema med flere steg"
              hrefCode="https://github.com/VilloKodeHode/multi-step-form"
            />
            <ProjectCard
              href="https://villokodehode.github.io/advice-generator/"
              projectName="Advice generator"
              src={ADVICEGENERATOR}
              description="App for gode råd"
              hrefCode="https://github.com/VilloKodeHode/advice-generator"
            />
            <ProjectCard
              href="https://villokodehode.github.io/PokeAPI/"
              projectName="PokeAPI"
              src={PokeAPI}
              description="Den første API'en jeg har laget. Generasjon 1-3 Pokemon vises"
              hrefCode="https://github.com/VilloKodeHode/PokeAPI"
            />
            <ProjectCard
              href="https://villokodehode.github.io/Job-simulator/"
              projectName="Jobb simulator"
              src={JobSimulator}
              description="Mitt første JS prosjekt"
              hrefCode="https://villokodehode.github.io/Job-simulator/"
            />

            <ProjectCard
              href="https://villokodehode.github.io/Christmas-Calender/"
              projectName="Julekalender"
              src={XMasCalendar}
              description="Et samarbeidsprosjekt hvor jeg har laget min egen variant"
              hrefCode="https://github.com/VilloKodeHode/Christmas-Calender"
            />

            <ProjectCard
              href="https://www.figma.com/file/sCZngSCqMOKbRciWTLZodh/Vallhala-Beards?node-id=0%3A1&t=c4JqLQ0yMjR0gZQ0-0"
              projectName="Valhalla Beards"
              src={ValhallaBeards}
              description="Figma prosjekt for en imaginær barbershop"
            />

            <ProjectCard
              href="https://villokodehode.github.io/strength-training-tips-app/"
              projectName="Styrke-trenings tips"
              src={STYRKETRENINGSTIPS}
              description="Første forsøk på tailwind med noe av min kunnskap om trening"
              hrefCode="https://github.com/VilloKodeHode/strength-training-tips-app"
            />
          </div>
        </section>
      </div>
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
            className={`h-24 sm:h-36 lg:h-46 xl:h-56 w-24 sm:w-36 lg:w-46 xl:w-56 ${
              selectedTheme === "Lightmode" ? " rounded-xl" : " "
            } `}
            src={src}
          />
          <button
            className={` xl:text-xs text-[10px] md:w-[90%] sm:36 w-24 transition-all duration-500 hover:animate-ButtonHover ${
              selectedTheme === "Lightmode"
                ? "bg-fairy-300 border-water-100 shadow-water-100 text-water-100 rounded-xl"
                : "bg-water-100 border-fairy-300 shadow-fairy-300 text-fairy-300 rounded-[1px]"
            } btn p-2 rounded-xl  border-2 shadow-sm bg-opacity-70 backdrop-blur-xs`}
            onClick={() => setToggle(true)}
          >
            {projectName}
          </button>
        </div>
      </div>

      {toggle && (
        <>
          <div className="z-20 absolute -top-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 w-screen h-screen bg-earth-200 bg-opacity-70 backdrop-blur-sm rounded-3xl [&>*]:animate-ModalSlideIn">
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
                    console.log("click");
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
                          className="h-36 w-36 mx-auto rounded-lg"
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
