import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "../styles/itemDetail.css";
import AddItemButton from "./AddItemButton";
import Description from "./Description";
import ItemQuentitySelector from "./ItemQuentitySelector";

const ItemDetail = ({ item }) => {

  const [count, setCount] = useState(1);

  return (
    <Container className="item-contianer p-4">
      <Row>
        <Col>
          <Row>
            <Col>
              <Description>
                <h3 className="mb-2">{item.title}</h3>
                <h6 className="my-2 text">
                  {item.stock ? "Hay stock" : "No hay stock"}
                </h6>
                <span className="text my-4">{item.description}</span>
                <h4 className="my-4">${item.price}</h4>
              </Description>
              <ItemQuentitySelector count={count} setCount={setCount} />
            </Col>
          </Row>
          <Row>
            <Col>
              <AddItemButton text="Agregar al carrito" item={{...item, amount:count, price: count * item.price}} />
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
