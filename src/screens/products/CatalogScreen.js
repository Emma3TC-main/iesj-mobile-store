import { View } from "react-native";

import { useProducts } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";

import LoadingSpinner from "../../components/common/LoadingSpinner";
import ProductList from "../../components/products/ProductList";
import EmptyState from "../../components/common/EmptyState";
import SearchBar from "../../components/common/SearchBar";

import { useState } from "react";

export default function CatalogScreen({ navigation }) {
  const { products, loading } = useProducts();

  const { addToCart } = useCart();

  const [search, setSearch] = useState("");

  if (loading) {
    return <LoadingSpinner />;
  }

  if (products.length === 0) {
    return <EmptyState message="No hay productos" />;
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={{ padding: 16 }}>
      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Buscar productos..."
      />

      {filteredProducts.length === 0 ? (
        <EmptyState message="No hay resultados" />
      ) : (
        <ProductList
          products={filteredProducts}
          navigation={navigation}
          addToCart={addToCart}
        />
      )}
    </View>
  );
}
