import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useContext } from "react";
import { Table } from "react-bootstrap";
import { cartContext } from "../../contexts/CartProvider";

const ProductsInCart = () => {
  const { cartProducts, clear,removeItem } = useContext(cartContext);

  // const [total, setTotal] = useState(0);

  const prodCarrito = cartProducts.map((p, i) => {
    return (
      <tr key={i} style={{verticalAlign:"middle"}}>
        <td>
          <img src={p.img} width={"50%"} alt="" objetcfit="contain" />
        </td>
        <td>{p.producto}</td>
        <td>{p.quentity}</td>
        <td>${p.price}</td>
        <td>${p.total}</td>
        <td>
         <button className='btn btn-danger' onClick={()=>removeItem(p.id)} > <FontAwesomeIcon icon={faTrashCan} /></button>
        </td>
      </tr>
    );
  });

  return (
    <div className="container">
      <h1>Items del carrito</h1>

      <Table striped  hover>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio unitario</th>
            <th>Sub total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{prodCarrito}</tbody>
      </Table>
      <div>
      {/* <button onClick={()=>clear} className="btn btn-warning">
              Limpiar carrito
            </button> */}
      </div>
      
    </div>
  );
};

export default ProductsInCart;
