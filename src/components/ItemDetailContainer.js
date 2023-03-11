import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from '../data/products.json'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [state,setState]= useState(null);
    
    useEffect(()=>{
        const item = data.products.find(product => product.id === Number(id))
        setState(item);
    },[id])
    return (
        <div style={{background:'#ebebeb'}} className='py-5'>
            {state && <ItemDetail item={state} />}
        </div>
    )
}

export default ItemDetailContainer;