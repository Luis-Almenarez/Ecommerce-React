import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemListContainer, Navbar } from "./Components";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
