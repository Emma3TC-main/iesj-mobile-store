import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import CatalogScreen from "./src/screens/CatalogScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {screen === "login" && (
        <LoginScreen
          onLogin={() => setScreen("catalog")}
          onGoRegister={() => setScreen("register")}
        />
      )}

      {screen === "register" && (
        <RegisterScreen onGoLogin={() => setScreen("login")} />
      )}

      {screen === "catalog" && (
        <CatalogScreen
          onAddToCart={addToCart}
          onGoCart={() => setScreen("cart")}
          onViewDetail={(product) => {
            setSelectedProduct(product);
            setScreen("detail");
          }}
        />
      )}

      {screen === "detail" && (
        <ProductDetailScreen
          product={selectedProduct}
          onAddToCart={addToCart}
          onBack={() => setScreen("catalog")}
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
    </SafeAreaView>
  );
}
