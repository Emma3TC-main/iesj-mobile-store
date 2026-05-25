import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import CustomButton from "../common/CustomButton";


export default function ProductCard({
  product,
  onPress,
  onAddToCart,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
      />

      <Text style={styles.name}>{product.name}</Text>

      <Text>S/ {product.price}</Text>

      <CustomButton
        title="Ver detalle"
        onPress={onPress}
      />

      <CustomButton
        title="Agregar"
        onPress={onAddToCart}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    marginBottom: 14,
    borderRadius: 12,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  name: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
});