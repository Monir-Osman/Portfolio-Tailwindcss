/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        kaushan: ["Kaushan Script", "cursive"],
        stickNoBills: ["Stick No Bills", "sans-serif"],
        sriracha: ["Sriracha", "cursive"],
        kalam: ["Kalam", "cursive"],
      },
      colors: {
        blueSky: "#00b1ec",
      },
      borderWidth: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
      },
    },
  },
  plugins: [],
};
