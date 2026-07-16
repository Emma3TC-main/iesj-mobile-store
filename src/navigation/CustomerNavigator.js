import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTabs";
import ProductDetailScreen from "../screens/products/ProductDetailScreen";
import CheckoutScreen from "../screens/cart/CheckoutScreen";
import OrdersScreen from "../screens/profile/OrdersScreen";
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

export default function CustomerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.surface },
      }}
    >
      <Stack.Screen
        name="CustomerTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{ title: "Detalle del producto" }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: "Pago seguro" }}
      />
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{ title: "Mis pedidos" }}
      />
    </Stack.Navigator>
  );
}
