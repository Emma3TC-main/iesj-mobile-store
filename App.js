import { NavigationContainer } from "@react-navigation/native";

import { AuthProvider } from "./src/context/AuthContext";

import { CartProvider } from "./src/context/CartContext";

import FavoritesProvider from "./src/context/FavoritesContext";

import OrdersProvider from "./src/context/OrdersContext";

import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <FavoritesProvider>
          <OrdersProvider>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </OrdersProvider>
        </FavoritesProvider>
      </CartProvider>
    </AuthProvider>
  );
}