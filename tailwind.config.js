/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme:  {
      extend: {
        
        fontFamily: {
          'avenir': ['Avenir', 'sans-serif']
        },
      }
  },
  plugins: [],
}