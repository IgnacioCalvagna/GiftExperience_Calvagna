import React, { useState } from "react";

const Product = ({ fakeData }) => {

  
  const [stock, setStock] = useState(fakeData.stock);

    const handleStock =()=>{
        console.log("render")
        return setStock(stock +1)
    }


  return (
    <>
      Producto
      <p>{fakeData.id}</p>
      <p>{fakeData.producto}</p>
      <p>Precio ${fakeData.price}</p>
      <p>{stock}</p>
    
    <button onClick={handleStock}>agregar stock</button>
    </>
  );
};

export default Product;
