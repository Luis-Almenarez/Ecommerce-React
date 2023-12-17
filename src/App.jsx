import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  Navbar,
} from "./Components";
import { CartContextProvider } from "./Context/CartContext";
import { Footer } from "./Components/Footer/Footer";

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
      <Footer />
    </BrowserRouter>
  );
};
