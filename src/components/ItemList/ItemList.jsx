import React from "react";

import Item from "../../common/Item/Item";
import "./itemList.css";


const ItemList = ({ productList }) => {
  

  

  const productos = productList.map((item, i) => {
    return( 
      <div className="items">

      <Item className="col-6" item={item} key={item.id}  />
      </div>
    
    );
  });

  return <div className="items container">{productos}</div>;
};

export default ItemList;
