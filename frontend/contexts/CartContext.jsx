import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (ticket) => {
    setCart((prevCart) => {
      const existingTicket = prevCart.find((item) => item.name === ticket.name);
      if (existingTicket) {
        return prevCart.map((item) =>
          item.name === ticket.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...ticket, quantity: 1 }];
    });
  };

  const removeFromCart = (ticket, removeAll = false) => {
    setCart((prevCart) => {
      const existingTicket = prevCart.find((item) => item.name === ticket.name);
      if (!existingTicket) return prevCart;

      if (removeAll || existingTicket.quantity === 1) {
        return prevCart.filter((item) => item.name !== ticket.name);
      }

      return prevCart.map((item) =>
        item.name === ticket.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
