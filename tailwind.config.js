const { colors } = require('@mui/material');

/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      white: '#ffffff',
      dgray: '#282c34',
      dsg: '#335055',
      bs: '#bc603c',
      lsg: '#03b5aa',
      cm: '#4a2923',
      offwhite: '#dddddd',
      blue: colors.blue,
      pink: colors.pink,
    },
    backgroundImage: {
      'coffee-mug': "url('../public/Background.png')",
      'background': "url('../public/Background_Darkened.jpg')",
      'coffee-shop': "url('https://blog-assets.lightspeedhq.com/img/2021/03/b26bcdcf-blog_coffee-shop-equipment-list_1200x628.jpg')",
      'restaurant': "url('https://upload.wikimedia.org/wikipedia/commons/e/ef/Restaurant_N%C3%A4sinneula.jpg')",
      'baking-lesson': "url('https://www.thespruceeats.com/thmb/YSLBSA1fSmr24-ka_7cclvHzqUw=/2119x1414/filters:fill(auto,1)/GettyImages-1129093553-2e6ea9c69306471e8a00a00487588387.jpg')",
      'takeaway': "url('https://i2-prod.chroniclelive.co.uk/incoming/article11351418.ece/ALTERNATES/s615/JS90327703.jpg')",
      'gradient': "url('https://www.voicesofmusic.org/assets/images/tile%20gradient.png')"
    },
    extend: {
      spacing: { 
        // rem = 0.25 * num
        '104': '26rem',
        '208': '52rem',
        'cardwidth': '50rem',
        'cardheight': '20rem',
      },
      animation: {
        'in-out': 'fade .8s linear infinite'
      },
      keyframes: {
        'fade': {
          '0%, 50%': {
            opacity: 1,
          },
          '51%, 100%': {
            opacity: 0,
          }
        }
      }
    },
  },
  plugins: [],
}
