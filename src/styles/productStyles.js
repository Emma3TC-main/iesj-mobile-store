import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import theme from "../constants/theme";

export default StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.lg,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.sm,
  },

  title: {
    color: colors.text,
    fontSize: 18,
    fontFamily: "Inter_600SemiBold",
    marginBottom: 6,
  },

  description: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 10,
  },

  price: {
    color: colors.primary,
    fontSize: 20,
    fontFamily: "Inter_700Bold",
    marginBottom: 12,
  },
});
