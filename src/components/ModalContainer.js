import { useContext, useState } from "react";
import { Button, Col, Container, Form, Modal, Row, Spinner } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

const ModalContainer = ({ show, setShow }) => {
  const { user, setUser, handleChangeUser } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>...Ups! Necesitamos informacion tuya.</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={user.name}
                  name="name"
                  onChange={handleChangeUser}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChangeUser}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Celular
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  name="phone"
                  onChange={handleChangeUser}
                />
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>{
            setUser({
                name:'',
                phone:'',
                email:''
            })
            handleClose();
        }}>
          Cancelar
        </Button>
        {isLoading? <Spinner animation="border" variant="secondary" />: <Button variant="primary" onClick={()=>{
            setIsLoading(true);
            setTimeout(()=>{
                setIsLoading(false);
                handleClose();
            },1500)
        }}>
          Guardar
        </Button>}
        
      </Modal.Footer>
    </Modal>
  );
};

export default ModalContainer;
