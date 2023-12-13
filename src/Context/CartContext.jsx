import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const { id, name, price } = item;
    const newItem = {
      id,
      name,
      price,
      quantity,
      subTotal: quantity * price,
    };
    setCartItems([...cartItems, newItem]);
    console.log("Se agregó correctamente");
  };

  const ObjectValue = {
    cartItems,
    addItem,
  };

  return (
    <CartContext.Provider value={ObjectValue}>{children}</CartContext.Provider>
  );
};
