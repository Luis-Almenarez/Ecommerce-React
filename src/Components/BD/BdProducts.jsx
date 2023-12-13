import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/firebaseConfig";
// import { AddProducts } from "../../utils/AddProducts";

export const BdProducts = () => {
  const [products, setProducts] = useState([]);
  const [change, setChange] = useState(true);

  /********************************************/
  const discountStock = async (product) => {
    const productRef = doc(db, "products", product.id);
    const newStock = product.stock - 1;
    await updateDoc(productRef, { stock: newStock });
    setChange(!change);
  };
  /********************************************/

  const getProductsDB = (category) => {
    // Construir la consulta a la colección "products"
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));

    // Ejecutar la consulta y manejar la respuesta
    getDocs(myProducts)
      .then((response) => {
        // Transformar los documentos en una lista de productos
        const productList = response.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };
          return product;
        });

        // Actualizar el estado local con la lista de productos
        setProducts(productList);
        console.log(productList);
      })
      .catch((error) => {
        // Manejar errores, imprimir en la consola
        console.log("Error al obtener productos:", error);
      });
  };

  useEffect(() => {
    getProductsDB("shoes");
    // AddProducts();
  }, [change]);

  return (
    <>
      <h2 className="text-3xl font-bold text-white mb-4">Productos</h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-gray-800 p-4 mb-4 rounded-md shadow-md">
          <p className="text-xl font-semibold text-white mb-2">
            Nombre: {product.name}
          </p>
          <div>
            <img src={product.img} alt={product.name} className="w-42 h-42" />
          </div>
          <p className="text-lg text-white mb-2">Precio: ${product.price}</p>
          <p className="text-gray-300 mb-2">
            Descripción: {product.description}
          </p>
          <p className="text-sm text-gray-300 mb-4">Stock: {product.stock}</p>
          <button
            onClick={() => discountStock(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700">
            Comprar
          </button>
        </div>
      ))}
    </>
  );
};
