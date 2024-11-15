/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/bgimage.jpg')"
      },
      colors: {
        'blu': "#1C30A3"
      }
    },
  },
  plugins: [],
}

