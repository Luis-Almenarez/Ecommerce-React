import { addDoc, collection } from "firebase/firestore";
import { db } from "../Config/firebaseConfig";

const products = [
  {
    name: "Sneakers Urbanos",
    img: "https://via.placeholder.com/450x250",
    price: 120,
    category: "shoes",
    description: "Modernos sneakers urbanos para un estilo casual y cómodo.",
    stock: 15,
  },
  {
    name: "Botas de Montaña",
    img: "https://via.placeholder.com/450x250",
    price: 150,
    category: "shoes",
    description:
      "Botas resistentes ideales para aventuras al aire libre y senderismo.",
    stock: 12,
  },
  {
    name: "Sandalias de Verano",
    img: "https://via.placeholder.com/450x250",
    price: 80,
    category: "shoes",
    description:
      "Cómodas sandalias perfectas para los días soleados de verano.",
    stock: 20,
  },
  {
    name: "Zapatillas Deportivas",
    img: "https://via.placeholder.com/450x250",
    price: 110,
    category: "shoes",
    description: "Zapatillas deportivas ideales para el entrenamiento diario.",
    stock: 18,
  },
  {
    name: "Camiseta Casual",
    img: "https://via.placeholder.com/450x250",
    price: 30,
    category: "shirt",
    description: "Camiseta cómoda y casual para el día a día.",
    stock: 25,
  },
  {
    name: "Camisa Elegante",
    img: "https://via.placeholder.com/450x250",
    price: 45,
    category: "shirt",
    description:
      "Camisa elegante para ocasiones especiales y reuniones formales.",
    stock: 14,
  },
  {
    name: "Jeans Clásicos",
    img: "https://via.placeholder.com/450x250",
    price: 60,
    category: "pants",
    description: "Jeans clásicos para un estilo versátil y atemporal.",
    stock: 22,
  },
  {
    name: "Sudadera Deportiva",
    img: "https://via.placeholder.com/450x250",
    price: 75,
    category: "hoodie",
    description: "Sudadera cómoda para tus sesiones de entrenamiento.",
    stock: 10,
  },
  {
    name: "Gorra de Moda",
    img: "https://via.placeholder.com/450x250",
    price: 25,
    category: "accessory",
    description: "Gorra de moda para complementar tu estilo urbano.",
    stock: 30,
  },
  {
    name: "Mochila Resistente",
    img: "https://via.placeholder.com/450x250",
    price: 50,
    category: "accessory",
    description: "Mochila resistente y espaciosa para tus aventuras diarias.",
    stock: 15,
  },
];

export const AddProducts = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
