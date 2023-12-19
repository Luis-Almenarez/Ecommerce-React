import { Badge } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";
import Swal from "sweetalert2";

export const ListProducts = () => {
  const { cartItems, removeItem, removeAllItems, cartTotalPrice } =
    useContext(CartContext);

  const handleCleanCart = () => {
    let timerInterval;

    Swal.fire({
      title: "Cleaning Cart",
      html: "Removing all products...",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        removeAllItems(); // Remove all items after the timer expires
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        Swal.fire("Cart Cleaned", "All products have been removed.", "success");
      }
    });
  };

  const handleDeleteItem = (itemId) => {
    Swal.fire({
      title: "Confirm Deletion",
      text: "Do you want to remove this product from the cart?",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        removeItem(itemId);
        Swal.fire("Deleted", "Product removed from the cart.", "success");
      }
    });
  };

  return (
    <section className="flex flex-col justify-between gap-6 p-10 lg:p-20 rounded-md shadow-md">
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <Badge badgeContent={item.quantity} color="success">
            <img
              src={item.img}
              alt={item.name}
              className="object-cover border border-gray-500 bg-gray-500/20 rounded-md p-2 h-[80px] w-[80px]"
            />
          </Badge>
          <h5 className="text-sm font-bold"> {item.name} </h5>
          <p className="text-sm">
            Price: <span className="font-bold"> ${item.price} USD </span>
          </p>
          <div>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="font-bold border border-gray-500 text-xs p-2 hover:bg-red-700 hover:border-red-700 transition-all duration-300 rounded-md">
              Delete
            </button>
          </div>
        </div>
      ))}
      <h3>
        Total: <span className="font-bold">${cartTotalPrice} USD</span>
      </h3>

      <button
        onClick={handleCleanCart}
        className="font-bold border border-gray-500 hover:bg-red-700/50 p-2 rounded-md  w-full transition-all duration-300">
        Clean cart
      </button>
    </section>
  );
};
