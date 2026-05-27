import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../constants/colors";

export default function GamingBanner() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/images/gaming-setup.jpg")}
        style={styles.image}
      />

      <View style={styles.overlay} />

      {/* Glow decorativo */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.content}>
        <Text style={styles.badge}>PREMIUM GAMING</Text>

        <Text style={styles.title}>Gaming Collection</Text>

        <Text style={styles.description}>
          Monitores ultrawide, setups RGB y periféricos premium.
        </Text>

        <View style={styles.tags}>
          <View style={styles.tag}>
            <Text style={styles.tagText}>RTX</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>RGB</Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>144Hz</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 230,
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 30,
    position: "relative",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(11,17,32,0.68)",
  },

  glowBlue: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -40,
    right: -30,
    zIndex: 1,
  },

  glowPurple: {
    position: "absolute",
    width: 140,
    height: 140,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: -40,
    left: -20,
    zIndex: 1,
  },

  content: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 24,
    zIndex: 2,
  },

  badge: {
    alignSelf: "flex-start",
    backgroundColor: "rgba(59,130,246,0.18)",
    color: colors.primaryLight,
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 1,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "rgba(96,165,250,0.25)",
  },

  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 10,
  },

  description: {
    color: colors.textSecondary,
    lineHeight: 24,
    fontSize: 15,
    marginBottom: 18,
    maxWidth: "90%",
  },

  tags: {
    flexDirection: "row",
  },

  tag: {
    backgroundColor: "rgba(255,255,255,0.08)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 999,
    marginRight: 10,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },

  tagText: {
    color: colors.text,
    fontWeight: "700",
    fontSize: 12,
    letterSpacing: 0.5,
  },
});
