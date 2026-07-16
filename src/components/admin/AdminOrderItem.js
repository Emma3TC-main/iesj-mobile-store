import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { formatCurrency } from "../../utils/currency";
import StatusBadge from "./StatusBadge";

const formatDate = (value) => {
  if (!value) return "Sin fecha";
  return new Date(value).toLocaleString("es-PE", {
    dateStyle: "short",
    timeStyle: "short",
  });
};

export default function AdminOrderItem({ order, onPress }) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.idRow}>
          <MaterialCommunityIcons
            name="receipt-text-outline"
            size={20}
            color={colors.primaryLight}
          />
          <Text style={styles.id}>Pedido #{order.id}</Text>
        </View>
        <StatusBadge status={order.status} />
      </View>

      <Text style={styles.customer}>{order.customerName}</Text>
      <Text style={styles.email}>{order.customerEmail}</Text>

      <View style={styles.footer}>
        <Text style={styles.date}>{formatDate(order.date)}</Text>
        <Text style={styles.total}>{formatCurrency(order.total)}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: 16,
    marginBottom: 13,
    ...theme.shadow,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  idRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  id: { color: colors.white, fontSize: 16, fontWeight: "900" },
  customer: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 12,
  },
  email: { color: colors.textMuted, fontSize: 12, marginTop: 2 },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 13,
  },
  date: { color: colors.textMuted, fontSize: 11 },
  total: { color: colors.primaryLight, fontSize: 18, fontWeight: "900" },
});
