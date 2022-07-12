import { Card } from "react-bootstrap";
import './item.css';
import { Link} from "react-router-dom";
const LaCard = ( {  item } ) => {
  
  
    // const descRedu = `${item.descripcion.slice(0,55)} ...`

   const shortDesc = item.descripcion.slice(0,75)
  return (
    <div className="miCard">
      <Card style={{ width: "18rem" , margin:'0 auto' }}>
      <Link to={`/item/${item.id}`} >  <Card.Img variant="top" src={item.imagenes[0]?item.imagenes[0]:null} width={'15%'} height={'230px'} objetcfit="contain"/></Link>
        <Card.Body>
          
          <Card.Title>  {item.producto.length<20?item.producto: `${item.producto.slice(0,15)},...`}</Card.Title>
          
          <Card.Text>
            {shortDesc}
          </Card.Text>
          <Card.Text>
            Valor <br /> ${item.precio}
          </Card.Text>
          
        
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default LaCard;
