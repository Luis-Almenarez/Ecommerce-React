import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {
  const onAdd = (items) => {
    alert(`Has agregado ${items} productos al carrito`);
  };

  return (
    <main className="w-1/2 grid border shadow-2xl m-2 p-2 rounded-md">
      <div className="grid place-items-center p-2">
        <div className="flex flex-col justify-center gap-2">
          <h5 className="font-bold uppercase">{name}</h5>
          <img src={img} alt={name} />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </main>
  );
};
