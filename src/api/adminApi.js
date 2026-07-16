import { apiClient } from "./apiClient";
import { mapOrderFromApi, mapProductFromApi } from "./mappers";

const toProductPayload = (product, partial = false) => {
  const payload = {
    nombre: product.name?.trim(),
    descripcion: product.description?.trim() || "",
    precio: Number(product.price),
    stock: Number(product.stock),
    imagen: product.image?.trim() || "",
    codigoBarras: product.barcode?.trim() || null,
    estado: product.active ?? true,
  };

  if (!partial) return payload;

  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined),
  );
};

export const getAdminDashboardRequest = async () => {
  const { data } = await apiClient.get("/admin/dashboard");

  return {
    activeProducts: Number(data.productosActivos || 0),
    lowStockProducts: Number(data.productosStockBajo || 0),
    pendingOrders: Number(data.pedidosPendientes || 0),
    paidOrders: Number(data.pedidosPagados || 0),
    paidSales: Number(data.ventasPagadas || 0),
    latestOrders: (data.ultimosPedidos || []).map(mapOrderFromApi),
  };
};

export const getAdminProductsRequest = async () => {
  const { data } = await apiClient.get("/admin/products");
  return data.map(mapProductFromApi);
};

export const createAdminProductRequest = async (product) => {
  const { data } = await apiClient.post(
    "/admin/products",
    toProductPayload(product),
  );
  return mapProductFromApi(data);
};

export const updateAdminProductRequest = async (id, product) => {
  const { data } = await apiClient.put(
    `/admin/products/${id}`,
    toProductPayload(product, true),
  );
  return mapProductFromApi(data);
};

export const deactivateAdminProductRequest = async (id) => {
  await apiClient.delete(`/admin/products/${id}`);
};

export const getAdminOrdersRequest = async () => {
  const { data } = await apiClient.get("/admin/orders");
  return data.map(mapOrderFromApi);
};

export const getAdminOrderByIdRequest = async (id) => {
  const { data } = await apiClient.get(`/admin/orders/${id}`);
  return mapOrderFromApi(data);
};

export const updateAdminOrderStatusRequest = async (id, status) => {
  const { data } = await apiClient.patch(`/admin/orders/${id}/status`, {
    estado: status,
  });
  return mapOrderFromApi(data);
};
