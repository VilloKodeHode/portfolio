import { useCallback, useContext } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import ThemeContext from "../base components/ThemeSwitch/ThemeContext";

export default function RenderParticles() {
  const { selectedTheme } = useContext(ThemeContext);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="-z-50"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 80,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "",
          },

          links: {
            color: {
              value: selectedTheme === "Lightmode" ? "#207E78" : "#207E78",
            },
            distance: 100,
            enable: true,
            opacity: selectedTheme === "Lightmode" ? 0.5 : 1,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 20,
          },
          opacity: {
            value: 0.0,
          },
          shape: {
            type: "",
          },
          size: {
            value: { min: 0, max: 0 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export function RenderLessParticles() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      className="z-20"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#3B343D",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 3,
            },
            repulse: {
              distance: 80,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#C9FEF5",
          },

          links: {
            color: "#033B5C",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 3,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 5,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "",
          },
          size: {
            value: { min: 0, max: 0 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
