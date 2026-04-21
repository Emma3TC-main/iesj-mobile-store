import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

export default function RegisterScreen({ onGoLogin }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!nombre || !apellido || !email || !password) {
      alert("Completa los campos obligatorios");
      return;
    }

    // luego llamas API

    onGoLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registrarse</Text>

        <InputField
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <InputField
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <InputField
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
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

        <CustomButton title="Registrarse" onPress={handleRegister} />

        <TouchableOpacity onPress={onGoLogin}>
          <Text style={styles.linkText}>¿Ya tienes cuenta? Iniciar sesión</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
