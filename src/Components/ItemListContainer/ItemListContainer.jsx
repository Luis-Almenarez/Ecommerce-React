import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Config/firebaseConfig";
import { ItemList } from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = () => {
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : query(collection(db, "products"));
    getDocs(myProducts)
      .then((resp) => {
        if (resp.size === 0) {
          console.log("No hay productos cargados en la base de datos");
        }
        const productList = resp.docs.map((doc) => {
          const product = {
            id: doc.id,
            ...doc.data(),
          };

          return product;
        });
        setProducts(productList);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getProducts();
  }, [category]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
