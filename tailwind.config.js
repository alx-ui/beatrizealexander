/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#203500',
        secondary: '#283e06',
        tertiary: '#31470b',
        quaternary: '#3b5110',
        quinary: '#445a14',
        senary: '#586e26',
        septenary: '#778c43',
        octonary: '#96ac60',
        nonary: '#b7cd7f',
        denary: '#d9ef9f',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        Cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
};
