import { apiClient } from "./apiClient";
import { mapProductFromApi } from "./mappers";

export const getProducts = async () => {
  const { data } = await apiClient.get("/products");
  return data.map(mapProductFromApi);
};

export const getProductById = async (id) => {
  const { data } = await apiClient.get(`/products/${id}`);
  return mapProductFromApi(data);
};

export const getProductsByCategory = async (category) => {
  const products = await getProducts();
  return products.filter((product) => product.category === category);
};

export const searchProducts = async (query) => {
  const products = await getProducts();
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
};
