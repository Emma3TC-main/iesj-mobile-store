import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* 🔥 BASE */
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#121212",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    color: "#FFFFFF",
  },

  input: {
    borderWidth: 1,
    borderColor: "#2C2C2C",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    color: "#FFFFFF",
  },

  /* 🔥 BOTÓN PRINCIPAL */
  button: {
    backgroundColor: "#007AFF",
    padding: 16,
    marginBottom: 10,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
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