import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <section className="text-center m-4 p-4 bg-black rounded-lg transition-all duration-300 border border-black hover:border-green-500">
      <div className="flex justify-center relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="rounded-sm object-contain transition duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h5 className="text-[#22c55e] text-2xl font-bold">{name}</h5>
        <p className="text-white w-11/12">{description}</p>
        <Link to={`/item/${id}`}>
          <button className="w-3/4 mt-2 bg-white text-black py-2 px-8 rounded-md transition-all duration-400 hover:bg-green-500 hover:text-white">
            Detalles
          </button>
        </Link>
      </div>
    </section>
  );
};
