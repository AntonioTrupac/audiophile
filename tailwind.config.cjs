/** @type {import("tailwindcss").Config} */
const config = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#D87D4A",
                "primary-hover": "#fbaf85",
                secondary: "#101010",
                grayish: "#F1F1F1",
                "light-grayish": "#FAFAFA",
                "input-grayish": "#CFCFCF"
            },
            screens: {
                "sm": "640px",
                "md": "768px",
                "lg": "1024px",
                "xl": "1280px",
                "1xl": "1440px",
                "2xl": "1536px"
            },
            backgroundImage: {
                "hero-image": "url('/assets/home/desktop/image-hero.jpg')",
                "hero-image-tablet": "url('/assets/home/tablet/image-header.jpg')",
                "hero-image-mobile": "url('/assets/home/mobile/image-header.jpg')"
            },
            maxWidth: {
                "xsm": "450px",
                "2xl": "1440px"
            },
            gridTemplateColumns: {
                "hero-2": "minmax(0, 396px), minmax(0, 714px)",
                "navigation": "340px 1fr 23px",
                "navigation-mobile": "20px 1fr 23px",
                "feature": "1fr 350px"
            },
            boxShadow: {
                'popover-light': '0px 20px 50px -20px rgba(29, 32, 38, 0.503143)'
            }
        }
    },
    plugins: []
};

module.exports = config;
