import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";

import CustomButton from "../common/CustomButton";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function HeroBanner({
  navigation,
}) {
  return (
    <View style={styles.container}>
      {/* Glow layers */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />
      <View style={styles.overlayCircle} />

      {/* Imagen decorativa */}
      <Image
        source={require("../../../assets/images/hero_gaming.jpg")}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Overlay oscuro para integrar imagen */}
      <View style={styles.imageOverlay} />

      {/* Contenido */}
      <View style={styles.content}>
        <View style={styles.badgeWrapper}>
          <View style={styles.badgeDot} />

          <Text style={styles.badge}>
            NEW GENERATION TECH
          </Text>
        </View>

        <Text style={styles.title}>
          Build Your{"\n"}Dream Setup
        </Text>

        <Text style={styles.description}>
          Hardware premium,
          periféricos gaming y setups
          modernos para productividad.
        </Text>

        <View style={styles.buttonWrapper}>
          <CustomButton
            title="Explorar catálogo"
            onPress={() =>
              navigation.navigate(
                "Catalogo"
              )
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 360,

    borderRadius: 34,

    marginBottom: 28,

    overflow: "hidden",

    position: "relative",

    backgroundColor: colors.card,

    borderWidth: 1,
    borderColor: colors.border,

    ...theme.shadow,
  },

  /* GLOWS */
  glowBlue: {
    position: "absolute",

    width: 260,
    height: 260,

    borderRadius: 999,

    backgroundColor: colors.glowBlue,

    top: -90,
    right: -70,

    zIndex: 0,
  },

  glowPurple: {
    position: "absolute",

    width: 180,
    height: 180,

    borderRadius: 999,

    backgroundColor: colors.glowPurple,

    bottom: -70,
    left: -50,

    zIndex: 0,
  },

  overlayCircle: {
    position: "absolute",

    width: 320,
    height: 320,

    borderRadius: 999,

    backgroundColor:
      "rgba(255,255,255,0.03)",

    top: -120,
    right: -90,

    zIndex: 1,
  },

  /* IMAGE */
  image: {
    position: "absolute",

    right: -10,
    bottom: 0,

    width: "60%",
    height: "78%",

    opacity: 0.92,

    zIndex: 1,
  },

  imageOverlay: {
    position: "absolute",

    right: 0,
    bottom: 0,

    width: "62%",
    height: "80%",

    backgroundColor:
      "rgba(11,17,32,0.18)",

    zIndex: 2,
  },

  /* CONTENT */
  content: {
    width: "58%",

    padding: 28,

    zIndex: 5,
  },

  badgeWrapper: {
    flexDirection: "row",
    alignItems: "center",

    alignSelf: "flex-start",

    backgroundColor:
      "rgba(255,255,255,0.06)",

    borderWidth: 1,
    borderColor:
      "rgba(255,255,255,0.08)",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: theme.radius.pill,

    marginBottom: 18,
  },

  badgeDot: {
    width: 8,
    height: 8,

    borderRadius: 999,

    backgroundColor: colors.primaryLight,

    marginRight: 10,

    ...theme.glow.blue,
  },

  badge: {
    color: "#D6E4FF",

    fontSize: 11,
    fontWeight: "800",

    letterSpacing: 1.2,
  },

  title: {
    color: colors.white,

    fontSize: 40,
    fontWeight: "900",

    lineHeight: 46,

    marginBottom: 16,
  },

  description: {
    color: colors.textSecondary,

    fontSize: 16,

    lineHeight: 27,

    marginBottom: 24,

    maxWidth: 220,
  },

  buttonWrapper: {
    width: 190,
  },
});