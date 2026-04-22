import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles/globalStyles";

export default function InputField({ icon, ...props }) {
  return (
    <View style={styles.inputWrapper}>
      {icon && <Text style={styles.inputIcon}>{icon}</Text>}
      <TextInput
        style={styles.input}
        placeholderTextColor="#5A5F6B"
        {...props}
      />
    </View>
  );
}
