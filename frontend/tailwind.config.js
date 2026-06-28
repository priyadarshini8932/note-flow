import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "forest",
      {
        forestlight: {
          primary: "#00C46A",

          base100: "#F8FFF9",
          base200: "#EAF5EE",
          base300: "#D5EBDD",

          baseContent: "#17212B",

          secondary: "#0EA5E9",
          accent: "#10B981",
        }
      },
    ],
},
};