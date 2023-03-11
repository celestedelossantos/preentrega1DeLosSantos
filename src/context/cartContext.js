import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

  const addItemToCart = (item) => {
    setCarrito([...carrito,item])
  };

  return (
    <CartContext.Provider value={{ carrito, setCarrito, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
