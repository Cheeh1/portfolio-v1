/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html", 
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      colors: {
        'cinder-light': '#656D72',
        'cinder-dark': '#232E35',
        'purplelight': '#7E74F1',
        'grey': '#FBFBFB',
      },
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'pjs': ['Plus Jakarta Sans', 'sans-serif'],
      'shrik': ['Shrikhand', 'cursive'],
    },
  },
  plugins: [],
};