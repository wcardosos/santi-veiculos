/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
  plugins: [],
}
