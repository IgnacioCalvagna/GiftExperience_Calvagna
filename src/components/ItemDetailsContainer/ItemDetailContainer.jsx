import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import fakeData from "../../products.json";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      let miProducto = fakeData.productos.find((p)=>p.id===Number(id) );
      setTimeout(() => {
        
        resolve(miProducto);
      }, 2);
    }).then((resolve) => {
      setProduct(resolve);
      setLoading(false);
    });
  }, [id]);



  console.log(product)

  return (
    <div className="ItemDetail">
      {loading ? <Loading /> : <ItemDetail product={product} />}
      
    </div>
  );
};

export default ItemDetailContainer;
