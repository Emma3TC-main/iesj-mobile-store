import { View, TextInput, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function InputField({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error,
}) {
  return (
    <View style={styles.container}>
      <View style={[styles.inputWrapper, error && styles.inputError]}>
        <MaterialCommunityIcons
          name={secureTextEntry ? "lock-outline" : "text-box-outline"}
          size={20}
          color={error ? colors.danger : colors.textMuted}
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.surface,

    borderWidth: 1,
    borderColor: colors.border,

    borderRadius: theme.radius.md,

    paddingHorizontal: 16,
    paddingVertical: 4,

    overflow: "hidden",

    ...theme.shadow,
  },

  inputError: {
    borderColor: colors.danger,
  },

  icon: {
    marginRight: 12,
  },

  input: {
    flex: 1,

    color: colors.text,

    fontSize: theme.typography.body,

    paddingVertical: 14,
  },

  error: {
    color: colors.danger,

    marginTop: 8,
    marginLeft: 4,

    fontSize: theme.typography.caption,

    fontWeight: "600",
  },
});
