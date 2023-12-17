import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export const ListProducts = () => {
  const { cartItems, removeItem, removeAllItems, cartTotalPrice } =
    useContext(CartContext);

  return (
    <section className="flex flex-col justify-between gap-6 p-10 lg:p-20 rounded-md shadow-md">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <Badge badgeContent={item.quantity} color="success">
            <img
              src={item.img}
              alt={item.name}
              className="object-cover border border-gray-500 bg-gray-500/20 rounded-md p-2 h-[80px] w-[80px]"
            />
          </Badge>
          <h5 className="text-sm font-bold"> {item.name} </h5>
          <p className="text-sm">
            Price: <span className="font-bold"> ${item.price} USD </span>
          </p>
          <div>
            <button
              onClick={() => removeItem(item.id)}
              className="font-bold border border-gray-500 text-xs p-2 hover:bg-red-700 hover:border-red-700 transition-all duration-300 rounded-md">
              Delete
            </button>
          </div>
        </div>
      ))}
      <h3>
        Total: <span className="font-bold">${cartTotalPrice} USD</span>
      </h3>

      <button
        onClick={() => removeAllItems()}
        className="font-bold border border-gray-500 hover:bg-red-700/50 p-2 rounded-md  w-full transition-all duration-300">
        Clean cart
      </button>
    </section>
  );
};
