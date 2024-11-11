/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
    colors: {
      background: "#F3ECE5",
      primary: "#1D1D1B",
      accent: "#BC9977",
      secondary: "#6D5B49",
      white: "#FFFFFF",
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

