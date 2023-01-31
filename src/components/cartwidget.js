import { Image } from "react-bootstrap";
import '../styles/cartwidget.css'

function Cartwidget () {
    return (
        <div className="cart-container" >
         <Image style={{width: 50}} src='car.png' />   
         <p className="numero"> 1 </p> 
        </div>)
        
      
}
export default Cartwidget 