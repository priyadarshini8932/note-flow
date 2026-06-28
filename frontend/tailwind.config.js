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

          "primary": "#00C46A",

          "secondary": "#0EA5E9",

          "accent": "#10B981",

          "base-100": "#F8FFF9",

          "base-200": "#EAF5EE",

          "base-300": "#D5EBDD",

          "base-content": "#17212B",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
};