import { useContext, useEffect } from "react";
import ThemeContext from "../components/base components/ThemeSwitch/ThemeContext";
import PageContext from "../components/Navigation/PageContext";

function LandingPage() {
  const { selectedTheme } = useContext(ThemeContext);
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage("Startside");
  }, []);
  return (
    <>
      <main className="grid font-Roboto tracking-widest select-none overflow-hidden">
        <div
          className={`lg:text-[100px] z-40 md:text-[80px] sm:text-[60px] text-[40px]  ${
            selectedTheme === "Lightmode" ? "text-fairy-100" : "text-water-100"
          } `}
        >
          <h1 className="animate-SlideInFromLeft">Villo</h1>
        </div>
        <div
          className={`m-auto z-40 leading-snug md:w-2/3 w-[85%] ${
            selectedTheme === "Lightmode" ? "text-fairy-300" : "text-water-200"
          }  lg:text-[60px] md:text-[50px] text-[40px]`}
        >
          <h2 className="animate-SlideInFromRight">
            Kode og Design med en personlig touch
          </h2>
        </div>
      </main>
    </>
  );
}

export default LandingPage;
