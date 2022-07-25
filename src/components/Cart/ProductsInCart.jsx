import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
// import Modal from 'react-bootstrap'
import { useContext } from "react";
import { Table } from "react-bootstrap";
import { cartContext } from "../../contexts/CartProvider";
import { Link } from "react-router-dom";
import "./productsInCart.css";
const ProductsInCart = () => {
  const { cartProducts, removeItem, totPrecio } = useContext(cartContext);

  const prodCarrito = cartProducts.map((p, i) => {
    return (
      <tr key={i} style={{ verticalAlign: "middle" }}>
        <td>
          <img
            src={p.imagenes}
           /*  width={"50%"}
            height={"100"} */
            alt=""
            objetcfit="contain"
            className="fotiProd"
          />
        </td>
        <td>{p.producto}</td>
        <td>{p.quentity}</td>

        <td>${p.total}</td>
        <td>
          <button className="btn btn-danger" onClick={() => removeItem(p.id)}>
            {" "}
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container ">
      <h1>Items del carrito</h1>
      <div className="miTable">
        <Table>
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Sub total</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>{prodCarrito}</tbody>
        </Table>
      </div>
      <div style={{ float: "right" }}>
        <h2>Total ${totPrecio} </h2>
      </div>
      <Link to="/checkout">
        {" "}
        <button className="btn btn-success">comprar </button>
      </Link>
    </div>
  );
};

export default ProductsInCart;
