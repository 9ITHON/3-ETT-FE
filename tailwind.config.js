const { colors } = require("./src/constants/style");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main1: colors.main1,
        main: colors.main,
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
