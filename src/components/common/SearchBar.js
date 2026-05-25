import { TextInput, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function SearchBar({ value, onChangeText }) {
  return (
    <TextInput
      placeholder="Buscar productos..."
      placeholderTextColor={colors.textMuted}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    padding: 14,
    color: colors.text,
    marginBottom: 16,
  },
});
