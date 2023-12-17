import { useContext } from "react";
import { Form } from "../Form/Form";
import { ListProducts } from "./ListProducts/ListProducts";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  console.log(cartItems);

  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 text-white text-2xl bg-black">
      <Form />
      {cartItems.length === 0 ? (
        <div className="grid place-items-center">
          <h2 className="text-4xl">
            Oops, nothing here... <ShoppingCartIcon fontSize="large" />
          </h2>
        </div>
      ) : (
        <ListProducts />
      )}
    </main>
  );
};
