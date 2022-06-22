import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import fakeData from "../../products.json";
import "./itemListContainer.css";
import Loading from "../../common/Loading/Loading";

const ItemListContainer = (props) => {
  const { nombre, apellido } = props;
  const productos = fakeData.productos;

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    }).then((resolve) => {
      setProductList(resolve);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="mih2">
        ItemListContainer hecho por {nombre} {apellido}
      </h2>
      <div className="algo">
        {loading ? (
          <div className="load">
            {" "}
            <Loading />
          </div>
        ) : (
          <div className="productosList">
            <ItemList productList={productList} />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
