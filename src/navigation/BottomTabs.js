import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar, Platform, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/home/HomeScreen";
import CatalogScreen from "../screens/products/CatalogScreen";
import CartScreen from "../screens/cart/CartScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import FavoritesScreen from "../screens/favorites/FavoritesScreen";

// Importación del sistema de diseño unificado de la app
import colors from "../constants/colors";
import theme from "../constants/theme";

const Tab = createBottomTabNavigator();

// Función helper transparente que inyecta el espacio superior de forma segura e infalible
const withSafeArea = (Component) => {
  return (props) => (
    <View style={styles.safeAreaWrapper}>
      <Component {...props} />
    </View>
  );
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Evita duplicar cabeceras con tus pantallas personalizadas
        headerShown: false,

        // Deja que el SO maneje las zonas seguras inferiores dinámicamente
        tabBarSafeAreaInsets: { bottom: true, top: false },

        // Estilos limpios y profesionales para la barra inferior
        tabBarStyle: {
          backgroundColor: colors.card || "#1e293b",
          borderTopWidth: 1,
          borderTopColor: colors.border || "rgba(255, 255, 255, 0.08)",
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
          paddingTop: 6,
          paddingBottom: 6,
        },
        
        // Colores de estado dinámicos
        tabBarActiveTintColor: colors.primaryLight || "#3b82f6",
        tabBarInactiveTintColor: colors.text || "#94a3b8",
        
        // Estilización precisa de las etiquetas de texto
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          letterSpacing: 0.1,
          marginBottom: 4,
        },

        // Estilo interno para centrar los elementos de manera uniforme
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        
        // Tu lógica exacta de iconos mapeados
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Inicio") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Catalogo") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Carrito") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Favoritos") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Envolvemos los componentes con el helper para garantizar que bajen y no se peguen arriba */}
      <Tab.Screen name="Inicio" component={withSafeArea(HomeScreen)} />
      <Tab.Screen name="Catalogo" component={withSafeArea(CatalogScreen)} />
      <Tab.Screen name="Carrito" component={withSafeArea(CartScreen)} />
      <Tab.Screen name="Favoritos" component={withSafeArea(FavoritesScreen)} />
      <Tab.Screen name="Perfil" component={withSafeArea(ProfileScreen)} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a", // Mantiene el color de fondo oscuro unificado durante el desplazamiento
    // Calcula la altura exacta de la barra de estado del celular + 16px de separación estética premium
    paddingTop: Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 16 : 16,
  },
});