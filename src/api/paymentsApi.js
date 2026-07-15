import { apiClient } from "./apiClient";

export const createPayPalOrderRequest = async (orderId) => {
  const { data } = await apiClient.post("/payments/paypal/orders", {
    idPedido: orderId,
  });

  return {
    orderId: data.idPedido,
    paypalOrderId: data.paypalOrderId,
    status: data.status,
    approvalUrl: data.approvalUrl,
    storeTotal: Number(data.totalTienda || 0),
    storeCurrency: data.monedaTienda,
    paypalAmount: Number(data.montoPayPal || 0),
    paypalCurrency: data.monedaPayPal,
    exchangeRate: Number(data.tipoCambio || 0),
  };
};

export const capturePayPalOrderRequest = async (paypalOrderId) => {
  const { data } = await apiClient.post(
    `/payments/paypal/orders/${encodeURIComponent(paypalOrderId)}/capture`,
  );

  return data;
};

export const cancelPayPalOrderRequest = async (paypalOrderId) => {
  const { data } = await apiClient.post(
    `/payments/paypal/orders/${encodeURIComponent(paypalOrderId)}/cancel`,
  );

  return data;
};

export const getPaymentByOrderRequest = async (orderId) => {
  const { data } = await apiClient.get(`/payments/order/${orderId}`);
  return data;
};
