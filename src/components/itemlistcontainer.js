function ItemListContainer(props) { 
    return ( 
        <div className="d-flex flex-column">
            <h1> lista de productos </h1> 
            <div className="d-flex flex-wrap">
                {props.children}
            </div>
        </div>
    )
    }
    export default ItemListContainer;
    
    
    