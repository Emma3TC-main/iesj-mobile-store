import { useCallback, useEffect, useState } from "react";
import {
  getAdminOrderByIdRequest,
  getAdminOrdersRequest,
  updateAdminOrderStatusRequest,
} from "../api/adminApi";

export const useAdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setOrders(await getAdminOrdersRequest());
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const getOrder = (id) => getAdminOrderByIdRequest(id);

  const updateStatus = async (id, status) => {
    try {
      setUpdating(true);
      const updated = await updateAdminOrderStatusRequest(id, status);
      setOrders((current) =>
        current.map((order) => (order.id === id ? updated : order)),
      );
      return updated;
    } finally {
      setUpdating(false);
    }
  };

  return { orders, loading, updating, error, reload, getOrder, updateStatus };
};
