/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#0B0D17",
        "light-violet": "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        Bellefair: ["Bellefair", "serif"],
        Barlow: ["Barlow", "sans-serif"],
        BarlowCond: ["Barlow Condensed", "sans-serif"],
      },
    },
    screens: {
      sm: "380px",
      md: "770px",
      lg: "1200px",
    },
  },
  plugins: [],
};
