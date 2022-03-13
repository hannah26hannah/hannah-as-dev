const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Coda', 'cursive', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      mobile: '375px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    colors: {
      white: '#FFFFFF',
      gray: {
        1: '#333333',
        5: '#E0E0E0',
        light: '#C4C4C4',
        default: '#787878',
      },
    },
  },
  plugins: [],
};
