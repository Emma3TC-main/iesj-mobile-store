import { useState } from "react";

import {
  View,
  Text,
  Alert,
  StyleSheet,
} from "react-native";

import InputField from "../../components/common/InputField";
import CustomButton from "../../components/common/CustomButton";

import {
  validateEmail,
  validatePassword,
  validateRequired,
} from "../../utils/validations";

import { registerRequest } from "../../api/authApi";

export default function RegisterScreen({
  navigation,
}) {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister = async () => {
    if (!validateRequired(name)) {
      return Alert.alert(
        "El nombre es obligatorio"
      );
    }

    if (!validateEmail(email)) {
      return Alert.alert("Correo inválido");
    }

    if (!validatePassword(password)) {
      return Alert.alert(
        "La contraseña debe tener mínimo 6 caracteres"
      );
    }

    try {
      await registerRequest(
        name,
        email,
        password
      );

      Alert.alert(
        "Usuario registrado correctamente"
      );

      navigation.goBack();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Crear cuenta
      </Text>

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

      <CustomButton
        title="Registrarse"
        onPress={handleRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
});