import React from "react";
import ItemListContainer from "./ItemListContainer";
const Home = () => {
  return (
    <>
      <div className="contenedor">
        <ItemListContainer nombre={"Ignacio"} apellido={"Calvagna"} />
      </div>
    </>
  );
};

export default Home;
