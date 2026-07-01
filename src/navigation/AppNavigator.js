import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, ActivityIndicator } from "react-native";

import { useAuth } from "../hooks/useAuth";

import AuthNavigator from "./AuthNavigator";
import BottomTabs from "./BottomTabs";

import ProductDetailScreen from "../screens/products/ProductDetailScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import OrdersScreen from "../screens/profile/OrdersScreen";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

function BootScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.surface,
      }}
    >
      <ActivityIndicator size="large" color={colors.primaryLight} />
    </View>
  );
}

export default function AppNavigator() {
  const { user, booting } = useAuth();

  if (booting) {
    return <BootScreen />;
  }

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

          <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />

          <Stack.Screen name="Checkout" component={CheckoutScreen} />

          <Stack.Screen name="Orders" component={OrdersScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
