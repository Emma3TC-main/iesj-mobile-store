import { createContext, useEffect, useState } from "react";

import { getOrders, saveOrders } from "../services/ordersStorage";

export const OrdersContext = createContext();

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    saveOrders(orders);
  }, [orders]);

  const loadOrders = async () => {
    const data = await getOrders();

    setOrders(data);
  };

  const createOrder = (items, total) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toISOString(),
      items,
      total,
      status: "Procesando",
    };

    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        createOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
}
