import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function CustomButton({ title, onPress, variant = "primary" }) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
    >
      {/* Glow decorativo */}
      {variant === "primary" && <View style={styles.glow} />}

      <Text
        style={[styles.text, variant === "secondary" && styles.secondaryText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,

    paddingVertical: 10,
    paddingHorizontal: 22,

    borderRadius: theme.radius.md,

    alignItems: "center",
    justifyContent: "center",

    marginTop: theme.spacing.sm,

    overflow: "hidden",
    position: "relative",

    borderWidth: 1,
    borderColor: colors.primaryLight,

    ...theme.glow.blue,

    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,

    elevation: 10,
  },

  glow: {
    position: "absolute",

    width: 140,
    height: 140,

    borderRadius: 999,

    backgroundColor: "rgba(255,255,255,0.10)",

    top: -60,
    right: -40,
  },

  secondary: {
    backgroundColor: colors.card,

    borderWidth: 1,
    borderColor: colors.borderLight,

    shadowOpacity: 0,
    elevation: 0,
  },

  text: {
    color: colors.white,

    fontFamily: "Inter_600SemiBold",

    fontSize: 15,
    letterSpacing: 0.3,

    zIndex: 2,
  },

  secondaryText: {
    color: colors.text,
  },
});
