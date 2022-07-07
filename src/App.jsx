import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemDetailContainer from "./components/ItemDetailsContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:categoria"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
