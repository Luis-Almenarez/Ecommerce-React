import { Link } from "react-router-dom";

export const ProductNotFound = () => {
  return (
    <main className="flex items-center justify-center w-full h-screen bg-[#171717] text-white">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">404 - Not Found</h1>
        <p className="text-2xl mb-4">There is nothing and nobody here</p>
        <Link to={"/"}>
          <p className="text-xl hover:text-green-500 transition-all duration-300">
            You should go back
          </p>
        </Link>
      </div>
    </main>
  );
};
