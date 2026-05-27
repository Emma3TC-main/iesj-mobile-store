import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, Platform, View, StyleSheet } from "react-native";

import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";

// Importación del sistema de diseño unificado de la app
import colors from "../constants/colors";

const Stack = createNativeStackNavigator();

// Función helper transparente que inyecta el espacio superior de forma segura e infalible
const withSafeArea = (Component) => {
  return (props) => (
    <View style={styles.safeAreaWrapper}>
      <Component {...props} />
    </View>
  );
};

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        // Oculta la cabecera nativa por defecto para usar tus diseños personalizados de Login/Registro
        headerShown: false,
      }}
    >
      {/* Envolvemos las pantallas con el helper para garantizar el mismo respiro superior en Auth */}
      <Stack.Screen name="Login" component={withSafeArea(LoginScreen)} />
      <Stack.Screen name="Register" component={withSafeArea(RegisterScreen)} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  safeAreaWrapper: {
    flex: 1,
    // Asegura que el fondo oscuro se mantenga uniforme durante las transiciones de autenticación
    backgroundColor: colors.surface || "#0f172a",
    // Calcula la altura real de la barra de estado del hardware (+16px de holgura premium)
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 24) + 16 : 16,
  },
});
