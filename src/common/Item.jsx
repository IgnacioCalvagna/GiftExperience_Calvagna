import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import '../assets/css/card.css'

const LaCard = ( {  item,foto } ) => {
  
  



  return (
    <div className="miCard">
      <Card style={{ width: "18rem" , margin:'0 auto' }}>
        <Card.Img variant="top" src={foto} width={'45%'} />
        <Card.Body>
          <Card.Title>{item.producto}</Card.Title>
          <Card.Text>
            {item.desc}
          </Card.Text>
          <Card.Text>
            Valor ${item.price}
          </Card.Text>
          
          <div className="botonera">
          <ItemCount item={item} stock={item.stock} initial={1} />
          </div>
          
         
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default LaCard;
