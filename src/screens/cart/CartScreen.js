import { View, Text, FlatList, StyleSheet } from "react-native";

import { useCart } from "../../hooks/useCart";
import CustomButton from "../../components/common/CustomButton";
import { formatCurrency } from "../../utils/currency";
import EmptyState from "../../components/common/EmptyState";

// Importación del sistema de diseño unificado
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function CartScreen({ navigation }) {
  const { cartItems, removeFromCart, total } = useCart();

  if (cartItems.length === 0) {
    return <EmptyState message="Tu carrito está vacío" />;
  }

  return (
    <View style={styles.container}>
      {/* Fondo con diseño decorativo característico */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text numberOfLines={1} style={styles.itemName}>
                {item.name}
              </Text>
              <Text style={styles.itemQuantity}>
                {item.quantity} x{" "}
                <Text style={styles.itemPrice}>S/ {item.price}</Text>
              </Text>
            </View>

            <View style={styles.itemAction}>
              <CustomButton
                title="Eliminar"
                onPress={() => removeFromCart(item.id)}
                variant="secondary"
              />
            </View>
          </View>
        )}
      />

      {/* Resumen del total y checkout */}
      <View style={styles.footer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalAmount}>{formatCurrency(total)}</Text>
        </View>

        <CustomButton
          title="Ir al Checkout"
          onPress={() => navigation.navigate("Checkout")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
    position: "relative",
  },
  glowBlue: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -40,
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
    bottom: 120,
    left: -50,
    zIndex: 0,
    opacity: 0.5,
  },
  listContent: {
    padding: 16,
    paddingBottom: 30,
    zIndex: 10,
  },
  itemCard: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: theme.spacing.lg || 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "between",
    ...theme.shadow,
  },
  itemInfo: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    color: colors.text || "#ffffff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 6,
  },
  itemQuantity: {
    color: colors.textMuted || "#94a3b8",
    fontSize: 14,
  },
  itemPrice: {
    color: colors.primaryLight || "#3b82f6",
    fontWeight: "600",
  },
  itemAction: {
    minWidth: 90,
  },
  footer: {
    backgroundColor: colors.card,
    borderTopWidth: 1,
    borderColor: colors.border,
    padding: 20,
    paddingBottom: 28,
    zIndex: 10,
    ...theme.shadow,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  totalLabel: {
    color: colors.textMuted || "#94a3b8",
    fontSize: 16,
    fontWeight: "600",
  },
  totalAmount: {
    color: colors.white || "#ffffff",
    fontSize: 24,
    fontWeight: "800",
  },
});
