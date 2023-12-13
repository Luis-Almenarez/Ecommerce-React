import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfdtLSZ2kN1RdDrYN6RnIxJ4rRyFJhIvY",
  authDomain: "ecommerce-react-137c9.firebaseapp.com",
  projectId: "ecommerce-react-137c9",
  storageBucket: "ecommerce-react-137c9.appspot.com",
  messagingSenderId: "569284561045",
  appId: "1:569284561045:web:cca8484f9c6a64cbe4739c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos la base de datos
export const db = getFirestore(app);
