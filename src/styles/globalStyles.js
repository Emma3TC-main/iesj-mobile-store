import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f7fa",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },

  button: {
    backgroundColor: "#007bff",
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  /* CARD MEJORADA */
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 3,
  },

  /* IMAGEN */
  cardImage: {
    width: "100%",
    height: 140,
    marginBottom: 10,
    borderRadius: 8,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },

  cardDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#28a745",
  },

  total: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  linkText: {
    color: "#007bff",
    marginTop: 10,
    textAlign: "center",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },

  modalTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  /* DETALLE PRODUCTO */
  detailImage: {
    width: "100%",
    height: 220,
    marginBottom: 16,
    borderRadius: 10,
  },

  detailBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 12,
    elevation: 2,
  },

  bold: {
    fontWeight: "bold",
  },

  /* CARRITO */
  cartItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
  },

  cartImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 8,
  },

  cartPrice: {
    fontSize: 14,
    color: "#555",
  },

  cartExtra: {
    fontSize: 13,
    color: "#777",
  },

  cartSubtotal: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 4,
  },

  totalBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
  },

  emptyBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },

  emptyText: {
    color: "#666",
    fontSize: 16,
  },

  checkoutItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginBottom: 8,
    elevation: 2,
  },

  checkoutImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },

  checkoutBox: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 8,
    elevation: 2,
  },
});
