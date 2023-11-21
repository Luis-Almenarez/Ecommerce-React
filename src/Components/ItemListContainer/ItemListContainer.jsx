import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        setProducts(response);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {IsLoading ? (
        <h2>Obteniendo productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
