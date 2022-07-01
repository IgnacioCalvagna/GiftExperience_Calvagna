import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert";
import "./itemCount.css";

const ItemCount = ({ item, stock, initial,cant,setCant,tot,setTot,onAdd }) => {
  

  const handleMas = () => {
    if (stock < 1) return Swal("No hay stock");
    if (cant >= stock) return Swal("No hay suficiente stock para tu pedido");
    setCant(cant + 1);
  };

  const handleMenos = () => {
    if (cant <= 1) return Swal("no puedes selecconar menos de 1 item");
    setCant(cant - 1);
  };

  const totalito = cant * item.price;
  setTot(totalito)

 /*  const onAdd = () => {
    Swal(
      `Item agregado al carrito:  ${item.producto} \nCantidad: ${cantArt}\nTotal $${tot}`
    );
  }; */

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
          <Button variant="outline-primary" onClick={onAdd}>
            Agregar al carrito
          </Button>
          <br />
          <Button variant="primary" opacity={0.2}>
            {" "}
            Comprar ahora{" "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default ItemCount;
