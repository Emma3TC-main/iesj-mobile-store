import { Text, StyleSheet, View } from "react-native";

import { useFavorites } from "../../hooks/useFavorites";
import ProductList from "../../components/products/ProductList";
import ScreenContainer from "../../components/layout/ScreenContainer";
import EmptyState from "../../components/common/EmptyState";

// Importación del sistema de diseño unificado
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function FavoritesScreen({ navigation }) {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return <EmptyState message="No tienes favoritos" />;
  }

  return (
    <ScreenContainer style={styles.container}>
      {/* Luces de fondo (Glows) consistentes con la identidad visual */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      {/* Cabecera estilizada */}
      <View style={styles.header}>
        <Text style={styles.title}>Mis Favoritos</Text>
        <Text style={styles.subtitle}>
          {favorites.length} {favorites.length === 1 ? "artículo" : "artículos"}{" "}
          guardados
        </Text>
      </View>

      {/* Lista de productos adaptada al Layout */}
      <View style={styles.listContainer}>
        <ProductList products={favorites} navigation={navigation} />
      </View>
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
    top: -50,
    right: -30,
    zIndex: 0,
    opacity: 0.5,
  },
  glowPurple: {
    position: "absolute",
    width: 160,
    height: 160,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    top: 150,
    left: -40,
    zIndex: 0,
    opacity: 0.4,
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
  subtitle: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 14,
    fontWeight: "600",
    marginTop: 4,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 4, // Pequeño ajuste para no cortar las sombras de las ProductCards
    zIndex: 10,
  },
});
