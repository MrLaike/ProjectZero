module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        '4xl': '2rem',
      }
    },
    boxShadow: {
      '3xl-light': '0 4px 13px 0px rgba(230,220,220,1)',
    }
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
      boxShadow: ['hover', 'active'],
    },
  },
  plugins: [],
}
