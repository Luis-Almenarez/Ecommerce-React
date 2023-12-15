import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </main>
    </>
  );
};
