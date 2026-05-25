import { View, TextInput, Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    padding: 12,
    backgroundColor: colors.text,
  },
  error: {
    color: colors.danger,
    marginTop: 5,
  },
});
