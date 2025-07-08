const { COLORS } = require("./src/constants/style");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main1: COLORS.main1,
        main: COLORS.main,
        main2: COLORS.main2,
        sub: COLORS.sub,
        text: COLORS.text,
        outline: COLORS.outline,
        background: COLORS.background,
        white: COLORS.white,
      },
    },
  },
  plugins: [],
};
