import { useState, useContext } from "react";
import SkewedButton from "../base components/Buttons/Button";

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

  return (
    <>
      <SkewedButton
        text="Hva motiverer meg?"
        onClick={() => setToggle(!toggle)}
      />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-400"
              : " bg-fairy-300 text-water-200 scrollbar-thumb-water-100"
          } animate-ProjectSlideIn bg-opacity-90 backdrop-blur-md shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar  scrollbar-track-transparent fixed w-[90%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <PitchText
            title="Hva jeg liker med koding:"
            text="Nye kode utfordringer er noe jeg gleder meg til. Mulighetene som
              åpner seg når man forstår noe nytt gjør at man så å si aldri kan
              klare å lære alt, som jeg synes er utrolig motiverende. Det vil si
              at jeg alltid kan lære noe nytt i dette faget!"
          />
          <PitchText
            title="Jeg ønsker å jobbe med UI og UX:"
            text="Dette er for meg veldig interessant og lærerikt å jobbe med. Jeg
              gleder meg til å lære meg flere kode-språk for å kunne gjøre dette
              bedre. Jeg håper å komme i et arbeidsmiljø som liker kode, design,
              team-arbeid, kompetanse-heving og kvalitet."
          />
          <PitchText
            title="Jeg har spesialisert meg på React"
            text="Etter å ha lært react har jeg hovedsakelig fokusert på å lære det best mulig."
          />
          <PitchText
            title="Personlighet:"
            text="Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
          />
          <PitchText
            title="Interesser:"
            text="Jeg er kreativ, sosial, har en indre motivasjon til å lære og er en god lagspiller. Jeg har brukt hundrevis av timer utenom front-end-kurset for å lære så mye som mulig om koding. På kurset jeg har deltatt på, bekreftes dette av mine medstudenter som sier at jeg også er kunnskapsrik, hjelpsom, villig til å lære og alltid yter det lille ekstra."
          />
        </div>
      )}
    </>
  );
};

export const AboutWindow = () => {
  const { selectedTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <SkewedButton text="Om meg" onClick={() => setToggle(!toggle)} />

      {toggle && (
        <div
          className={`${
            selectedTheme === "Lightmode"
              ? " bg-water-100 text-fairy-300 rounded-l-xl scrollbar-thumb-fairy-400"
              : " bg-fairy-300 text-water-200 scrollbar-thumb-water-100"
          } animate-ProjectSlideIn bg-opacity-90 backdrop-blur-md shadow-2xl shadow-black p-8 overflow-y-scroll scrollbar scrollbar-track-transparent fixed w-[90%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50`}
        >
          <SkewedButton
            text="X"
            onClick={() => setToggle(!toggle)}
            className="absolute top-4 right-8 py-1"
          />
          <PitchText
            title="Jeg elsker å kode."
            text="Jeg koder masse på fritiden og synes det er kjempegøy å lære noe
              nytt. Mestringsfølelsen av å få til noe som jeg har sittet fast
              med lenge er helt fantastisk!"
          />
          <PitchText
            title="Jeg ønsker å lære og elsker å lære bort."
            text="Kunnskap er ment for å deles og jeg mener at alle parter tjener på å lære bort det man kan"
          />
          <PitchText
            title="Mitt ønske er å jobbe med UI og UX."
            text="Jeg har som mål å lære så mye som mulig om dette. JavaScript med React og Vite lærer
              jeg nå, men jeg har et veldig sterkt ønske å utvide repertoaret
              mitt med andre kode-språk."
          />
        </div>
      )}
    </>
  );
};

export default PitchWindow;
