/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme:  {
      extend: {
        backgroundColor: {
          'custom-blue': '#33475b',
        },
        textColor: {
          'custom-blue': '#33475b',
        },
        fontFamily: {
          'avenir': ['Avenir', 'sans-serif']
        },
        // If you want custom gradients:
        backgroundImage: theme => ({
          'custom-gradient': 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("#")'
        })
      }
  },
  plugins: [],
}