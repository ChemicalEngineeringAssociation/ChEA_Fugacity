/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme:  {
      extend: {
        colors: {
          'lightPrimary': '#CDF3E5',
          'lightSecondary':'#D9D9D9',
          'darkMain': '#20CD8D',
          'darkPrimary': '#2D4048',
          'darkSecondary': '#182527',
        },
        fontFamily: {
          'avenir': ['Avenir', 'sans-serif'],
          'nunito': ['Nunito', 'sans'],
        },
      }
  },
  plugins: [],
}
// nanuto
// #02C37E
//#182527
// #CDF3E5
// #2D4048
// neue machina
// #20CD8D
// #20CD8D
// #CCF4E5
// #182527
// #2D4048
// #D9D9D9