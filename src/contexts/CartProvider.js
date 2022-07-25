import { createContext, useEffect, useState } from "react";
export const cartContext = createContext(null);

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState(() => {
    const prodStorage = localStorage.getItem("carrito");

    try {
      return prodStorage ? JSON.parse(prodStorage) : [];
      
    } catch (err) {
      console.log(err);
    }
  });
  const [totCant, setTotCant] = useState(0);
  const [totPrecio, setTotPrecio] = useState(0);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cartProducts));
  }, [cartProducts]);


  const addToCart = (item, quentity) => {
    const prodAux = {
      id: item.id,
      producto: item.producto,
      descripcion: item.descripcion,
      precio: item.precio,
      stock: item.stock,
      imagenes: item.imagenes,
      categoria: item.categoria,
      quentity: quentity,
      total: quentity * item.precio,
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
    // setTotCant(totCant + prodAux.quentity);
    setTotPrecio(totPrecio + prodAux.total);
  };

  const removeItem = (itemId) => {
    const element = cartProducts.find((prod) => prod.id === itemId);
    const newArr = cartProducts.filter((prod) => prod.id !== itemId);

    setCartProducts(newArr);
    // let newQuentity = totCant;
    // setTotCant((newQuentity -= element.quentity));
    setTotPrecio(totPrecio - element.total);
  };

  const clear = () => {
    setCartProducts([]);
    setTotCant(0);
  };

  return (
    <cartContext.Provider
      value={{
        cartProducts,
        addToCart,
        clear,
        removeItem,
        cantProdCart: cartProducts.reduce((prev,current)=>prev+current.quentity),
        totCant,
        totPrecio,
      }}
    >
      {children}

    </cartContext.Provider>
  );
};

export default CartProvider;
