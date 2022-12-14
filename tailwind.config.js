/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        "main": ['Asap', "sans-serif"],
        "decor": ['IM Fell English SC', "serif"]
      },
      backgroundImage: {
        "hero": "url('./images/hero.avif')"
      }
    },

  },
  plugins: [],
};
