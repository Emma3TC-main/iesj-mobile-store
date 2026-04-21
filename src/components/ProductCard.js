import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

export default function ProductDetailScreen({ product, onAddToCart, onBack }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Imagen */}
      <Image
        source={{ uri: product.image }}
        style={styles.detailImage}
        resizeMode="contain"
      />

      {/* Nombre */}
      <Text style={styles.title}>{product.name}</Text>

      {/* Descripción */}
      <Text style={styles.cardDescription}>
        {product.description || "Sin descripción disponible"}
      </Text>

      {/* Precio */}
      <Text style={styles.price}>S/ {product.price}</Text>

      {/* Info adicional (simulando tu modal HTML) */}
      <View style={styles.detailBox}>
        <Text><Text style={styles.bold}>Stock:</Text> {product.stock || 10} unidades</Text>
        <Text><Text style={styles.bold}>Peso:</Text> {product.weight || "1.2 kg"}</Text>
        <Text><Text style={styles.bold}>Dimensiones:</Text> {product.dimensions || "30x20x10 cm"}</Text>
      </View>

      {/* Botones */}
      <CustomButton
        title="Agregar al carrito 🛒"
        onPress={() => onAddToCart(product)}
      />

      <CustomButton title="Volver" onPress={onBack} />
    </ScrollView>
  );
}