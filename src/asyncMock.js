const products = [
  {
    id: "1",
    name: "Sneakers Urbanos",
    img: "https://via.placeholder.com/350x250",
    price: 120,
    category: "calzados",
    description: "Modernos sneakers urbanos para un estilo casual y cómodo.",
    stock: 15,
  },
  {
    id: "2",
    name: "Botas de Montaña",
    img: "https://via.placeholder.com/350x250",
    price: 150,
    category: "calzados",
    description:
      "Botas resistentes ideales para aventuras al aire libre y senderismo.",
    stock: 12,
  },
  {
    id: "3",
    name: "Sandalias de Verano",
    img: "https://via.placeholder.com/350x250",
    price: 80,
    category: "calzados",
    description:
      "Cómodas sandalias perfectas para los días soleados de verano.",
    stock: 20,
  },
  {
    id: "4",
    name: "Zapatillas Deportivas",
    img: "https://via.placeholder.com/350x250",
    price: 110,
    category: "calzados",
    description: "Zapatillas deportivas ideales para el entrenamiento diario.",
    stock: 18,
  },
  {
    id: "5",
    name: "Camiseta Casual",
    img: "https://via.placeholder.com/350x250",
    price: 30,
    category: "ropa",
    description: "Camiseta cómoda y casual para el día a día.",
    stock: 25,
  },
  {
    id: "6",
    name: "Camisa Elegante",
    img: "https://via.placeholder.com/350x250",
    price: 45,
    category: "ropa",
    description:
      "Camisa elegante para ocasiones especiales y reuniones formales.",
    stock: 14,
  },
  {
    id: "7",
    name: "Jeans Clásicos",
    img: "https://via.placeholder.com/350x250",
    price: 60,
    category: "ropa",
    description: "Jeans clásicos para un estilo versátil y atemporal.",
    stock: 22,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 2000);
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
      }, 2000);
    } else {
      reject("No existen productos");
    }
  });
};
