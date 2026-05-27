import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../common/CustomButton";

import colors from "../../constants/colors";

export default function PromoBanner({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Glow decorativo */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.badge}>
        <Text style={styles.badgeText}>LIMITED OFFER</Text>
      </View>

      <Text style={styles.title}>Promoción de la semana</Text>

      <Text style={styles.description}>
        Hasta 25% de descuento en SSD NVMe, memorias RAM DDR5 y accesorios
        gaming.
      </Text>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>25%</Text>

          <Text style={styles.statLabel}>OFF</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>RGB</Text>

          <Text style={styles.statLabel}>Gaming</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statValue}>DDR5</Text>

          <Text style={styles.statLabel}>Performance</Text>
        </View>
      </View>

      <CustomButton
        title="Ver ofertas"
        onPress={() => navigation.navigate("Catalogo")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.card,
    borderRadius: 30,
    padding: 26,
    marginBottom: 24,
    position: "relative",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
  },

  glowBlue: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -60,
    right: -40,
  },

  glowPurple: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: -50,
    left: -30,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(59,130,246,0.15)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "rgba(96,165,250,0.25)",
  },

  badgeText: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
  },

  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 14,
    lineHeight: 34,
  },

  description: {
    color: colors.textSecondary,
    lineHeight: 25,
    marginBottom: 24,
    fontSize: 15,
    maxWidth: "95%",
  },

  statsRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 26,
  },

  statCard: {
    flex: 1,
    backgroundColor: colors.cardSecondary,
    borderRadius: 20,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  statValue: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "800",
    marginBottom: 4,
  },

  statLabel: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: "600",
  },
});
