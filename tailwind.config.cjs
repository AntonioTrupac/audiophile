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
        'input-grayish': "#CFCFCF",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '1xl': '1440px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'hero-image': "url('/assets/home/desktop/image-hero.jpg')",
        'hero-image-tablet': "url('/assets/home/tablet/image-header.jpg')",
        'hero-image-mobile': "url('/assets/home/mobile/image-header.jpg')",
      },
      maxWidth: {
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
};

module.exports = config;
