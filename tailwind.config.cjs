/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#C9FEF5",

          secondary: "#22555C",

          accent: "#35444F",

          richBlack: "#030104",

          neutral: "#22555C",

          "base-100": "#87BDC2",

          info: "#22555C",

          success: "#22555C",

          warning: "#22555C",

          error: "#22555C",
        },
      },
    ],
  },
  theme: {
    screens: {
      ms: "320px",

      mm: "375px",

      ml: "425px",

      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: () => ({
        "gradient-radial-to-tr":
          "radial-gradient(115% 90% at 0% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-tl":
          "radial-gradient(115% 90% at 100% 100%, var(--tw-gradient-stops))",
        "gradient-radial-to-br":
          "radial-gradient(90% 115% at 0% 0%, var(--tw-gradient-stops))",
        "gradient-radial-to-bl":
          "radial-gradient(90% 115% at 100% 0%, var(--tw-gradient-stops))",
      }),
      fontFamily: { Roboto: ["Roboto", "sans-serif"] },
      colors: {
        dawn: {
          100: "#EF752E",
          200: "#E23A29",
          300: "#8D0C0F",
        },
        water: {
          100: "#C9FEF5",
          200: "#A8DEDC",
          300: "#87BDC2",
          400: "#0099B4",
          500: "#026A88",
          600: "#033B5C",
        },
        earth: {
          100: "#52606F",
          200: "#3E3E50",
          300: "#6F5955",
          400: "#323041",
        },
        fairy: {
          100: "#207E78",
          200: "#58847D",
          300: "#22555C",
          400: "#274746",
        },
        superDry: {
          primary: "#030104",
          secondary: "#D3D3D3",
          accent: "#FFA500",
          bg: "#F5F5DC",
          effect: "#4D5252",
          accent2: "#35444F",
        },
      },
      keyframes: {
        buttonHover: {
          "0%": { color: "#C9FEF5" },
          "50%": { color: "#22555C" },
          "100%": { color: "#C9FEF5" },
        },
        glow: {
          "0%": { opacity: "30%" },
          "100%": { opacity: "100%" },
        },
        slideRight: {
          "0%": { translate: "-100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideLeft: {
          "0%": { translate: "100%", opacity: "0%" },
          "100%": { translate: "0%", opacity: "100%" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0%" },
          "100%": { translate: "translateY(0%)", opacity: "100%" },
        },
        appear: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        ButtonHover: "buttonHover ease-in 1.5s infinite",
        ModalSlideIn: "slideRight ease 0.3s",
        RPSPopUp: "popUp 0.1s ease-in",
        glow: "glow 1s ease-in-out infinite alternate",
        SlideInFromLeft: "slideLeft 0.5s ease-in-out",
        SlideInFromRight: "slideRight 0.5s 1s ease-in-out backwards",
        SlideInFromTop: "slideDown 0.5s ease-in-out",
        Appear: "appear 1s ease-in-out",
        RPSPopUpDelayed: "popUp 0.1s ease-in 1.0s backwards",
        RPSPopUpMoreDelayed: "popUp 0.1s ease-in 2s backwards",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
};
