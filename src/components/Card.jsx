import React from "react";
import { Card,Button } from "react-bootstrap";
const laCard = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Esto es un ejemplo de card importado con React-Bootstrap 
          </Card.Text>
          <Button variant="success">ver mas </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default laCard;
