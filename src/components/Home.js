import ItemListContainer from "./itemlistcontainer";
import CardContainer from "./CardContainer";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const db = getFirestore();
  const itemsCollection = collection(db, "items");

  useEffect(() => {
    setIsLoading(true)
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((p) => ({ id: p.id, ...p.data() })));
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <ItemListContainer>
          {products &&
            products.map((product) => {
              return <CardContainer key={product.id} product={product} />;
            })}
        </ItemListContainer>
      )}
    </div>
  );
};

export default Home;
