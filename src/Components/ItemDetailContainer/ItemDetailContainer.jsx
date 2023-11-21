import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((resp) => setItem(resp))
      .catch((error) => console.error(error));
  }, []);
  return <>{item && <ItemDetail {...item} />}</>;
};
