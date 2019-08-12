import colors from "vuetify/es5/util/colors";

export default {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: colors.blueGrey,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blueGrey.lighten3,
        secondary: colors.grey.lighten4,
        accent: colors.shades.black,
        error: colors.red.accent3,
      }
    }
  }
};
