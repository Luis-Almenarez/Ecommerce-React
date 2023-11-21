import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <>
      <main className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </main>
    </>
  );
};
