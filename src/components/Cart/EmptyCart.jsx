import React from "react";
import { Link } from "react-router-dom";
import "./emptyCart.css";
import exclamation_mark from "../../assets/img/exclamation_mark.png";
const EmptyCart = () => {
  return (
    <div className="container noHayProd">
      <h3>
        No hay productos en el carrito <br /> {" "}
      </h3>

      <div>
        <button className="circle">
          <img src={exclamation_mark} width="85%" alt="" />
        </button>
      </div>
        <h4>Por favor regrese al</h4>
      <Link to="/">
        {" "}
        <button className="btn"> <h2>Home</h2></button>
      </Link>
    </div>
  );
};

export default EmptyCart;
