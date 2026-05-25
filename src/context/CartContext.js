import { createContext, useEffect, useState } from "react";
import { getCart, saveCart } from "../services/cartStorage";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const savedCart = await getCart();

    if (savedCart) {
      setCartItems(savedCart);
    }
  };

  const addToCart = async (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    let updatedCart = [];

    if (existingProduct) {
      updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      );
    } else {
      updatedCart = [
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    }

    setCartItems(updatedCart);

    await saveCart(updatedCart);
  };

  const removeFromCart = async (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(updatedCart);

    await saveCart(updatedCart);
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
