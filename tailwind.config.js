const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#4695FF",
          green: "#1DBE62",
          yellow: "#FFD21F",
          red: "#F85555",
          gray: "#556080",
        },
        secondary: {
          blue: "#2B74D7",
          green: "#008C21",
          yellow: "#FF981F",
          red: "#D13333",
          black: "#1B2142",
        },
        pastels: {
          blue: "#DBF2FF",
          green: "#DEFFDB",
          yellow: "#FFF6E4",
          red: "#FFDBDB",
          gray: "#F0F4FF",
        },
        neutrals: {
          black: "#131625",
          white: "#FFFFFF",
          gray: {
            100: "#E1E3F6",
            200: "#C8CEDE",
            300: "#7B86AD",
          },
        },
      },
      fontFamily: {
        sans: ["adelle-sans", ...defaultTheme.fontFamily.sans],
        text: ["adelle-sans-ultra-thin", ...defaultTheme.fontFamily.sans],
        heading: ["adelle-sans-condensed", ...defaultTheme.fontFamily.sans],
        display: ["noto-sans-display", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
