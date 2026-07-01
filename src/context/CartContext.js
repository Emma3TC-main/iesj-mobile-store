import { createContext, useEffect, useMemo, useState } from "react";
import {
  clearCartRequest,
  getCartRequest,
  removeCartItemRequest,
  updateCartRequest,
} from "../api/cartApi";
import { useAuth } from "../hooks/useAuth";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(false);
  const [cartError, setCartError] = useState("");

  useEffect(() => {
    if (user) {
      refreshCart();
    } else {
      setCartItems([]);
    }
  }, [user]);

  const applyCart = (cart) => {
    setCartItems(cart?.items || []);
  };

  const refreshCart = async () => {
    try {
      setLoadingCart(true);
      setCartError("");
      const cart = await getCartRequest();
      applyCart(cart);
    } catch (error) {
      setCartError(error.message);
    } finally {
      setLoadingCart(false);
    }
  };

  const addToCart = async (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    const nextQuantity = existingItem ? existingItem.quantity + 1 : 1;

    if (nextQuantity > product.stock) {
      setCartError("Stock insuficiente para este producto");
      return;
    }

    const cart = await updateCartRequest(product.id, nextQuantity);
    applyCart(cart);
  };

  const increaseQuantity = async (id) => {
    const item = cartItems.find((entry) => entry.id === id);
    if (!item) return;

    const cart = await updateCartRequest(id, item.quantity + 1);
    applyCart(cart);
  };

  const decreaseQuantity = async (id) => {
    const item = cartItems.find((entry) => entry.id === id);
    if (!item) return;

    if (item.quantity <= 1) {
      await removeFromCart(id);
      return;
    }

    const cart = await updateCartRequest(id, item.quantity - 1);
    applyCart(cart);
  };

  const removeFromCart = async (productId) => {
    const cart = await removeCartItemRequest(productId);
    applyCart(cart);
  };

  const clearCart = async () => {
    const cart = await clearCartRequest();
    applyCart(cart);
  };

  const total = useMemo(() => {
    return cartItems.reduce(
      (acc, item) => acc + Number(item.price || 0) * Number(item.quantity || 0),
      0,
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        loadingCart,
        cartError,
        addToCart,
        removeFromCart,
        total,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
