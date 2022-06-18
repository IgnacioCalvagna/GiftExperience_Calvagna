import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />

        <ItemListContainer nombre={"ignacio"} apellido={'calvanga'} />

        <Routes>
          {/* <Route path={'/'} element={<Home/>} /> */}
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
