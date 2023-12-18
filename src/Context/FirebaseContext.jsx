import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../Config/firebaseConfig";

export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({ children }) => {
  const [orderId, setOrderId] = useState("");

  const addOrder = async (cartProducts, userData, total) => {
    const newOrder = {
      items: cartProducts,
      data: serverTimestamp(),
      buyer: userData,
      total,
    };

    const refOrder = await addDoc(collection(db, "orders"), newOrder);
    setOrderId(refOrder.id);
  };

  const ValueObject = {
    addOrder,
    orderId,
  };

  return (
    <FirebaseContext.Provider value={ValueObject}>
      {children}
    </FirebaseContext.Provider>
  );
};
