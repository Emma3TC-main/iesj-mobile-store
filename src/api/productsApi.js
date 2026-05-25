import { products } from "../constants/mockData";

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = async (id) => {
  return products.find((product) => product.id === id);
};

export const getProductsByCategory = async (category) => {
  return products.filter((product) => product.category === category);
};

export const searchProducts = async (query) => {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase()),
  );
};
