import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../../constants/colors";

export default function CategoryPill({
  label,
  active = false,
}) {
  return (
    <View
      style={[
        styles.container,
        active && styles.activeContainer,
      ]}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 999,
    marginRight: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },

  activeContainer: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  text: {
    color: colors.textSecondary,
    fontWeight: "600",
  },

  activeText: {
    color: colors.text,
  },
});