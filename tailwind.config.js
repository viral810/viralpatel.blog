const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    tableLayout: false
  }
};
