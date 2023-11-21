import { Link } from "react-router-dom";

export const Item = ({ id, name, img, description }) => {
  return (
    <div className="m-4 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-auto rounded-md"
        />
      </div>
      <div className="mt-4">
        <h5 className="text-xl font-bold">{name}</h5>
        <p className="text-gray-700">{description}</p>
        <Link to={`/item/${id}`}>
          <button className="mt-2 bg-black text-white py-2 px-4 rounded-full transition-all duration-300 hover:bg-green-500 hover:text-black">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};