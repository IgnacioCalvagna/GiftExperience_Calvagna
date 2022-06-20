import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import fakeData from "../products.json";
import "../assets/css/itemListContainer.css";
import Loading from "../common/Loading";

const ItemListContainer = (props) => {
  const { nombre, apellido } = props;
  const productos = fakeData.productos;

  const [productList, setProductList] = useState([]);
  const [loading,setLoading] = useState(true)


  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    }).then((resolve) => {
      setProductList(resolve);
      setLoading(false)
    });
  }, []);

  console.log(productList);

  return (
    <>
      <h2 className="mih2">
        ItemListContainer hecho por {nombre} {apellido}
      </h2>
      {
        loading? <div className="load"> <Loading/></div> :
      <div className="productosList">
        <ItemList productList={productList} />
      </div>
      }
    </>
  );
};

export default ItemListContainer;
