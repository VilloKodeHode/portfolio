import { useState, useContext } from "react";
import LanguageContext from "../base components/LanguageSwitch/LanguageContext";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";
import SkewedButton from "../base components/Buttons/Button";

//images:
import Git from "./assets/Git.png";
import Photoshop from "./assets/Photoshop.png";
import Tailwind from "./assets/Tailwind.png";
import VSC from "./assets/VSC.png";
import SVELTE from "./assets/Svelte.svg";
import VUE from "./assets/vue.svg";
import DEVOPS from "./assets/devops.png";

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
        <figure className="xl:p-2 lg:p-3 sm:p-2 p-1 m-1 z-50">
          <img
            className={` ${
              selectedTheme === "Lightmode"
                ? "rounded-md bg-opacity-30"
                : "bg-opacity-10"
            } h-20 bg-black shadow-inner p-2`}
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
  const { selectedTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  return (
    <section
      className="flex animate-Appear z-50 flex-row my-12 flex-wrap justify-center content-center gap-12"
      id="projects"
    >
      <h2
        className={`${
          selectedTheme === "Lightmode" ? "text-fairy-300" : "text-water-100"
        } xl:mt-12 m-4 lg:text-xl leading-8 z-40`}
      >
        {language === "Norwegian"
          ? "Som en nylig utdannet front-end utvikler har jeg opparbeidet meg en dyp forståelse av HTML, CSS og JavaScript gjennom et bootcamp-kurs og personlige prosjekter. Jeg jobber stadig med å utvide kunnskapen min til andre frameworks."
          : "As a newly educated front-end developer, I have acquired a deep understanding of HTML, CSS, and JavaScript through a bootcamp course and personal projects. I work continuously to expand my knowledge to other frameworks."}
      </h2>
      <div className="flex justify-center flex-wrap xl:gap-16 md:gap-12 sm:gap-8 ml:gap-4 gap-2">
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136528.png"
          alt="HyperText Markup Language"
          dataTip={` ${
            language === "Norwegian"
              ? "Lærte det fort og kjekt å kunne når man bruker React"
              : "Learned it fast and handy to know when using React"
          } `}
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136527.png"
          alt="Cascading StyleSheets"
          dataTip={` ${
            language === "Norwegian"
              ? "Jeg har brukt mye tid på å lære det meste om css. Dette har gjort tailwind veldig enkelt å lære"
              : "I spent alot of time trying out everything within css. This has made it very easy to learn tailwind"
          } `}
        />
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/136/136530.png"
          alt="JavaScript"
          dataTip={` ${
            language === "Norwegian"
              ? "Var veldig vanskelig i starten, men etter å ha prøvd på noen prosjekter selv har jeg fått en god forståelse av JS"
              : "Was hard at first, but after trying out some projects myself I got a good understanding of JS"
          } `}
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/2306/2306154.png"
          alt="PHP"
          dataTip={` ${
            language === "Norwegian"
              ? "Jeg har kun sjekket PHP litt for å se syntaxen og bruksområdet. Sålangt virket det ikke så vanskelig etter å ha lært JS"
              : "I have only checked out a bit PHP to see the syntax and usage. Seems easy to learn after learning JS."
          } `}
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/5815/5815421.png"
          alt="Python"
          dataTip={` ${
            language === "Norwegian"
              ? "Jeg kan se mange likheter mellom JS og PY. Dette har gjort det enkelt å lære også"
              : "I can really see the similarities between JS and PY. Makes it very easy too learn."
          } `}
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/3334/3334886.png"
          alt="React"
          dataTip={` ${
            language === "Norwegian"
              ? "Siden jeg lært meg React blir alt jeg koder brukt med dette fantastiske frameworket"
              : "Since I learned about React everything I code is in this amazing framework."
          } `}
        />
        <KnowledgeIcon
          src={VSC}
          alt="VSC"
          dataTip={` ${
            language === "Norwegian"
              ? "Dette var det jeg ble introdusert for når jeg startet å kode, og jeg elsker det!"
              : "This is what was introduced to us when I started learning to code, and I love it!"
          } `}
        />
        <KnowledgeIcon
          src="https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png"
          alt="Vite"
          dataTip={` ${
            language === "Norwegian"
              ? "Vite er noe jeg alltid bruker i React prosjekter, fordi det fungerer veldig bra"
              : "Vite is something I always use in React projects because it works really well."
          } `}
        />

        <KnowledgeIcon
          src={Tailwind}
          alt="Tailwind"
          dataTip={` ${
            language === "Norwegian"
              ? "Etter å ha blitt anbefalt dette av en venn bruker jeg for det meste tailwind til styling. Men noen ganger supplerer jeg med normal css"
              : "After being recommended this by a friend I mostly use tailwind. But sometimes I supplement with normal css"
          } `}
        />

        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
          alt="Figma"
          dataTip={` ${
            language === "Norwegian"
              ? "Selv om jeg har lagd prototyper og kan bruke Figma god foretrekker jeg heller å bare kode"
              : "Although I have made prototypes and know how to make a good figma project I prefer to just code"
          } `}
        />

        <KnowledgeIcon
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/600px-Canva_icon_2021.svg.png?20220821125247"
          alt="Canva"
          dataTip={` ${
            language === "Norwegian"
              ? "Mine CVer er lagd med Canva og jeg har lekt meg mye med dette verktøyet"
              : "I made my CVs with Canva, and have played around alot with its possibilities"
          } `}
        />
        <KnowledgeIcon
          src={Photoshop}
          alt="Photoshop"
          dataTip={` ${
            language === "Norwegian"
              ? "Jeg lærte raskt å redigere bilder med photoshop. Jeg bruker det nå til å forbedre bilder jeg vil bruke"
              : "I learned to edit images really fast using photoshop. I use it to improve images I want to use."
          } `}
        />

        <KnowledgeIcon
          src={Git}
          alt="Git"
          dataTip={` ${
            language === "Norwegian"
              ? "Etter at jeg installerte Git har jeg ikke brukt mye tid å tenke på det igjen, selv om jeg bruker det hele tiden"
              : "After installing it I never really thought much about Git again, although im using it all the time"
          } `}
        />
        <KnowledgeIcon
          src="https://cdn-icons-png.flaticon.com/512/4494/4494749.png"
          alt="GitHub"
          dataTip={` ${
            language === "Norwegian"
              ? "All min kode er på Github. Jeg bruker det mye og vet hvordan det fungerer"
              : "All my code is on GitHub. I have used it alot, so I know how the works."
          } `}
        />
        <KnowledgeIcon
          src={SVELTE}
          alt="Svelte"
          dataTip={` ${
            language === "Norwegian"
              ? "Har begynt å lære meg dette. Så langt ser det ut til å være et veldig godt verktøy"
              : "Starting out learning about it. So far it looks like a very good tool"
          } `}
        />
        <KnowledgeIcon
          src={VUE}
          alt="vue.js"
          dataTip={` ${
            language === "Norwegian"
              ? "Vue er noe jeg har begynt å lære meg nylig. Jeg er godt igang med å lære meg det"
              : "Vue is something i resently started to learn. Im already starting to understand the syntax"
          } `}
        />
        <KnowledgeIcon
          src={DEVOPS}
          alt="devops"
          dataTip={` ${
            language === "Norwegian"
              ? "Jeg har lest meg opp på denne arbeidsmetoden nylig og ser at det er en veldig produktiv måte å jobbe på."
              : "I have read up on this workmethod recently and can see that it is a very productive way to work"
          } `}
        />
      </div>
    </section>
  );
}

