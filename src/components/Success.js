import { useContext } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext"

const Success = () =>{
    const { orderId } = useContext(CartContext);
    const navigate = useNavigate();
    return (
        <Container className="d-flex justify-content-center flex-column">
            <h2 className="text-center my-5"> Felicitaciones, tu orden fue creada!</h2>
            <span className="text my-4 text-center">tu codigo de orden es <b>{orderId}</b> recorda guardarlo y no perderlo.</span>
            <span className="text my-2 text-center">Gracias por confiar en Noah Store!</span>
            <Button className="m-auto mt-4 " variant="outline-dark" onClick={()=>{ navigate('/')}}>Volver al inicio</Button>
        </Container>
    )
}

export default Success