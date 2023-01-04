/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kaushan: ["Kaushan Script", "cursive"],
        stickNoBills: ["Stick No Bills", "sans-serif"],
      },
      colors: {
        blueSky: "#00b1ec",
      },
    },
  },
  plugins: [],
};
