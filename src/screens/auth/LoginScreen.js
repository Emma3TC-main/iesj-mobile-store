import { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import InputField from "../../components/common/InputField";
import CustomButton from "../../components/common/CustomButton";

import { loginRequest } from "../../api/authApi";

import { validateEmail, validatePassword } from "../../utils/validations";

import { useAuth } from "../../hooks/useAuth";

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

      await login(response.user);

      navigation.replace("Main");
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iESJ Mobile Store</Text>

      <InputField placeholder="Correo" value={email} onChangeText={setEmail} />

      <InputField
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <CustomButton title="Iniciar sesión" onPress={handleLogin} />

      <CustomButton
        title="Ir a registro"
        onPress={() => navigation.navigate("Register")}
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
