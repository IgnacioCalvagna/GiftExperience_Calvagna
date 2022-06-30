import React from "react";
import "./itemDetail.css";
import ItemCount from "../../common/ItemCount/ItemCount";
// import CarouselDetails from "../CarouselDetails/CarouselDetails";
const ItemDetail = ({ product }) => {
  return (
    <>
      <div className="container itemDetail">
        <div className="miImg">
          <h1>{product.producto}</h1>
          <img src={product.img[0]} width={"100%"} alt="" />
        </div>

        <div className="descProd">
          <p>{product.desc}</p>

          <p>$ {product.price}</p>

          <div className="count">
            <ItemCount item={product} stock={product.stock} initial={1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
