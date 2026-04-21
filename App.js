import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import BottomNav from "./src/components/BottomNav";

// Screens que muestran la barra de navegación inferior
const SCREENS_WITH_NAV = ["catalog", "cart", "profile"];

export default function App() {
  const [screen, setScreen] = useState("catalog");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // ── Cargar fuentes Inter una sola vez para toda la app ──
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const navigate = (target) => {
    // Perfil → muestra LoginScreen
    if (target === "profile") {
      setScreen("login");
      return;
    }
    setScreen(target);
  };

  const showNav = SCREENS_WITH_NAV.includes(screen);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111214" }}>
      <View style={{ flex: 1 }}>
        {/* ── Screens principales ── */}
        {screen === "catalog" && (
          <CatalogScreen
            onAddToCart={addToCart}
            onViewDetail={(product) => {
              setSelectedProduct(product);
              setScreen("detail");
            }}
          />
        )}

        {screen === "cart" && (
          <CartScreen
            cart={cart}
            onBack={() => setScreen("catalog")}
            onCheckout={() => setScreen("checkout")}
          />
        )}

        {screen === "checkout" && (
          <CheckoutScreen
            cart={cart}
            onBack={() => setScreen("cart")}
            onConfirm={() => {
              setCart([]);
              setScreen("catalog");
            }}
          />
        )}

        {screen === "login" && (
          <LoginScreen
            onLogin={() => setScreen("catalog")}
            onGoRegister={() => setScreen("register")}
          />
        )}

        {screen === "register" && (
          <RegisterScreen onGoLogin={() => setScreen("login")} />
        )}

        {screen === "detail" && selectedProduct && (
          <View style={{ flex: 1 }} />
        )}
      </View>

      {/* ── Barra inferior (solo en screens principales) ── */}
      {showNav && (
        <BottomNav current={screen} onNavigate={navigate} />
      )}
    </SafeAreaView>
  );
}
