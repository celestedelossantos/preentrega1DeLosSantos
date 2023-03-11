import { Col, Container, Image, Row } from "react-bootstrap";
import '../styles/itemDetail.css'
import AddItemButton from "./AddItemButton";
import Description from "./Description";

const ItemDetail = ({ item }) => {
  return (
    <Container className="item-contianer p-4"> 
      <Row>
        <Col>
          <Row>
            <Col>
              <Description>
                <h3 className="mb-2">{item.title}</h3>
                <span className="text my-4">{item.description}</span>
                <h4 className="my-4">${item.price}</h4>
              </Description>
            </Col>
          </Row>
          <Row>
            <Col>
              <AddItemButton text="Agregar al carrito" item={item} />
            </Col>
          </Row>
        </Col>
        <Col>
          <Image fluid src={item.image} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemDetail;
