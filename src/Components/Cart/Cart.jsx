import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <main className="w-full text-white text-2xl font-bold bg-gray-800">
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-black p-8 rounded-md shadow-md">
        {/* <h2 className="mb-6 text-gray-800">CART</h2> */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid gap-6 mb-4 p-4 border border-gray-500">
            <p className="font-semibold mb-2">Product: {item.name}</p>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>SubTotal: ${item.subTotal}</p>
            <button className="mt-2 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700">
              Eliminar
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};
