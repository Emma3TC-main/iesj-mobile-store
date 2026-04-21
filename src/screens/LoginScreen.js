import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

export default function LoginScreen({ onLogin, onGoRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setErrorText("Completa todos los campos");
      setErrorVisible(true);
      return;
    }

    // aquí luego llamas API
    onLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Iniciar sesión</Text>

        <InputField
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <InputField
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <CustomButton title="Ingresar" onPress={handleLogin} />

        <TouchableOpacity onPress={onGoRegister}>
          <Text style={styles.linkText}>¿No tienes cuenta? Registrarse</Text>
        </TouchableOpacity>

        <Modal visible={errorVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Error</Text>
              <Text>{errorText}</Text>
              <CustomButton
                title="Cerrar"
                onPress={() => setErrorVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
