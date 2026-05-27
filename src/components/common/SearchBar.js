import {
  View,
  TextInput,
  StyleSheet,
} from "react-native";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function SearchBar({
  value,
  onChangeText,
}) {
  return (
    <View style={styles.container}>
      {/* Glow decorativo */}
      <View style={styles.glow} />

      <MaterialCommunityIcons
        name="magnify"
        size={22}
        color={colors.textMuted}
        style={styles.icon}
      />

      <TextInput
        placeholder="Buscar productos..."
        placeholderTextColor={
          colors.textMuted
        }
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />

      {value?.length > 0 && (
        <View style={styles.activeDot} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: theme.radius.lg,

    paddingHorizontal: 18,
    paddingVertical: 4,

    marginBottom: theme.spacing.md,

    overflow: "hidden",

    position: "relative",

    ...theme.shadow,
  },

  glow: {
    position: "absolute",

    width: 120,
    height: 120,

    borderRadius: 999,

    backgroundColor: colors.glowBlue,

    top: -50,
    right: -30,
  },

  icon: {
    marginRight: 12,
    zIndex: 2,
  },

  input: {
    flex: 1,

    color: colors.text,

    fontSize: theme.typography.body,

    paddingVertical: 14,

    zIndex: 2,
  },

  activeDot: {
    width: 8,
    height: 8,

    borderRadius: 999,

    backgroundColor: colors.primary,

    marginLeft: 10,

    ...theme.glow.blue,
  },
});

