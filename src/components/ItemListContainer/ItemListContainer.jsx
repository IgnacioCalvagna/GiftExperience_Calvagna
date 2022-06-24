import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import fakeData from "../../products.json";
import "./itemListContainer.css";
import Loading from "../../common/Loading/Loading";

const ItemListContainer = (props) => {
  // const { nombre, apellido } = props;
  

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productos = fakeData.productos;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    })
    .then((resolve) => {
      setProductList(resolve);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="mih2">
        {/* ItemListContainer hecho por {nombre} {apellido} */}
        <h3>Gift Experience App</h3>
      </h2>

      <div >
        {loading ? (
          <div className="load">
            {" "}
            <Loading />
          </div>
        ) : (
          <div >

            <ItemList productList={productList} className="productsList" />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
