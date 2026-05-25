import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function AppHeader({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: colors.text,
  },

  subtitle: {
    color: colors.textSecondary,
    marginTop: 4,
    fontSize: 15,
  },
});
