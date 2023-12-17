import { useState } from "react";

export const Form = ({ onEnviarPedido }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onEnviarPedido({ name, lastname, email, direccion });
    setName("");
    setLastname("");
    setEmail("");
    setDireccion("");
  };

  return (
    <section className="flex flex-col text-xl p-10 lg:p-20 border-r border-gray-700">
      <h2 className="text-2xl text-green-500 font-bold mb-4">
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
            placeholder="Your email"
            className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="direccion"
            className="text-sm font-medium text-gray-600">
            Shipping Address
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            placeholder="Your address"
            className="border-2 border-solid border-black focus:border-green-500 focus:outline-none bg-gray-500/30 mt-1 p-2 w-full transition-all duration-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="font-bold border border-gray-500 hover:bg-green-700 p-2 rounded-md  w-full transition-all duration-300">
          Send Order
        </button>
      </form>
    </section>
  );
};
