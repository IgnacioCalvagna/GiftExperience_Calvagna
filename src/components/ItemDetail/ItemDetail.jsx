import React from "react";
import "./itemDetail.css";
import ItemCount from "../../common/ItemCount/ItemCount";
import Swal from "sweetalert";
import {cartContext} from '../../contexts/CartProvider'
import { useContext } from "react";
// import CarouselDetails from "../CarouselDetails/CarouselDetails";
const ItemDetail = ({ product }) => {
  
  const {addToCart} = useContext(cartContext)
  
  // const [cant,setCant] = useState(0)

const precio = product.precio 


  const onAdd = (cant) => {


    addToCart(product,cant)
    const produ = {product: product,cant:cant}
    localStorage.setItem("carrito",[produ] ); 
    Swal(`Item agregado al carrito:  ${product.producto} por un valor de $ ${precio*cant} `,'success');
  };

  

  return (
    <>
      <div className="container itemDetail">
        <div className="miImg">
          <h1>{product.producto}</h1>
          <p>Categoria: {product.categoria}</p>
          <img src={product.imagenes[0]} width={"100%"} alt="" />
        </div>

        <div className="descProd">
          <p className='laDesc'>{product.descripcion}</p>

          <p>$ {product.precio}</p>

          <div className="count">
            <ItemCount
              item={product}
              stock={product.stock}
              initial={1}
              onAdd={onAdd}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
