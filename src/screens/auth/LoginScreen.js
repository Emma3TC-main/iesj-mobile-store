import { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import InputField from "../../components/common/InputField";
import CustomButton from "../../components/common/CustomButton";

import { loginRequest } from "../../api/authApi";
import { validateEmail, validatePassword } from "../../utils/validations";
import { useAuth } from "../../hooks/useAuth";

// Importaciones del sistema de diseño compartido
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      return Alert.alert("Email inválido");
    }

    if (!validatePassword(password)) {
      return Alert.alert("La contraseña debe tener mínimo 6 caracteres");
    }

    try {
      const response = await loginRequest(email, password);
      await login(response);
      navigation.replace("Main");
    } catch (error) {
      Alert.alert("Error de inicio de sesión", error.message || String(error));
    }
  };

  return (
    <View style={styles.container}>
      {/* Glows decorativos coherentes con el ProductCard */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      <View style={styles.cardContainer}>
        <Text style={styles.title}>iESJ Mobile Store</Text>

        {/* Inputs espaciados dentro del contenedor */}
        <View style={styles.formGroup}>
          <InputField
            placeholder="Correo"
            value={email}
            onChangeText={setEmail}
          />
          <InputField
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        {/* Acciones principales usando la consistencia de botones */}
        <View style={styles.buttonGroup}>
          <CustomButton title="Iniciar sesión" onPress={handleLogin} />
          <CustomButton
            title="Ir a registro"
            onPress={() => navigation.navigate("Register")}
            variant="secondary"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a", // Fallback en caso de que surface no esté asignado
    justifyContent: "center",
    padding: 20,
    position: "relative",
    overflow: "hidden",
  },
  glowBlue: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -50,
    left: -50,
    zIndex: 0,
    opacity: 0.6, // Suavizado para fondo de pantalla completa
  },
  glowPurple: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: -50,
    right: -50,
    zIndex: 0,
    opacity: 0.6,
  },
  cardContainer: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    zIndex: 10,
    ...theme.shadow,
  },
  title: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 30,
  },
  formGroup: {
    gap: 16,
    marginBottom: 24,
  },
  buttonGroup: {
    gap: 12,
  },
});
