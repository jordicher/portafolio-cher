module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'charcoal': "#264653",
        'persian': "#2A9D8F"    
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
