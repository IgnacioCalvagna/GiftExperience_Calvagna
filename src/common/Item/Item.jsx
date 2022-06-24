import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import './item.css'
import { Link, useParams } from "react-router-dom";
const LaCard = ( {  item } ) => {
  
  
  const {id} = useParams()



  return (
    <div className="miCard">
      <Card style={{ width: "18rem" , margin:'0 auto' }}>
      <Link to={`/item/${id}`} >  <Card.Img variant="top" src={item.img[0]?item.img[0]:null} width={'15%'} /></Link>
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
