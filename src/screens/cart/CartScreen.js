import { View, Text, FlatList } from "react-native";

import { useCart } from "../../hooks/useCart";

import CustomButton from "../../components/common/CustomButton";

import { formatCurrency } from "../../utils/currency";

import EmptyState from "../../components/common/EmptyState";

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, total } = useCart();

  if (cartItems.length === 0) {
    return <EmptyState message="Tu carrito está vacío" />;
  }

  return (
    <View style={{ padding: 16 }}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 12,
            }}
          >
            <Text>{item.name}</Text>

            <Text>
              {item.quantity} x S/ {item.price}
            </Text>

            <CustomButton
              title="Eliminar"
              onPress={() => removeFromCart(item.id)}
            />
          </View>
        )}
      />

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginVertical: 20,
        }}
      >
        Total: {formatCurrency(total)}
      </Text>

      <CustomButton
        title="Ir al Checkout"
        onPress={() => navigation.navigate("Checkout")}
      />
    </View>
  );
}
