import { apiClient } from "./apiClient";
import { mapOrderFromApi } from "./mappers";

export const getOrdersRequest = async () => {
  const { data } = await apiClient.get("/orders");
  return data.map(mapOrderFromApi);
};

export const createOrder = async (metodoPago = "PAYPAL_SANDBOX") => {
  const { data } = await apiClient.post("/orders", { metodoPago });
  return mapOrderFromApi(data);
};

export const cancelOrderRequest = async (orderId) => {
  const { data } = await apiClient.post(`/orders/${orderId}/cancel`);
  return mapOrderFromApi(data);
};
