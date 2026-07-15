import { StyleSheet, Text, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function InputField({
  placeholder,
  label,
  value,
  onChangeText,
  secureTextEntry,
  error,
  icon,
  multiline = false,
  ...textInputProps
}) {
  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputWrapper,
          multiline && styles.multilineWrapper,
          error && styles.inputError,
        ]}
      >
        <MaterialCommunityIcons
          name={icon || (secureTextEntry ? "lock-outline" : "text-box-outline")}
          size={20}
          color={error ? colors.danger : colors.textMuted}
          style={[styles.icon, multiline && styles.multilineIcon]}
        />

        <TextInput
          style={[styles.input, multiline && styles.multilineInput]}
          placeholder={placeholder}
          placeholderTextColor={colors.textMuted}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          multiline={multiline}
          {...textInputProps}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: theme.spacing.md },
  label: {
    color: colors.textSecondary,
    fontSize: 13,
    fontWeight: "700",
    marginBottom: 7,
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
  multilineWrapper: { alignItems: "flex-start" },
  inputError: { borderColor: colors.danger },
  icon: { marginRight: 12 },
  multilineIcon: { marginTop: 14 },
  input: {
    flex: 1,
    color: colors.text,
    fontSize: theme.typography.body,
    paddingVertical: 14,
  },
  multilineInput: { minHeight: 88, textAlignVertical: "top" },
  error: {
    color: colors.danger,
    marginTop: 8,
    marginLeft: 4,
    fontSize: theme.typography.caption,
    fontWeight: "600",
  },
});
