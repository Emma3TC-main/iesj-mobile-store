import { products } from "../constants/mockData";

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((item) => item.id === id);

      if (!product) {
        reject("Producto no encontrado");
      }

      resolve(product);
    }, 1000);
  });
};
