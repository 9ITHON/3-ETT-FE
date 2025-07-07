const { colors } = require("./src/constants/style");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: colors.main,
        main1: colors.main1,
        main2: colors.main2,
        sub: colors.sub,
        text: colors.text,
        outline: colors.outline,
        background: colors.background,
        white: colors.white,
      },
    },
  },
  plugins: [],
};
