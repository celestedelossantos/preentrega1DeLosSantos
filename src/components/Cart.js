import { useContext } from "react"
import { CartContext } from "../context/cartContext"


function Cart(){
    const { carrito } = useContext(CartContext);
    return (<h1>CARRITO</h1>)
}

export default Cart