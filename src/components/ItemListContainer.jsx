import React from "react";

const ItemListContainer = (props) => {
  const { nombre, apellido } = props;
  return (
    <>
      <h2>
        ItemListContainer hecho por {nombre} {apellido}
      </h2>
    </>
  );
};

export default ItemListContainer;
