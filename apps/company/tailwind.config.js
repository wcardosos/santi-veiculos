/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    '../../packages/ui/**/*.tsx',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#11566C',
      secondary: '#FAA557',
      ...colors,
    },
    fontFamily: {
      sans: ['Noto Sans'],
      heading: ['Poppins'],
    },
  },
}
