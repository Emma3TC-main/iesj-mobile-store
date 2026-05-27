import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function AppHeader({
  title,
  subtitle,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        Bienvenido 👋
      </Text>

      <Text style={styles.title}>{title}</Text>

      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },

  greeting: {
    color: colors.primary,
    fontWeight: "700",
    marginBottom: 6,
    fontSize: 14,
    letterSpacing: 0.5,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: colors.text,
    marginBottom: 8,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
});