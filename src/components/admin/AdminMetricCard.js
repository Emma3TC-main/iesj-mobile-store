import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function AdminMetricCard({
  icon,
  label,
  value,
  hint,
}) {
  return (
    <View style={styles.card}>
      <View pointerEvents="none" style={styles.glow} />

      <View style={styles.topRow}>
        <View style={styles.iconBox}>
          <MaterialCommunityIcons
            name={icon}
            size={22}
            color={colors.primaryLight}
          />
        </View>

        <View style={styles.statusDot} />
      </View>

      <View style={styles.content}>
        <Text
          style={styles.value}
          numberOfLines={1}
          adjustsFontSizeToFit
        >
          {value}
        </Text>

        <Text
          style={styles.label}
          numberOfLines={2}
        >
          {label}
        </Text>

        <View style={styles.hintContainer}>
          {hint ? (
            <>
              <View style={styles.hintDot} />

              <Text
                style={styles.hint}
                numberOfLines={1}
              >
                {hint}
              </Text>
            </>
          ) : (
            <Text style={styles.defaultHint}>
              Actualizado
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    overflow: "hidden",

    width: "48.3%",
    minHeight: 166,

    backgroundColor: colors.card,

    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.16)",
    borderRadius: theme.radius.lg,

    padding: 15,

    justifyContent: "space-between",

    ...theme.shadow,
  },

  glow: {
    position: "absolute",

    width: 92,
    height: 92,
    borderRadius: 46,

    top: -48,
    right: -36,

    backgroundColor: "rgba(59, 130, 246, 0.1)",
  },

  topRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  iconBox: {
    width: 42,
    height: 42,

    borderRadius: 13,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.glowBlue,

    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.14)",
  },

  statusDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: colors.primaryLight,

    opacity: 0.75,

    marginTop: 3,
    marginRight: 2,

    shadowColor: colors.primaryLight,
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 14,
  },

  value: {
    color: colors.white,

    fontSize: 27,
    lineHeight: 32,
    fontWeight: "900",

    letterSpacing: -0.7,
  },

  label: {
    color: colors.textSecondary,

    fontSize: 12,
    lineHeight: 17,
    fontWeight: "800",

    marginTop: 4,

    minHeight: 34,
  },

  hintContainer: {
    minHeight: 18,

    flexDirection: "row",
    alignItems: "center",

    marginTop: 7,
  },

  hintDot: {
    width: 5,
    height: 5,

    borderRadius: 3,

    backgroundColor: "#F59E0B",

    marginRight: 6,
  },

  hint: {
    flex: 1,

    color: colors.textMuted,

    fontSize: 9,
    lineHeight: 13,
    fontWeight: "700",
  },

  defaultHint: {
    color: colors.textMuted,

    fontSize: 9,
    lineHeight: 13,
    fontWeight: "700",

    opacity: 0.72,
  },
});

