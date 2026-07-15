import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import theme from "../../constants/theme";
import { formatCurrency } from "../../utils/currency";

export default function AdminProductItem({ product, onEdit, onDeactivate }) {
  const lowStock = product.stock <= 5;

  return (
    <View style={[styles.card, !product.active && styles.inactiveCard]}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={2}>
            {product.name}
          </Text>
          <View
            style={[
              styles.stockBadge,
              lowStock && styles.lowStockBadge,
              !product.active && styles.inactiveBadge,
            ]}
          >
            <Text style={styles.stockText}>
              {!product.active ? "INACTIVO" : `STOCK ${product.stock}`}
            </Text>
          </View>
        </View>

        <Text style={styles.price}>{formatCurrency(product.price)}</Text>
        {product.barcode ? (
          <Text style={styles.barcode}>Código: {product.barcode}</Text>
        ) : null}

        <View style={styles.actions}>
          <Pressable style={styles.actionButton} onPress={onEdit}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={18}
              color={colors.primaryLight}
            />
            <Text style={styles.editText}>Editar</Text>
          </Pressable>

          {product.active ? (
            <Pressable style={styles.actionButton} onPress={onDeactivate}>
              <MaterialCommunityIcons
                name="archive-outline"
                size={18}
                color={colors.danger}
              />
              <Text style={styles.deactivateText}>Desactivar</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: theme.radius.lg,
    padding: 12,
    marginBottom: 13,
    ...theme.shadow,
  },
  inactiveCard: { opacity: 0.62 },
  image: {
    width: 86,
    height: 104,
    borderRadius: 13,
    backgroundColor: colors.surface,
  },
  content: { flex: 1, marginLeft: 13 },
  headerRow: { flexDirection: "row", gap: 8, alignItems: "flex-start" },
  name: { flex: 1, color: colors.white, fontSize: 15, fontWeight: "800" },
  stockBadge: {
    backgroundColor: "rgba(34,197,94,0.16)",
    borderRadius: 999,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },
  lowStockBadge: { backgroundColor: "rgba(245,158,11,0.18)" },
  inactiveBadge: { backgroundColor: "rgba(239,68,68,0.18)" },
  stockText: { color: colors.textSecondary, fontSize: 9, fontWeight: "900" },
  price: {
    color: colors.primaryLight,
    fontSize: 17,
    fontWeight: "900",
    marginTop: 7,
  },
  barcode: { color: colors.textMuted, fontSize: 11, marginTop: 3 },
  actions: { flexDirection: "row", gap: 16, marginTop: 11 },
  actionButton: { flexDirection: "row", alignItems: "center", gap: 5 },
  editText: { color: colors.primaryLight, fontWeight: "700", fontSize: 12 },
  deactivateText: { color: colors.danger, fontWeight: "700", fontSize: 12 },
});
