export const createOrder = async (orderData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        order: orderData,
      });
    }, 1000);
  });
};
