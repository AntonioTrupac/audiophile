/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        'primary-hover': "#fbaf85",
        secondary: "#101010",
        grayish: "#F1F1F1",
        'light-grayish': "#FAFAFA",
      }
    },
  },
  plugins: [],
};

module.exports = config;
