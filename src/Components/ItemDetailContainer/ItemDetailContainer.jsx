import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { PuffLoader } from "react-spinners";
import { db } from "../../Config/firebaseConfig";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [changes, setChanges] = useState(true);
  const [productExist, setProductExist] = useState(true);

  const getProductById = (id) => {
    const productQuery = doc(db, "products", id);
    getDoc(productQuery)
      .then((response) => {
        if (response.exists()) {
          const product = {
            id: response.id,
            ...response.data(),
          };
          setItem(product);
          setIsLoading(false);
          setProductExist(true);
        } else {
          setIsLoading(false);
          setProductExist(false);
          console.log("Product does not exist"); // Agrega este log
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    console.log("useEffect called with ID:", id);
    setIsLoading(true);
    getProductById(id);
  }, [id, changes]);

  console.log("Product Exist:", productExist);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <PuffLoader
            color={"#22c55e"}
            loading={isLoading}
            size={350}
            speedMultiplier={1.5}
          />
        </div>
      ) : productExist ? (
        item && (
          <ItemDetail {...item} changes={changes} setChanges={setChanges} />
        )
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};
