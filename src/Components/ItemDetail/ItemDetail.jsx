import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {
  const onAdd = (items) => {
    alert(`Se agregaron ${items} items correctamente`);
  };

  return (
    <main className="bg-black text-center text-white m-4 p-4 rounded-lg">
      <div className="grid place-items-center p-2">
        <div className="flex flex-col justify-center gap-2">
          <h5 className="font-bold uppercase text-green-500">{name}</h5>
          <img className="rounded-md" src={img} alt={name} />
          <p className=""> {description} </p>
          <p>Precio: ${price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </main>
  );
};
