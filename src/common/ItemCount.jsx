import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert";
import '../assets/css/itemCount.css'

const ItemCount = ({ fakeData,stock,initial }) => {
  
 const [cantArt, setCantArt] = useState(initial);
  const [miStock, setMiStock] = useState(stock) 
const tot = cantArt*fakeData.price
 console.log("mis stock", stock)
  const handleMas=()=>{
    if(stock<1)return Swal("No hay stock")
    if(cantArt>=stock)return Swal("No hay suficiente stock para tu pedido")
    setCantArt(cantArt +1)
  }

  const handleMenos=()=>{
    if(cantArt<=1) return Swal("no puedes selecconar menos de 1 item")
    setCantArt(cantArt -1)
  }


  useEffect(() => {
    if(stock<1) {
      initial=stock
    } 

  }, [])
  



  const onAdd =()=>{
    Swal(`Item agregado al carrito \n\n ${fakeData.producto} x ${cantArt}\n\n Total $${tot} `)
  }


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

      <br />
      
    </div>
      <Button  variant="outline-primary" onClick={onAdd}>
        Agregar al carrito
      </Button>
      
    </>
  );
};
export default ItemCount;
