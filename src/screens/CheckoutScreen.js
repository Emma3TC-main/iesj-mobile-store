import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

export default function CheckoutScreen({ cart, onConfirm, onBack }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirmar Compra</Text>

      {/* Lista resumida */}
      <FlatList
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 10 }}
        renderItem={({ item }) => (
          <View style={styles.checkoutItem}>
            <Image
              source={{ uri: item.image }}
              style={styles.checkoutImage}
              resizeMode="contain"
            />
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cartPrice}>S/ {item.price}</Text>
            </View>
          </View>
        )}
      />

      {/* Dirección simulada */}
      <View style={styles.checkoutBox}>
        <Text style={styles.bold}>📍 Dirección de envío</Text>
        <Text>Lima, Perú</Text>
      </View>

      {/* Método de pago simulado */}
      <View style={styles.checkoutBox}>
        <Text style={styles.bold}>💳 Método de pago</Text>
        <Text>Pago contra entrega</Text>
      </View>

      {/* Total */}
      <View style={styles.totalBox}>
        <Text style={styles.total}>Total a pagar: S/ {total}</Text>
      </View>

      <CustomButton title="Confirmar Compra ✅" onPress={onConfirm} />
      <CustomButton title="Volver" onPress={onBack} />
    </View>
  );
}