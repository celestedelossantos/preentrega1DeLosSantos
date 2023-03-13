import { Button } from "react-bootstrap"


const ItemQuentitySelector = ({count,setCount}) => {
    return (
        <div className="my-4">
            <Button variant="outline-primary" onClick={()=>{setCount(count - 1)}}>-</Button>
            <span className="mx-2">{count}</span>
            <Button variant="outline-primary" onClick={()=>{setCount(count + 1)}}>+</Button>
        </div>
    )
}

export default ItemQuentitySelector