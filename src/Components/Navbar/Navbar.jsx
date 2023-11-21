import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavItem } from "../NavItem/NavItem";

export const Navbar = () => {
  const example = () => {
    console.log("Hello World");
  };

  return (
    <>
      <header className="bg-zinc-900 text-white flex items-center justify-between p-4 gap-4 font-bold">
        <a href="/">
          <div className="flex p-2 h-[40px] w-[40px] bg-white rounded-lg trantistion-all duration-300 hover:scale-105">
            <img src="./logo.png" alt="Logo Shopping Store" />
          </div>
        </a>
        <nav className="flex items-center justify-between text-gray-400 gap-2 w-full">
          <ul className="flex gap-4">
            <Link to={"/"}>
              <NavItem text="All" />
            </Link>
            <Link to={"/category/shirt"}>
              <NavItem text="Shirts" />
            </Link>
            <Link to={"/category/shoes"}>
              <NavItem text="Shoes" />
            </Link>

            <Link to={"/category/pants"}>
              <NavItem text="Pants" />
            </Link>
            <Link to={"/category/accessory"}>
              <NavItem text="Accessory" />
            </Link>
            <Link to={"/category/hoodie"}>
              <NavItem text="Others" />
            </Link>
          </ul>
          <section className="flex justify-center w-full ">
            <a
              className="transition-all duration-300 text-gray-400 hover:underline hover:text-gray-200"
              href="#">
              SHOPPING STORE
            </a>
          </section>
          <section className="flex justify-end  w-6/12 gap-2 mr-6">
            <div className="flex items-center justify-center h-[40px] w-[40px] bg-white rounded-lg transition-all duration-300 hover:scale-105">
              <CartWidget />
            </div>
          </section>
        </nav>
      </header>
    </>
  );
};
