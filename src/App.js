import './App.css';
import Navbarprincipal from './components/Navbar';
import ItemListContainer from './components/itemlistcontainer.js';

function App() {
  return (
    <div className="App">
      <Navbarprincipal />
      <ItemListContainer >
        {
          // lista de productos []
        }
        
      </ItemListContainer>
    </div>
    
      
      
  );
}

export default App;
