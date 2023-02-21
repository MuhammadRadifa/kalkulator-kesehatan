/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      colors: {
        main: '#008BFF',
        secondary: '#2291DD',
        darkBlue: '#0079CC',
      },
    },
  },
  plugins: [],
};
