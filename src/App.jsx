import './App.css';
import NavBar from './components/Lista/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <BrowserRouter> 
      <NavBar/>
        <Routes>
            <Route path="/" 
            element={<ItemListContainer props='Catalogo de Productos'/>} />
          </Routes>
          <Routes>
            <Route path="/Category/:CategoryId"  
            element={<ItemListContainer props='Categoria Pintura'/>} />
          </Routes>
          <Routes>
            <Route path="/Detalle/:detalleId" 
            element={<ItemDetailContainer greeting='Detalle del producto'/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;