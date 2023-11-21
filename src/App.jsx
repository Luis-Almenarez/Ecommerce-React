import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cart,
  ItemDetailContainer,
  ItemListContainer,
  Navbar,
} from "./Components";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
