import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import "./itemCount.css";

const ItemCount = ({ item, stock, initial, onAdd }) => {
  const [cant, setCant] = useState(initial);
  

  const handleMas = () => {
    if (stock < 1) return Swal("No hay stock");
    if (cant >= stock) return Swal("No hay suficiente stock para tu pedido");
    setCant(cant + 1);
  };

  const handleMenos = () => {
    if (cant <= 1) return Swal("no puedes selecconar menos de 1 item");
    setCant(cant - 1);
  };

  

  return (
    <>
      <div className="botonera">
        <Button
          className="miBtn"
          variant="outline-primary"
          onClick={handleMenos}
        >
          -
        </Button>

        <Button className="btn miBtn " disabled>
          {cant}
        </Button>

        <Button className="miBtn" variant="outline-primary" onClick={handleMas}>
          +
        </Button>

        <div className="btnAbajito">
          <Button variant="outline-primary" onClick={() => onAdd(cant)}>
            Agregar al carrito
          </Button>
          <br />

          <Link to='/cart'>
          <Button variant="primary" opacity={0.2}>
            {" "}
            Comprar ahora{" "}
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
