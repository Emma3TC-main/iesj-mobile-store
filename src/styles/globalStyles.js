import { StyleSheet } from "react-native";

/* ─────────────────────────────────────────
   FUENTES: Inter (cargadas en LoginScreen)
   Inter_400Regular | Inter_600SemiBold | Inter_700Bold
   ───────────────────────────────────────── */

export default StyleSheet.create({
  /* 🔥 BASE */
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#111214",
  },

  /* 🔥 BOTTOM NAV */
  navBar: {
    flexDirection: "row",
    backgroundColor: "#1C1E24",
    borderTopWidth: 1,
    borderColor: "#2C2F3A",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  navTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navIconBox: {
    padding: 6,
    borderRadius: 10,
    marginBottom: 2,
  },
  navIconBoxActive: {
    backgroundColor: "#1A7CF420",
  },
  navIconEmoji: {
    fontSize: 20,
  },
  navLabel: {
    fontSize: 11,
    color: "#6A7282",
    fontFamily: "Inter_400Regular",
  },
  navLabelActive: {
    color: "#1A7CF4",
    fontFamily: "Inter_600SemiBold",
  },

  /* ─── LOGIN SCREEN ─── */
  loginContainer: {
    flexGrow: 1,
    backgroundColor: "#111214",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },

  loginIconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: "#1A7CF4",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 24,
  },
  loginIconEmoji: {
    fontSize: 34,
  },

  loginTitle: {
    fontFamily: "Inter_700Bold",
    fontSize: 30,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
  },
  loginSubtitle: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#8A8F9E",
    textAlign: "center",
    marginBottom: 32,
  },

  inputLabel: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: "#C2C6D2",
    marginBottom: 8,
    marginLeft: 2,
  },

  forgotRow: {
    alignSelf: "flex-end",
    marginTop: 4,
    marginBottom: 24,
  },
  forgotText: {
    fontFamily: "Inter_400Regular",
    fontSize: 13,
    color: "#1A7CF4",
  },

  btnPrimary: {
    backgroundColor: "#1A7CF4",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 12,
  },
  btnPrimaryText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },

  btnSecondary: {
    backgroundColor: "#1C1E24",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2C2F3A",
    marginBottom: 28,
  },
  btnSecondaryText: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
    color: "#FFFFFF",
  },

  registerRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  registerText: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#8A8F9E",
  },
  registerLink: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 14,
    color: "#1A7CF4",
  },

  /* ─── INPUT FIELD (con ícono) ─── */
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1E24",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2C2F3A",
    paddingHorizontal: 14,
    marginBottom: 16,
    height: 52,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#FFFFFF",
  },

  input: {
    flex: 1,
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
    fontSize: 15,
  },

  /* 🔥 BOTÓN PRINCIPAL */
  button: {
    backgroundColor: "#1A7CF4",
    padding: 12,
    marginBottom: 8,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 15,
  },

  /* 🔥 BOTÓN OUTLINE (Ver más) */
  btnOutline: {
    borderWidth: 1,
    borderColor: "#1A7CF4",
    padding: 10,
    marginBottom: 8,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 6,
  },

  btnOutlineText: {
    color: "#1A7CF4",
    fontWeight: "600",
    fontSize: 14,
  },

  /* 🔥 BOTÓN SECUNDARIO */
  linkText: {
    color: "#007AFF",
    marginTop: 10,
    textAlign: "center",
  },

  /* 🔥 CARD CATALOGO */
  card: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  cardImage: {
    width: "100%",
    height: 140,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: "#2C2C2C",
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#FFFFFF",
  },

  cardDescription: {
    fontSize: 13,
    color: "#99A1AF",
    marginBottom: 6,
  },

  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#007AFF",
  },

  /* 🔥 TEXTO TOTAL */
  total: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    color: "#FFFFFF",
  },

  /* 🔥 MODAL */
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  modalContent: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 14,
    width: "85%",
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  modalTitle: {
    fontWeight: "700",
    fontSize: 18,
    marginBottom: 10,
    color: "#FFFFFF",
  },

  /* 🔥 DETALLE PRODUCTO */
  detailImage: {
    width: "100%",
    height: 220,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: "#2C2C2C",
  },

  detailBox: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 14,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  bold: {
    fontWeight: "700",
    color: "#FFFFFF",
  },

  /* 🔥 CARRITO */
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  cartImage: {
    width: 80,
    height: 80,
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "#2C2C2C",
  },

  cartPrice: {
    fontSize: 14,
    color: "#99A1AF",
  },

  cartExtra: {
    fontSize: 13,
    color: "#6A7282",
  },

  cartSubtotal: {
    fontSize: 15,
    fontWeight: "700",
    marginTop: 4,
    color: "#007AFF",
  },

  /* 🔥 TOTAL BOX (CLAVE DEL MOCKUP) */
  totalBox: {
    backgroundColor: "#1E1E1E",
    padding: 16,
    borderRadius: 16,
    marginVertical: 10,
    borderTopWidth: 1,
    borderColor: "#2C2C2C",
  },

  /* 🔥 EMPTY */
  emptyBox: {
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  emptyText: {
    color: "#99A1AF",
    fontSize: 16,
  },

  /* 🔥 CHECKOUT */
  checkoutItem: {
    flexDirection: "row",
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },

  checkoutImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: "#2C2C2C",
  },

  checkoutBox: {
    backgroundColor: "#1E1E1E",
    padding: 14,
    borderRadius: 14,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#2C2C2C",
  },
});