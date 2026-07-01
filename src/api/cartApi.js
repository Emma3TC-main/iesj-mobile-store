import { apiClient } from "./apiClient";
import { mapCartFromApi } from "./mappers";

export const getCartRequest = async () => {
  const { data } = await apiClient.get("/cart");
  return mapCartFromApi(data);
};

export const updateCartRequest = async (productId, quantity) => {
  const { data } = await apiClient.put("/cart", {
    idProducto: productId,
    cantidad: quantity,
  });
  return mapCartFromApi(data);
};

export const removeCartItemRequest = async (productId) => {
  const { data } = await apiClient.delete(`/cart/${productId}`);
  return mapCartFromApi(data);
};

export const clearCartRequest = async () => {
  await apiClient.delete("/cart/clear");
  return { items: [], subtotal: 0 };
};
