import { useEffect, useState } from "react";
import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  getAdminOrderByIdRequest,
  updateAdminOrderStatusRequest,
} from "../../api/adminApi";
import StatusBadge from "../../components/admin/StatusBadge";
import CustomButton from "../../components/common/CustomButton";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ScreenContainer from "../../components/layout/ScreenContainer";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { formatCurrency } from "../../utils/currency";

const NEXT_ACTIONS = {
  PENDIENTE: [
    {
      status: "CANCELADO",
      title: "Cancelar y liberar stock",
      variant: "danger",
    },
  ],
  PAGADO: [
    { status: "ENVIADO", title: "Marcar como enviado", variant: "primary" },
  ],
  ENVIADO: [
    { status: "ENTREGADO", title: "Marcar como entregado", variant: "primary" },
  ],
};

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleString("es-PE", {
        dateStyle: "medium",
        timeStyle: "short",
      })
    : "Sin fecha";

export default function AdminOrderDetailScreen({ route }) {
  const { orderId } = route.params;
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  const loadOrder = async () => {
    try {
      setLoading(true);
      setError("");
      setOrder(await getAdminOrderByIdRequest(orderId));
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrder();
  }, [orderId]);

  const updateStatus = (action) => {
    Alert.alert(
      "Confirmar cambio",
      `El pedido #${order.id} pasará de ${order.status} a ${action.status}.`,
      [
        { text: "Volver", style: "cancel" },
        {
          text: "Confirmar",
          style: action.status === "CANCELADO" ? "destructive" : "default",
          onPress: async () => {
            try {
              setUpdating(true);
              setOrder(
                await updateAdminOrderStatusRequest(order.id, action.status),
              );
            } catch (requestError) {
              Alert.alert("Cambio rechazado", requestError.message);
            } finally {
              setUpdating(false);
            }
          },
        },
      ],
    );
  };

  if (loading && !order) return <LoadingSpinner />;

  if (!order) {
    return (
      <ScreenContainer style={styles.center}>
        <Text style={styles.error}>{error || "Pedido no encontrado."}</Text>
        <CustomButton title="Reintentar" onPress={loadOrder} />
      </ScreenContainer>
    );
  }

  const actions = NEXT_ACTIONS[order.status] || [];

  return (
    <ScreenContainer style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadOrder} />
        }
        contentContainerStyle={styles.content}
      >
        <View style={styles.headingRow}>
          <View>
            <Text style={styles.eyebrow}>PEDIDO</Text>
            <Text style={styles.title}>#{order.id}</Text>
          </View>
          <StatusBadge status={order.status} />
        </View>

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Cliente</Text>
          <InfoRow
            icon="account-outline"
            label="Nombre"
            value={order.customerName}
          />
          <InfoRow
            icon="email-outline"
            label="Correo"
            value={order.customerEmail}
          />
          <InfoRow
            icon="calendar-clock"
            label="Creado"
            value={formatDate(order.date)}
          />
          <InfoRow
            icon="credit-card-check-outline"
            label="Pago"
            value={order.paymentStatus || "SIN CAPTURA"}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Productos</Text>
          {order.items.map((item) => (
            <View key={`${order.id}-${item.id}`} style={styles.itemRow}>
              <View style={styles.itemInfo}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDetail}>
                  {item.quantity} × {formatCurrency(item.price)}
                </Text>
              </View>
              <Text style={styles.itemTotal}>
                {formatCurrency(item.quantity * item.price)}
              </Text>
            </View>
          ))}
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>{formatCurrency(order.total)}</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Flujo operativo</Text>
          <Text style={styles.flowText}>
            PENDIENTE → PAGADO solo por captura PayPal. Luego: PAGADO → ENVIADO
            → ENTREGADO.
          </Text>
          {actions.length ? (
            actions.map((action) => (
              <CustomButton
                key={action.status}
                title={action.title}
                variant={action.variant}
                loading={updating}
                onPress={() => updateStatus(action)}
              />
            ))
          ) : (
            <Text style={styles.closedText}>
              Este pedido no admite más transiciones manuales.
            </Text>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <View style={styles.infoRow}>
      <MaterialCommunityIcons
        name={icon}
        size={19}
        color={colors.primaryLight}
      />
      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value || "—"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.surface,
  },
  content: { padding: 20, paddingBottom: 42 },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 18,
  },
  eyebrow: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.4,
  },
  title: { color: colors.white, fontSize: 31, fontWeight: "900", marginTop: 2 },
  error: { color: colors.danger, marginBottom: 12, textAlign: "center" },
  card: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: 18,
    marginBottom: 15,
    ...theme.shadow,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 17,
    fontWeight: "900",
    marginBottom: 14,
  },
  infoRow: { flexDirection: "row", gap: 11, marginBottom: 13 },
  infoContent: { flex: 1 },
  infoLabel: { color: colors.textMuted, fontSize: 11, fontWeight: "700" },
  infoValue: {
    color: colors.textSecondary,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 2,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  itemInfo: { flex: 1, paddingRight: 12 },
  itemName: { color: colors.text, fontSize: 14, fontWeight: "800" },
  itemDetail: { color: colors.textMuted, fontSize: 11, marginTop: 3 },
  itemTotal: { color: colors.textSecondary, fontWeight: "800" },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  totalLabel: { color: colors.white, fontSize: 17, fontWeight: "900" },
  totalValue: { color: colors.primaryLight, fontSize: 21, fontWeight: "900" },
  flowText: { color: colors.textSecondary, lineHeight: 20, marginBottom: 9 },
  closedText: { color: colors.textMuted, fontStyle: "italic", marginTop: 5 },
});
