import { createContext, useEffect, useState } from "react";
import {
  createOrder as createOrderRequest,
  getOrdersRequest,
} from "../api/ordersApi";
import { processPaymentRequest } from "../api/paymentsApi";
import { useAuth } from "../hooks/useAuth";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  useEffect(() => {
    if (user) {
      loadOrders();
    } else {
      setOrders([]);
    }
  }, [user]);

  const loadOrders = async () => {
    try {
      setLoadingOrders(true);
      setOrdersError("");
      const data = await getOrdersRequest();
      setOrders(data);
    } catch (error) {
      setOrdersError(error.message);
    } finally {
      setLoadingOrders(false);
    }
  };

  const createOrder = async (metodoPago = "PAYPAL_SANDBOX") => {
    const order = await createOrderRequest(metodoPago);
    await processPaymentRequest(order.id, metodoPago);
    await loadOrders();
    return order;
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        loadingOrders,
        ordersError,
        createOrder,
        loadOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
