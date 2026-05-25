import { View, Text, Image, StyleSheet } from "react-native";

import { products } from "../../constants/mockData";

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;

  const product = products.find((item) => item.id === productId);

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />

      <Text style={styles.title}>{product.name}</Text>

      <Text>{product.description}</Text>

      <Text style={styles.price}>S/ {product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    marginTop: 12,
  },
});
