import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from '../data/products.json'

const ItemDetail = () => {
    const {id} = useParams();
    const [state,setState]= useState(null);
    
    useEffect(()=>{
        const item = data.products.find(product => product.id === Number(id))
        setState(item);
    },[id])
    return (
        <>
            {state && <h2>{state.title}</h2>}
        </>
    )
}

export default ItemDetail;