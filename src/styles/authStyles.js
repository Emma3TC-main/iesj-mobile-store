import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import theme from "../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: theme.spacing.lg,
  },

  logoBox: {
    alignItems: "center",
    marginBottom: theme.spacing.xl,
  },

  title: {
    fontSize: 32,
    fontFamily: "Inter_700Bold",
    color: colors.text,
    marginBottom: 10,
  },

  subtitle: {
    color: colors.textMuted,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
  },
});
