import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useParams } from "react-router";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import CardContainer from "./CardContainer";

const Category = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    const db = getFirestore();
    const q = query(collection(db, "items"), where("category", "==", id));
    getDocs(q).then((snapshot) => {
      setCategories(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setIsLoading(false)
    });
  }, [id]);

  return (
    <Container className="d-flex justify-content-center flex-column">
      <h1 className="text-center">Categoria {id}</h1>
      {isLoading ? (
        <Spinner animation="border" variant="secondary" />
      ) : (
        <Container className="d-flex flex-wrap justify-content-center">
          {categories &&
            categories.map((product) => {
              return <CardContainer product={product} />;
            })}
        </Container>
      )}
    </Container>
  );
};

export default Category;
