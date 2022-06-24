import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemDetailContainer from "./components/ItemDetailsContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Footer from "./components/Footer/Footer";

// import FetchApi from "./clases/claseFetch/CatsContainer";

function App() {
  return (
    <>
      <Navbar />
      <div>
        {/* <FetchApi/> */}
        {/* <div>
          <ItemListContainer nombre={"Ignacio"} apellido={'Calvanga'} />
        </div> */}

        
        <ItemDetailContainer />
        {/* <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        </Routes> */}
        {/* <Route path={'/category/:id'} element={<ItemListContainer/>} />
         */}
        {/* <Route path={'/aboutUs'} element={<AboutUs/>} /> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
