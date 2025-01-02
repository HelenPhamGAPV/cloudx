/** @type {import('tailwindcss').Config} */

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#D7573B",
        color2: "#FA9C0F",
        color3: "#152F39",
        color4: "#35528B",
        color5: "#fff",
        color6: "rgb(255 81 0)",
        white100: "rgb(246 246 246)",
        black500: "rgb(19 26 34)",
        black300: "rgb(39 46 54)",
        holyGen500: "rgb(161 179 179)",
        gray100: "rgb(243 244 246)",
        gradientRadial: "radial-gradient(var(--tw-gradient-stops))",
        primary300: "#ff6514",
        cxPurple100: "#d83b85",
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
        lato: ["Lato"],
        garamond: ["Garamond"],
      },
    },
  },
  plugins: [],
};
