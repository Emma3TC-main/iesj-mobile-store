import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../styles/globalStyles";

const TABS = [
  { label: "Inicio", screen: "catalog", icon: "🏠" },
  { label: "Carrito", screen: "cart", icon: "🛒" },
  { label: "Perfil", screen: "profile", icon: "👤" },
];

export default function BottomNav({ onNavigate, current }) {
  return (
    <View style={styles.navBar}>
      {TABS.map((tab) => {
        const active = current === tab.screen;
        return (
          <TouchableOpacity
            key={tab.screen}
            style={styles.navTab}
            onPress={() => onNavigate(tab.screen)}
          >
            <View style={[styles.navIconBox, active && styles.navIconBoxActive]}>
              <Text style={styles.navIconEmoji}>{tab.icon}</Text>
            </View>
            <Text style={[styles.navLabel, active && styles.navLabelActive]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
