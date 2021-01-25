module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        graphite: '#1C1D1F',
        'dark-grey': '#2D2F36',
        'medium-grey': '#3B3E46',
        'light-grey': '#484D57',
        'input-box-grey': '#3F414B',
        'my-yellow': '#F2C94C',
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['focus'],
    },
  },
  plugins: [],
}
