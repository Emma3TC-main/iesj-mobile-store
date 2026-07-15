import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import AdminDashboardScreen from "../screens/admin/AdminDashboardScreen";
import AdminProductsScreen from "../screens/admin/AdminProductsScreen";
import AdminProductFormScreen from "../screens/admin/AdminProductFormScreen";
import AdminOrdersScreen from "../screens/admin/AdminOrdersScreen";
import AdminOrderDetailScreen from "../screens/admin/AdminOrderDetailScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import colors from "../constants/colors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TAB_ICONS = {
  Resumen: ["grid", "grid-outline"],
  Productos: ["cube", "cube-outline"],
  Pedidos: ["receipt", "receipt-outline"],
  Perfil: ["person", "person-outline"],
};

function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.card,
          borderTopColor: colors.border,
          paddingTop: 6,
          paddingBottom: 6,
        },
        tabBarActiveTintColor: colors.primaryLight,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: "700" },
        tabBarIcon: ({ focused, color, size }) => {
          const [active, inactive] = TAB_ICONS[route.name];
          return (
            <Ionicons
              name={focused ? active : inactive}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Resumen" component={AdminDashboardScreen} />
      <Tab.Screen name="Productos" component={AdminProductsScreen} />
      <Tab.Screen name="Pedidos" component={AdminOrdersScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AdminNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.card },
        headerTintColor: colors.text,
        contentStyle: { backgroundColor: colors.surface },
      }}
    >
      <Stack.Screen
        name="AdminTabs"
        component={AdminTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminProductForm"
        component={AdminProductFormScreen}
        options={{ title: "Producto" }}
      />
      <Stack.Screen
        name="AdminOrderDetail"
        component={AdminOrderDetailScreen}
        options={{ title: "Detalle del pedido" }}
      />
    </Stack.Navigator>
  );
}
