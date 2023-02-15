import './App.css';
import Navbarprincipal from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import ItemDetail from './components/ItemDetail';

function App() {
  return (   
      <BrowserRouter >
        <Navbarprincipal />
            <Routes >
                <Route exact path='/' element={<Home />} />
                <Route exact path='/category/:id' element={<Category />} />
                <Route exact path='/item/:id' element={<ItemDetail />} />
            </Routes>
      </BrowserRouter>
      
  )
}

export default App;
