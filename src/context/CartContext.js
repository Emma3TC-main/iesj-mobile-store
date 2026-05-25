import { createContext, useEffect, useState } from "react";
import { getCart, saveCart } from "../services/cartStorage";
import { useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  useEffect(() => {
    saveCart(cartItems);
  }, [cartItems]);

  const loadCart = async () => {
    const savedCart = await getCart();

    if (savedCart) {
      setCartItems(savedCart);
    }
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        return;
      }

      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      setCartItems(updatedCart);

      return;
    }

    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const increaseQuantity = (id) => {
    const updated = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCartItems(updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cartItems
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCartItems(updated);
  };

  const removeFromCart = async (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);

    setCartItems(updatedCart);

    await saveCart(updatedCart);
  };

  const clearCart = async () => {
    setCartItems([]);

    await saveCart([]);
  };

  const total = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        total,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
