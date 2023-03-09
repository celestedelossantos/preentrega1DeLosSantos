import { Image } from "react-bootstrap";
import '../styles/cartwidget.css'
import { useNavigate  } from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function Cartwidget () {

    const { carrito } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="cart-container" onClick={()=> {navigate('/cart')}} >
         <Image style={{width: 50}} src='car.png' />   
         <p className="numero"> {carrito.length} </p> 
        </div>)
}
export default Cartwidget 