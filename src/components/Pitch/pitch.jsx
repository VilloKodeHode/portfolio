import { useState, useContext } from "react";
import SkewedButton from "../base components/Buttons/Button";
import LanguageContext from "../base components/LanguageSwitch/LanguageContext";

import ThemeContext from "../base components/ThemeSwitch/ThemeContext";

export function PitchText(props) {
  const { selectedTheme } = useContext(ThemeContext);
  const { title, text } = props;
  return (
    <>
      <p className="p-4">
        <span
          className={`text-xl underline" ${
            selectedTheme === "Lightmode"
              ? " text-fairy-100"
              : " text-water-100"
          }`}
        >
          {title}
        </span>
        <br />
        {text}
      </p>
    </>
  );
}

const PitchWindow = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <SkewedButton
        text={language === "Norwegian" ? "Styrker" : "Strengths"}
        onClick={() => setToggle(!toggle)}
      />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-400"
              : " bg-fairy-300 text-water-200 scrollbar-thumb-water-100"
          } animate-ModalSlideIn bg-opacity-90 backdrop-blur-md shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar  scrollbar-track-transparent fixed w-[90%] md:h-fit h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <PitchText
            title={
              language === "Norwegian"
                ? "Det å kode i seg selv er motiverende"
                : "To code itself is highly motivating"
            }
            text={
              language === "Norwegian"
                ? "Jeg ser frem til nye programmeringsutfordringer. Mulighetene som åpner seg når man forstår noe nytt, gjør at man aldri kan lære alt. Dette synes jeg er utrolig motiverende, fordi det betyr at jeg alltid kan lære noe nytt innenfor dette faget!"
                : "I look forward to new coding challenges. The possibilities that arise when you understand something new remind me that there is always more to learn. That, in itself, is really motivating, as it means there is always room to improve and discover new things in the world of coding!"
            }
          />
          <PitchText
            title={
              language === "Norwegian"
                ? "Jeg elsker å lære."
                : "I love to learn"
            }
            text={
              language === "Norwegian"
                ? "Det er svært motiverende å lære nye ting, og jeg gleder meg alltid når jeg har mulighet til å tilegne meg mer kunnskap eller nye kompetanser."
                : "It is highly motivating to be able to learn something new, and I look forward to every opportunity I have to acquire more knowledge or new skills."
            }
          />
          <PitchText
            title={
              language === "Norwegian"
                ? "Jeg ønsker å jobbe med UI og UX:"
                : "I would like to work with UI and UX"
            }
            text={
              language === "Norwegian"
                ? "Dette er veldig interessant og lærerikt for meg å jobbe med. Jeg ser frem til å lære flere programmeringsspråk for å kunne bli enda bedre. Jeg håper å kunne jobbe i en arbeidskultur som setter pris på koding, design, teamarbeid, kompetanseheving og kvalitet."
                : "For me this is very interesting and I learn so much by working with this. Im looking forward to learning more code-languages to be able to do this even better. I hope that I can be in a work environment that loves code, design, teamwork skill-development and quality work"
            }
          />
          <PitchText
            title={
              language === "Norwegian"
                ? "Jeg har spesialisert meg på React Vite og Tailwind"
                : "I have specialized in using React with Vite and Tailwind."
            }
            text={
              language === "Norwegian"
                ? "Etter å ha lært react har jeg hovedsakelig fokusert på å lære det best mulig. Men jeg har også begynt å se på Svelte, Remix og React Native"
                : "After learning React, it has been my main focus. However, I am also exploring other frameworks such as Svelte, Remix, and React Native."
            }
          />
        </div>
      )}
    </>
  );
};

export const AboutWindow = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <SkewedButton
        text={language === "Norwegian" ? "Personlighet" : "Personality"}
        onClick={() => setToggle(!toggle)}
      />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-400"
              : " bg-fairy-300 text-water-200 scrollbar-thumb-water-100"
          } animate-ModalSlideIn bg-opacity-90 backdrop-blur-md shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar scrollbar-track-transparent fixed w-[90%] md:h-fit h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <PitchText
            title={
              language === "Norwegian" ? "Jeg elsker å kode." : "I love to code"
            }
            text={
              language === "Norwegian"
                ? "Jeg koder masse på fritiden og synes det er kjempegøy å lære noe nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast med lenge er helt fantastisk!"
                : "During my free time, I spend a lot of time coding because I have a genuine passion for learning more about it. The feeling of mastering a new concept that I have struggled with is truly euphoric!"
            }
          />
          <PitchText
            title={language === "Norwegian" ? "Personlighet:" : "Personality"}
            text={
              language === "Norwegian"
                ? "Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
                : "I am a creative and social person who is intrinsically motivated to learn coding. Additionally, I am a collaborative and supportive team member."
            }
          />
          <PitchText
            title={language === "Norwegian" ? "Interesser:" : "Interests"}
            text={
              language === "Norwegian"
                ? "Utover koding driver jeg med styrketrening, og har gjort det i 18 år. Dette er godt både for kropp og sjel etter lange dager foran skjermen."
                : "In addition to coding, I do strength training and have been doing so for 18 years. This is good for both the body and mind after long days in front of the screen."
            }
          />
          <PitchText
            title={
              language === "Norwegian"
                ? "Jeg ønsker å lære og elsker å lære bort."
                : "I want to learn and love to teach."
            }
            text={
              language === "Norwegian"
                ? "Jeg tror at kunnskap er ment for å deles, og jeg er overbevist om at både den som underviser og den som lærer vil dra nytte av å dele det man kan."
                : "Knowledge is meant to be shared, and I believe that everyone benefits from teaching what they know."
            }
          />
        </div>
      )}
    </>
  );
};

export default PitchWindow;
