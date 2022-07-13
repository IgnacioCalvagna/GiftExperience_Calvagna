import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import useInput from "../../hook/useInput";
import { cartContext } from "../../contexts/CartProvider";
import Swal from 'sweetalert2';

const Checkout = () => {
  const { cartProducts, totPrecio } = useContext(cartContext);
  const db = getFirestore();

    const compras = collection(db, "compras");
    
  const nombre = useInput("");
  const apellido = useInput("");
  const email = useInput("");
  const direccion = useInput("");
  const localidad = useInput("");
  const provincia = useInput("");
  const codigoPostal = useInput(0);


  const handleVerificarCompra = (e) => {
    e.preventDefault();

    const pedido = {
      nombre:nombre.value,
      apellido:apellido.value,
      email:email.value,
      provincia:provincia.value,
      cartProducts,
      totPrecio:totPrecio,
    };
   
    addDoc(compras,pedido)
    .then(({id})=>   Swal.fire('Hey user!', `Compra realizada! Nº de orden ${id}`, 'success'))
    
}



  return (
    <div className="container">
      <h1>Checkout </h1>
      <p>Complete sus datos personales para continuar con la compra </p>

      <Form onSubmit={handleVerificarCompra}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              {...nombre}
              required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              {...apellido}
              required
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="alguien@gmail.com"
            {...email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridDireccion">
          <Form.Label>Direccion </Form.Label>
          <Form.Control placeholder="1234 Main St" {...direccion} required/>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLocalidad">
            <Form.Label>Localidad</Form.Label>
            <Form.Control {...localidad} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Provincia</Form.Label>
            <Form.Select defaultValue="Seleccione provincia..." {...provincia} required>
              <option>...</option>
              <option>Capital Federal</option>
              <option>Buenos Aires</option>
              <option>Santa Fe</option>
              <option>Cordoba</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Mendoza</option>
              <option>Catamarca</option>
              <option>Salta</option>
              <option>Jujuy</option>
              <option>Formosa</option>
              <option>Chaco</option>
              <option>Misiones</option>
              <option>Corrientes</option>
              <option>Entre Rios</option>
              <option>La Pampa </option>
              <option>Neuquen</option>
              <option>Rio Negro</option>
              <option>Santa Cruz</option>
              <option>Chubut</option>
              <option>Tierra del Fuego</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Codigo Postal</Form.Label>
            <Form.Control {...codigoPostal} required/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Terminar compra 
        </Button>
      </Form>
    </div>
  );
};

export default Checkout;
