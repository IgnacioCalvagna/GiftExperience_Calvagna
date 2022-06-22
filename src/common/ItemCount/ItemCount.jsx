import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert";
import "./itemCount.css";

const ItemCount = ({ item, stock, initial }) => {
  const [cantArt, setCantArt] = useState(initial);

  // const [miStock, setMiStock] = useState(stock)

  
  const handleMas = () => {
    if (stock < 1) return Swal("No hay stock");
    if (cantArt >= stock) return Swal("No hay suficiente stock para tu pedido");
    setCantArt(cantArt + 1);
  };

  const handleMenos = () => {
    if (cantArt <= 1) return Swal("no puedes selecconar menos de 1 item");
    setCantArt(cantArt - 1);
  };

  const onAdd = () => {
    const tot = cantArt * item.price;
    Swal(
      `Item agregado al carrito:  ${item.producto} \nCantidad: ${cantArt}\nTotal $${item.price*cantArt}`
    );
  };

  return (
    <>
      <div className="botonera">
        <Button variant="outline-primary" onClick={handleMenos}>
          -
        </Button>

        <Button className="btn " disabled>
          {cantArt}
        </Button>

        <Button variant="outline-primary" onClick={handleMas}>
          +
        </Button>

        
      </div>




      <Button variant="outline-primary" onClick={onAdd}>
        Agregar al carrito
      </Button>
    </>
  );
};
export default ItemCount;
