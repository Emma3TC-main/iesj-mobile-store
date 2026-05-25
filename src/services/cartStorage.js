import { getData, saveData } from "./localStorage";

const CART_KEY = "cart_items";

export const saveCart = async (cart) => {
  await saveData(CART_KEY, cart);
};

export const getCart = async () => {
  return await getData(CART_KEY);
};
