/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['../../apps/**/*.tsx', '../**/*.tsx'],
  theme: {
    extend: {},
    colors: {
      primary: '#11566C',
      secondary: '#FAA557',
      ...colors,
    },
  },
}
