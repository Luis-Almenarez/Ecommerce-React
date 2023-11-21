const products = [
  {
    id: "1",
    name: "Sneakers Urbanos",
    img: "../public/example.png",
    price: 120,
    category: "shoes",
    description: "Modernos sneakers urbanos para un estilo casual y cómodo.",
    stock: 15,
  },
  {
    id: "2",
    name: "Botas de Montaña",
    img: "../public/example.png",
    price: 150,
    category: "shoes",
    description:
      "Botas resistentes ideales para aventuras al aire libre y senderismo.",
    stock: 12,
  },
  {
    id: "3",
    name: "Sandalias de Verano",
    img: "../public/example.png",
    price: 80,
    category: "shoes",
    description:
      "Cómodas sandalias perfectas para los días soleados de verano.",
    stock: 20,
  },
  {
    id: "4",
    name: "Zapatillas Deportivas",
    img: "../public/example.png",
    price: 110,
    category: "shoes",
    description: "Zapatillas deportivas ideales para el entrenamiento diario.",
    stock: 18,
  },
  {
    id: "5",
    name: "Camiseta Casual",
    img: "../public/example.png",
    price: 30,
    category: "shirt",
    description: "Camiseta cómoda y casual para el día a día.",
    stock: 25,
  },
  {
    id: "6",
    name: "Camisa Elegante",
    img: "../public/example.png",
    price: 45,
    category: "shirt",
    description:
      "Camisa elegante para ocasiones especiales y reuniones formales.",
    stock: 14,
  },
  {
    id: "7",
    name: "Jeans Clásicos",
    img: "../public/example.png",
    price: 60,
    category: "pants",
    description: "Jeans clásicos para un estilo versátil y atemporal.",
    stock: 22,
  },
  {
    id: "8",
    name: "Sudadera Deportiva",
    img: "../public/example.png",
    price: 75,
    category: "hoodie",
    description: "Sudadera cómoda para tus sesiones de entrenamiento.",
    stock: 10,
  },
  {
    id: "9",
    name: "Gorra de Moda",
    img: "../public/example.png",
    price: 25,
    category: "accessory",
    description: "Gorra de moda para complementar tu estilo urbano.",
    stock: 30,
  },
  {
    id: "10",
    name: "Mochila Resistente",
    img: "../public/example.png",
    price: 50,
    category: "accessory",
    description: "Mochila resistente y espaciosa para tus aventuras diarias.",
    stock: 15,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1500);
    } else {
      reject("No existen productos");
    }
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const product = products.find((p) => p.id === id);

      setTimeout(() => {
        if (!product) {
          reject(
            `El producto con el id:${id} no se encuentra en la base de datos`
          );
        }
        resolve(product);
      }, 1500);
    } else {
      reject("No existen productos");
    }
  });
};
