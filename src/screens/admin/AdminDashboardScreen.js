import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import AdminMetricCard from "../../components/admin/AdminMetricCard";
import AdminOrderItem from "../../components/admin/AdminOrderItem";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ScreenContainer from "../../components/layout/ScreenContainer";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { useAdminDashboard } from "../../hooks/useAdminDashboard";
import { formatCurrency } from "../../utils/currency";

export default function AdminDashboardScreen({ navigation }) {
  const { dashboard, loading, error, reload } = useAdminDashboard();

  if (loading && !dashboard) {
    return <LoadingSpinner />;
  }

  const latestOrders = dashboard?.latestOrders ?? [];
  const latestOrdersCount = latestOrders.length;

  return (
    <ScreenContainer style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={reload}
            tintColor={colors.primaryLight}
            colors={[colors.primaryLight]}
            progressBackgroundColor={colors.card}
          />
        }
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Cabecera principal */}
        <View style={styles.hero}>
          <View pointerEvents="none" style={styles.heroGlowPrimary} />
          <View pointerEvents="none" style={styles.heroGlowSecondary} />

          <View style={styles.heroTopRow}>
            <View style={styles.eyebrowContainer}>
              <View style={styles.eyebrowDot} />
              <Text style={styles.eyebrow}>CENTRO DE OPERACIONES</Text>
            </View>

            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>En línea</Text>
            </View>
          </View>

          <Text style={styles.title}>Panel administrativo</Text>

          <Text style={styles.subtitle}>
            Supervisa el inventario, las ventas y el estado de los pedidos desde
            un único espacio.
          </Text>

          <View style={styles.heroFooter}>
            <View>
              <Text style={styles.heroFooterLabel}>Pedidos recientes</Text>
              <Text style={styles.heroFooterValue}>
                {latestOrdersCount} registrados
              </Text>
            </View>

            <View style={styles.syncBadge}>
              <Text style={styles.syncBadgeText}>
                {loading ? "Actualizando..." : "Datos sincronizados"}
              </Text>
            </View>
          </View>
        </View>

        {/* Mensaje de error */}
        {error ? (
          <View style={styles.errorCard}>
            <View style={styles.errorIcon}>
              <Text style={styles.errorIconText}>!</Text>
            </View>

            <View style={styles.errorContent}>
              <Text style={styles.errorTitle}>
                No se pudo actualizar el panel
              </Text>
              <Text style={styles.errorMessage}>{error}</Text>
            </View>
          </View>
        ) : null}

        {/* Resumen de indicadores */}
        <View style={styles.sectionIntro}>
          <View>
            <Text style={styles.sectionEyebrow}>RESUMEN GENERAL</Text>
            <Text style={styles.sectionTitle}>Indicadores principales</Text>
          </View>

          <View style={styles.periodBadge}>
            <Text style={styles.periodBadgeText}>Actual</Text>
          </View>
        </View>

        <View style={styles.metricsPanel}>
          <View style={styles.metricsGrid}>
            <AdminMetricCard
              icon="cube-outline"
              label="Productos activos"
              value={dashboard?.activeProducts ?? 0}
            />

            <AdminMetricCard
              icon="alert-circle-outline"
              label="Stock bajo"
              value={dashboard?.lowStockProducts ?? 0}
              hint="5 unidades o menos"
            />

            <AdminMetricCard
              icon="clock-outline"
              label="Pedidos pendientes"
              value={dashboard?.pendingOrders ?? 0}
            />

            <AdminMetricCard
              icon="check-decagram-outline"
              label="Pedidos pagados"
              value={dashboard?.paidOrders ?? 0}
            />
          </View>
        </View>

        {/* Ventas */}
        <View style={styles.salesCard}>
          <View pointerEvents="none" style={styles.salesGlowLarge} />
          <View pointerEvents="none" style={styles.salesGlowSmall} />

          <View style={styles.salesHeader}>
            <View>
              <Text style={styles.salesEyebrow}>RENDIMIENTO COMERCIAL</Text>
              <Text style={styles.salesLabel}>Ventas pagadas acumuladas</Text>
            </View>

            <View style={styles.paymentBadge}>
              <View style={styles.paymentDot} />
              <Text style={styles.paymentBadgeText}>PayPal</Text>
            </View>
          </View>

          <Text
            style={styles.salesValue}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {formatCurrency(dashboard?.paidSales || 0)}
          </Text>

          <View style={styles.salesDivider} />

          <View style={styles.salesFooter}>
            <View style={styles.verifiedIcon}>
              <Text style={styles.verifiedIconText}>✓</Text>
            </View>

            <Text style={styles.salesHint}>
              Solo se contabilizan pedidos cuya captura de pago fue confirmada
              correctamente.
            </Text>
          </View>
        </View>

        {/* Pedidos recientes */}
        <View style={styles.ordersSection}>
          <View style={styles.sectionHeader}>
            <View>
              <Text style={styles.sectionEyebrow}>ACTIVIDAD RECIENTE</Text>
              <Text style={styles.sectionTitle}>Últimos pedidos</Text>
            </View>

            <View style={styles.sectionCountBadge}>
              <Text style={styles.sectionCountValue}>{latestOrdersCount}</Text>
              <Text style={styles.sectionCountLabel}>recientes</Text>
            </View>
          </View>

          <View style={styles.ordersDivider} />

          {latestOrdersCount > 0 ? (
            <View style={styles.ordersList}>
              {latestOrders.map((order) => (
                <AdminOrderItem
                  key={order.id}
                  order={order}
                  onPress={() =>
                    navigation.navigate("AdminOrderDetail", {
                      orderId: order.id,
                    })
                  }
                />
              ))}
            </View>
          ) : (
            <View style={styles.emptyContainer}>
              <EmptyState message="Todavía no se han registrado pedidos." />
            </View>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },

  content: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 48,
  },

  /* Hero */

  hero: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.22)",
    borderRadius: theme.radius.lg,
    padding: 20,
    marginBottom: 18,
    ...theme.glow.blue,
  },

  heroGlowPrimary: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(59, 130, 246, 0.13)",
    top: -105,
    right: -62,
  },

  heroGlowSecondary: {
    position: "absolute",
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "rgba(14, 165, 233, 0.08)",
    bottom: -70,
    left: -24,
  },

  heroTopRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  eyebrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },

  eyebrowDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primaryLight,
    marginRight: 8,
    shadowColor: colors.primaryLight,
    shadowOpacity: 0.8,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  eyebrow: {
    color: colors.primaryLight,
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1.35,
  },

  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(34, 197, 94, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(34, 197, 94, 0.2)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#22C55E",
    marginRight: 6,
  },

  liveText: {
    color: "#86EFAC",
    fontSize: 10,
    fontWeight: "800",
  },

  title: {
    color: colors.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    letterSpacing: -0.7,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    maxWidth: "94%",
  },

  heroFooter: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: "rgba(148, 163, 184, 0.1)",
    marginTop: 20,
    paddingTop: 16,
  },

  heroFooterLabel: {
    color: colors.textMuted,
    fontSize: 10,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.7,
  },

  heroFooterValue: {
    color: colors.white,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 4,
  },

  syncBadge: {
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  syncBadgeText: {
    color: colors.primaryLight,
    fontSize: 10,
    fontWeight: "800",
  },

  /* Error */

  errorCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "rgba(239, 68, 68, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.2)",
    borderRadius: theme.radius.lg,
    padding: 14,
    marginBottom: 18,
  },

  errorIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(239, 68, 68, 0.16)",
    marginRight: 11,
  },

  errorIconText: {
    color: colors.danger,
    fontSize: 16,
    fontWeight: "900",
  },

  errorContent: {
    flex: 1,
  },

  errorTitle: {
    color: colors.danger,
    fontSize: 13,
    fontWeight: "900",
    marginBottom: 3,
  },

  errorMessage: {
    color: colors.textSecondary,
    fontSize: 12,
    lineHeight: 18,
  },

  /* Encabezados de sección */

  sectionIntro: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    marginTop: 4,
    marginBottom: 12,
  },

  sectionEyebrow: {
    color: colors.primaryLight,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  sectionTitle: {
    color: colors.white,
    fontSize: 19,
    fontWeight: "900",
    letterSpacing: -0.25,
  },

  periodBadge: {
    backgroundColor: "rgba(148, 163, 184, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.12)",
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 6,
  },

  periodBadgeText: {
    color: colors.textSecondary,
    fontSize: 10,
    fontWeight: "800",
  },

  /* Métricas */

  metricsPanel: {
    backgroundColor: "rgba(15, 23, 42, 0.28)",

    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.08)",
    borderRadius: theme.radius.lg,

    padding: 10,
  },

  metricsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",

    rowGap: 11,
  },

  /* Ventas */

  salesCard: {
    position: "relative",
    overflow: "hidden",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.28)",
    borderRadius: theme.radius.lg,
    padding: 20,
    marginTop: 16,
    marginBottom: 24,
    ...theme.glow.blue,
  },

  salesGlowLarge: {
    position: "absolute",
    width: 190,
    height: 190,
    borderRadius: 95,
    backgroundColor: "rgba(37, 99, 235, 0.13)",
    right: -75,
    top: -90,
  },

  salesGlowSmall: {
    position: "absolute",
    width: 95,
    height: 95,
    borderRadius: 48,
    backgroundColor: "rgba(14, 165, 233, 0.08)",
    right: 42,
    bottom: -62,
  },

  salesHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },

  salesEyebrow: {
    color: colors.primaryLight,
    fontSize: 9,
    fontWeight: "900",
    letterSpacing: 1.15,
    marginBottom: 5,
  },

  salesLabel: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
  },

  paymentBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(59, 130, 246, 0.11)",
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.18)",
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  paymentDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primaryLight,
    marginRight: 6,
  },

  paymentBadgeText: {
    color: colors.primaryLight,
    fontSize: 10,
    fontWeight: "900",
  },

  salesValue: {
    color: colors.white,
    fontSize: 34,
    lineHeight: 42,
    fontWeight: "900",
    letterSpacing: -1,
    marginTop: 16,
  },

  salesDivider: {
    height: 1,
    backgroundColor: "rgba(148, 163, 184, 0.1)",
    marginVertical: 16,
  },

  salesFooter: {
    flexDirection: "row",
    alignItems: "center",
  },

  verifiedIcon: {
    width: 25,
    height: 25,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(34, 197, 94, 0.12)",
    marginRight: 9,
  },

  verifiedIconText: {
    color: "#86EFAC",
    fontSize: 12,
    fontWeight: "900",
  },

  salesHint: {
    flex: 1,
    color: colors.textMuted,
    fontSize: 11,
    lineHeight: 17,
  },

  /* Pedidos */

  ordersSection: {
    backgroundColor: "rgba(15, 23, 42, 0.24)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.08)",
    borderRadius: theme.radius.lg,
    padding: 15,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionCountBadge: {
    minWidth: 62,
    alignItems: "center",
    backgroundColor: "rgba(59, 130, 246, 0.09)",
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.15)",
    borderRadius: 14,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },

  sectionCountValue: {
    color: colors.primaryLight,
    fontSize: 15,
    fontWeight: "900",
  },

  sectionCountLabel: {
    color: colors.textMuted,
    fontSize: 8,
    fontWeight: "700",
    marginTop: 1,
  },

  ordersDivider: {
    height: 1,
    backgroundColor: "rgba(148, 163, 184, 0.09)",
    marginTop: 14,
    marginBottom: 13,
  },

  ordersList: {
    gap: 10,
  },

  emptyContainer: {
    minHeight: 170,
    justifyContent: "center",
  },
});
