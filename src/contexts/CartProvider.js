import { createContext, useState } from "react";

export const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [esta, setEsta] = useState(false);
  const [totCant, setTotCant] = useState(0);

  const cantProdInCart = () => {
    cartProducts.forEach((p) => {
      let totProds = 0;
      cartProducts.forEach((p) => {
        totProds += p.quentity;
      });
      setTotCant(totProds);
    });
  };

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

    if (itInCart(item)) {
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
  };

  const itInCart = (prod) => {
    const miProducto = cartProducts.find((miItem) => miItem.id === prod.id);
    if (miProducto !== undefined) setEsta(true);
    return esta;
  };

  const removeItem = (itemId) => {
    const newArr = cartProducts.filter((prod) => prod.id !== itemId);
    setCartProducts(newArr);
  };

  const clear = () => {
    setCartProducts([]);
  };

  return (
    <cartContext.Provider
      value={{ cartProducts, addToCart, clear, removeItem, cantProdInCart,totCant }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
