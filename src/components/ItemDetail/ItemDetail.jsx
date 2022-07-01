import React, { useState } from "react";
import "./itemDetail.css";
import ItemCount from "../../common/ItemCount/ItemCount";
import Swal from "sweetalert";
// import CarouselDetails from "../CarouselDetails/CarouselDetails";
const ItemDetail = ({ product }) => {
  const [cant, setCant] = useState(1);
  const [tot, setTot] = useState(0);


  const onAdd = () => {
    Swal(
      `Item agregado al carrito:  ${product.producto} \nCantidad: ${cant}\nTotal $${tot}`
    );
  };

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
            <ItemCount
              item={product}
              stock={product.stock}
              initial={1}
              cant={cant}
              setCant={setCant}
              tot={tot}
              setTot={setTot}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
