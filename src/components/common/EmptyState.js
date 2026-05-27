import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function EmptyState({
  message,
}) {
  return (
    <View style={styles.container}>
      {/* Glow decorativo */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      {/* Ícono */}
      <View style={styles.iconWrapper}>
        <MaterialCommunityIcons
          name="database-search-outline"
          size={34}
          color={colors.primaryLight}
        />
      </View>

      <Text style={styles.title}>
        Sin resultados
      </Text>

      <Text style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,

    backgroundColor: colors.card,

    borderRadius: theme.radius.lg,

    paddingVertical: 28,
    paddingHorizontal: 28,

    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: colors.border,

    overflow: "hidden",

    ...theme.shadow,
  },

  glowBlue: {
    position: "absolute",

    width: 160,
    height: 160,

    borderRadius: 999,

    backgroundColor: colors.glowBlue,

    top: -50,
    right: -30,
  },

  glowPurple: {
    position: "absolute",

    width: 120,
    height: 120,

    borderRadius: 999,

    backgroundColor: colors.glowPurple,

    bottom: -40,
    left: -20,
  },

  iconWrapper: {
    width: 74,
    height: 74,

    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.cardSecondary,

    borderWidth: 1,
    borderColor: colors.borderLight,

    marginBottom: 20,
  },

  title: {
    color: colors.text,

    fontSize: 22,
    fontWeight: "800",

    marginBottom: 10,
  },

  message: {
    color: colors.textSecondary,

    textAlign: "center",

    fontSize: theme.typography.body,

    lineHeight: 25,

    maxWidth: "92%",
  },
});