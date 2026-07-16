import { createContext, useEffect, useState } from "react";
import {
  cancelOrderRequest,
  createOrder as createOrderRequest,
  getOrdersRequest,
} from "../api/ordersApi";
import { useAuth } from "../hooks/useAuth";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [ordersError, setOrdersError] = useState("");

  useEffect(() => {
    if (user?.role === "CLIENT") {
      loadOrders();
    } else {
      setOrders([]);
    }
  }, [user]);

  const loadOrders = async () => {
    if (user?.role !== "CLIENT") return;

    try {
      setLoadingOrders(true);
      setOrdersError("");
      setOrders(await getOrdersRequest());
    } catch (error) {
      setOrdersError(error.message);
    } finally {
      setLoadingOrders(false);
    }
  };

  const createPendingOrder = async (metodoPago = "PAYPAL_SANDBOX") => {
    const order = await createOrderRequest(metodoPago);
    await loadOrders();
    return order;
  };

  const cancelPendingOrder = async (orderId) => {
    const cancelled = await cancelOrderRequest(orderId);
    await loadOrders();
    return cancelled;
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        loadingOrders,
        ordersError,
        createPendingOrder,
        cancelPendingOrder,
        loadOrders,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
