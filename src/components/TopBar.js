import React from "react";
import { View, Text } from "react-native";

export default function TopBar() {
  return (
    <View
      style={{
        padding: 16,
        backgroundColor: "#121212",
        borderBottomWidth: 1,
        borderColor: "#2C2C2C",
      }}
    >
      <Text style={{ color: "#fff", fontSize: 22, fontWeight: "700" }}>
        IESJ WebStore
      </Text>

      <Text style={{ color: "#99A1AF", fontSize: 13 }}>
        Especialistas en Hardware de Computadoras
      </Text>
    </View>
  );
}
