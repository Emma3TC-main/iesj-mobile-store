import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CustomButton from "./CustomButton";
import styles from "../styles/globalStyles";

export default function ProductCard({ product, onAddToCart, onViewDetail }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.cardImage} />

      <Text style={styles.cardTitle}>{product.name}</Text>
      <Text style={styles.cardDescription}>{product.description}</Text>
      <Text style={styles.price}>S/ {product.price}</Text>

      {/* Botón outline: Ver más */}
      <TouchableOpacity style={styles.btnOutline} onPress={onViewDetail}>
        <Text style={styles.btnOutlineText}>Ver más</Text>
      </TouchableOpacity>

      {/* Botón principal: Agregar al carrito */}
      <CustomButton
        title="Agregar al carrito 🛒"
        onPress={() => onAddToCart(product)}
      />
    </View>
  );
}
