import { View, Text, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CustomButton from "../common/CustomButton";

import colors from "../../constants/colors";
import theme from "../../constants/theme";

export default function CartItem({ item, onRemove }) {
  return (
    <View style={styles.card}>
      {/* Glow decorativo */}
      <View style={styles.glowBlue} />

      <View style={styles.header}>
        <View style={styles.iconWrapper}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color={colors.primaryLight}
          />
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.details}>
            {item.quantity} x S/ {item.price}
          </Text>
        </View>
      </View>

      <CustomButton title="Eliminar" onPress={onRemove} variant="secondary" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,

    padding: theme.spacing.lg,

    borderRadius: theme.radius.lg,

    marginBottom: theme.spacing.md,

    borderWidth: 1,
    borderColor: colors.border,

    overflow: "hidden",

    position: "relative",

    ...theme.shadow,
  },

  glowBlue: {
    position: "absolute",

    width: 140,
    height: 140,

    borderRadius: 999,

    backgroundColor: colors.glowBlue,

    top: -50,
    right: -40,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",

    marginBottom: 18,
  },

  iconWrapper: {
    width: 58,
    height: 58,

    borderRadius: theme.radius.md,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.cardSecondary,

    borderWidth: 1,
    borderColor: colors.borderLight,

    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  name: {
    color: colors.text,

    fontSize: 17,
    fontWeight: "700",

    marginBottom: 6,
  },

  details: {
    color: colors.textSecondary,

    fontSize: theme.typography.body,

    lineHeight: 22,
  },
});
