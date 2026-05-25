import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import CustomButton from "../common/CustomButton";

import { useFavorites } from "../../hooks/useFavorites";

export default function ProductCard({ product, onPress, onAddToCart }) {
  const { toggleFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(product.id);

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Pressable
          style={styles.favoriteButton}
          onPress={() => toggleFavorite(product)}
        >
          <Text style={styles.favoriteIcon}>{favorite ? "❤️" : "🤍"}</Text>
        </Pressable>

        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      <Text style={styles.name}>{product.name}</Text>

      <Text style={styles.price}>S/ {product.price}</Text>

      <CustomButton title="Ver detalle" onPress={onPress} />

      <CustomButton title="Agregar" onPress={onAddToCart} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 14,
    borderRadius: 16,
  },

  imageContainer: {
    position: "relative",
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,

    zIndex: 10,

    backgroundColor: "rgba(255,255,255,0.9)",

    width: 38,
    height: 38,

    borderRadius: 19,

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  favoriteIcon: {
    fontSize: 18,
  },

  image: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },

  name: {
    fontWeight: "600",
    fontSize: 16,

    marginTop: 12,
    marginBottom: 6,
  },

  price: {
    fontSize: 15,
    marginBottom: 12,
  },
});
