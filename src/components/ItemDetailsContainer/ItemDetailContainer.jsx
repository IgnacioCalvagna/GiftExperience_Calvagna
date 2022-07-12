import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
// import fakeData from "../../products.json";
import ItemDetail from "../ItemDetail/ItemDetail";

import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const elProducto = doc(db, "productos", id);
    getDoc(elProducto).then((res) => {
      if (res.exists()) {
        setProduct({ id: res.id, ...res.data() });
        setLoading(false);
      }
    });
  }, [id]);

  return (
    <div className="ItemDetail">
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
