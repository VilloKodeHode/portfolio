//images:
import Git from "./assets/Git.png";
import Photoshop from "./assets/Photoshop.png";
import Tailwind from "./assets/Tailwind.png";
import VSC from "./assets/VSC.png";
import SVELTE from "./assets/Svelte.svg";

import { useState, useContext } from "react";

import ThemeContext from "../base components/ThemeSwitch/ThemeContext";
import SkewedButton from "../base components/Buttons/Button";

export function KnowledgeIcon(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { src, alt, dataTip } = props;
  return (
    <>
      <div
        className={`relative ${
          selectedTheme === "Lightmode"
            ? " tooltip-secondary bg-fairy-300 rounded-md"
            : " tooltip-primary bg-water-100"
        }  tooltip tooltip-bottom before:w-[120%] before:shadow-md before:text-xs before:content-[attr(data-tip)] h-fit shadow-lg skew-x-[10deg] odd:skew-y-[5deg] even:-skew-y-[5deg] hover:skew-x-[0deg] hover:odd:skew-y-[0deg] hover:even:-skew-y-[0deg] hover:z-50 transition duration-500`}
        data-tip={dataTip}
      >
        <figure className="xl:p-4 lg:p-3 sm:p-2 p-1 xl:m-4 lg:m-3 sm:m-2 m-1 z-50">
          <img
            className={` ${
              selectedTheme === "Lightmode" ? "rounded-md" : ""
            } xl:h-16 h-16 bg-black bg-opacity-10 shadow-inner p-2`}
            src={src}
            alt={alt}
          />
        </figure>
      </div>
    </>
  );
}

export function MySkills(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { title, src, description } = props;
  return (
    <>
      <figure
        className={`w-52 p-2 my-4 mx-4 rounded border-t-4 border-b-4 shadow-xl  ${
          selectedTheme === "Lightmode"
            ? " bg-fairy-300 text-water-100 border-water-100 "
            : " bg-water-100 text-fairy-300 border-superDry-accent2 rounded-none odd:skew-x-6 even:-skew-x-6"
        }`}
      >
        <div>
          <h3>{title}</h3>

          <img className="h-32 my-4 m-auto " src={src} />
          <p className="text-xs py-2">{description}</p>
        </div>
      </figure>
    </>
  );
}

export function KnowledgeContent() {
  return (
    <div className="flex justify-center flex-wrap xl:gap-16 md:gap-12 sm:gap-8 ml:gap-4 gap-2">
      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/136/136528.png"
        alt="HyperText Markup Language"
        dataTip="Not much to say here. Learned it easily."
      />

      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
        alt="Cascading StyleSheets"
        dataTip="I spent alot of time trying out everything within css. This has made it very easy to learn tailwind"
      />
      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/136/136530.png"
        alt="JavaScript"
        dataTip="Was hard at first, but after trying out some projects myself I got a good understanding of JS"
      />

      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
        alt="PHP"
        dataTip="I have only checked out a bit PHP to see the syntax and usage. Seems easy to learn after learning JS."
      />

      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/5815/5815421.png"
        alt="Python"
        dataTip="I can really see the similarities between JS and PY. Makes it very easy too learn."
      />

      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
        alt="React"
        dataTip="Since I learned about react everything I code is in this amazing framework."
      />
      <KnowledgeIcon
        src={VSC}
        alt="VSC"
        dataTip="This is what was introduced to us when I started learning to code, and I love it!"
      />
      <KnowledgeIcon
        src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
        alt="Vite"
        dataTip="Vite is the npm package that was introduced to us and it works really well."
      />

      <KnowledgeIcon
        src={Tailwind}
        alt="Tailwind"
        dataTip="After being told by a friend I mostly use tailwind. But sometimes I supplement with normal css"
      />

      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
        alt="Figma"
        dataTip="Although I have made prototypes and know how to make a good figma project I prefer to just code"
      />

      <KnowledgeIcon
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
        alt="Canva"
        dataTip="I made my CVs with Canva, and have played around alot with its possibilities"
      />
      <KnowledgeIcon
        src={Photoshop}
        alt="Photoshop"
        dataTip="I learned to edit images really fast using photoshop. I use it to improve images I want to use."
      />

      <KnowledgeIcon
        src={Git}
        alt="Git"
        dataTip="After installing it I never really thought much about Git again, although im using it all the time"
      />
      <KnowledgeIcon
        src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
        alt="GitHub"
        dataTip="All my code is on GitHub. I have used it alot, so I know how the works."
      />
      <KnowledgeIcon
        src={SVELTE}
        alt="Svelte"
        dataTip="Starting out learning about it. So far it looks like a very good tool"
      />
    </div>
  );
}

export function SkillsContent() {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <SkewedButton
        text="Skills"
        onClick={() => setToggle(!toggle)}
        className="m-8 border-2 w-fit"
      />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-300"
              : " bg-fairy-300 text-water-100 scrollbar-thumb-water-100"
          } animate-ProjectSlideIn bg-opacity-90 shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar  scrollbar-track-transparent fixed md:w-[90%] h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <div className="flex flex-col justify-start">
            <div className="flex justify-center flex-wrap">
              <MySkills
                title="Lede gruppe-prosjekter"
                src="https://cdn-icons-png.flaticon.com/512/8101/8101423.png"
                description="Jeg trives i rollen som leder har ofte blitt valgt av gruppen"
              />

              <MySkills
                title="Problemløser"
                src="https://cdn-icons-png.flaticon.com/512/4406/4406319.png"
                description="Å løse problemer synes jeg er veldig lærerikt"
              />

              <MySkills
                title="UI/UX"
                src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png"
                description="Design og brukervennlighet er noe jeg liker å jobbe med"
              />

              <MySkills
                title="Lærevillig"
                src="https://cdn-icons-png.flaticon.com/512/2490/2490396.png"
                description="Jeg elsker å lære om nye måter å gjøre ting på"
              />

              <MySkills
                title="Nysgjerrig"
                src="https://cdn-icons-png.flaticon.com/512/8738/8738602.png"
                description="Jeg liker å utforske muligheter og spør når jeg trenger hjelp"
              />
              <MySkills
                title="Idèrik"
                src="https://cdn-icons-png.flaticon.com/512/5863/5863097.png"
                description="Jeg kommer lett på idèer for å utføre arbeid"
              />
              <MySkills
                title="Initiativrik"
                src="https://cdn-icons-png.flaticon.com/512/3514/3514735.png"
                description="Jeg går raskt igang og gjør gjerne mye mer hvis det er tid"
              />
              <MySkills
                title="Entusiastisk"
                src="https://cdn-icons-png.flaticon.com/512/4214/4214085.png"
                description="Det skal veldig lite til for at jeg blir ekstremt motivert"
              />
              <MySkills
                title="Kreativ"
                src="https://cdn-icons-png.flaticon.com/512/3940/3940179.png"
                description="Kreativitet er en av mine sterkeste egenskaper"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeIcon;
