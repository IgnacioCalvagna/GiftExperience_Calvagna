import React from 'react'
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { cartContext } from "../../contexts/CartProvider";
import EmptyCart from './EmptyCart';
import ProductsInCart from './ProductsInCart';


const Cart = () => {

    const { cartProducts, clear, removeItem } = useContext(cartContext);


console.log(cartProducts)

  return (
    <>

        {
            cartProducts.length === 0 ? <>
            <EmptyCart/>
            </> :
            <>
              <ProductsInCart/>
            
            </>
        }

        


    </>
  )
}

export default Cart