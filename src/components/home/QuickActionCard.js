import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import colors from "../../constants/colors";

export default function QuickActionCard({
  icon,
  title,
  description,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        {icon}
      </View>

      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>

      <Text style={styles.link}>
        Explorar →
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.card,
    padding: 22,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },

  iconWrapper: {
    width: 54,
    height: 54,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(59,130,246,0.12)",
  },

  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 18,
    marginBottom: 10,
  },

  description: {
    color: colors.textSecondary,
    lineHeight: 22,
    fontSize: 14,
  },

  link: {
    color: colors.primary,
    marginTop: 16,
    fontWeight: "700",
  },
});