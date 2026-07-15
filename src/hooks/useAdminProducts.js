import { useCallback, useEffect, useState } from "react";
import {
  createAdminProductRequest,
  deactivateAdminProductRequest,
  getAdminProductsRequest,
  updateAdminProductRequest,
} from "../api/adminApi";

export const useAdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const reload = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      setProducts(await getAdminProductsRequest());
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const saveProduct = async (product) => {
    try {
      setSaving(true);
      const saved = product.id
        ? await updateAdminProductRequest(product.id, product)
        : await createAdminProductRequest(product);
      await reload();
      return saved;
    } finally {
      setSaving(false);
    }
  };

  const deactivateProduct = async (id) => {
    await deactivateAdminProductRequest(id);
    await reload();
  };

  return {
    products,
    loading,
    saving,
    error,
    reload,
    saveProduct,
    deactivateProduct,
  };
};
