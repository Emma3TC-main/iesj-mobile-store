import { TouchableOpacity, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function CustomButton({ title, onPress, variant = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondary]}
      onPress={onPress}
    >
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
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  secondary: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  text: {
    color: colors.white,
    fontFamily: "Inter_600SemiBold",
    fontSize: 15,
  },

  secondaryText: {
    color: colors.text,
  },
});
