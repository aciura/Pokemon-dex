module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        graphite: 'rgba(28, 29, 31, 1)',
        'dark-grey': 'rgba(45, 47, 54, 1)',
        'medium-grey': 'rgba(59, 62, 70, 1)',
        'light-grey': 'rgba(72, 77, 87, 1)',
        'input-box-grey': 'rgba(63, 65, 75, 1)',
        'my-yellow': 'rgba(242, 201, 76, 1)',
      },
      gridTemplateColumns: {
        layout: '4fr 6fr',
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
