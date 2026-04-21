import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default function BottomNav({ onNavigate, current }) {
  const Item = ({ label, screen }) => {
    const active = current === screen;

    return (
      <TouchableOpacity
        onPress={() => onNavigate(screen)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: active ? "#007AFF20" : "transparent",
            padding: 8,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: active ? "#007AFF" : "#6A7282" }}>●</Text>
        </View>

        <Text
          style={{
            fontSize: 11,
            marginTop: 4,
            color: active ? "#007AFF" : "#6A7282",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        borderTopWidth: 1,
        borderColor: "#2C2C2C",
        paddingVertical: 10,
      }}
    >
      <Item label="Inicio" screen="catalog" />
      <Item label="Carrito" screen="cart" />
      <Item label="Perfil" screen="profile" />
    </View>
  );
}
