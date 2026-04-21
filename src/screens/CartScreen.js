import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import styles from "../styles/globalStyles";

export default function CartScreen({ cart, onBack, onCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Tu Carrito</Text>

      {cart.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>No hay productos en tu carrito</Text>
        </View>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          renderItem={({ item }) => (
            <View style={styles.cartItem}>
              {/* Imagen */}
              <Image
                source={{ uri: item.image }}
                style={styles.cartImage}
                resizeMode="contain"
              />

              {/* Info */}
              <View style={{ flex: 1 }}>
                <Text style={styles.cardTitle}>{item.name}</Text>

                <Text style={styles.cartPrice}>Precio: S/ {item.price}</Text>

                {/* Simulación de cantidad*/}
                <Text style={styles.cartExtra}>Cantidad: 1</Text>

                <Text style={styles.cartSubtotal}>
                  Subtotal: S/ {item.price}
                </Text>
              </View>
            </View>
          )}
        />
      )}

      {/* Total */}
      <View style={styles.totalBox}>
        <Text style={styles.total}>Total: S/ {total}</Text>
      </View>

      <CustomButton title="Continuar compra" onPress={onCheckout} />

      <CustomButton title="Volver" onPress={onBack} />
    </View>
  );
}
