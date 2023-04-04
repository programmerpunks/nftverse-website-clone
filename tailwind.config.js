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
    },
  },
  plugins: [require("daisyui")],
};
