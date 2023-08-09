/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-primary": "rgba(180,18,18,0.75)",
        "black-primary": "rgba(18,18,18,0.75)",
        "white-primary": "rgba(255,255,255,0.75)",
        "gray-primary": "#858080"
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
