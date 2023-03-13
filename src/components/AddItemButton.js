import { useContext, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const AddItemButton = ({ text, item }) => {
  const { addItemToCart } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  return (
    <>
      {isLoading ? (
         <Spinner animation="border" variant="secondary" />
      ) : (
        <>
          <Button
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                addItemToCart(item);
                setIsLoading(false);
                navigate('/cart')
              }, 2000);
            }}
          >
            {text}
          </Button>
        </>
      )}
    </>
  );
};

export default AddItemButton;
