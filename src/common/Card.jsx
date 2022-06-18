import { Card } from "react-bootstrap";
import diaSpa from '../assets/img/diaSpa.jpeg'
import ItemCount from "./ItemCount";
const LaCard = ( { fakeData } ) => {
  
  


  return (
    <div className="miCard">
      <Card style={{ width: "18rem" , margin:'0 auto' }}>
        <Card.Img variant="top" src={diaSpa} width={'45%'} />
        <Card.Body>
          <Card.Title>{fakeData.producto}</Card.Title>
          <Card.Text>
            {fakeData.desc}
          </Card.Text>
          <Card.Text>
            Valor ${fakeData.price}
          </Card.Text>
          
          <ItemCount fakeData={fakeData} stock={fakeData.stock} initial={1} />
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default LaCard;
