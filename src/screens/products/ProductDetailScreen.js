import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

import { products } from "../../constants/mockData";

// Importación del sistema de diseño unificado
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function ProductDetailScreen({ route }) {
  const { productId } = route.params;

  const product = products.find((item) => item.id === productId);

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Luces de fondo (Glows) decorativas de tu UI Kit */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      {/* Contenedor de la Imagen */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </View>

      {/* Tarjeta de Información del Producto */}
      <View style={styles.card}>
        <Text style={styles.title}>{product.name}</Text>

        <View style={styles.priceRow}>
          <Text style={styles.currency}>S/</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        <View style={styles.divider} />

        <Text style={styles.descriptionLabel}>Descripción</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
    position: "relative",
  },
  glowBlue: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -50,
    right: -60,
    zIndex: 0,
    opacity: 0.6,
  },
  glowPurple: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: 40,
    left: -40,
    zIndex: 0,
    opacity: 0.5,
  },
  imageContainer: {
    zIndex: 10,
    marginBottom: 20,
    borderRadius: theme.radius.xl || 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.border,
    ...theme.shadow,
  },
  image: {
    width: "100%",
    height: 300,
    backgroundColor: colors.card,
    resizeMode: "cover",
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl || 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 22,
    zIndex: 10,
    ...theme.shadow,
  },
  title: {
    color: colors.white || "#ffffff",
    fontSize: 24,
    fontWeight: "800",
    lineHeight: 32,
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  currency: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 4,
    marginBottom: 3,
  },
  price: {
    color: colors.white || "#ffffff",
    fontSize: 32,
    fontWeight: "800",
    lineHeight: 36,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
    opacity: 0.6,
  },
  descriptionLabel: {
    color: colors.primaryLight || "#3b82f6",
    fontSize: 14,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  description: {
    color: colors.text || "#e2e8f0",
    fontSize: 15,
    fontWeight: "400",
    lineHeight: 24,
  },
});