import { useContext, useState } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import ModalContainer from "./ModalContainer";

function Cart() {
  const { carrito, deleteProductInCartById, submitBuy, user, isLoadingBuy } =
    useContext(CartContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const totalPrice = () => carrito.reduce((acum, item) => acum + item.price, 0);

  return (
    <Container>
      <h1 className="mb-4 mt-4 text-center">
        <b>Carrito</b>
      </h1>
      <Container style={{ width: "60%" }}>
        {carrito.map((item, index) => (
          <CartItem
            item={item}
            key={index}
            onClickButton={() => {
              deleteProductInCartById(item.id);
            }}
          />
        ))}
        <Container className="d-flex justify-content-between border py-2 mt-4 rounded align-items-center">
          <b>Total</b>
          <b>${totalPrice()}</b>
        </Container>
        <Container className="d-flex justify-content-between py-4 px-0">
          <Button
            variant="outline-dark"
            onClick={() => {
              navigate(-1);
            }}
          >
            Seguir comprando
          </Button>
          {totalPrice() > 0 && (
            <Button
              variant="outline-success"
              disabled={isLoadingBuy}
              onClick={() => {
                if (!user.name) {
                  setShow(true);
                } else {
                  submitBuy();
                }
              }}
            >
              {isLoadingBuy ? <Spinner animation="border" variant="secondary" /> : 'Finalizar compra'}
            </Button>
          )}
        </Container>
      </Container>
      <ModalContainer show={show} setShow={setShow} />
    </Container>
  );
}

export default Cart;
