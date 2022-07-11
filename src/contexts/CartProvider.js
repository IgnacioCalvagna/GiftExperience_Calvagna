//@ts-check
import { createContext, useState } from "react";
export const cartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const [totCant, setTotCant] = useState(0);
  const [totPrecio, setTotPrecio] = useState(0);

  const addToCart = (item, quentity) => {
    const prodAux = {
      id: item.id,
      producto: item.producto,
      desc: item.desc,
      price: item.price,
      stock: item.stock,
      img: item.img,
      categoria: item.categoria,
      quentity: quentity,
      total: quentity * item.price,
    };

    const itsInCart = cartProducts.find((miItem) => miItem.id === item.id);
    if (itsInCart) {
      setCartProducts(
        cartProducts.map((p) => {
          if (p.id === item.id) {
            return {
              ...p,
              quentity: (p.quentity += quentity),
              total: quentity * item.price,
            };
          } else {
            return p;
          }
        })
      );
    } else {
      setCartProducts([...cartProducts, prodAux]);
    }
    setTotCant(totCant + prodAux.quentity);
    setTotPrecio(totPrecio + prodAux.total);
  };

  const cantProdInCart = () => {
    cartProducts.forEach((p) => {});
  };
  // const itInCart = (prod) => {
  //   const miProducto = cartProducts.find((miItem) => miItem.id === prod.id);
  //   if (miProducto !== undefined) setEsta(true);
  //   return esta;
  // };

  const removeItem = (itemId) => {
    const newArr = cartProducts.filter((prod) => prod.id !== itemId);
    
    setCartProducts(newArr);
    // setTotCant()
  };

  const clear = () => {
    setCartProducts([]);
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clear,
        removeItem,
        cantProdInCart,
        totCant,
        totPrecio,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
