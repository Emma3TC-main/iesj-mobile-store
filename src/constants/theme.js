import colors from "./colors";

const theme = {
  colors,

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 42,
  },

  radius: {
    sm: 10,
    md: 16,
    lg: 24,
    xl: 32,
    pill: 999,
  },

  typography: {
    hero: 38,
    title: 28,
    subtitle: 20,
    body: 16,
    caption: 13,
    small: 12,
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.3,
    shadowRadius: 14,
    elevation: 8,
  },

  glow: {
    blue: {
      shadowColor: colors.primary,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.35,
      shadowRadius: 16,
      elevation: 10,
    },

    purple: {
      shadowColor: colors.accent,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.35,
      shadowRadius: 16,
      elevation: 10,
    },
  },
};

export default theme;
