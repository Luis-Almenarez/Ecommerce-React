import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";

export const ItemListContainer = () => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <BounceLoader
            color={"#22c55e"}
            loading={isLoading}
            size={350}
            speedMultiplier={1.5}
          />
        </div>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
