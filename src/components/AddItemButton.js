import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../context/cartContext"

const AddItemButton = ({text, item}) =>{

    const { addItemToCart } = useContext(CartContext);

    return (
        <>
            <Button onClick={()=>{addItemToCart(item)}} >{text}</Button>
        </>
    )
}

export default AddItemButton