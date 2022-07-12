import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
// import fakeData from "../../products.json";
import "./itemListContainer.css";
import Loading from "../../common/Loading/Loading";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

// Firebase Seccion
import {
  collection,
  getDocs,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

// import { useContext } from "react";
// import { themeContext } from "../../contexts/ThemeContext";

const ItemListContainer = () => {
  // const { changeTheme } = useContext(themeContext);
  // const { darkMode, setDarkMode } = useContext(myContext);

  const { categoria } = useParams();
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productos = collection(db, "productos");

    if (!categoria) {
      getDocs(productos).then((res) => {
        setProductList(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    } else {
      const queryProducts = query(
        collection(db, "productos"),
        where("categoria", "==", categoria)
      );
      getDocs(queryProducts).then((res) =>
        setProductList(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      );
    }

    setLoading(false);
  }, [categoria]);

  return (
    <>
      <h3 className="mih2">Gift Experience App</h3>

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
