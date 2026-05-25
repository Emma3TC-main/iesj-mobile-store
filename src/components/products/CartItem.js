import { View, Text, StyleSheet } from "react-native";

import CustomButton from "../common/CustomButton";

export default function CartItem({ item, onRemove }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <Text>
        {item.quantity} x S/ {item.price}
      </Text>

      <CustomButton title="Eliminar" onPress={onRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
});
