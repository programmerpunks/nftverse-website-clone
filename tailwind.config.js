/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora"],
        Montserrat: ["Montserrat"],
      },
      screens: {
        "4xl": "2450px",
      },
    },
  },
  plugins: [require("daisyui")],
};
