/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'production',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       rubik: "Rubik, sans-serif",
       lato: "Lato, sans-serif",
      },
      container: {
        center: true,
        padding: "24px",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1180px",
        }
      },
      fontSize: {
        'custom-xl':"28px",
        'custom-2xl': "56px",
      },
      colors: {
        offRed: "#FF4C24",
        black: "#010101",
        gray: "#5F5F5F",
        orange:"#FF9748",
        offOrange:"#FFF8F2",
        offOrange:"#FFF8F2",
        offGray:"#00000029",
      },
      backgroundImage: {
        'hero': "url(./assets/image/webp/hero-bg.webp)",
        'handbookBg':"url(./assets/image//webp/handbook-bg.webp)",
      },
      boxShadow: {
        '3xl': "0px 0px 5px",
      },
      backgroundSize: {
        full: '100% 100%',
      }
    },
  },
  plugins: [],
}