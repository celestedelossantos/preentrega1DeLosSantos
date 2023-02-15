import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardContainer = ({product}) => {
    return (
        <Card className="m-4" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} style={{height:360}} />
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Link className="btn btn-primary" to={`/item/${product.id}`}>Detalle</Link>
      </Card.Body>
    </Card>
    )
}

export default CardContainer;