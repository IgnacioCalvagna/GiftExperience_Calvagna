import React from "react";
import Card from '../common/Card'


import '../assets/css/itemListContainer.css'
const ItemListContainer = (props) => {
  const { nombre, apellido } = props;
  const fakeData = { id: 1, producto: "Día de spa",desc:"Ideal para hacerce un auto regalo o regalarselo a esa persona que tanto queres ", price: 3420.73,stock: 10 };

  
  return (
    <>
      <h2>
        ItemListContainer hecho por {nombre} {apellido}

      </h2>
        

        <div className="miCard">
          <Card fakeData={fakeData} />
        </div>
        
    </>
  );
};

export default ItemListContainer;
