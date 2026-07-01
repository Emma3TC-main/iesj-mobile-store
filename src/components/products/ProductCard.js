import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../common/CustomButton";

import { useFavorites } from "../../hooks/useFavorites";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function ProductCard({ product, onPress, onAddToCart }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(product.id);

  return (
    <View style={styles.card}>
      {/* Glow decorativo */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.imageContainer}>
        <Pressable
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(product)}
        >
          <Text style={styles.favoriteIcon}>{favorite ? "❤️" : "🤍"}</Text>
        </Pressable>

        <Image source={{ uri: product.image }} style={styles.image} />

        {/* Badge decorativo */}
        <View style={styles.badge}>
          <MaterialCommunityIcons name="flash" size={13} color={colors.white} />

          <Text style={styles.badgeText}>Premium</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text numberOfLines={2} style={styles.name}>
          {product.name}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.currency}>S/</Text>

          <Text style={styles.price}>
            {Number(product.price || 0).toFixed(2)}
          </Text>
        </View>

        <View style={styles.buttons}>
          <CustomButton
            title="Ver detalle"
            onPress={onPress}
            variant="secondary"
          />

          <CustomButton title="Agregar" onPress={onAddToCart} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,

    marginBottom: theme.spacing.lg,

    borderRadius: theme.radius.xl,

    borderWidth: 1,
    borderColor: colors.border,

    overflow: "hidden",

    position: "relative",

    ...theme.shadow,
  },

  glowBlue: {
    position: "absolute",

    width: 180,
    height: 180,

    borderRadius: 999,

    backgroundColor: colors.glowBlue,

    top: -70,
    right: -40,

    zIndex: 0,
  },

  glowPurple: {
    position: "absolute",

    width: 140,
    height: 140,

    borderRadius: 999,

    backgroundColor: colors.glowPurple,

    bottom: -50,
    left: -30,

    zIndex: 0,
  },

  imageContainer: {
    position: "relative",

    padding: 20,
  },

  favoriteButton: {
    position: "absolute",

    top: 24,
    right: 24,

    zIndex: 20,

    width: 42,
    height: 42,

    borderRadius: 999,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgba(15,23,42,0.75)",

    borderWidth: 1,
    borderColor: colors.borderLight,

    backdropFilter: "blur(10px)",

    ...theme.shadow,
  },

  favoriteIcon: {
    fontSize: 18,
  },

  image: {
    width: "100%",
    height: 220,

    borderRadius: theme.radius.lg,

    backgroundColor: colors.surface,
  },

  badge: {
    position: "absolute",

    left: 26,
    bottom: 26,

    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "rgba(59,130,246,0.88)",

    paddingHorizontal: 14,
    paddingVertical: 8,

    borderRadius: theme.radius.pill,

    borderWidth: 1,
    borderColor: colors.primaryLight,
  },

  badgeText: {
    color: colors.white,

    fontSize: 12,
    fontWeight: "700",

    marginLeft: 6,
  },

  content: {
    paddingHorizontal: 20,
    paddingBottom: 22,
  },

  name: {
    color: colors.text,

    fontSize: 18,
    fontWeight: "700",

    lineHeight: 28,

    marginBottom: 14,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",

    marginBottom: 18,
  },

  currency: {
    color: colors.primaryLight,

    fontSize: 18,
    fontWeight: "700",

    marginRight: 4,
  },

  price: {
    color: colors.white,

    fontSize: 28,
    fontWeight: "800",
  },

  buttons: {
    gap: 10,
  },
});
