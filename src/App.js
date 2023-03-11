import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Category from "./components/Category";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CartProvider from "./context/cartContext";
import Navbarprincipal from "./components/Layout/Navbar";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Navbarprincipal />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<Category />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
