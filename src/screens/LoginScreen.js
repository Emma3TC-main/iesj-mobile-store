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
    onLogin();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: "#111214" }}
    >
      <ScrollView
        contentContainerStyle={styles.loginContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* ── Ícono superior ── */}
        <View style={styles.loginIconWrapper}>
          <Text style={styles.loginIconEmoji}>🛍️</Text>
        </View>

        {/* ── Encabezado ── */}
        <Text style={styles.loginTitle}>Bienvenido</Text>
        <Text style={styles.loginSubtitle}>
          Inicia sesión para continuar tus compras
        </Text>

        {/* ── Campo email ── */}
        <Text style={styles.inputLabel}>Dirección de correo electrónico</Text>
        <InputField
          icon="✉️"
          placeholder="TuEmail@ejemplo.com"
          placeholderTextColor="#5A5F6B"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* ── Campo contraseña ── */}
        <Text style={styles.inputLabel}>Contraseña</Text>
        <InputField
          icon="🔒"
          placeholder="Ingresa tu Contraseña"
          placeholderTextColor="#5A5F6B"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* ── Forgot password ── */}
        <TouchableOpacity style={styles.forgotRow}>
          <Text style={styles.forgotText}>Forgot password?</Text>
        </TouchableOpacity>

        {/* ── Botón principal ── */}
        <TouchableOpacity style={styles.btnPrimary} onPress={handleLogin}>
          <Text style={styles.btnPrimaryText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* ── Botón secundario ── */}
        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => onLogin && onLogin("guest")}
        >
          <Text style={styles.btnSecondaryText}>Continuar como Invitado</Text>
        </TouchableOpacity>

        {/* ── Registro ── */}
        <View style={styles.registerRow}>
          <Text style={styles.registerText}>Nuevo aquí?  </Text>
          <TouchableOpacity onPress={onGoRegister}>
            <Text style={styles.registerLink}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>

        {/* ── Modal de error ── */}
        <Modal visible={errorVisible} transparent animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Error</Text>
              <Text style={{ color: "#8A8F9E", fontFamily: "Inter_400Regular" }}>
                {errorText}
              </Text>
              <TouchableOpacity
                style={[styles.btnPrimary, { marginTop: 16 }]}
                onPress={() => setErrorVisible(false)}
              >
                <Text style={styles.btnPrimaryText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
