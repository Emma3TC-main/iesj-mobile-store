import { View, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function SectionTitle({ title, subtitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 18,
  },

  title: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "800",
    marginBottom: 6,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },
});
