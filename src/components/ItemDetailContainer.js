import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {doc, getDoc, getFirestore} from 'firebase/firestore'
import ItemDetail from "./ItemDetail";
import { Spinner } from "react-bootstrap";

const ItemDetailContainer = () => {
    const {id} = useParams();
    const [product,setProduct]= useState(null);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(()=>{
        setIsLoading(true);
        const db = getFirestore();
        const itemRef = doc(db,'items',id);
        getDoc(itemRef).then( snapshot => {
            if(snapshot.exists()){
                setProduct({id: snapshot.id, ...snapshot.data()})
                setIsLoading(false)
            }
        })
    },[id])
    return (
        <div style={{background:'#ebebeb'}} className='py-5'>
            {isLoading ?  <Spinner animation="border" variant="secondary" /> :<>{product && <ItemDetail item={product} />}</> }
            
        </div>
    )
}

export default ItemDetailContainer;