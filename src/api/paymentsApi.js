import { apiClient } from "./apiClient";

export const processPaymentRequest = async (
  orderId,
  metodo = "PAYPAL_SANDBOX",
) => {
  const { data } = await apiClient.post("/payments", {
    idPedido: orderId,
    metodo,
  });

  return data;
};
