/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'white': '#ffffff',
      'dgray': '#282c34',
      'dsg': '#335055',
      'bs': '#bc603c',
      'lsg': '#03b5aa',
      'cm': '#4a2923'
    },
    backgroundImage: {
      'coffee-mug': "url('../public/Background.png')"
    },
    extend: {
      spacing: {
        '104': '26rem'
      }
    },
  },
  plugins: [],
}
