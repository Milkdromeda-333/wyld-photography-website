/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "main": ['Asap', "sans-serif"],
        "decor": ['Eczar', "serif"]
      },
      backgroundImage: {
        "hero": "url('./images/hero.avif')"
      }
    },

  },
  plugins: [],
};
