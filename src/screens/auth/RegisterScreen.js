import { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

// Componentes personalizados
import InputField from "../../components/common/InputField";
import CustomButton from "../../components/common/CustomButton";

// Validaciones y API (Lógica intacta)
import {
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validations";
import { registerRequest } from "../../api/authApi";

// Diseño unificado
import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!validateRequired(name)) {
      return Alert.alert("El nombre es obligatorio");
    }

    if (!validateEmail(email)) {
      return Alert.alert("Correo inválido");
    }

    if (!validatePassword(password)) {
      return Alert.alert("La contraseña debe tener mínimo 6 caracteres");
    }

    try {
      await registerRequest(name, email, password);
      Alert.alert("Usuario registrado correctamente");
      navigation.goBack();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Glows decorativos integrados del diseño de la app */}
      <View style={styles.glowBlue} />
      <View style={styles.glowPurple} />

      {/* Tarjeta contenedora del formulario */}
      <View style={styles.card}>
        <Text style={styles.title}>Crear cuenta</Text>

        <View style={styles.form}>
          <InputField
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
          />

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

        <View style={styles.buttonContainer}>
          <CustomButton title="Registrarse" onPress={handleRegister} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface || "#0f172a", // Fallback en caso de que uses fondo oscuro general
    justifyContent: "center",
    padding: 20,
    position: "relative",
  },
  glowBlue: {
    position: "absolute",
    width: 250,
    height: 250,
    borderRadius: 999,
    backgroundColor: colors.glowBlue,
    top: -50,
    right: -60,
    zIndex: 0,
    opacity: 0.7, // Un poco de opacidad para el fondo de pantalla completa
  },
  glowPurple: {
    position: "absolute",
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: colors.glowPurple,
    bottom: -40,
    left: -50,
    zIndex: 0,
    opacity: 0.7,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: theme.radius.xl,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 24,
    overflow: "hidden",
    zIndex: 10,
    ...theme.shadow,
  },
  title: {
    color: colors.white || "#ffffff",
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 24,
    textAlign: "center",
  },
  form: {
    gap: 16, // Espaciado limpio e idéntico entre inputs
    marginBottom: 24,
  },
  buttonContainer: {
    gap: 10,
  },
});
