import { useState } from "react";
import { Alert, View, StyleSheet } from "react-native";

import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";

import LoadingSpinner from "../../components/common/LoadingSpinner";
import ProductList from "../../components/products/ProductList";
import EmptyState from "../../components/common/EmptyState";
import SearchBar from "../../components/common/SearchBar";

import colors from "../../constants/colors";

export default function CatalogScreen({ navigation }) {
  const { products, loading, error } = useProducts();
  const { addToCart } = useCart();
  const [search, setSearch] = useState("");

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product);
      Alert.alert(
        "Producto agregado",
        "El carrito fue sincronizado con el backend.",
      );
    } catch (err) {
      Alert.alert(
        "No se pudo agregar",
        err.message || "Error al actualizar carrito",
      );
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <EmptyState message={error} />;
  }

  if (products.length === 0) {
    return <EmptyState message="No hay productos" />;
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.searchContainer}>
        <SearchBar
          value={search}
          onChangeText={setSearch}
          placeholder="Buscar productos..."
        />
      </View>

      <View style={styles.content}>
        {filteredProducts.length === 0 ? (
          <EmptyState message="No hay resultados" />
        ) : (
          <ProductList
            products={filteredProducts}
            navigation={navigation}
            addToCart={handleAddToCart}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
    position: "relative",
  },
  glowBlue: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -40,
    right: -60,
    zIndex: 0,
    opacity: 0.5,
  },
  glowPurple: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: 80,
    left: -40,
    zIndex: 0,
    opacity: 0.4,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    zIndex: 20,
  },
  content: {
    flex: 1,
    paddingHorizontal: 4,
    zIndex: 10,
  },
});
