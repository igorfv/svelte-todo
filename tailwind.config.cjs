const colors = require('tailwindcss/colors')

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      }
    },
  },
  plugins: [],
};

module.exports = config;
