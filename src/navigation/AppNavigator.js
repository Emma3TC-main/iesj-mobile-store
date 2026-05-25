import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../hooks/useAuth";

import AuthNavigator from "./AuthNavigator";
import BottomTabs from "./BottomTabs";

import ProductDetailScreen from "../screens/products/ProductDetailScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useAuth();

  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={BottomTabs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
          />

          <Stack.Screen
            name="Checkout"
            component={CheckoutScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
}