/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
    colors: {
      background: "white",
      primary: "#1D1D1B",
      accent: "#87A663",
      secondary: "#F3F3F3",
      white: "#FFFFFF",
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

