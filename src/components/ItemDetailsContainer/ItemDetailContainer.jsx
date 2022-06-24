import React, { useEffect, useState } from 'react'
import Loading from '../../common/Loading/Loading';
import fakeData from '../../products.json'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const {id} =useParams()
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log("sera el id?",id)
    useEffect(() => {
        const producto = fakeData.productos;
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(producto[1]);
          }, 2000);
        })
        .then((resolve) => {
            setProduct(resolve);
          setLoading(false);
        });
      }, []);

    

  return (
    <div className="ItemDetail">
        
        {loading? <Loading/>:
        <ItemDetail product={product} />
    }
    </div>
  )
}

export default ItemDetailContainer