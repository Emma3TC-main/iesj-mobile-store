import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { useOrders } from "../../hooks/useOrders";
import CustomButton from "../../components/common/CustomButton";
import ScreenContainer from "../../components/layout/ScreenContainer";
import { formatCurrency } from "../../utils/currency";
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const { cartItems, total } = useCart();
  const { favorites } = useFavorites();
  const { orders } = useOrders();
  const isAdmin = user?.role === "ADMIN";
  const userInitial = user?.name?.charAt(0).toUpperCase() || "U";

  const customerStats = [
    {
      icon: "cart-outline",
      label: "Productos",
      value: cartItems.length,
      color: colors.primaryLight,
    },
    {
      icon: "wallet-outline",
      label: "Total carrito",
      value: formatCurrency(total),
      color: colors.success,
    },
    {
      icon: "heart-outline",
      label: "Favoritos",
      value: favorites.length,
      color: "#f43f5e",
    },
    {
      icon: "package-variant-closed",
      label: "Órdenes",
      value: orders.length,
      color: colors.warning,
    },
  ];

  const adminStats = [
    {
      icon: "shield-account-outline",
      label: "Rol",
      value: "Administrador",
      color: colors.primaryLight,
    },
    {
      icon: "database-lock-outline",
      label: "Acceso",
      value: "RBAC",
      color: colors.success,
    },
    {
      icon: "credit-card-check-outline",
      label: "Pagos",
      value: "PayPal",
      color: colors.warning,
    },
    {
      icon: "cellphone-cog",
      label: "Panel",
      value: "Móvil",
      color: colors.accentLight,
    },
  ];

  const stats = isAdmin ? adminStats : customerStats;

  return (
    <ScreenContainer style={styles.container}>
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>
            {isAdmin ? "Perfil administrativo" : "Mi perfil"}
          </Text>
        </View>

        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{userInitial}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName} numberOfLines={1}>
              {user?.name || "Usuario"}
            </Text>
            <Text style={styles.userEmail} numberOfLines={1}>
              {user?.email || ""}
            </Text>
            <View style={styles.roleBadge}>
              <Text style={styles.roleText}>{user?.role || "CLIENT"}</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsCard}>
          <Text style={styles.sectionTitle}>
            {isAdmin ? "SEGURIDAD Y OPERACIÓN" : "RESUMEN DE ACTIVIDAD"}
          </Text>
          <View style={styles.statsGrid}>
            {stats.map((stat) => (
              <View style={styles.statItem} key={stat.label}>
                <MaterialCommunityIcons
                  name={stat.icon}
                  size={22}
                  color={stat.color}
                />
                <Text style={styles.statLabel}>{stat.label}</Text>
                <Text style={styles.statValue} numberOfLines={1}>
                  {stat.value}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.actionContainer}>
          {isAdmin ? (
            <CustomButton
              title="Volver al resumen"
              onPress={() => navigation.navigate("Resumen")}
            />
          ) : (
            <CustomButton
              title="Ver órdenes"
              onPress={() => navigation.navigate("Orders")}
            />
          )}
          <View style={styles.buttonSpacer} />
          <CustomButton
            title="Cerrar sesión"
            onPress={logout}
            variant="secondary"
          />
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.surface, position: "relative" },
  scrollContent: { paddingBottom: 40 },
  glowBlue: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -50,
    right: -40,
    opacity: 0.4,
  },
  glowPurple: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: 40,
    left: -50,
    opacity: 0.3,
  },
  header: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 16 },
  title: { color: colors.white, fontSize: 28, fontWeight: "900" },
  userCard: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    ...theme.shadow,
  },
  avatarContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primaryLight,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  avatarText: { color: colors.white, fontSize: 23, fontWeight: "900" },
  userInfo: { flex: 1, gap: 3 },
  userName: { color: colors.white, fontSize: 18, fontWeight: "800" },
  userEmail: { color: colors.textSecondary, fontSize: 13 },
  roleBadge: {
    alignSelf: "flex-start",
    backgroundColor: colors.glowBlue,
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 4,
    marginTop: 5,
  },
  roleText: { color: colors.primaryLight, fontSize: 10, fontWeight: "900" },
  statsCard: {
    backgroundColor: colors.card,
    marginHorizontal: 20,
    marginBottom: 26,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 20,
    ...theme.shadow,
  },
  sectionTitle: {
    color: colors.primaryLight,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 12,
  },
  statItem: {
    width: "47%",
    backgroundColor: "rgba(15,23,42,0.4)",
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    gap: 4,
  },
  statLabel: {
    color: colors.textSecondary,
    fontSize: 11,
    fontWeight: "600",
    marginTop: 4,
  },
  statValue: { color: colors.white, fontSize: 15, fontWeight: "900" },
  actionContainer: { paddingHorizontal: 20 },
  buttonSpacer: { height: 12 },
});
