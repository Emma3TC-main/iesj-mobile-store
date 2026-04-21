import React from "react";
import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import styles from "../styles/globalStyles";

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.cardImage} />

      <Text style={styles.cardTitle}>{product.name}</Text>
      <Text>{product.description}</Text>
      <Text>S/ {product.price}</Text>

      <CustomButton
        title="Ver más"
        onPress={onViewDetail} // navegación
      />

      <CustomButton
        title="Agregar 🛒"
        onPress={() => onAddToCart(product)} // lógica
      />
    </View>
  );
}
