/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx}'],
  theme: {
    fontFamily: {
      Poppins: ['Poppins'],
    },
    extend: {
      backgroundImage: {
        'pantai-meditasi': `url('src/assets/images/pantai.jpg')`,
        'sunrise-meditasi': `url('src/assets/images/sunrise.jpg')`,
        'forest-meditasi': `url('src/assets/images/forest.jpg')`,
      },
      colors: {
        main: '#008BFF',
        secondary: '#2291DD',
        darkBlue: '#0079CC',
      },
    },
  },
  plugins: [],
};
