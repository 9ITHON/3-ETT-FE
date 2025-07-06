/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main1: "#3F6AAF",
        main: "#558BCF",
        main2: "#8FB3E5",
        sub: "#FFD671",
        text: "#333333",
        outline: "#D3D8E1",
        background: "#F4F5F7",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
