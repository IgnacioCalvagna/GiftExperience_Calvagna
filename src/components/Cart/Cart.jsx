import React from 'react'
import { useContext } from "react";
import { cartContext } from "../../contexts/CartProvider";
import EmptyCart from './EmptyCart';
import ProductsInCart from './ProductsInCart';


const Cart = () => {

    const { cartProducts} = useContext(cartContext);




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