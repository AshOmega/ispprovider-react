const colors = require(`tailwindcss/colors`);
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      teal: colors.teal,
      blueGray : colors.blueGray,
      coolGray : colors.coolGray,
      orange : colors.orange,
      amber : colors.amber,
      lime : colors.lime,
      green : colors.green,
      emerald : colors.emerald,
      cyan : colors.cyan,
      sky : colors.sky,
      indigo : colors.indigo,
      violet : colors.violet,
      purple : colors.purple,
      fuchsia : colors.fuchsia,
      pink : colors.pink,
      rose : colors.rose,
    }
  },
  plugins: [],
}
