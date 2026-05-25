import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { useAuth } from "../../hooks/useAuth";
import { useCart } from "../../hooks/useCart";

import CustomButton from "../../components/common/CustomButton";

import { formatCurrency } from "../../utils/currency";

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const { cartItems, total } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mi Perfil
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Usuario
        </Text>

        <Text>{user?.name}</Text>

        <Text>{user?.email}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Productos en carrito
        </Text>

        <Text>{cartItems.length}</Text>

        <Text>
          {formatCurrency(total)}
        </Text>
      </View>

      <CustomButton
        title="Cerrar sesión"
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },

  label: {
    fontWeight: "bold",
    marginBottom: 8,
  },
});