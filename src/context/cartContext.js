import { addDoc, collection, doc, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CartContext = createContext();

function CartProvider({ children }) {
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [isLoadingBuy, setIsLoadingBuy] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const addItemToCart = (newItem) => {
    const pos = carrito.map((e) => e.id).indexOf(newItem.id);
    if (pos !== -1) {
      carrito[pos] = {
        ...carrito[pos],
        amount: carrito[pos].amount + newItem.amount,
        price: carrito[pos].price + newItem.price,
      };
    } else {
      setCarrito([...carrito, newItem]);
    }
  };

  const deleteProductInCartById = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  const handleChangeUser = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitBuy = async () => {
    setIsLoadingBuy(true);
    const order = {
      buyer: user,
      items: carrito,
      total: carrito.reduce((acum, item) => acum + item.price, 0),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order).then(({ id }) => {
      setOrderId(id);
      setCarrito([]);
      setIsLoadingBuy(false);
      navigate("/Success");
    });
  };

  return (
    <CartContext.Provider
      value={{
        carrito,
        setCarrito,
        addItemToCart,
        deleteProductInCartById,
        user,
        isLoadingBuy,
        setIsLoadingBuy,
        orderId,
        setUser,
        handleChangeUser,
        submitBuy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
