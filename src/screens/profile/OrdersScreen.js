import { View, Text, FlatList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useOrders } from "../../hooks/useOrders";
import ScreenContainer from "../../components/layout/ScreenContainer";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";

import { formatCurrency } from "../../utils/currency";
import { formatDate } from "../../utils/helpers";

// Importación del sistema de diseño unificado de la app
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function OrdersScreen() {
  const { orders, loadingOrders, ordersError } = useOrders();

  if (loadingOrders) {
    return <LoadingSpinner />;
  }

  if (ordersError) {
    return (
      <ScreenContainer>
        <EmptyState message={ordersError} />
      </ScreenContainer>
    );
  }

  if (orders.length === 0) {
    return (
      <ScreenContainer>
        <EmptyState message="No tienes órdenes todavía" />
      </ScreenContainer>
    );
  }

  // Helper visual para dar color a los estados sin alterar la lógica de datos
  const getStatusColor = (status) => {
    const s = status?.toLowerCase() || "";
    if (s.includes("entregado") || s.includes("completado")) return "#10b981"; // Verde
    if (s.includes("pendiente") || s.includes("proceso")) return "#f59e0b"; // Ámbar
    return colors.primaryLight || "#3b82f6";
  };

  return (
    <ScreenContainer style={styles.container}>
      {/* Luces de fondo decorativas consistentes */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.header}>
        <Text style={styles.title}>Mis Órdenes</Text>
        <Text style={styles.subtitle}>Historial de compras</Text>
      </View>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const statusColor = getStatusColor(item.status);

          return (
            <View style={styles.card}>
              {/* Cabecera de tarjeta estructurada verticalmente */}
              <View style={styles.cardHeader}>
                <View style={styles.idRow}>
                  <MaterialCommunityIcons
                    name="package-variant-closed"
                    size={20}
                    color={colors.primaryLight || "#3b82f6"}
                  />
                  <Text style={styles.orderId}>Orden #{item.id}</Text>
                </View>
                {/* La fecha se sitúa debajo con un espaciado correcto */}
                <Text style={styles.orderDate}>{formatDate(item.date)}</Text>
              </View>

              <View style={styles.divider} />

              {/* Fila Inferior: Estado (Dinámico) y Precio Total */}
              <View style={styles.cardFooter}>
                <View
                  style={[styles.statusBadge, { borderColor: statusColor }]}
                >
                  <View
                    style={[styles.statusDot, { backgroundColor: statusColor }]}
                  />
                  <Text style={[styles.statusText, { color: statusColor }]}>
                    {item.status}
                  </Text>
                </View>

                <Text style={styles.orderTotal}>
                  {formatCurrency(item.total)}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </ScreenContainer>
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
    top: -60,
    right: -40,
    zIndex: 0,
    opacity: 0.4,
  },
  glowPurple: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: 100,
    left: -50,
    zIndex: 0,
    opacity: 0.3,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
    zIndex: 10,
  },
  title: {
    color: colors.white || "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  subtitle: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 2,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 32,
    zIndex: 10,
  },
  card: {
    backgroundColor: colors.card || "#1e293b",
    marginBottom: theme.spacing?.lg || 16,
    borderRadius: theme.radius?.xl || 16,
    borderWidth: 1,
    borderColor: colors.border || "rgba(255,255,255,0.1)",
    padding: 16,
    position: "relative",
    ...theme.shadow,
  },
  cardHeader: {
    flexDirection: "column", // Cambiado a columna para apilar ID y Fecha con seguridad
    alignItems: "flex-start",
    gap: 4,
  },
  idRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  orderId: {
    color: colors.white || "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  orderDate: {
    color: colors.text || "#94a3b8",
    fontSize: 13,
    fontWeight: "400",
    paddingLeft: 28, // Alinea perfectamente el texto de la fecha esquivando el icono de paquete
  },
  divider: {
    height: 1,
    backgroundColor: colors.border || "rgba(255,255,255,0.1)",
    marginVertical: 12,
    opacity: 0.5,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: theme.radius?.pill || 999,
    backgroundColor: "rgba(15, 23, 42, 0.3)",
    gap: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  orderTotal: {
    color: colors.white || "#ffffff",
    fontSize: 18,
    fontWeight: "800",
  },
});
