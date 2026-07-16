import { useCallback, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

import AdminProductItem from "../../components/admin/AdminProductItem";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import SearchBar from "../../components/common/SearchBar";
import ScreenContainer from "../../components/layout/ScreenContainer";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { useAdminProducts } from "../../hooks/useAdminProducts";

const FILTERS = ["TODOS", "ACTIVOS", "INACTIVOS", "STOCK BAJO"];

export default function AdminProductsScreen({ navigation }) {
  const { products, loading, error, reload, deactivateProduct } =
    useAdminProducts();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("TODOS");

  useFocusEffect(
    useCallback(() => {
      reload();
    }, [reload]),
  );

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return products.filter((product) => {
      const matchesQuery =
        !normalized ||
        product.name.toLowerCase().includes(normalized) ||
        product.barcode?.toLowerCase().includes(normalized);
      const matchesFilter =
        filter === "TODOS" ||
        (filter === "ACTIVOS" && product.active) ||
        (filter === "INACTIVOS" && !product.active) ||
        (filter === "STOCK BAJO" && product.active && product.stock <= 5);
      return matchesQuery && matchesFilter;
    });
  }, [products, query, filter]);

  const confirmDeactivate = (product) => {
    Alert.alert(
      "Desactivar producto",
      `¿Deseas retirar “${product.name}” del catálogo?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Desactivar",
          style: "destructive",
          onPress: async () => {
            try {
              await deactivateProduct(product.id);
            } catch (requestError) {
              Alert.alert("No se pudo desactivar", requestError.message);
            }
          },
        },
      ],
    );
  };

  if (loading && products.length === 0) return <LoadingSpinner />;

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>INVENTARIO</Text>
        <Text style={styles.title}>Productos</Text>
        <Text style={styles.subtitle}>
          Gestiona catálogo, stock y códigos de barras.
        </Text>
      </View>

      <View style={styles.controls}>
        <SearchBar value={query} onChangeText={setQuery} />
        <FlatList
          horizontal
          data={FILTERS}
          keyExtractor={(item) => item}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => setFilter(item)}
              style={[styles.filter, filter === item && styles.activeFilter]}
            >
              <Text
                style={[
                  styles.filterText,
                  filter === item && styles.activeFilterText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={reload} />
        }
        renderItem={({ item }) => (
          <AdminProductItem
            product={item}
            onEdit={() =>
              navigation.navigate("AdminProductForm", { product: item })
            }
            onDeactivate={() => confirmDeactivate(item)}
          />
        )}
        ListEmptyComponent={
          <EmptyState message="No hay productos que coincidan con el filtro." />
        }
      />

      <Pressable
        style={styles.fab}
        onPress={() => navigation.navigate("AdminProductForm")}
      >
        <MaterialCommunityIcons name="plus" size={28} color={colors.white} />
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface },
  header: { paddingHorizontal: 20, paddingTop: 20 },
  eyebrow: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.3,
  },
  title: { color: colors.white, fontSize: 29, fontWeight: "900", marginTop: 4 },
  subtitle: { color: colors.textSecondary, marginTop: 5, marginBottom: 16 },
  controls: { paddingHorizontal: 20 },
  filters: { gap: 8, paddingBottom: 13 },
  filter: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.card,
  },
  activeFilter: {
    backgroundColor: colors.primaryDark,
    borderColor: colors.primaryLight,
  },
  filterText: { color: colors.textMuted, fontSize: 10, fontWeight: "900" },
  activeFilterText: { color: colors.white },
  error: { color: colors.danger, marginBottom: 10 },
  list: { paddingHorizontal: 20, paddingBottom: 100 },
  fab: {
    position: "absolute",
    right: 22,
    bottom: 24,
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    ...theme.glow.blue,
  },
});
