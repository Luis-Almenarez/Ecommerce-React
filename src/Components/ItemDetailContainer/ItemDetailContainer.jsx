import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { PuffLoader } from "react-spinners";
import { db } from "../../Config/firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [changes, setChanges] = useState(true);

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
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setIsLoading(true);
    getProductById(id);
  }, [id, changes]);

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
      ) : (
        item && (
          <ItemDetail {...item} changes={changes} setChanges={setChanges} />
        )
      )}
    </>
  );
};
