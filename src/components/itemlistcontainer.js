function ItemListContainer(props) { 
    return ( 
        <div className="d-flex flex-column">
            <h1 className="my-4"> lista de productos </h1> 
            <div className="d-flex justify-content-center flex-wrap">
                {props.children}
            </div>
        </div>
    )
    }
    export default ItemListContainer;
    
    
    