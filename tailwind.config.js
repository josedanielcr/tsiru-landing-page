/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      }
    },
    colors: {
      background: "white",
      primary: "#1D1D1B",
      accent: "#87A663",
      secondary: "#F3F3F3",
      complementary: "#DDDDDD",
       white: "#FFFFFF"
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

