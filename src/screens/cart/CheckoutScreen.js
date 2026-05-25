import { View, Text, Alert } from "react-native";

import CustomButton from "../../components/common/CustomButton";

import { useCart } from "../../hooks/useCart";

import { createOrder } from "../../api/ordersApi";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, total } = useCart();

  const handleCheckout = async () => {
    try {
      await createOrder({
        items: cartItems,
        total,
      });

      Alert.alert("Compra realizada correctamente");

      navigation.navigate("Main");
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

      <Text>Productos: {cartItems.length}</Text>

      <Text>Total: S/ {total}</Text>

      <CustomButton title="Confirmar compra" onPress={handleCheckout} />
    </View>
  );
}