export function SkillsContent() {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <SkewedButton
        text="Skills"
        onClick={() => setToggle(!toggle)}
        className="m-8 border-2 w-fit animate-Appear"
      />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-300"
              : " bg-fairy-300 text-water-100 scrollbar-thumb-water-100"
          } flex xl:items-center bg-opacity-90 shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar  scrollbar-track-transparent fixed md:w-[90%] h-3/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <div className="flex flex-col justify-start">
            <div className="flex justify-center flex-wrap">
              <MySkills
                title={` ${
                  language === "Norwegian"
                    ? "Styre gruppe-prosjekter"
                    : "Managing group projects"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/8101/8101423.png"
                description="Jeg trives i rollen som leder har ofte blitt valgt av gruppen"
              />

              <MySkills
                title={` ${
                  language === "Norwegian" ? "Problemløser" : "Problemsolver"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/4406/4406319.png"
                description="Å løse problemer synes jeg er veldig lærerikt"
              />

              <MySkills
                title="UI/UX"
                src="https://cdn-icons-png.flaticon.com/512/7858/7858975.png"
                description={` ${
                  language === "Norwegian"
                    ? "Design og brukervennlighet er noe jeg liker å jobbe med"
                    : "Design and user experience is something i lose to work with"
                }`}
              />

              <MySkills
                title={` ${
                  language === "Norwegian" ? "Lærevillig" : "Willing to learn"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/2490/2490396.png"
                description={` ${
                  language === "Norwegian"
                    ? "Jeg elsker å lære om nye måter å løse en oppgave på"
                    : "I love to learn about new ways to solve a task"
                }`}
              />

              <MySkills
                title={` ${
                  language === "Norwegian" ? "Nysgjerrig" : "Curious"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/8738/8738602.png"
                description={` ${
                  language === "Norwegian"
                    ? "Jeg liker å utforske muligheter og spør når jeg trenger hjelp"
                    : "I like to explore posibilites and ask when I need help"
                }`}
              />
              <MySkills
                title={` ${
                  language === "Norwegian" ? "Idèrik" : "Full of ideas"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/5863/5863097.png"
                description={` ${
                  language === "Norwegian"
                    ? "Jeg kommer lett på idèer for å utføre arbeid"
                    : "I easily come up with ideas to complete tasks"
                }`}
              />
              <MySkills
                title={` ${
                  language === "Norwegian" ? "Initiativrik" : "Proactive"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/3514/3514735.png"
                description={` ${
                  language === "Norwegian"
                    ? "Jeg går raskt igang og gjør gjerne mye mer hvis det er tid"
                    : "I quickly start work and go beyond what is required if there is time for it"
                }`}
              />
              <MySkills
                title={` ${
                  language === "Norwegian" ? "Entusiastisk" : "Enthusiastic"
                } `}
                src="https://cdn-icons-png.flaticon.com/512/4214/4214085.png"
                description={` ${
                  language === "Norwegian"
                    ? "Det skal veldig lite til for at jeg blir ekstremt motivert"
                    : "I am very easily motivated"
                }`}
              />
              <MySkills
                title={` ${language === "Norwegian" ? "Kreativ" : "Creative"} `}
                src="https://cdn-icons-png.flaticon.com/512/3940/3940179.png"
                description={` ${
                  language === "Norwegian"
                    ? "Kreativitet er en av mine sterkeste egenskaper"
                    : "Creativity is one of my strongest traits"
                }`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default KnowledgeIcon;
