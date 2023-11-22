import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { PuffLoader } from "react-spinners";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getProductById(id)
      .then((resp) => {
        setItem(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [id]);

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
        item && <ItemDetail {...item} />
      )}
    </>
  );
};
