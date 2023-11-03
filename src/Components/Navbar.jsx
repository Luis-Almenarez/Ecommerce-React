import { CartWidget } from "./CartWidget";

export const Navbar = () => {
  return (
    <>
      <header className="bg-zinc-900 text-white flex relative items-center justify-between p-4 gap-4 font-bold">
        <a href="#">
          {" "}
          <div className="flex p-2 h-[40px] w-[40px] bg-white rounded-lg trantistion-all hover:scale-105">
            <img src="./public/logo.png" alt="Logo Shopping Store" />
          </div>
        </a>
        <nav className="flex items-center justify-between text-gray-400 gap-2 w-full">
          <ul className="flex gap-4 x ">
            <li className="transition-all hover:underline hover:text-gray-200">
              <a href="#">All</a>
            </li>
            <li className="transition-all hover:underline hover:text-gray-200">
              <a href="#">Shirts</a>
            </li>
            <li className="transition-all hover:underline hover:text-gray-200">
              <a href="#">Shoes</a>
            </li>
            <li className="transition-all hover:underline hover:text-gray-200">
              <a href="#">Stickers</a>
            </li>
            <li className="transition-all hover:underline hover:text-gray-200">
              <a href="#">Others</a>
            </li>
          </ul>
          <section className="flex justify-center w-full ">
            <a
              className="transition-all text-gray-400 hover:underline hover:text-gray-200"
              href="#">
              SHOPPING STORE
            </a>
          </section>
          <section className="flex justify-end  w-6/12 gap-2 mr-6">
            <div className="flex items-center justify-center h-[40px] w-[40px] bg-white rounded-lg transition-all  hover:scale-105">
              <CartWidget />
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};
