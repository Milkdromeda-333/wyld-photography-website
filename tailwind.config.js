/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: [
      "./index.html",
      "./src/input.css",
      "./src/index.js"
    ]
  },
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
