import React from "react";
import { View, FlatList, Text } from "react-native";
import ProductCard from "../components/ProductCard";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

const products = [
  {
    id: 1,
    name: "RTX 3060",
    price: 1200,
    description: "Tarjeta gráfica potente para gaming",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Ryzen 5 5600X",
    price: 800,
    description: "Procesador de alto rendimiento",
    image: "https://via.placeholder.com/150",
  },
];

export default function CatalogScreen({ onAddToCart, onGoCart, onViewDetail }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Catálogo de Productos</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onAddToCart={onAddToCart}
            onViewDetail={() => onViewDetail(item)}
          />
        )}
      />

      <CustomButton title="Ver Carrito 🛒" onPress={onGoCart} />
    </View>
  );
}
