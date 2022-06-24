import React from "react";
import "./itemDetail.css";
import ItemCount from "../../common/ItemCount/ItemCount";
import CarouselDetails from "../CarouselDetails/CarouselDetails";
const ItemDetail = ( {   product } ) => {



  return (
    <div className="container">
      <div className="ItemDetail">
        <br />
        <br />
        <br />
        <br />

        <div className="detail">
          <div className="miImg">
            {/* <img src={product.img} alt="" /> */}
            <CarouselDetails product={product} i={1} />
          </div>
          <div className="descProd">
            <h3>{product.producto}</h3>
            <strong>Descipcion</strong> <br />
            <p>{product.desc}</p>
            <strong>Precio</strong> <br />
            <p>${product.price}</p>
            <div className="elItem">
              <ItemCount item={product} stock={product.stock} initial={1} />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ItemDetail;
