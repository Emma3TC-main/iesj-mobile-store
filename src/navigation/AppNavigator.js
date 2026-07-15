import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator, View } from "react-native";

import { useAuth } from "../hooks/useAuth";
import AuthNavigator from "./AuthNavigator";
import CustomerNavigator from "./CustomerNavigator";
import AdminNavigator from "./AdminNavigator";
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

  if (booting) return <BootScreen />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      ) : user.role === "ADMIN" ? (
        <Stack.Screen name="Admin" component={AdminNavigator} />
      ) : (
        <Stack.Screen name="Customer" component={CustomerNavigator} />
      )}
    </Stack.Navigator>
  );
}
