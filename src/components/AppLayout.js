import React from "react";
import { View, SafeAreaView } from "react-native";
import TopBar from "./TopBar";
import BottomNav from "./BottomNav";

export default function AppLayout({ children, onNavigate, current }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#121212" }}>
      <TopBar />

      <View style={{ flex: 1 }}>{children}</View>

      <BottomNav onNavigate={onNavigate} current={current} />
    </SafeAreaView>
  );
}
