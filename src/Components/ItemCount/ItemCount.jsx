import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handledAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleSubtract = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col col-2 justify-content-center items-center p-2">
      <div className="flex p-2 gap-4 justify-center items-center">
        <button
          className="bg-green-500 text-black py-1 px-4 rounded-md transition-all duration-300 hover:bg-red-500 hover:text-white"
          onClick={handleSubtract}>
          <RemoveIcon />
        </button>
        <strong>{count}</strong>
        <button
          className="bg-green-500 text-black py-1 px-4 rounded-md transition-all duration-300 hover:bg-green-700 hover:text-white"
          onClick={handledAdd}>
          <AddIcon />
        </button>
      </div>
      <button
        className="w-1/2 bg-green-500 text-black m-2 py-2 px-4 rounded-md transition-all duration-300 hover:bg-green-700 hover:text-white"
        onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};
