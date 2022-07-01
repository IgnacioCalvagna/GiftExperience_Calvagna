import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemDetailContainer from "./components/ItemDetailsContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import AboutUs from "./components/AboutUs/AboutUs";
// import Footer from "./components/Footer/Footer";

// import FetchApi from "./clases/claseFetch/CatsContainer";
import { createContext, useState } from "react";

export const myContext = createContext(null);

function App() {
 
  const [darkMode, setDarkMode] = useState(false);
 
  const value = {
    darkMode,
    setDarkMode,
  };

  return (
    <>
      <myContext.Provider value={value}>
        <div style={{backgroundColor: darkMode ? "#a8e8e9": " #e8e8e9"}}>
        <Navbar />

          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route
              path={"/category/:categoria"}
              element={<ItemListContainer />}
            />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          </Routes>

          {/* <FetchApi/> */}
        </div>
      </myContext.Provider>
    </>
  );
}

export default App;
