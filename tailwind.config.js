/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-dark-bg": "#20232a",
        "react-blue":"#61dafb",
        "beta-header": "#16181d"
      }
    },
  },
  plugins: [],
}
