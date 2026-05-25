import { View, Text, Alert } from "react-native";

import CustomButton from "../../components/common/CustomButton";

import { useCart } from "../../hooks/useCart";
import { useOrders } from "../../hooks/useOrders";

import { createOrder as createOrderRequest } from "../../api/ordersApi";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, total, clearCart } = useCart();

  const { createOrder } = useOrders();

  const handleCheckout = async () => {
    try {
      const orderData = {
        items: cartItems,
        total,
      };

      await createOrderRequest(orderData);

      createOrder(cartItems, total);

      await clearCart();

      Alert.alert("Compra realizada correctamente");

      navigation.navigate("Orders");
    } catch (error) {
      Alert.alert("Error en checkout");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Checkout
      </Text>

      <Text>
        Productos:
        {cartItems.length}
      </Text>

      <Text>Total: S/ {total}</Text>

      <CustomButton title="Confirmar compra" onPress={handleCheckout} />
    </View>
  );
}
