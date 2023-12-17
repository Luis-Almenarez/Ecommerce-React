import { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [totalQuantityCart, setTotalQuantityCart] = useState(0);

  const addItem = (item, quantity) => {
    const { id, img, name, price } = item;

    // Busca el índice en el array 'cartItems' del elemento cuyo 'id' coincide con el valor de la variable 'id'
    const index = cartItems.findIndex((element) => element.id === id);

    if (index != -1) {
      // Esta es una copia del array con los productos almacenados en el state
      const CartItemsCopyArray = [...cartItems];

      // Modifica la cantidad y el subtotal del elemento encontrado en la copia del array
      CartItemsCopyArray[index].quantity += quantity;
      CartItemsCopyArray[index].subTotal =
        CartItemsCopyArray[index].quantity * CartItemsCopyArray[index].price;

      // Reemplaza el state original por la copia con los cambios ya realizados
      setCartItems(CartItemsCopyArray);
    } else {
      const newItem = {
        id,
        name,
        img,
        price,
        quantity,
        subTotal: quantity * price,
      };
      setCartItems([...cartItems, newItem]);
      console.log("Se agregó correctamente");
    }
  };
  const removeItem = (id) => {
    const itemsForRemove = cartItems.filter((item) => item.id !== id);
    setCartItems(itemsForRemove);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  const handleTotalCart = () => {
    const total = cartItems.reduce((acum, item) => acum + item.subTotal, 0);
    setCartTotalPrice(total);
  };

  const handleTotalProductsCart = () => {
    const total = cartItems.reduce((acum, item) => acum + item.quantity, 0);
    setTotalQuantityCart(total);
  };

  useEffect(() => {
    handleTotalCart();
    handleTotalProductsCart();
  }, [cartItems]);

  const ObjectValue = {
    cartItems,
    addItem,
    removeItem,
    removeAllItems,
    cartTotalPrice,
    totalQuantityCart,
  };

  return (
    <CartContext.Provider value={ObjectValue}>{children}</CartContext.Provider>
  );
};
