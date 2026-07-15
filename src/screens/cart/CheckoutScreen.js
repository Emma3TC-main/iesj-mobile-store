import { Alert, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../../components/common/CustomButton";
import { useCart } from "../../hooks/useCart";
import { useOrders } from "../../hooks/useOrders";
import { usePayPalCheckout } from "../../hooks/usePayPalCheckout";
import { scheduleOrderNotification } from "../../services/notificationService";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function CheckoutScreen({ navigation }) {
  const { cartItems, total, refreshCart } = useCart();
  const { orders, createPendingOrder, loadOrders } = useOrders();
  const { payOrder, processingPayment, paymentError } = usePayPalCheckout();

  const handleCheckout = async () => {
    try {
      const pendingOrder = orders.find((item) => item.status === "PENDIENTE");
      const order =
        pendingOrder || (await createPendingOrder("PAYPAL_SANDBOX"));
      const { capture, quote } = await payOrder(order.id);

      await Promise.all([refreshCart(), loadOrders()]);
      await scheduleOrderNotification(order.id);

      Alert.alert(
        "Pago confirmado",
        `Pedido #${order.id} pagado. PayPal capturó ${quote.paypalCurrency} ${quote.paypalAmount.toFixed(2)}.`,
        [
          {
            text: "Ver pedido",
            onPress: () => navigation.navigate("Orders"),
          },
        ],
      );

      return capture;
    } catch (error) {
      await Promise.allSettled([refreshCart(), loadOrders()]);
      Alert.alert(
        "No se completó la compra",
        error.message || "Ocurrió un error procesando el pago.",
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.card}>
        <View style={styles.paypalIcon}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={31}
            color={colors.primaryLight}
          />
        </View>
        <Text style={styles.title}>Checkout seguro</Text>
        <Text style={styles.subtitle}>
          El pedido reserva el stock. El carrito se vacía únicamente cuando
          PayPal confirma la captura.
        </Text>

        <View style={styles.infoContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Productos</Text>
            <Text style={styles.value}>{cartItems.length}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <Text style={styles.label}>Total tienda</Text>
            <View style={styles.priceRow}>
              <Text style={styles.currency}>S/</Text>
              <Text style={styles.price}>{total.toFixed(2)}</Text>
            </View>
          </View>
        </View>

        <View style={styles.notice}>
          <MaterialCommunityIcons
            name="currency-usd"
            size={19}
            color={colors.warning}
          />
          <Text style={styles.noticeText}>
            Sandbox cobra en USD con el tipo de cambio configurado en el
            backend. El precio original permanece registrado en PEN.
          </Text>
        </View>

        {paymentError ? <Text style={styles.error}>{paymentError}</Text> : null}

        <CustomButton
          title={
            processingPayment
              ? "Procesando con PayPal..."
              : "Pagar con PayPal Sandbox"
          }
          onPress={handleCheckout}
          loading={processingPayment}
          disabled={cartItems.length === 0}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
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
    opacity: 0.6,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    overflow: "hidden",
    ...theme.shadow,
  },
  paypalIcon: {
    alignSelf: "center",
    width: 62,
    height: 62,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.glowBlue,
    marginBottom: 13,
  },
  title: {
    color: colors.white,
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
  },
  subtitle: {
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 21,
  },
  infoContainer: {
    backgroundColor: "rgba(15,23,42,0.38)",
    borderRadius: theme.radius.lg,
    padding: 18,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
  },
  label: { color: colors.textMuted, fontSize: 15, fontWeight: "700" },
  value: { color: colors.text, fontSize: 18, fontWeight: "800" },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 12 },
  priceRow: { flexDirection: "row", alignItems: "flex-end" },
  currency: {
    color: colors.primaryLight,
    fontWeight: "800",
    marginRight: 4,
    marginBottom: 3,
  },
  price: { color: colors.white, fontSize: 26, fontWeight: "900" },
  notice: {
    flexDirection: "row",
    gap: 9,
    backgroundColor: "rgba(245,158,11,0.1)",
    borderWidth: 1,
    borderColor: "rgba(245,158,11,0.3)",
    borderRadius: 13,
    padding: 12,
    marginTop: 16,
  },
  noticeText: {
    flex: 1,
    color: colors.textSecondary,
    fontSize: 11,
    lineHeight: 17,
  },
  error: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 12,
    textAlign: "center",
  },
});
