import { useCallback, useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import AdminOrderItem from "../../components/admin/AdminOrderItem";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import ScreenContainer from "../../components/layout/ScreenContainer";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { useAdminOrders } from "../../hooks/useAdminOrders";

const FILTERS = [
  "TODOS",
  "PENDIENTE",
  "PAGADO",
  "ENVIADO",
  "ENTREGADO",
  "CANCELADO",
];

export default function AdminOrdersScreen({ navigation }) {
  const { orders, loading, error, reload } = useAdminOrders();
  const [filter, setFilter] = useState("TODOS");

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload]),
  );

  const filtered = useMemo(
    () =>
      filter === "TODOS"
        ? orders
        : orders.filter((order) => order.status === filter),
    [orders, filter],
  );

  if (loading && orders.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <View style={styles.eyebrowRow}>
          <View style={styles.eyebrowDot} />
          <Text style={styles.eyebrow}>LOGÍSTICA</Text>
        </View>

        <Text style={styles.title}>Pedidos</Text>

        <Text style={styles.subtitle}>
          Consulta clientes, productos y transiciones permitidas.
        </Text>
      </View>

      <View style={styles.filtersSection}>
        <View style={styles.filtersHeader}>
          <Text style={styles.filtersTitle}>Filtrar por estado</Text>

          <View style={styles.resultsBadge}>
            <Text style={styles.resultsValue}>{filtered.length}</Text>
            <Text style={styles.resultsLabel}>resultados</Text>
          </View>
        </View>

        <FlatList
          horizontal
          data={FILTERS}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          style={styles.filterList}
          contentContainerStyle={styles.filters}
          renderItem={({ item }) => {
            const isActive = filter === item;

            return (
              <Pressable
                onPress={() => setFilter(item)}
                style={({ pressed }) => [
                  styles.filter,
                  isActive && styles.activeFilter,
                  pressed && styles.pressedFilter,
                ]}
              >
                {isActive ? <View style={styles.activeDot} /> : null}

                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.activeFilterText,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>

      {error ? (
        <View style={styles.errorCard}>
          <View style={styles.errorIcon}>
            <Text style={styles.errorIconText}>!</Text>
          </View>

          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}

      <FlatList
        data={filtered}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={[
          styles.list,
          filtered.length === 0 && styles.emptyList,
        ]}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={reload}
            tintColor={colors.primaryLight}
            colors={[colors.primaryLight]}
            progressBackgroundColor={colors.card}
          />
        }
        renderItem={({ item }) => (
          <AdminOrderItem
            order={item}
            onPress={() =>
              navigation.navigate("AdminOrderDetail", {
                orderId: item.id,
              })
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        ListEmptyComponent={
          <EmptyState message="No existen pedidos para este estado." />
        }
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
  },

  eyebrowRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  eyebrowDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: colors.primaryLight,
    marginRight: 8,
    shadowColor: colors.primaryLight,
    shadowOpacity: 0.8,
    shadowRadius: 5,
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

  title: {
    color: colors.white,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: "900",
    letterSpacing: -0.6,
    marginTop: 7,
  },

  subtitle: {
    color: colors.textSecondary,
    fontSize: 13,
    lineHeight: 20,
    marginTop: 6,
  },

  filtersSection: {
    backgroundColor: "rgba(15, 23, 42, 0.35)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.09)",
    borderRadius: theme.radius.lg,
    marginHorizontal: 16,
    marginBottom: 16,
    paddingTop: 14,
    paddingBottom: 13,
    overflow: "hidden",
  },

  filtersHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    marginBottom: 11,
  },

  filtersTitle: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "800",
  },

  resultsBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(59, 130, 246, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(96, 165, 250, 0.15)",
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
  },

  resultsValue: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: "900",
    marginRight: 4,
  },

  resultsLabel: {
    color: colors.textMuted,
    fontSize: 9,
    fontWeight: "700",
  },

  filterList: {
    flexGrow: 0,
    minHeight: 46,
  },

  filters: {
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 2,
    columnGap: 9,
  },

  filter: {
    minHeight: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.14)",
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: colors.card,
  },

  activeFilter: {
    backgroundColor: "rgba(37, 99, 235, 0.22)",
    borderColor: colors.primaryLight,
    shadowColor: colors.primaryLight,
    shadowOpacity: 0.22,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 3,
  },

  pressedFilter: {
    opacity: 0.78,
    transform: [{ scale: 0.97 }],
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primaryLight,
    marginRight: 7,
  },

  filterText: {
    color: colors.textMuted,
    fontSize: 10,
    lineHeight: 14,
    fontWeight: "900",
    letterSpacing: 0.25,
  },

  activeFilterText: {
    color: colors.white,
  },

  errorCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(239, 68, 68, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(239, 68, 68, 0.18)",
    borderRadius: 14,
    marginHorizontal: 20,
    marginBottom: 14,
    padding: 12,
  },

  errorIcon: {
    width: 27,
    height: 27,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(239, 68, 68, 0.16)",
    marginRight: 9,
  },

  errorIconText: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "900",
  },

  error: {
    flex: 1,
    color: colors.danger,
    fontSize: 12,
    lineHeight: 18,
  },

  list: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 2,
    paddingBottom: 40,
  },

  emptyList: {
    justifyContent: "center",
  },

  itemSeparator: {
    height: 10,
  },
});
