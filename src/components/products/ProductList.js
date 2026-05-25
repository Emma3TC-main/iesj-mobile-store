import { FlatList } from "react-native";

import ProductCard from "./ProductCard";

export default function ProductList({ products, navigation, addToCart }) {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard
          product={item}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              productId: item.id,
            })
          }
          onAddToCart={() => addToCart(item)}
        />
      )}
    />
  );
}
