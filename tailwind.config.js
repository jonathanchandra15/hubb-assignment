module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'orange': '#FFC865',
      'dark-blue': '#1F2F60',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'sans': ['Sora']
    },
    fontSize: {
      'product-button-text': '0.625rem',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
