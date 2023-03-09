import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router"

import data from '../data/products.json'
import CardContainer from "./CardContainer";

const Category = () => {

    const {id} = useParams();
    const [state,setState] = useState([]);

    useEffect(()=>{
        const filter = data.products.filter(p => p.category === id)
        setState(filter)
    },[id])

    return (
        <Container className="d-flex justify-content-center flex-column">
            <h1 className="text-center">Categoria {id}</h1>
            <Container className="d-flex flex-wrap justify-content-center" >

                {state && state.map( product => {
                    return <CardContainer product={product} />
                })}
            </Container>
        </Container>
        )
}

export default Category