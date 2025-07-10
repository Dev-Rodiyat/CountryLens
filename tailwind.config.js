/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      glass: 'rgba(255, 255, 255, 0.1)',
    },
    backgroundImage: {
        countriesImage: "url('src/assets/countries-image.jpg')",
    },
    backdropBlur: {
      xs: '2px',
    },
  },
  },
  plugins: [],
}
