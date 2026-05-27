import { StyleSheet } from "react-native";

import colors from "../constants/colors";
import theme from "../constants/theme";

export default StyleSheet.create({
  /* BASE */
  safeContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
  },

  scrollContent: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.sm,
    paddingBottom: 120,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* TEXT */
  title: {
    fontSize: theme.typography.title,
    fontWeight: "800",
    color: colors.text,
    marginBottom: theme.spacing.sm,
  },

  subtitle: {
    fontSize: theme.typography.subtitle,
    color: colors.textSecondary,
    marginBottom: theme.spacing.lg,
    lineHeight: 28,
  },

  text: {
    fontSize: theme.typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },

  muted: {
    color: colors.textMuted,
  },

  /* CARDS */
  card: {
    backgroundColor: colors.card,

    borderRadius: theme.radius.lg,

    padding: theme.spacing.lg,

    marginBottom: theme.spacing.lg,

    borderWidth: 1,
    borderColor: colors.border,

    ...theme.shadow,
  },

  /* BUTTONS */
  buttonPrimary: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },

  buttonPrimaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "600",
  },

  buttonOutline: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    alignItems: "center",
    marginTop: theme.spacing.sm,
  },

  buttonOutlineText: {
    color: colors.primary,
    fontWeight: "600",
  },

  /* INPUT */
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.md,
    padding: 14,
    color: colors.text,
    marginBottom: theme.spacing.md,
  },

  /* IMAGES */
  image: {
    width: "100%",
    borderRadius: theme.radius.md,
  },
});
