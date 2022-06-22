import React from "react";
import Item from "../../common/Item/Item";
import "./itemList.css";
import foto1 from '../../assets/img/diaSpa.jpeg';
import foto2 from "../../assets/img/paracaida.jpeg";
import foto3 from "../../assets/img/museo.jpeg";
import foto4 from "../../assets/img/bares.jpeg";

const ItemList = ({ productList }) => {
  const fotos = [foto1, foto2, foto3, foto4];

  const productos = productList.map((item, i) => {
    return <Item item={item} key={item.id} foto={fotos[i]} />;
  });

  return <div className="items container">{productos}</div>;
};

export default ItemList;
