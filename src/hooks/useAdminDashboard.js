import { useCallback, useEffect, useState } from "react";
import { getAdminDashboardRequest } from "../api/adminApi";

export const useAdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setDashboard(await getAdminDashboardRequest());
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  return { dashboard, loading, error, reload };
};
