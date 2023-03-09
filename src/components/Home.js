import ItemListContainer from "./itemlistcontainer"
import CardContainer from "./CardContainer";

import data from '../data/products.json';

const Home = () => {
    return(
        <div className="App">
        <ItemListContainer >
          {
            data.products.map( product =>{
                return <CardContainer key={product.id} product={product}/>
            })
          }
          
        </ItemListContainer>
      </div>
      
    )
};

export default Home;