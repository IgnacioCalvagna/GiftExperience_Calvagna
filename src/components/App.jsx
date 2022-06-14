import "../assets/css/App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import ItemListContainer from "./ItemListContainer";
import Card from "./Card";
import Product from "./Product";

function App() {
  const fakeData = { id: 1, producto: "Día de spa", price: 10000 ,stock:100};
  const stock = 100
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="contenedor">
          <ItemListContainer nombre={"Ignacio"} apellido={"Calvagna"} />
        </div>

        <Product fakeData={fakeData} />

        <Routes>
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
