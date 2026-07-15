import { StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

const STATUS_COLORS = {
  PENDIENTE: colors.warning,
  PAGADO: colors.primaryLight,
  ENVIADO: colors.accentLight,
  ENTREGADO: colors.success,
  CANCELADO: colors.danger,
  APROBADO: colors.success,
};

export default function StatusBadge({ status = "SIN ESTADO" }) {
  const normalized = String(status).toUpperCase();
  const color = STATUS_COLORS[normalized] || colors.textMuted;

  return (
    <View style={[styles.badge, { borderColor: color }]}>
      <View style={[styles.dot, { backgroundColor: color }]} />
      <Text style={[styles.text, { color }]}>{normalized}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: "rgba(15,23,42,0.62)",
  },
  dot: { width: 7, height: 7, borderRadius: 99 },
  text: { fontSize: 10, fontWeight: "900", letterSpacing: 0.45 },
});
