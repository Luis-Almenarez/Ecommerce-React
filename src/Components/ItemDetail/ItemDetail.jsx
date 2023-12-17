import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const handleAddToCart = (count) => {
    if (count === 0) {
      alert("Debe agregar por lo menos un producto al carrito");
    } else {
      addItem({ id, img, name, price }, count);
      alert("Se han agregado los productos al carrito");
    }
  };

  return (
    <main className="w-full grid grid-cols-1 md:grid-cols-2 bg-black text-center text-white p-4">
      <section className="grid place-items-center p-2">
        <img className="rounded-md" src={img} alt={name} />
      </section>
      <section className="flex flex-col justify-center items-center gap-2">
        <h5 className="text-4xl font-bold mb-4 uppercase text-green-500">
          {name}
        </h5>
        <p className="w-5/6 text-gray-500 text-2xl border-b border-gray-500 pb-6">
          {description}
        </p>
        <p className="text-gray-500 text-2xl font-bold">Precio: ${price} </p>
        <ItemCount stock={stock} onAdd={handleAddToCart} />
      </section>
    </main>
  );
};
