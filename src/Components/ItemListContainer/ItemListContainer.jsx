import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts()
      .then((response) => {
        if (category) {
          const filterProducts = response.filter(
            (product) => product.category === category
          );
          if (filterProducts.length > 0) {
            setProducts(filterProducts);
          } else {
            setProducts(response);
          }
        } else {
          setProducts(response);
        }
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [category]);

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
