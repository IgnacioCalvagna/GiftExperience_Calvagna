import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/CartProvider";
import './cartWidget.css';
// import ItemCount from "../../common/ItemCount/ItemCount";

const CardWidget = () => {
  const { cartProducts, clear, removeItem, totCant } = useContext(cartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productosDelCarrito = cartProducts.map((p, i) => {
    return (
      <div key={i}>
        <p>
          {" "}
          <strong> Producto :</strong> {p.producto}
        </p>
        <img src={p?.img[0]} width="100%" alt="dasdasd" />
        <p> cantidad : {p.quentity}</p>

        <button className="btn btn-danger" onClick={() => removeItem(p.id)}>
          Borrar item
        </button>

        <hr />
      </div>
    );
  });

  

  return (
    <div>
      <div className="elCart">
        <FontAwesomeIcon onClick={handleShow} icon={faCartShopping} />

        <button className='btn btnCount ' disabled> {totCant} </button>
      </div>





      {show && (
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Carrito </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <hr />

            {productosDelCarrito}
            <button onClick={clear} className="btn btn-warning">
              Limpiar carrito
            </button>
            <Link to='/cart'>
            <button className="btn btn-warning">Finalizar compra</button>
            </Link>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </div>
  );
};
export default CardWidget;
