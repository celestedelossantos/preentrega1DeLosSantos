import "./App.css";
import Navbarprincipal from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import ItemDetail from "./components/ItemDetail";
import Cart from "./components/Cart";
import CartProvider from "./context/cartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbarprincipal />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetail />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
