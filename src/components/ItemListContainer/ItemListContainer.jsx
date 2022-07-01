import React, { useContext, useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import fakeData from "../../products.json";
import "./itemListContainer.css";
import Loading from "../../common/Loading/Loading";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { myContext } from "../../App";
const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoria } = useParams();

  const { darkMode, setDarkMode } = useContext(myContext);

  console.log("THEME ------>", darkMode);

  useEffect(() => {
    let productos = fakeData.productos;
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    }).then((resolve) => {
      if (!categoria) {
        setProductList(resolve);
      } else {
        resolve = productos.filter(
          (product) => product.categoria === categoria
        );

        setProductList(resolve);
      }
      setLoading(false);
    });
  }, [categoria]);

  const handleChangeTheme = () => {
    darkMode ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <>
      <h3 className="mih2">Gift Experience App</h3>

      <button onClick={handleChangeTheme}> change theme</button>
      <div>
        {loading ? (
          <div className="load">
            {" "}
            <Loading />
          </div>
        ) : (
          <Container>
            <ItemList productList={productList} className="productsList" />
          </Container>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
