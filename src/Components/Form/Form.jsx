import { useContext, useState } from "react";
import { FirebaseContext } from "../../Context/FirebaseContext";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";

export const Form = () => {
  const { addOrder, orderId } = useContext(FirebaseContext);
  const { cartItems, cartTotalPrice, removeAllItems } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email !== confirmEmail) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Email and Confirm Email do not match.",
      });
      return;
    } else if (cartItems.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Your shopping cart is empty. Add at least one product.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await addOrder(
        cartItems,
        { name, lastname, email, confirmEmail, address },
        cartTotalPrice
      );

      setName("");
      setLastname("");
      setEmail("");
      setConfirmEmail("");
      setAddress("");
      removeAllItems();

      Swal.fire({
        icon: "success",
        title: "Order placed successfully!",
        text: `Order number: ${orderId}`,
      });
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col gap-10 text-base p-10 lg:p-20 border-r border-gray-700">
      <h2 className="text-3xl text-green-500 font-bold mb-4">
        Complete your order
      </h2>
      <form onSubmit={handleSubmit} className="grow space-y-4">
        <div className="w-full flex space-x-4">
          <div className="w-full">
            <label htmlFor="name" className="text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              autoCapitalize="none"
              aria-autocomplete="Your name"
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Your name"
              className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="lastname"
              className="text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              placeholder="Your last name"
              className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Your email"
            className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="confirmEmail"
            className="text-sm font-medium text-gray-600">
            Confirm Email
          </label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            required
            placeholder="Confirm your email"
            className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-sm font-medium text-gray-600">
            Shipping Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            placeholder="Your address"
            className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="font-bold border border-gray-500 hover:bg-green-700 p-2 rounded-md w-full transition-all duration-300">
          {isSubmitting ? "Sending..." : "Send Order"}
        </button>
      </form>
    </section>
  );
};
