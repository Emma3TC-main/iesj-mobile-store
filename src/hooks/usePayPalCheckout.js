import { useState } from "react";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

import {
  cancelPayPalOrderRequest,
  capturePayPalOrderRequest,
  createPayPalOrderRequest,
} from "../api/paymentsApi";

WebBrowser.maybeCompleteAuthSession();

const safelyCancel = async (paypalOrderId) => {
  if (!paypalOrderId) return;
  try {
    await cancelPayPalOrderRequest(paypalOrderId);
  } catch (error) {
    console.warn("No se pudo cancelar la reserva pendiente:", error.message);
  }
};

export const usePayPalCheckout = () => {
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  const [paymentQuote, setPaymentQuote] = useState(null);

  const payOrder = async (orderId) => {
    let paypalOrderId = null;

    try {
      setProcessingPayment(true);
      setPaymentError("");

      const paypalOrder = await createPayPalOrderRequest(orderId);
      paypalOrderId = paypalOrder.paypalOrderId;
      setPaymentQuote(paypalOrder);

      if (!paypalOrder.approvalUrl || !paypalOrderId) {
        throw new Error("El backend no devolvió una orden PayPal válida.");
      }

      const redirectUrl = "iesjmobile://paypal";
      const browserResult = await WebBrowser.openAuthSessionAsync(
        paypalOrder.approvalUrl,
        redirectUrl,
      );

      if (browserResult.type !== "success" || !browserResult.url) {
        await safelyCancel(paypalOrderId);
        throw new Error("El pago fue cerrado o cancelado.");
      }

      const parsedUrl = Linking.parse(browserResult.url);
      const path = String(parsedUrl.path || "").toLowerCase();
      const returnedToken = parsedUrl.queryParams?.token;

      if (path.includes("cancel")) {
        await safelyCancel(paypalOrderId);
        throw new Error("El pago fue cancelado en PayPal.");
      }

      if (returnedToken && returnedToken !== paypalOrderId) {
        await safelyCancel(paypalOrderId);
        throw new Error("La orden devuelta por PayPal no coincide.");
      }

      const capture = await capturePayPalOrderRequest(paypalOrderId);

      if (capture.status !== "COMPLETED") {
        throw new Error(
          `PayPal no confirmó la captura. Estado: ${capture.status || "desconocido"}.`,
        );
      }

      return { capture, quote: paypalOrder };
    } catch (error) {
      setPaymentError(error.message || "No se pudo procesar el pago.");
      throw error;
    } finally {
      setProcessingPayment(false);
    }
  };

  return {
    payOrder,
    processingPayment,
    paymentError,
    paymentQuote,
  };
};
