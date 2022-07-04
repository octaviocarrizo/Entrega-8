import './App.css';
import NavBar from './components/Lista/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {CartProvider} from './Context/CartContext';

function App() {

  return (
    <div className="App">
  <CartProvider>
    <BrowserRouter> 
          <NavBar/>
            <Routes>
                <Route path="/" 
                element={<ItemListContainer props='Catalogo de Productos'/>} />

                <Route path="/Category/:CategoryId"  
                element={<ItemListContainer props='Categoria Pintura'/>} />

                <Route path="/Detalle/:detalleId" 
                element={<ItemDetailContainer greeting='Detalle del producto'/>} />
            </Routes>
      </BrowserRouter>
  </CartProvider>
    
    </div>
  );
}

export default App;