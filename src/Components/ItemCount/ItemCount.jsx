import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handledAdd = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const handleSubtract = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col col-2 justify-content-center items-center p-4">
      <div className="flex p-2 gap-2 justify-center items-center">
        <button
          className="bg-black text-white py-1 px-2 rounded-xl transition-all duration-300 hover:bg-red-500 hover:text-black"
          onClick={handleSubtract}>
          <RemoveIcon />
        </button>
        <strong>{count}</strong>
        <button
          className="bg-black text-white py-1 px-2 rounded-xl transition-all duration-300 hover:bg-green-500 hover:text-black"
          onClick={handledAdd}>
          <AddIcon />
        </button>
      </div>
      <button
        className="w-1/2 bg-black text-white py-2 px-4 rounded-xl transition-all duration-300 hover:bg-green-500 hover:text-black"
        onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
