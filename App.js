import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen"; // 👈 nuevo
import CatalogScreen from "./src/screens/CatalogScreen";
import ProductDetailScreen from "./src/screens/ProductDetailScreen";
import CartScreen from "./src/screens/CartScreen";
import CheckoutScreen from "./src/screens/CheckoutScreen";

export default function App() {
  const [screen, setScreen] = useState("login");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setScreen("cart");
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
          onSelectProduct={(product) => {
            setSelectedProduct(product);
            setScreen("detail");
          }}
          onGoCart={() => setScreen("cart")}
        />
      )}

      {screen === "detail" && selectedProduct && (
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
            setCart([]); // limpia carrito
            setScreen("catalog"); // regresa al inicio
          }}
        />
      )}
    </SafeAreaView>
  );
}
