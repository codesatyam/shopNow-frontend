/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "400px",
      ssm: "430px",
      xlsm: "460px",
      sm: "640px",

      md: "768px",

      mdl: "888px",

      lg: "1024px",

      lgm: "1150px",

      // => @media (min-width: 1024px) { ... }
      lgg: "1032px",

      xl: "1280px",

      mxl: "1290px",
      xxl: "1450px",
      "2xl": "1400px",
      xlm: "1680px",
      xxxl: "1500px",
      xlxl: "1800px",
    },
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
