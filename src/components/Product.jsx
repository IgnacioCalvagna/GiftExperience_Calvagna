import React, { useState } from "react";

const Product = ({ fakeData }) => {

  
  const [stock, setStock] = useState(fakeData.stock);

    const handleStock =()=>{
        console.log("render +")
        return setStock(stock +1)
    }

    const handleStockMenos =()=>{
        console.log("render -")
        return setStock(stock -1)
    }

    const ganancia = stock*fakeData.price


  return (
    <>
      Producto

      
      <p>Producto: {fakeData.producto}</p>
      <p>Precio ${fakeData.price}</p>
      <p>Stock: {stock}</p>
      <p>Ganancia prevista $ {ganancia} </p>

    
      <button className="btn btn-danger" onClick={handleStockMenos}>quitar stock</button>
    <button className="btn btn-info" onClick={handleStock}>agregar stock</button>

<br />

    
    </>
  );
};

export default Product;
