import { View, Text, Alert, StyleSheet } from "react-native";

import CustomButton from "../../components/common/CustomButton";

import { useCart } from "../../hooks/useCart";
import { useOrders } from "../../hooks/useOrders";
import { scheduleOrderNotification } from "../../services/notificationService";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, total, clearCart, refreshCart } = useCart();
  const { createOrder } = useOrders();

  const handleCheckout = async () => {
    try {
      const order = await createOrder("PAYPAL_SANDBOX");
      await clearCart();
      await refreshCart();
      await scheduleOrderNotification(order.id);

      Alert.alert("Compra realizada correctamente");
      navigation.navigate("Orders");
    } catch (error) {
      Alert.alert(
        "Error en checkout",
        error.message || "No se pudo completar la compra",
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.card}>
        <Text style={styles.title}>Checkout</Text>

        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Productos:</Text>
            <Text style={styles.value}>{cartItems.length}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Total a pagar:</Text>
            <View style={styles.priceRow}>
              <Text style={styles.currency}>S/</Text>
              <Text style={styles.price}>{total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Confirmar compra" onPress={handleCheckout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
    justifyContent: "center",
    padding: 20,
    position: "relative",
  },
  glowBlue: {
    position: "absolute",
    width: 240,
    height: 240,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -60,
    right: -40,
    zIndex: 0,
    opacity: 0.6,
  },
  glowPurple: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: -50,
    left: -30,
    zIndex: 0,
    opacity: 0.6,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    overflow: "hidden",
    zIndex: 10,
    ...theme.shadow,
  },
  title: {
    color: colors.white || "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 24,
    textAlign: "center",
  },
  infoContainer: {
    backgroundColor: "rgba(15, 23, 42, 0.3)",
    borderRadius: theme.radius.lg || 12,
    padding: 18,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: colors.borderLight || "rgba(255, 255, 255, 0.05)",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  label: {
    color: colors.textMuted || "#94a3b8",
    fontSize: 16,
    fontWeight: "600",
  },
  value: {
    color: colors.text || "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
    opacity: 0.5,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  currency: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 16,
    fontWeight: "700",
    marginRight: 4,
    marginBottom: 2,
  },
  price: {
    color: colors.white || "#ffffff",
    fontSize: 26,
    fontWeight: "800",
  },
  buttonContainer: {
    marginTop: 4,
  },
});
