import { Text, View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";
import { useFavorites } from "../../hooks/useFavorites";
import { useOrders } from "../../hooks/useOrders";

import CustomButton from "../../components/common/CustomButton";
import ScreenContainer from "../../components/layout/ScreenContainer";

import { formatCurrency } from "../../utils/currency";

// Importación del sistema de diseño unificado
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useAuth();
  const { cartItems, total } = useCart();
  const { favorites } = useFavorites();
  const { orders } = useOrders();

  // Extrae la inicial para el Avatar visual decorativo
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <ScreenContainer style={styles.container}>
      {/* Luces de fondo (Glows) ambientales */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Cabecera de la Pantalla */}
        <View style={styles.header}>
          <Text style={styles.title}>Mi Perfil</Text>
        </View>

        {/* Tarjeta de Identidad de Usuario (Avatar + Datos) */}
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{userInitial}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName} numberOfLines={1}>
              {user?.name || "Usuario"}
            </Text>
            <Text style={styles.userEmail} numberOfLines={1}>
              {user?.email || "correo@ejemplo.com"}
            </Text>
          </View>
        </View>

        {/* Panel de Estadísticas y Métricas en grid estilizado */}
        <View style={styles.statsCard}>
          <Text style={styles.sectionTitle}>Resumen de Actividad</Text>

          <View style={styles.statsGrid}>
            {/* Ítem Carrito */}
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={22}
                color={colors.primaryLight}
              />
              <Text style={styles.statLabel}>Productos</Text>
              <Text style={styles.statValue}>{cartItems.length}</Text>
            </View>

            {/* Ítem Total Estimado */}
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="wallet-outline"
                size={22}
                color="#10b981"
              />
              <Text style={styles.statLabel}>Total Carrito</Text>
              <Text style={styles.statValue} numberOfLines={1}>
                {formatCurrency(total)}
              </Text>
            </View>

            {/* Ítem Favoritos */}
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="heart-outline"
                size={22}
                color="#f43f5e"
              />
              <Text style={styles.statLabel}>Favoritos</Text>
              <Text style={styles.statValue}>{favorites.length}</Text>
            </View>

            {/* Ítem Órdenes */}
            <View style={styles.statItem}>
              <MaterialCommunityIcons
                name="package-variant-closed"
                size={22}
                color="#f59e0b"
              />
              <Text style={styles.statLabel}>Órdenes</Text>
              <Text style={styles.statValue}>{orders.length}</Text>
            </View>
          </View>
        </View>

        {/* Sección de Acciones y Botones con separación limpia */}
        <View style={styles.actionContainer}>
          <CustomButton
            title="Ver órdenes"
            onPress={() => navigation.navigate("Orders")}
            variant="primary"
          />
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
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
    position: "relative",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  glowBlue: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -50,
    right: -40,
    zIndex: 0,
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
    zIndex: 0,
    opacity: 0.3,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
    zIndex: 10,
  },
  title: {
    color: colors.white || "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: -0.5,
  },
  userCard: {
    backgroundColor: colors.card || "#1e293b",
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: theme.radius?.xl || 16,
    borderWidth: 1,
    borderColor: colors.border || "rgba(255,255,255,0.1)",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    zIndex: 10,
    ...theme.shadow,
  },
  avatarContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.primaryLight || "#3b82f6",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "rgba(255,255,255,0.2)",
  },
  avatarText: {
    color: colors.white || "#ffffff",
    fontSize: 22,
    fontWeight: "800",
  },
  userInfo: {
    flex: 1,
    gap: 4,
  },
  userName: {
    color: colors.white || "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },
  userEmail: {
    color: colors.text || "#94a3b8",
    fontSize: 14,
    fontWeight: "400",
  },
  statsCard: {
    backgroundColor: colors.card || "#1e293b",
    marginHorizontal: 20,
    marginBottom: 26,
    borderRadius: theme.radius?.xl || 16,
    borderWidth: 1,
    borderColor: colors.border || "rgba(255,255,255,0.1)",
    padding: 20,
    zIndex: 10,
    ...theme.shadow,
  },
  sectionTitle: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 12,
    fontWeight: "700",
    textTransform: "uppercase",
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
    width: "47%", // Permite maquetar en 2 columnas perfectas con espacio en el medio
    backgroundColor: "rgba(15, 23, 42, 0.4)",
    borderRadius: theme.radius?.lg || 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.05)",
    padding: 14,
    alignItems: "flex-start",
    gap: 4,
  },
  statLabel: {
    color: colors.text || "#94a3b8",
    fontSize: 12,
    fontWeight: "500",
    marginTop: 4,
  },
  statValue: {
    color: colors.white || "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  actionContainer: {
    paddingHorizontal: 20,
    zIndex: 10,
  },
  buttonSpacer: {
    height: 12, // Maneja de forma limpia el espacio intermedio entre los botones personalizados
  },
});
